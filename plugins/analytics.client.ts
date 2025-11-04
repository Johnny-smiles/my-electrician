import { defineNuxtPlugin } from '#app'

type DataLayerEvent = Record<string, unknown> & { event: string }

declare global {
    interface Window {
        dataLayer?: DataLayerEvent[]
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) {
        return
    }

    const handler = (event: MouseEvent) => {
        const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-analytics-event]')
        if (!target) {
            return
        }

        const eventName = target.getAttribute('data-analytics-event') || 'cta_click'
        const payload: DataLayerEvent = { event: eventName }

        const label = target.getAttribute('data-analytics-label')
        if (label) {
            payload.cta_label = label
        }

        const type = target.getAttribute('data-analytics-type')
        if (type) {
            payload.cta_type = type
        }

        const destinationAttr = target.getAttribute('data-analytics-destination')
        if (destinationAttr) {
            payload.cta_destination = destinationAttr
        } else if (target instanceof HTMLAnchorElement) {
            payload.cta_destination = target.getAttribute('href') || undefined
        } else if (target instanceof HTMLButtonElement) {
            payload.cta_destination = target.dataset.analyticsDestination || undefined
        }

        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(payload)
    }

    window.addEventListener('click', handler, true)
    nuxtApp.hook('app:unmounted', () => {
        window.removeEventListener('click', handler, true)
    })
})
