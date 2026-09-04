<template>
    <main class="flex flex-col bg-brand-sand">
        <HeroSection />

        

        <!-- boxed services section with top/bottom spacing -->
        <section class="my-12 max-w-7xl mx-auto w-full px-6">
            <HomepageServices />
        </section>

        <section class="max-w-4xl mx-auto w-full px-6 py-10 text-lg text-brand-dark/80">
            <div class="prose max-w-none">
                <p class="mb-4">
                    <strong>Your Electrician</strong> provides professional electrical services throughout the Minneapolis–St. Paul metro area, MN.
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
                    and quality. Contact us today for a free estimate from an electrician near you.
                </p>
            </div>
        </section>

        <!-- Service Areas for local SEO -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10 border-t border-brand-dark/10">
            <h2 class="text-2xl font-semibold mb-4 text-center">Proudly Serving the Twin Cities Metro</h2>
            <p class="text-brand-dark/70 text-center mb-4">
                We provide residential and commercial electrical services throughout the Minneapolis-St. Paul area, including:
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-1 text-center text-sm">
                <NuxtLink v-for="area in serviceAreas" :key="area.slug" :to="`/areas/${area.slug}/`" class="text-brand-orange hover:underline">{{ area.name }}</NuxtLink>
            </div>
        </section>

    </main>
</template>

<script setup lang="ts">
import HeroSection       from '~/components/HeroSection.vue'
import HomepageServices  from '~/components/HomepageServices.vue'
import { useHead }       from '#imports'
import { serviceAreas }  from '~/data/areas'

/* ------------------------------------------------------------------
   The one canonical Electrician node for the whole site.
   Every other page references it by @id (see composables/useBusinessSchema).
   -----------------------------------------------------------------*/
const structuredData = businessSchema()

const pageTitle = 'Electrician in Minneapolis & St. Paul, MN | Your Electrician'
const pageDescription = 'Licensed, bonded, and insured electrician for homes and businesses in the Minneapolis-St. Paul metro. Wiring, remodeling, lighting, and EV chargers.'

useHead({
    title: pageTitle,
    meta: socialMeta({ title: pageTitle, description: pageDescription, url: siteUrl() }),
    link: [
        { rel: 'canonical', href: siteUrl() }
    ],
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
