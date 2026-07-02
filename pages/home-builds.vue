<template>
    <main>
        <!-- HERO -->
        <section class="relative h-[50vh] bg-black">
            <NuxtImg
                src="/homeBuilds.png"
                alt="Electrician wiring a new home build"
                width="1800"
                height="900"
                sizes="(max-width: 1024px) 100vw, 1200px"
                preload
                fetchpriority="high"
                placeholder
                class="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div
                class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
            >
                <h1 class="text-4xl md:text-6xl font-logo electrician-text uppercase mb-2">
                    New Home Electrical Wiring
                </h1>
                <p class="text-xl max-w-xl">
                    Safe, code-compliant wiring for new builds and custom homes.
                </p>
                <NuxtLink
                    to="/contact"
                    data-analytics-event="cta_click"
                    data-analytics-label="home_builds_request_quote"
                    data-analytics-type="form"
                    class="inline-block mt-8 px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                    Request Quote
                </NuxtLink>
            </div>
        </section>

        <!-- CONTENT -->
        <section class="max-w-5xl mx-auto px-6 py-16">
            <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-6">Electrical for New Home Builds</h2>
                <p class="text-lg mb-4">
                    <strong>Your Electrician</strong> provides new home electrical wiring in Minneapolis–St. Paul, MN.
                    Building a new home? We provide turnkey <strong>residential electrical</strong>—from service and rough-in to final trim—delivering
                    reliable power distribution, thoughtful lighting, and future-ready wiring for EVs, solar, and smart tech.
                </p>

                <h3 class="mt-6 text-xl font-semibold">What's Included</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Service &amp; Panels:</strong> Properly sized service, main panel, and subpanels with clear labeling.</li>
                    <li><strong>Room-by-Room Layout:</strong> Outlet spacing, dedicated circuits, and code-correct protection.</li>
                    <li><strong>Lighting &amp; Controls:</strong> Efficient fixtures, dimming, 3-way/4-way switching, and smart options.</li>
                    <li><strong>Low-Voltage &amp; Future-Proofing:</strong> Data, speakers, cameras, EV prewire, and solar readiness.</li>
                </ul>

                <h3 class="mt-6 text-xl font-semibold">Builder-Friendly Process</h3>
                <ol class="list-decimal pl-6 space-y-2 text-lg">
                    <li><strong>Plan Review:</strong> Load calcs, panel schedules, and value-engineered fixture selections.</li>
                    <li><strong>Reliable Scheduling:</strong> We hit rough-in and trim milestones to keep closing on track.</li>
                    <li><strong>Quality Assurance:</strong> Straight cuts, consistent heights, and a clean jobsite.</li>
                    <li><strong>Final Inspection:</strong> Code-compliant sign-off and homeowner walkthrough.</li>
                </ol>

                <h3 class="mt-6 text-xl font-semibold">New Home Wiring FAQs</h3>
                <details class="border rounded p-4">
                    <summary class="font-medium cursor-pointer">Do you handle electrical wiring for new home builds in Minneapolis?</summary>
                    <p class="mt-2 text-lg">Yes—Your Electrician provides turnkey electrical for new builds and custom homes across the Minneapolis–St. Paul metro. We handle everything from the service, main panel, and subpanels through rough-in and final trim.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Do you work with builders and general contractors in the Twin Cities?</summary>
                    <p class="mt-2 text-lg">Yes. We review plans and provide load calcs and panel schedules up front, then hit rough-in and trim milestones to keep your closing on track.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Can an electrician near me prewire a new build for EV charging and solar?</summary>
                    <p class="mt-2 text-lg">Yes. Our new-build packages include low-voltage and future-proofing options—data, speakers, cameras, EV prewire, and solar readiness.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Is your new-construction wiring code-compliant?</summary>
                    <p class="mt-2 text-lg">Yes. We deliver code-correct outlet spacing, dedicated circuits, and protection, and every project ends with a code-compliant inspection sign-off and homeowner walkthrough.</p>
                </details>

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p class="font-semibold">Building soon?</p>
                    <p class="text-lg">Share your prints and scope—get a competitive bid and a partner who delivers on time.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourelectrician.co' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://yourelectrician.co/services' },
        { '@type': 'ListItem', position: 3, name: 'New Home Wiring', item: 'https://yourelectrician.co/home-builds' }
    ]
}

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Electrical Wiring',
    provider: {
        '@type': 'Electrician',
        '@id': 'https://yourelectrician.co/#business',
        name: 'Your Electrician',
        telephone: '763-248-9801',
        email: 'hireyourelectrician@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Minneapolis', addressRegion: 'MN', postalCode: '55401', addressCountry: 'US' }
    },
    areaServed: { '@type': 'City', name: 'Minneapolis', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
    serviceType: 'New Home Electrical Wiring',
    description: 'Complete electrical wiring for new home construction including panel installation, lighting design, and smart-home readiness.'
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Do you handle electrical wiring for new home builds in Minneapolis?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes—Your Electrician provides turnkey electrical for new builds and custom homes across the Minneapolis–St. Paul metro. We handle everything from the service, main panel, and subpanels through rough-in and final trim.' }
        },
        {
            '@type': 'Question',
            name: 'Do you work with builders and general contractors in the Twin Cities?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. We review plans and provide load calcs and panel schedules up front, then hit rough-in and trim milestones to keep your closing on track.' }
        },
        {
            '@type': 'Question',
            name: 'Can an electrician near me prewire a new build for EV charging and solar?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our new-build packages include low-voltage and future-proofing options—data, speakers, cameras, EV prewire, and solar readiness.' }
        },
        {
            '@type': 'Question',
            name: 'Is your new-construction wiring code-compliant?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. We deliver code-correct outlet spacing, dedicated circuits, and protection, and every project ends with a code-compliant inspection sign-off and homeowner walkthrough.' }
        }
    ]
}

const pageTitle = 'New Home Electrical Wiring | Minneapolis | Your Electrician'
const pageDescription = 'Professional home electrical wiring for new construction in Minneapolis. Rough-in, panel upgrades, lighting design, and smart-home readiness.'

useHead({
    title: pageTitle,
    meta: [
        { name: 'description', content: pageDescription },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: pageDescription },
        { property: 'og:url', content: 'https://yourelectrician.co/home-builds' }
    ],
    link: [
        { rel: 'canonical', href: 'https://yourelectrician.co/home-builds' }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(serviceSchema) },
        { type: 'application/ld+json', children: JSON.stringify(faqSchema) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>

<style scoped>
.font-logo {
    font-family: 'Russo One', sans-serif;
}

.electrician-text {
    color: white;
    text-shadow:
        2px 2px 0 #7c3aed,
        4px 4px 0 #f97316,
        6px 6px 0 rgba(0, 0, 0, 0.3);
}
</style>
