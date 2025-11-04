<template>
    <main>
        <section class="relative h-[50vh] bg-black">
            <!-- Uncomment and use your image if desired -->
            <NuxtImg
                src="/EVCharger.png"
                alt="EV charger install"
                width="1800"
                height="900"
                sizes="(max-width: 1024px) 100vw, 1200px"
                preload
                fetchpriority="high"
                placeholder
                class="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <h1 class="text-4xl md:text-6xl font-logo electrician-text uppercase mb-2">
                    EV Charger Installation
                </h1>
                <p class="text-xl max-w-xl">
                    Level 2 home chargers and fleet solutions for fast, reliable charging.
                </p>
                <!-- Call to Action Button -->
                <NuxtLink
                    to="/contact"
                    data-analytics-event="cta_click"
                    data-analytics-label="ev_charger_request_quote"
                    data-analytics-type="form"
                    class="inline-block mt-8 px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                    Request Quote
                </NuxtLink>
            </div>
        </section>

        <section class="max-w-5xl mx-auto px-6 py-16">
            <div class="prose max-w-none">
                <h2 class="text-2xl font-semibold mb-6">EV Charger Installation in Your Home or Business</h2>

                <p class="text-lg mb-4">
                    Power up with safe, code-compliant <strong>EV charger installation</strong> from licensed electricians.
                    We design and install Level 2 charging stations that fit your panel capacity, parking layout,
                    and daily driving needs—so you can wake up to a full battery every day.
                </p>

                <h3 class="mt-6 text-xl font-semibold">Why Choose Our EV Charging Experts?</h3>
                <ul class="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Code-Compliant Wiring:</strong> NEC-compliant wiring and correct breaker sizing.</li>
                    <li><strong>Load Calculations:</strong> We evaluate your service size and panel to prevent nuisance trips and overheated circuits.</li>
                    <li><strong>Fast Turnaround:</strong> From quote to energizing your charger—often within days, not weeks.</li>
                    <li><strong>All Major Brands:</strong> Tesla, ChargePoint, JuiceBox, Wallbox, Emporia &amp; more.</li>
                    <li><strong>Neat, Durable Installs:</strong> Clean conduit runs, labeled panels, and professional finish.</li>
                </ul>

                <h3 class="mt-6 text-xl font-semibold">Our 4-Step Process</h3>
                <ol class="list-decimal pl-6 space-y-2 text-lg">
                    <li><strong>Site Assessment:</strong> Panel/power review, cable routing, and charger location.</li>
                    <li><strong>Upfront Pricing:</strong> Transparent, itemized quote with any upgrade options.</li>
                    <li><strong>Install:</strong> We complete a tidy, code-safe install.</li>
                    <li><strong>Test &amp; Walkthrough:</strong> Verify charging speed, app setup, and safety checklist.</li>
                </ol>

                <h3 class="mt-6 text-xl font-semibold">Common Upgrades</h3>
                <p class="text-lg">Need more capacity? We can add a <strong>dedicated 240V circuit</strong>, perform a <strong>panel upgrade</strong>, or install a <strong>load management device</strong> to match your service.</p>

                <h3 class="mt-6 text-xl font-semibold">EV Charging FAQs</h3>
                <details class="border rounded p-4">
                    <summary class="font-medium cursor-pointer">How fast will Level 2 charge?</summary>
                    <p class="mt-2 text-lg">With a 40–60A circuit, most vehicles add ~25–45 miles of range per hour, depending on the charger and car.</p>
                </details>
                <details class="border rounded p-4 mt-3">
                    <summary class="font-medium cursor-pointer">Can you install outdoors?</summary>
                    <p class="mt-2 text-lg">Absolutely. We use weather-rated equipment and proper GFCI/AFCI protection where required.</p>
                </details>

                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p class="font-semibold">Ready to install your EV charger?</p>
                    <p class="text-lg">Get a fast quote with your address, panel photos, and charger brand—our team will handle the rest.</p>
                </div>
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
                'Licensed EV charger installers for homes and businesses. Fast installs, smart chargers, and code-compliant service.'
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
                            "Install and upgrade EV chargers for residential homes and commercial fleets. Code-compliant and efficient charger setup."
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
