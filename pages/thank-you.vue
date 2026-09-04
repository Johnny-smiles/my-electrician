<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>

            <p class="text-lg text-brand-dark/80 mb-4">
                Your request has been received. We'll review the details and get back to you within one business day
                with a no-obligation estimate.
            </p>

            <p class="text-lg text-brand-dark/80 mb-10">
                Need help sooner? Call us during business hours (Mon-Fri 8am-6pm, Sat 9am-2pm).
            </p>

            <div class="flex flex-wrap justify-center gap-4">
                <a
                    href="tel:7632489801"
                    class="px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
                    data-analytics-event="cta_click"
                    data-analytics-label="thankyou_call_now"
                    data-analytics-type="phone"
                >
                    Call 763-248-9801
                </a>
                <NuxtLink
                    to="/"
                    class="px-8 py-3 border-2 border-brand-dark text-brand-dark font-semibold rounded-md hover:bg-brand-dark hover:text-white transition"
                    data-analytics-event="cta_click"
                    data-analytics-label="thankyou_home"
                    data-analytics-type="link"
                >
                    Back to Home
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<script>
const pageTitle = 'Thank You | Your Electrician | Minneapolis MN'
const pageDescription = 'Thanks for contacting Your Electrician. We will respond within one business day.'

export default defineNuxtComponent({
    name: 'ThankYouPage',

    head() {
        return {
            title: pageTitle,
            meta: [
                { name: 'robots', content: 'noindex, follow' },
                ...socialMeta({ title: pageTitle, description: pageDescription, url: siteUrl('/thank-you') })
            ],
            link: [
                { rel: 'canonical', href: siteUrl('/thank-you') }
            ]
        }
    },

    mounted() {
        // GTM maps this dataLayer event to the GA4 key event `generate_lead`.
        this.$pushAnalyticsEvent({ event: 'contact_form_submit', form_name: 'contact' })
    }
})
</script>
