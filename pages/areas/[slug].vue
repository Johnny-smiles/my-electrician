<template>
    <main class="flex flex-col bg-brand-sand">

        <!-- Intro -->
        <section class="max-w-4xl mx-auto w-full px-6 pt-16 pb-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Electrician in {{ area.name }}, MN</h1>
            <p class="text-lg text-brand-dark/80 mb-4">
                <strong>Your Electrician</strong> provides licensed electrical services in {{ area.name }}, MN.
                Our team handles residential wiring, panel upgrades, EV charger installation, commercial lighting,
                and home remodeling electrical work throughout {{ area.name }} and the greater Minneapolis–St. Paul metro area.
            </p>
            <p class="text-lg text-brand-dark/80 mb-6">
                We're licensed, bonded, and insured — serving homeowners and businesses with transparent pricing
                and code-compliant work on every job.
            </p>
            <div class="flex justify-center">
                <NuxtLink
                    to="/contact"
                    data-analytics-event="cta_click"
                    :data-analytics-label="`area_${area.slug}_request_quote`"
                    data-analytics-type="form"
                    class="inline-block px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                    Request a Free Quote
                </NuxtLink>
            </div>
        </section>

        <!-- Services -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10 border-t border-brand-dark/10">
            <h2 class="text-2xl font-semibold mb-4">Electrical Services in {{ area.name }}</h2>
            <div class="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-lg text-brand-dark/80">
                <ul class="list-disc pl-6 space-y-2">
                    <li><NuxtLink to="/home-builds" class="text-brand-orange hover:underline">New home electrical wiring</NuxtLink></li>
                    <li><NuxtLink to="/home-remodeling" class="text-brand-orange hover:underline">Home electrical remodeling</NuxtLink></li>
                    <li>Panel upgrades and replacements</li>
                    <li>Whole-house rewiring</li>
                    <li>Dedicated circuits for appliances</li>
                    <li>Smoke and CO detector wiring</li>
                </ul>
                <ul class="list-disc pl-6 space-y-2">
                    <li><NuxtLink to="/ev-charger-installation" class="text-brand-orange hover:underline">EV charger installation</NuxtLink></li>
                    <li><NuxtLink to="/commercial-lighting" class="text-brand-orange hover:underline">Commercial lighting retrofits</NuxtLink></li>
                    <li>Smart home device installation</li>
                    <li>Outdoor and landscape lighting</li>
                    <li>Generator hookups and transfer switches</li>
                    <li>24/7 emergency electrical repair</li>
                </ul>
            </div>
        </section>

        <!-- FAQ -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10 border-t border-brand-dark/10">
            <h2 class="text-2xl font-semibold mb-6">Electrical FAQ — {{ area.name }}, MN</h2>
            <div class="space-y-6 text-lg text-brand-dark/80">
                <div>
                    <p class="font-semibold">What areas near {{ area.name }} do you serve?</p>
                    <p class="mt-1">We serve {{ area.name }} and all surrounding Minneapolis–St. Paul suburbs — including Minneapolis, St. Paul, Bloomington, Plymouth, Maple Grove, Eagan, Eden Prairie, and more. <NuxtLink to="/contact" class="text-brand-orange hover:underline">Contact us</NuxtLink> to confirm we cover your address.</p>
                </div>
                <div>
                    <p class="font-semibold">Are you licensed to do electrical work in {{ area.name }}, MN?</p>
                    <p class="mt-1">Yes — Your Electrician is fully licensed, bonded, and insured for residential and commercial electrical work in {{ area.name }} and throughout Minnesota.</p>
                </div>
                <div>
                    <p class="font-semibold">How quickly can you schedule an electrician in {{ area.name }}?</p>
                    <p class="mt-1">Most estimates are scheduled within 1–2 business days. Call us at <a href="tel:7632489801" class="text-brand-orange hover:underline">763-248-9801</a> or <NuxtLink to="/contact" class="text-brand-orange hover:underline">request a quote online</NuxtLink>.</p>
                </div>
                <div>
                    <p class="font-semibold">Do you install EV chargers in {{ area.name }}?</p>
                    <p class="mt-1">Absolutely. We install Level 2 home EV chargers throughout {{ area.name }} and the metro. We handle load calculations, permitting, and the full installation.</p>
                </div>
            </div>
        </section>

        <!-- Bottom CTA -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10 text-center border-t border-brand-dark/10">
            <p class="text-lg text-brand-dark/80 mb-4">Ready to hire a licensed electrician in {{ area.name }}, MN?</p>
            <NuxtLink
                to="/contact"
                data-analytics-event="cta_click"
                :data-analytics-label="`area_${area.slug}_cta_bottom`"
                data-analytics-type="form"
                class="inline-block px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
                Get a Free Estimate
            </NuxtLink>
            <p class="mt-4 text-brand-dark/60 text-sm">
                Or call <a href="tel:7632489801" class="text-brand-orange hover:underline font-semibold">763-248-9801</a> — Mon–Fri 8am–6pm, Sat 9am–2pm
            </p>
        </section>

    </main>
</template>

<script setup lang="ts">
import { serviceAreas } from '~/data/areas'

const route = useRoute()
const slug = route.params.slug as string

const area = serviceAreas.find(a => a.slug === slug)

if (!area) {
    throw createError({ statusCode: 404, statusMessage: 'Area not found' })
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': 'https://yourelectrician.co/#business',
    name: 'Your Electrician',
    url: 'https://yourelectrician.co',
    telephone: '763-248-9801',
    email: 'hireyourelectrician@gmail.com',
    description: `Your Electrician provides licensed electrical services in ${area.name}, MN and throughout the Minneapolis–St. Paul metro area.`,
    areaServed: {
        '@type': 'City',
        name: area.name,
        containedInPlace: { '@type': 'State', name: 'Minnesota' }
    }
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: `What areas near ${area.name} do you serve?`,
            acceptedAnswer: { '@type': 'Answer', text: `We serve ${area.name} and all surrounding Minneapolis–St. Paul suburbs including Minneapolis, St. Paul, Bloomington, Plymouth, Maple Grove, Eagan, Eden Prairie, and more.` }
        },
        {
            '@type': 'Question',
            name: `Are you licensed to do electrical work in ${area.name}, MN?`,
            acceptedAnswer: { '@type': 'Answer', text: 'Yes — Your Electrician is fully licensed, bonded, and insured for residential and commercial electrical work in Minnesota.' }
        },
        {
            '@type': 'Question',
            name: `How quickly can you schedule an electrician in ${area.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: 'Most estimates are scheduled within 1–2 business days. Call 763-248-9801 or request a quote online.' }
        },
        {
            '@type': 'Question',
            name: `Do you install EV chargers in ${area.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: `Yes, we install Level 2 EV chargers in ${area.name} and throughout the metro. We handle load calculations, permitting, and full installation.` }
        }
    ]
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourelectrician.co' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://yourelectrician.co/areas' },
        { '@type': 'ListItem', position: 3, name: area.name, item: `https://yourelectrician.co/areas/${area.slug}` }
    ]
}

useHead({
    title: `Electrician in ${area.name}, MN | Your Electrician`,
    meta: [
        {
            name: 'description',
            content: `Licensed electrician serving ${area.name}, MN. Residential wiring, panel upgrades, EV charger installation, and commercial electrical services. Call 763-248-9801.`
        }
    ],
    link: [
        { rel: 'canonical', href: `https://yourelectrician.co/areas/${area.slug}` }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(structuredData) },
        { type: 'application/ld+json', children: JSON.stringify(faqSchema) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>
