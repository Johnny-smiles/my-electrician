<template>
    <section class="relative h-[40vh] min-h-[260px] md:h-[50vh] flex items-center justify-center">

        <NuxtImg
            :src="src"
            :alt="alt"
            :width="width"
            :height="height"
            sizes="xs:100vw sm:100vw md:100vw lg:1200px"
            format="webp"
            preload
            loading="eager"
            fetchpriority="high"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div class="absolute inset-0 bg-black/60" />

        <div class="relative z-10 text-center text-white px-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
            <h1 class="text-4xl sm:text-5xl md:text-6xl electrician-text font-logo uppercase">
                Your Trusted Local Electrician
            </h1>
            <p class="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
                Providing reliable electrical services for your home&nbsp;or&nbsp;business.
            </p>
            <NuxtLink
                to="/contact/"
                data-analytics-event="cta_click"
                data-analytics-label="hero_request_quote"
                data-analytics-type="form"
                class="inline-block mt-8 px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
                Request Quote
            </NuxtLink>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeroSection',
    props: {
        /** Path of the hero background image under /public. */
        src: {
            type: String,
            default: '/hero.png'
        },
        /** Alt text for the background image. Describe the actual photo. */
        alt: {
            type: String,
            default: 'Electrician working on a residential breaker panel'
        },
        /**
         * Intrinsic pixel width of `src`. Must be the file's REAL width —
         * @nuxt/image derives the srcset height from width/height, so a wrong
         * ratio ships mis-cropped variants. Default matches /hero.png (1915x821).
         * Check a new image with: sips -g pixelWidth -g pixelHeight public/<file>
         */
        width: {
            type: [Number, String],
            default: 1915
        },
        /** Intrinsic pixel height of `src`. See `width`. Default: /hero.png. */
        height: {
            type: [Number, String],
            default: 821
        }
    }
})
</script>

<style scoped>
/* 'Russo One' is loaded once via the Google Fonts <link> in nuxt.config.ts.
   Do not @import it here — scoped styles are inlined as critical CSS and an
   @import there is render-blocking. */
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
