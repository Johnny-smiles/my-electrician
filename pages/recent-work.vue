<template>
    <main>
        <!-- HERO -------------------------------------------------------- -->
        <section class="relative h-[40vh] md:h-[50vh] bg-black">
            <!-- Above-the-fold hero: eager + high priority, never lazy.
                 width/height are the file's real pixel size (1536x1024). -->
            <NuxtImg
                src="/recentProjectsHero.png"
                alt="Collage of recent electrical projects"
                width="1536"
                height="1024"
                sizes="xs:100vw sm:100vw md:100vw lg:1200px"
                format="webp"
                preload
                loading="eager"
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div
                class="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
                <h1 class="text-4xl md:text-6xl font-logo electrician-text uppercase mb-2">
                    Recent&nbsp;Work
                </h1>
                <p class="text-xl max-w-xl">
                    A glimpse of the wiring, lighting&nbsp;&amp; EV‑charging projects we’ve
                    completed for customers near you across Minneapolis–St&nbsp;Paul.
                </p>

                <!-- CTA → Facebook -->
                <a
                  href="https://www.facebook.com/share/1ArHV6nQsA/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener"
                  data-analytics-event="cta_click"
                  data-analytics-label="recent_work_facebook"
                  data-analytics-type="social"
                  class="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                  <!-- Facebook icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.874h2.773l-.443 2.89h-2.33V21.88C18.343 21.129 22 16.991 22 12Z"/>
                  </svg>
                  <span>See More on Facebook</span>
                </a>
            </div>
        </section>

        <!-- GALLERY / CAROUSEL ------------------------------------------ -->
        <section id="gallery" class="max-w-7xl mx-auto px-6 py-16">
            <h2 class="text-3xl font-semibold mb-4 text-center">
                Project Highlights
            </h2>
            
            <!-- Swipe indicator for mobile -->
            <div class="flex items-center justify-center gap-2 mb-10 md:hidden">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                <span class="text-sm text-gray-600 font-medium">Swipe to view more</span>
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>

            <!-- Swiper wrapper with custom navigation -->
            <div class="relative">
                <!-- Custom navigation buttons (outside images) -->
                <button
                  ref="prevEl"
                  aria-label="Previous"
                  class="hidden md:flex absolute left-[-3rem] top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 items-center justify-center shadow transition"
                  type="button"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button
                  ref="nextEl"
                  aria-label="Next"
                  class="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 items-center justify-center shadow transition"
                  type="button"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>

                <Swiper
                    :modules="[Navigation, Pagination]"
                    :slides-per-view="1"
                    :space-between="16"
                    :loop="true"
                    :pagination="{
                        clickable: true,
                        dynamicBullets: true
                    }"
                    :navigation="navigationOptions"
                    :breakpoints="{
                        640: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 3, spaceBetween: 24 }
                    }"
                    class="w-full swiper-grab"
                    @swiper="onSwiper"
                >
                    <SwiperSlide v-for="(img, i) in images" :key="i">
                        <!-- 600x800 matches the aspect-[3/4] card; without these
                             the originals (0.7-3.3 MB each) were served full size. -->
                        <NuxtImg
                          :src="img.src"
                          :alt="img.alt"
                          width="600"
                          height="800"
                          sizes="xs:100vw sm:50vw lg:33vw"
                          format="webp"
                          quality="75"
                          fit="cover"
                          loading="lazy"
                          class="w-full aspect-[3/4] object-cover rounded-lg shadow-sm hover:shadow-lg transition cursor-grab active:cursor-grabbing"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <!-- Second CTA -->
            <div class="mt-12 text-center">
                <NuxtLink
                    to="/contact/"
                    data-analytics-event="cta_click"
                    data-analytics-label="recent_work_request_quote"
                    data-analytics-type="form"
                    class="inline-block mt-4 px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition">
                    Request&nbsp;Quote
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)
const swiperRef = ref<any>(null)

const navigationOptions = {
  prevEl: null,
  nextEl: null,
}

