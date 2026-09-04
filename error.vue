<template>
    <div>
        <NavBar />

        <main class="bg-brand-sand">
            <section class="max-w-3xl mx-auto px-6 py-24 text-center">
                <p class="text-brand-orange font-semibold tracking-wide uppercase mb-3">
                    Error {{ statusCode }}
                </p>

                <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ heading }}</h1>

                <p class="text-lg text-brand-dark/80 mb-10">
                    {{ message }}
                </p>

                <div class="flex flex-wrap justify-center gap-4 mb-12">
                    <a href="/" class="btn-orange inline-block">Back to Home</a>
                    <a
                        href="/services/"
                        class="inline-block px-6 py-3 rounded-md border-2 border-brand-dark font-semibold hover:bg-brand-dark hover:text-white transition"
                    >
                        Electrical Services
                    </a>
                    <a
                        href="/contact/"
                        class="inline-block px-6 py-3 rounded-md border-2 border-brand-dark font-semibold hover:bg-brand-dark hover:text-white transition"
                        data-analytics-event="cta_click"
                        data-analytics-label="error_request_quote"
                        data-analytics-type="form"
                    >
                        Request a Quote
                    </a>
                </div>

                <div class="card-box max-w-md mx-auto">
                    <p class="text-brand-dark/80">
                        Need an electrician now? Call
                        <a href="tel:7632489801" class="text-brand-orange font-semibold hover:underline">763-248-9801</a>
                        — Mon-Fri 8am-6pm, Sat 9am-2pm.
                    </p>
                </div>
            </section>
        </main>

        <Footer
            name="Your Electrician"
            phone="763-248-9801"
            email="hireyourelectrician@gmail.com"
        />
    </div>
</template>

<script lang="ts">
/*
 * error.vue replaces app.vue when Nuxt renders an error, so it has to draw the
 * chrome (NavBar / Footer) itself.
 *
 * The links are plain <a> elements on purpose: a client-side NuxtLink
 * navigation out of an error page leaves the global error state set, so the
 * full page load is the reliable way back into the app.
 */
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

interface NuxtErrorLike {
    statusCode?: number | string
    statusMessage?: string
    message?: string
}

export default defineNuxtComponent({
    name: 'ErrorPage',

    components: { NavBar, Footer },

    props: {
        error: {
            type: Object as () => NuxtErrorLike | null,
            default: null
        }
    },

    computed: {
        statusCode(): number {
            return Number(this.error?.statusCode ?? 404)
        },

        isNotFound(): boolean {
            return this.statusCode === 404
        },

        heading(): string {
            return this.isNotFound ? 'Page not found' : 'Something went wrong'
        },

        message(): string {
            return this.isNotFound
                ? 'That page has moved or never existed. The links below cover everything we do — or call and we will point you the right way.'
                : 'We hit an unexpected error loading that page. Try again, or use the links below to get where you were going.'
        }
    },

    head() {
        return {
            title: 'Page Not Found | Your Electrician',
            meta: [
                { name: 'robots', content: 'noindex, follow' }
            ]
        }
    }
})
</script>
