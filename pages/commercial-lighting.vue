<template>
    <main>
        <!-- HERO -->
        <section class="relative h-[50vh] bg-black">
            <NuxtImg
                src="/commercialLighting.png"
                alt="Commercial LED lighting install in Minneapolis office"
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
                    Office &amp; Commercial Lighting
                </h1>
                <p class="text-xl max-w-xl">
                    Energy-efficient LED retrofits, exit lighting,<br />
                    and occupancy-sensor solutions for your workplace.
                </p>
                <NuxtLink
                    to="/contact"
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourelectrician.co' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://yourelectrician.co/services' },
        { '@type': 'ListItem', position: 3, name: 'Commercial Lighting', item: 'https://yourelectrician.co/commercial-lighting' }
    ]
}

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Lighting Services',
    provider: {
        '@type': 'Electrician',
        '@id': 'https://yourelectrician.co/#business',
        name: 'Your Electrician',
        telephone: '763-248-9801',
        email: 'hireyourelectrician@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Minneapolis', addressRegion: 'MN', postalCode: '55401', addressCountry: 'US' }
    },
    areaServed: { '@type': 'City', name: 'Minneapolis', containedInPlace: { '@type': 'State', name: 'Minnesota' } },
    serviceType: 'Commercial Lighting Services',
    description: 'Energy-efficient commercial lighting solutions, including LED upgrades, emergency lighting, and occupancy sensor integration.'
}

useHead({
    title: 'Commercial Lighting Services | Minneapolis MN | Your Electrician',
    meta: [
        {
            name: 'description',
            content: 'Energy-efficient commercial lighting installations including LED retrofits, emergency lighting, and occupancy sensors for offices and industrial spaces.'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://yourelectrician.co/commercial-lighting' }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(serviceSchema) },
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