function onSwiper(swiper: any) {
  swiperRef.value = swiper
  setTimeout(() => {
    if (prevEl.value && nextEl.value) {
      swiper.params.navigation.prevEl = prevEl.value
      swiper.params.navigation.nextEl = nextEl.value
      swiper.navigation.destroy()
      swiper.navigation.init()
      swiper.navigation.update()
    }
  })
}

/* ------------------------------------------------------------------ */
/*  Page‑level SEO                                                    */
/* ------------------------------------------------------------------ */
/* breadcrumb + useHead called after images array below */

/* ------------------------------------------------------------------ */
/*  Images (exact filenames you provided)                             */
/* ------------------------------------------------------------------ */
const images = [
    { src: '/recent/IMG_0025.jpg',  alt: 'Service panel on exterior wall' },
    { src: '/recent/IMG_0047.jpeg', alt: 'Outdoor meter & conduit upgrade' },
    { src: '/recent/IMG_0050.jpeg', alt: 'Breaker panel interior wiring' },
    { src: '/recent/IMG_0301.jpg',  alt: 'Finished basement lighting' },
    { src: '/recent/IMG_0304.jpg',  alt: 'Basement conduit runs' },
    { src: '/recent/IMG_1217.jpg',  alt: 'EV charger receptacle install' },
    { src: '/recent/IMG_1594.jpeg', alt: 'New sub‑panel installation' },
    { src: '/recent/IMG_1596.jpeg', alt: 'Exterior GFCI outlet' },
    { src: '/recent/IMG_1625.jpeg', alt: 'Bathroom exhaust + lighting' },
    { src: '/recent/IMG_1640.jpeg', alt: 'Water heater circuit upgrade' },
    // { src: '/recent/IMG_1651.jpeg', alt: 'Garage work‑bench outlets' },
    { src: '/recent/IMG_1666.jpg',  alt: 'Meter main combo installation' },
    { src: '/recent/IMG_1667.jpg',  alt: 'Service disconnect & meter' },
    { src: '/recent/IMG_1790.jpeg', alt: 'Shop-vac dedicated circuit' }
]

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl() },
        { '@type': 'ListItem', position: 2, name: 'Recent Work', item: siteUrl('/recent-work') }
    ]
}

/* Schema URLs must be absolute — a bare /recent/IMG_0025.jpg is not resolvable
   by consumers that read the JSON-LD outside the page context. */
const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Recent Work - Your Electrician',
    description: 'A gallery of recent residential and commercial electrical projects.',
    url: siteUrl('/recent-work'),
    about: businessRef(),
    image: images.map(img => siteAsset(img.src)),
    mainEntity: images.map(img => ({
        '@type': 'ImageObject',
        contentUrl: siteAsset(img.src),
        url: siteAsset(img.src),
        caption: img.alt
    }))
}

const pageTitle = 'Recent Electrical Projects | Minneapolis | Your Electrician'
const pageDescription = 'Gallery of recent home wiring, commercial lighting, and EV-charger installations completed by Your Electrician in Minneapolis, MN.'

useHead({
    title: pageTitle,
    meta: socialMeta({
        title: pageTitle,
        description: pageDescription,
        url: siteUrl('/recent-work'),
        image: siteAsset('/recentProjectsHero.png')
    }),
    link: [
        { rel: 'canonical', href: siteUrl('/recent-work') }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(collectionSchema) },
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>

<style scoped>
.font-logo {
    font-family: 'Russo One', sans-serif;
}

.electrician-text {
    color: white;
    text-shadow:
        2px 2px 0 #7c3aed,
        4px 4px 0 #f97316,
        6px 6px 0 rgba(0, 0, 0, 0.3);
}

/* Swiper grab cursor indication */
:deep(.swiper-grab) {
    cursor: grab;
}

:deep(.swiper-grab:active) {
    cursor: grabbing;
}

/* Make pagination dots more prominent */
:deep(.swiper-pagination-bullet) {
    opacity: 0.5;
    background: #f97316;
}

:deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background: #f97316;
    transform: scale(1.2);
}
</style>
