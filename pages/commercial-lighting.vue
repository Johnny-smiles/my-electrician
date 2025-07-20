<template>
    <main>
        <!-- HERO -->
        <section class="relative h-[50vh] bg-black">
            <!-- Uncomment and provide a real image when ready -->
            <NuxtImg
              src="/commercialLighting.png"
              alt="Commercial LED lighting install in Minneapolis office"
              class="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div
                class="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4"
            >
                <h1 class="text-4xl md:text-6xl font-logo electrician-text uppercase mb-2">
                    Office &amp; Commercial Lighting
                </h1>
                <p class="text-xl max-w-xl">
                    Energy‑efficient LED retrofits, exit lighting,<br />
                    and occupancy‑sensor solutions for your workplace.
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
                Bright, Safe &amp; Efficient Lighting
            </h2>
            <p class="mb-4 text-lg">
                From modern office renovations to large‑scale industrial retrofits, our
                licensed electricians design and install lighting systems that boost
                productivity, safety, and energy savings.
            </p>

            <ul class="list-disc pl-6 space-y-2 text-lg">
                <li>LED retrofits and fixture upgrades</li>
                <li>Emergency &amp; exit lighting systems</li>
                <li>Occupancy‑sensor and motion‑lighting controls</li>
                <li>Routine maintenance and lighting audits</li>
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

<!-- SEO & meta -->
<script setup lang="ts">
useHead({
    title: 'Commercial Lighting Services | Minneapolis MN | Your Electrician',
    meta: [
        {
            name: 'description',
            content:
                'Energy‑efficient commercial lighting installations including LED retrofits, emergency lighting, and occupancy sensors for offices and industrial spaces.'
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
                        "name": "Commercial Lighting Services",
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
                        "serviceType": "Commercial Lighting Services",
                        "description":
                            "Energy-efficient commercial lighting solutions, including LED upgrades, emergency lighting, and occupancy sensor integration."
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