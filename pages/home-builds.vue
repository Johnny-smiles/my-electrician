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
                    Safe, code‑compliant wiring for new builds and custom homes.
                </p>
                <!-- Call to Action Button -->
                <NuxtLink
                    to="/contact"
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

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p class="font-semibold">Building soon?</p>
                    <p class="text-lg">Share your prints and scope—get a competitive bid and a partner who delivers on time.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<!-- SEO & meta tags -->
<script setup lang="ts">
useHead({
    title: 'Home Electrical Wiring | New Builds | Your Electrician',
    meta: [
        {
            name: 'description',
            content:
                'Professional home electrical wiring for new construction. Rough‑in, panel upgrades, lighting design, and smart‑home readiness in Minneapolis, MN.'
        }
    ]
})
</script>

<!-- JSON‑LD Structured Data -->
<script lang="ts">
export default {
    head() {
        return {
            script: [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Home Electrical Wiring",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Your Electrician",
                            "telephone": "763-248-9801",
                            "email": "hireyourelectrician@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Minneapolis",
                                "addressRegion": "MN",
                                "postalCode": "55401",
                                "addressCountry": "US"
                            }
                        },
                        "areaServed": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Minneapolis",
                                "addressRegion": "MN"
                            }
                        },
                        "serviceType": "New Home Electrical Wiring",
                        "description":
                            "Complete electrical wiring for new home construction including panel installation, lighting design, and smart‑home readiness."
                    })
                }
            ]
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

.font-logo {
    font-family: 'Russo One', sans-serif;
}

.electrician-text {
    color: white;
    text-shadow:
        2px 2px 0 #7c3aed,       /* base shadow (deep brown-like tone) */
        4px 4px 0 #f97316,       /* orange-500 offset */
        6px 6px 0 rgba(0, 0, 0, 0.3); /* dark drop shadow */
}
</style>