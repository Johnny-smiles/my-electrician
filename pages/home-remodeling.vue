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
                format="avif,webp"
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
                    class="inline-block mt-8 px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                    Request a Free Estimate
                </NuxtLink>
            </div>

        </section>

        <!-- CONTENT -->
        <section class="max-w-5xl mx-auto px-6 py-16">
            <h2 class="text-3xl font-semibold mb-6">
                Modernize &amp; Future‑Proof Your Home
            </h2>
            <p class="mb-4 text-lg">
                Whether you’re adding a new room, updating an old panel, or integrating
                smart‑home devices, our licensed electricians deliver efficient,
                code‑compliant remodeling solutions that keep your family safe and your
                home powered for the future.
            </p>

            <ul class="list-disc pl-6 space-y-2 text-lg">
                <li>Room additions &amp; kitchen rewires</li>
                <li>Code‑compliance corrections</li>
                <li>Smart‑home device integration</li>
                <li>Service panel upgrades &amp; load calculations</li>
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