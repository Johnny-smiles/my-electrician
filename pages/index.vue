<template>
  <main class="home-page">
    <HeroSection />
    <div class="home-trust-bar"><div class="site-container"><span>Local people. Personal service.</span><span>Free, no-obligation estimates</span><span>Serving the Minneapolis–St. Paul metro</span></div></div>
    <HomepageServices />
    <section class="work-section section-space" aria-labelledby="work-heading">
      <div class="site-container work-grid">
        <div class="work-photo-wrap">
          <NuxtImg src="/recent/IMG_1596.jpeg" alt="Weather-protected outdoor outlet installed on exterior siding" width="600" height="720" fit="cover" sizes="xs:100vw sm:100vw md:50vw lg:600px" format="webp" loading="lazy" class="work-photo" />
          <span class="work-photo-caption">FROM OUR PROJECT GALLERY <span aria-hidden="true">↗</span></span>
        </div>
        <div class="work-copy"><p class="eyebrow">YOUR HOME. OUR ATTENTION TO DETAIL.</p><h2 id="work-heading">The little things<br />make a big difference.</h2><p>Well-placed outlets. Lighting that fits the room. Power ready for whatever comes next. We help homeowners and businesses make practical improvements, from a single circuit to a complete build.</p><p>We’re a family-owned business, and we bring a personal approach to the places you call home and work.</p><div class="flex flex-wrap gap-6 mt-8"><NuxtLink to="/recent-work/" class="button-dark">Take a look at our work <span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/about/" class="text-link">Meet Your Electrician <span aria-hidden="true">→</span></NuxtLink></div></div>
      </div>
    </section>
    <section class="site-container section-space areas-section" aria-labelledby="areas-heading">
      <div><p class="eyebrow">RIGHT HERE IN YOUR NEIGHBORHOOD</p><h2 id="areas-heading">Twin Cities roots.<br />Metro-wide service.</h2><p class="mt-5 text-brand-dark/70 leading-relaxed">Based in the Minneapolis–St. Paul metro, we provide residential and commercial electrical services across these communities.</p><NuxtLink to="/areas/" class="text-link mt-6">Explore our service areas <span aria-hidden="true">↗</span></NuxtLink></div>
      <div class="area-link-grid"><NuxtLink v-for="area in serviceAreas" :key="area.slug" :to="`/areas/${area.slug}/`">{{ area.name }} <span aria-hidden="true">↗</span></NuxtLink></div>
    </section>
    <div class="faq-background"><FaqSection /></div>
    <section class="quote-banner"><div class="site-container"><div><p class="eyebrow">LET’S GET TO WORK</p><h2>What’s your next project?</h2><p>Tell us what you have in mind. We’ll help with the next step.</p></div><NuxtLink to="/contact/" class="button-primary" data-analytics-event="cta_click" data-analytics-label="home_bottom_quote" data-analytics-type="form">Get a free quote <span aria-hidden="true">↗</span></NuxtLink></div></section>
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
