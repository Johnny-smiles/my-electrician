<template>
    <main>
        <!-- HERO -->
        <section class="relative h-[50vh] bg-black">
            <!-- Optional hero image (uncomment when ready) -->
            <!--
            <NuxtImg
              src="/images/service-home-builds.jpg"
              alt="Electrician wiring a new home build"
              class="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            -->
            <div
                class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
            >
                <h1 class="text-4xl md:text-6xl font-bold mb-2">
                    New Home Electrical Wiring
                </h1>
                <p class="text-xl max-w-xl">
                    Safe, code‑compliant wiring for new builds and custom homes.
                </p>
            </div>
        </section>

        <!-- CONTENT -->
        <section class="max-w-5xl mx-auto px-6 py-16">
            <h2 class="text-3xl font-semibold mb-6">
                Powering Your Dream Home from the Ground Up
            </h2>
            <p class="mb-4 text-lg">
                Our licensed electricians handle every stage of residential wiring—from
                panel installation to final fixture testing—ensuring your new home is
                future‑proofed, energy‑efficient, and ready for smart‑home technology.
            </p>

            <ul class="list-disc pl-6 space-y-2 text-lg">
                <li>Complete rough‑in &amp; finish wiring</li>
                <li>Panel installations &amp; service upgrades</li>
                <li>Energy‑efficient lighting design</li>
                <li>Smart‑home ready infrastructure</li>
            </ul>

            <div class="mt-10">
                <NuxtLink
                    to="/contact"
                    class="btn bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
                >
                    Request a Quote
                </NuxtLink>
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
