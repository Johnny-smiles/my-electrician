// File: pages/ev-charger-installation.vu
<template>
    <main>
        <section class="relative h-[50vh] bg-black">
<!--            <NuxtImg src="/images/ev-charger.jpg" alt="EV charger install" class="absolute w-full h-full object-cover opacity-70" />-->
            <div class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <h1 class="text-4xl md:text-6xl font-bold mb-2">EV Charger Installation</h1>
                <p class="text-xl max-w-xl">Level 2 home chargers and fleet solutions for fast, reliable charging.</p>
            </div>
        </section>

        <section class="max-w-5xl mx-auto px-6 py-16">
            <h2 class="text-3xl font-semibold mb-6">Reliable Power for Every Drive</h2>
            <p class="mb-4 text-lg">
                We specialize in EV charger installation for homes, businesses, and fleet vehicles. Whether you’re installing a new outlet in your garage or a bank of chargers at a commercial site, our licensed electricians ensure fast, code-compliant work.
            </p>
            <ul class="list-disc pl-6 space-y-2 text-lg">
                <li>Level 2 EV charger installation (Tesla, ChargePoint, etc.)</li>
                <li>Load calculations, permitting, and panel upgrades</li>
                <li>Fleet charging station layout and safety compliance</li>
                <li>WiFi-enabled charger setup and smart controls</li>
            </ul>
            <div class="mt-10">
                <NuxtLink to="/contact" class="btn bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">Request a Quote</NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'EV Charger Installation | Your Electrician',
    meta: [
        {
            name: 'description',
            content:
                'Licensed EV charger installers for homes and businesses. Fast installs, smart chargers, and permit-ready service.'
        }
    ]
})
</script>

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
                        "name": "EV Charger Installation",
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
                        "serviceType": "Electric Vehicle Charging Installation",
                        "description":
                            "Install and upgrade EV chargers for residential homes and commercial fleets. We handle permitting, code compliance, and efficient charger setup."
                    })
                }
            ]
        }
    }
}
</script>
