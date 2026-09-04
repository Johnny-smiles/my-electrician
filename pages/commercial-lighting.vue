<template>
    <main>
        <!-- HERO -->
        <section class="relative h-[50vh] bg-black">
            <!-- Above-the-fold hero: eager + high priority, never lazy.
                 width/height are the file's real pixel size (1536x1024). -->
            <NuxtImg
                src="/commercialLighting.png"
                alt="Commercial LED lighting install in Minneapolis office"
                width="1536"
                height="1024"
                sizes="xs:100vw sm:100vw md:100vw lg:1200px"
                format="webp"
                preload
                loading="eager"
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div
                class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
            >
                <h1 class="text-4xl md:text-6xl font-logo electrician-text uppercase mb-2">
                    Office &amp; Commercial Lighting
                </h1>
                <p class="text-xl max-w-xl">
                    Energy-efficient LED retrofits, exit lighting,<br />
                    and occupancy-sensor solutions for your workplace.
                </p>
                <NuxtLink
                    to="/contact/"
                    data-analytics-event="cta_click"
                    data-analytics-label="commercial_lighting_request_quote"
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
                <h2 class="text-2xl font-semibold mb-6">Commercial Lighting Design, Retrofits &amp; Maintenance</h2>
                <p class="text-lg mb-4">
                    <strong>Your Electrician</strong> provides commercial lighting services in Minneapolis–St. Paul, MN.
                    Brighten your business with efficient, long-lasting <strong>LED lighting</strong> that lowers utility costs and elevates the customer experience.
                    From retail and offices to warehouses and restaurants, we engineer lighting that's safer, cleaner, and easier to maintain.
                </p>

                <h3 class="mt-6 text-xl font-semibold">What We Deliver</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>LED Retrofits:</strong> Replace outdated fixtures to cut energy use by 40-70%.</li>
                    <li><strong>New Construction &amp; TI:</strong> Photometrics, layout, and controls for code compliance.</li>
                    <li><strong>Smart Controls:</strong> Sensors, scheduling, and dimming for comfort and savings.</li>
                    <li><strong>Exterior &amp; Safety:</strong> Parking lot, egress, and emergency lighting solutions.</li>
                    <li><strong>Maintenance Plans:</strong> Proactive service to prevent outages and downtime.</li>
                </ul>

                <h3 class="mt-6 text-xl font-semibold">Benefits for Your Facility</h3>
                <ol class="list-decimal pl-6 space-y-2 text-lg">
                    <li><strong>Lower Bills:</strong> Energy-efficient LEDs deliver immediate savings and utility rebates.</li>
                    <li><strong>Better Experience:</strong> Correct CRI and color temperature improve visibility and mood.</li>
                    <li><strong>Safer Spaces:</strong> Well-lit entries, aisles, and exits reduce risk.</li>
                </ol>

                <h3 class="mt-6 text-xl font-semibold">Industries We Serve</h3>
                <p class="text-lg">Retail, office, hospitality, medical, manufacturing, warehouse, multi-family, and more.</p>

                <h3 class="mt-6 text-xl font-semibold">Commercial Lighting FAQs</h3>
                <details class="border rounded p-4">
                    <summary class="font-medium cursor-pointer">Do you install commercial LED lighting in Minneapolis and St. Paul?</summary>
                    <p class="mt-2 text-lg">Yes—Your Electrician provides commercial lighting design, retrofits, and maintenance across the Minneapolis–St. Paul metro. We work in retail, offices, hospitality, medical, warehouses, and multi-family buildings.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">How much energy can an LED retrofit save my business?</summary>
                    <p class="mt-2 text-lg">Replacing outdated fixtures with LEDs typically cuts lighting energy use by 40-70%. Efficient LEDs deliver immediate savings and can qualify for utility rebates.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Do you handle exit, emergency, and parking lot lighting?</summary>
                    <p class="mt-2 text-lg">Yes. We install parking lot, egress, and emergency lighting, plus occupancy sensors and smart controls, so entries, aisles, and exits stay well-lit and code-compliant.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Can I get a commercial lighting audit near me in the Twin Cities?</summary>
                    <p class="mt-2 text-lg">Yes. We'll evaluate your current fixtures, estimate savings, and provide a clear retrofit plan with ROI for facilities throughout the Minneapolis–St. Paul metro.</p>
                </details>

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p class="font-semibold">Need a lighting audit?</p>
                    <p class="text-lg">We'll evaluate your current fixtures, estimate savings, and provide a clear retrofit plan with ROI.</p>
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl() },
        { '@type': 'ListItem', position: 2, name: 'Services', item: siteUrl('/services') },
        { '@type': 'ListItem', position: 3, name: 'Commercial Lighting', item: siteUrl('/commercial-lighting') }
    ]
}

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Lighting Services',
    provider: businessRef(),
    areaServed: cityNode('Minneapolis'),
    serviceType: 'Commercial Lighting Services',
    description: 'Energy-efficient commercial lighting solutions, including LED upgrades, emergency lighting, and occupancy sensor integration.'
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Do you install commercial LED lighting in Minneapolis and St. Paul?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes—Your Electrician provides commercial lighting design, retrofits, and maintenance across the Minneapolis–St. Paul metro. We work in retail, offices, hospitality, medical, warehouses, and multi-family buildings.' }
        },
        {
            '@type': 'Question',
            name: 'How much energy can an LED retrofit save my business?',
            acceptedAnswer: { '@type': 'Answer', text: 'Replacing outdated fixtures with LEDs typically cuts lighting energy use by 40-70%. Efficient LEDs deliver immediate savings and can qualify for utility rebates.' }
        },
        {
            '@type': 'Question',
            name: 'Do you handle exit, emergency, and parking lot lighting?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. We install parking lot, egress, and emergency lighting, plus occupancy sensors and smart controls, so entries, aisles, and exits stay well-lit and code-compliant.' }
        },
        {
            '@type': 'Question',
            name: 'Can I get a commercial lighting audit near me in the Twin Cities?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. We\'ll evaluate your current fixtures, estimate savings, and provide a clear retrofit plan with ROI for facilities throughout the Minneapolis–St. Paul metro.' }
        }
    ]
}

const pageTitle = 'Commercial Lighting | Minneapolis MN | Your Electrician'
const pageDescription = 'Energy-efficient commercial lighting installations including LED retrofits, emergency lighting, and occupancy sensors for offices and industrial spaces.'

useHead({
    title: pageTitle,
    meta: socialMeta({ title: pageTitle, description: pageDescription, url: siteUrl('/commercial-lighting') }),
    link: [
        { rel: 'canonical', href: siteUrl('/commercial-lighting') }
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
