<template>
    <main>
        <!-- HERO -->
        <section class="relative h-[50vh] bg-black">
            <!-- Optional background image (uncomment & replace when ready) -->
            <NuxtImg
                src="/residentalRemodel.png"
                alt="Electrician upgrading kitchen wiring"
                width="1800"
                height="900"
                sizes="(max-width: 1024px) 100vw, 1200px"
                preload
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div
                class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
            >
                <h1 class="text-4xl md:text-6xl font-logo electrician-text uppercase mb-2">
                    Home Electrical Remodeling
                </h1>
                <p class="text-xl max-w-xl">
                    Safe rewiring for kitchens, additions, and smart‑home upgrades.
                </p>
                <!-- Call to Action Button -->
                <NuxtLink
                    to="/contact"
                    data-analytics-event="cta_click"
                    data-analytics-label="remodeling_request_quote"
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
                <h2 class="text-2xl font-semibold mb-6">Electrical for Home Remodeling &amp; Additions</h2>
                <p class="text-lg mb-4">
                    Remodeling your kitchen, bath, basement, or whole home? Our licensed team handles <strong>circuits, lighting, outlets, and panel upgrades</strong>
                    so your new space is beautiful, functional, and fully up to code.
                </p>

                <h3 class="mt-6 text-xl font-semibold">Remodel Electrical Services</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Kitchen &amp; Bath:</strong> Dedicated appliance circuits, GFCI/AFCI protection, task &amp; accent lighting.</li>
                    <li><strong>Basements &amp; Additions:</strong> New circuits, subpanels, egress lighting, and low-voltage prewire.</li>
                    <li><strong>Lighting Design:</strong> Recessed, pendants, under-cabinet, and smart dimmers.</li>
                    <li><strong>Safety &amp; Code:</strong> Grounding/bonding, smoke/CO wiring, and surge protection.</li>
                </ul>

                <h3 class="mt-6 text-xl font-semibold">Our Remodeling Process</h3>
                <ol class="list-decimal pl-6 space-y-2 text-lg">
                    <li><strong>Walkthrough &amp; Plan:</strong> We review drawings, loads, and switching locations.</li>
                    <li><strong>Transparent Quote:</strong> Clear scope, allowances, and timeline expectations.</li>
                    <li><strong>Coordination:</strong> We schedule with your GC/trades to keep the project moving.</li>
                    <li><strong>Inspection &amp; Final:</strong> Pass inspection and handoff a tidy, labeled system.</li>
                </ol>

                <h3 class="mt-6 text-xl font-semibold">Remodel FAQs</h3>
                <details class="border rounded p-4">
                    <summary class="font-medium cursor-pointer">Will my panel handle the new load?</summary>
                    <p class="mt-2 text-lg">We run load calculations and recommend panel or service upgrades only if needed.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Can you add smart lighting?</summary>
                    <p class="mt-2 text-lg">Yes—dimmers, scenes, and voice/app control that match your fixtures and budget.</p>
                </details>

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p class="font-semibold">Planning a remodel?</p>
                    <p class="text-lg">Send us your plans or photos—get expert guidance and an accurate, itemized bid.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<!-- SEO & meta tags -->
<script setup lang="ts">
useHead({
    title: 'Electrical Remodeling Services | Minneapolis MN | Your Electrician',
    meta: [
        {
            name: 'description',
            content:
                'Electrical remodeling services for home upgrades, room additions, and smart devices. Licensed and insured electricians serving Minneapolis.'
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
                        "name": "Home Electrical Remodeling",
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
                        "serviceType": "Electrical Remodeling Services",
                        "description":
                            "Upgrade and remodel your home's electrical system including rewiring, smart‑home integration, and code‑compliance corrections."
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
