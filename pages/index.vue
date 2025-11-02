<template>
    <main class="flex flex-col bg-brand-sand">
        <HeroSection />

        

        <!-- boxed services section with top/bottom spacing -->
        <section class="my-12 max-w-7xl mx-auto w-full px-6">
            <HomepageServices />
        </section>

        <section class="max-w-4xl mx-auto w-full px-6 py-10 text-lg text-brand-dark/80">
            <p class="mb-6">
                From fixture installs to full rewires, our licensed team handles it all—take a look at the
                <NuxtLink to="/services" class="text-brand-orange font-semibold hover:underline">
                    electrical services we offer
                </NuxtLink>
                and find the right fit for your home or business.
            </p>
            
            <div class="prose max-w-none">
                <p class="mb-4">
                    <strong>Your Electrician</strong> provides professional electrical services throughout the Minneapolis–St. Paul metro area. 
                    Whether you need residential wiring for a new home build, commercial lighting upgrades, EV charger installation, 
                    or electrical remodeling for your kitchen or basement, our licensed and insured electricians deliver code-compliant 
                    work on time and on budget.
                </p>
                
                <p class="mb-4">
                    We specialize in <strong>residential electrical services</strong> including panel upgrades, whole-house rewiring, 
                    smart home integration, and dedicated circuits for appliances. For businesses, we handle <strong>commercial lighting</strong> 
                    retrofits, exit lighting installations, occupancy sensors, and routine maintenance. Our <strong>EV charger installation</strong> 
                    services help homeowners and fleet operators set up reliable Level 2 charging stations.
                </p>
                
                <p>
                    Serving Minneapolis, St. Paul, and surrounding communities, we bring years of experience and a commitment to safety 
                    and quality. Contact us today for a free estimate on your next electrical project.
                </p>
            </div>
        </section>

    </main>
</template>

<script setup lang="ts">
import HeroSection       from '~/components/HeroSection.vue'
import HomepageServices  from '~/components/HomepageServices.vue'
import Footer            from '~/components/Footer.vue'
import { siteConfig }    from '~/site.config'
import { useHead }       from '#imports'

/* ------------------------------------------------------------------
   LocalBusiness structured data
   -----------------------------------------------------------------*/
const structuredData = {
    '@context': 'https://schema.org',
    '@type':    'LocalBusiness',
    name:        siteConfig.siteName,
    url:         siteConfig.siteUrl,
    telephone:   siteConfig.phone,
    description: siteConfig.description,
    address: {
        '@type':           'PostalAddress',
        addressLocality:   siteConfig.location.city,
        addressRegion:     siteConfig.location.state,
        postalCode:        siteConfig.location.zip,
        addressCountry:    siteConfig.location.country
    },
    openingHours: siteConfig.hours,
    geo: {
        '@type':    'GeoCoordinates',
        latitude:   siteConfig.location.latitude,
        longitude:  siteConfig.location.longitude
    }
}

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify(structuredData)
        }
    ]
})
</script>

<style scoped>
/* Optional extra tweaks (can be empty or removed entirely) */
</style>
