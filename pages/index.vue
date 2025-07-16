<template>
    <main class="flex flex-col min-h-screen bg-brand-sand">
        <HeroSection />

        <!-- boxed services section with top/bottom spacing -->
        <section class="my-12 max-w-7xl mx-auto w-full px-6">
            <HomepageServices />
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
