<template>
    <main class="flex flex-col min-h-screen bg-brand-sand">

        <!-- Intro content for SEO -->
        <section class="max-w-4xl mx-auto w-full px-6 pt-16 pb-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Electrical Services in Minneapolis</h1>
            <p class="text-lg text-brand-dark/80 mb-4">
                <strong>Your Electrician</strong> offers a full range of residential and commercial electrical services across the
                Minneapolis-St. Paul metro. Whether you need wiring for a new home, a kitchen remodel, LED lighting for your office,
                or an EV charger installed in your garage, our licensed electricians deliver safe, code-compliant work with transparent pricing.
            </p>
            <p class="text-lg text-brand-dark/80">
                Every project starts with a free estimate and ends with a clean jobsite and passed inspection. Browse our core services
                below and <NuxtLink to="/contact" class="text-brand-orange font-semibold hover:underline">request a quote</NuxtLink>
                to get started.
            </p>
        </section>

        <!-- boxed services area -->
        <section class="my-6 max-w-7xl mx-auto w-full px-6">
            <ServicesSection />
        </section>

        <!-- Additional services for content depth -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10">
            <h2 class="text-2xl font-semibold mb-6">Additional Electrical Services</h2>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-4 text-lg text-brand-dark/80">
                <ul class="list-disc pl-6 space-y-2">
                    <li>Panel upgrades and replacements</li>
                    <li>Whole-house surge protection</li>
                    <li>Smoke and CO detector wiring</li>
                    <li>Ceiling fan installation</li>
                    <li>Outdoor and landscape lighting</li>
                    <li>Generator hookups and transfer switches</li>
                </ul>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Knob-and-tube rewiring</li>
                    <li>Dedicated appliance circuits</li>
                    <li>Hot tub and pool wiring</li>
                    <li>Smart home device installation</li>
                    <li>Electrical safety inspections</li>
                    <li>24/7 emergency electrical repair</li>
                </ul>
            </div>
        </section>

        <!-- boxed FAQ area -->
        <section class="my-6 max-w-7xl mx-auto w-full px-6">
            <FaqSection />
        </section>

        <!-- Service Areas for local SEO -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10">
            <h2 class="text-2xl font-semibold mb-4">Areas We Serve</h2>
            <p class="text-lg text-brand-dark/80 mb-4">
                We provide electrical services throughout the Minneapolis-St. Paul metro area and surrounding communities, including:
            </p>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1 text-brand-dark/70">
                <span>Minneapolis</span>
                <span>St. Paul</span>
                <span>Bloomington</span>
                <span>Plymouth</span>
                <span>Maple Grove</span>
                <span>Brooklyn Park</span>
                <span>Eagan</span>
                <span>Eden Prairie</span>
                <span>Burnsville</span>
                <span>Minnetonka</span>
                <span>Edina</span>
                <span>Richfield</span>
                <span>St. Louis Park</span>
                <span>Fridley</span>
                <span>Coon Rapids</span>
                <span>Woodbury</span>
                <span>Lakeville</span>
                <span>Shakopee</span>
                <span>Champlin</span>
                <span>Rogers</span>
                <span>Elk River</span>
            </div>
            <p class="text-brand-dark/60 mt-4 text-sm">
                Don't see your city? <NuxtLink to="/contact" class="text-brand-orange hover:underline">Contact us</NuxtLink>—we likely cover your area.
            </p>
        </section>

        <section class="next-step" style="margin-top:2rem; padding-top:1rem; border-top:1px solid #ddd;">
            <p class="text-center text-lg">
                Need an electrician now?
                <NuxtLink
                    to="/contact"
                    class="text-brand-orange font-semibold hover:underline"
                    data-analytics-event="cta_click"
                    data-analytics-label="services_request_quote_footer"
                    data-analytics-type="form"
                >
                    Request Quote
                </NuxtLink>
                and we'll get you scheduled.
            </p>
        </section>

    </main>
</template>

<script setup lang="ts">
import ServicesSection from '~/components/ServicesSection.vue'
import FaqSection      from '~/components/FaqSection.vue'

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourelectrician.co' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://yourelectrician.co/services' }
    ]
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Are you licensed and insured?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes—Your Electrician is fully licensed, bonded and insured for residential and commercial work.' }
        },
        {
            '@type': 'Question',
            name: 'Do you offer 24/7 emergency service?',
            acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Call us anytime for urgent electrical issues and we\'ll dispatch a technician.' }
        },
        {
            '@type': 'Question',
            name: 'How soon can I book an estimate?',
            acceptedAnswer: { '@type': 'Answer', text: 'Most estimates are scheduled within 1-2 business days. Use the "Request Quote" button or call us.' }
        },
        {
            '@type': 'Question',
            name: 'What areas do you serve?',
            acceptedAnswer: { '@type': 'Answer', text: 'We cover the greater Minneapolis-St. Paul metro area including neighboring suburbs like Bloomington, Plymouth, Maple Grove, Eagan, Eden Prairie, and more. Contact us to confirm we service your ZIP code.' }
        }
    ]
}

useHead({
    title: 'Electrical Services | Residential & Commercial | Your Electrician',
    meta: [
        {
            name: 'description',
            content: 'Full-service electrical contractor in Minneapolis MN. Home wiring, remodeling, commercial lighting, EV charger installation, panel upgrades, and more. Licensed & insured.'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://yourelectrician.co/services' }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(faqSchema) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>
