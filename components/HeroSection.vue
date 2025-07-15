<template>
    <section class="relative h-[70vh] min-h-[400px] flex items-center justify-center">
        <NuxtImg
            src="/hero.png"
            alt="Electrician working on breaker panel"
            class="absolute inset-0 w-full h-full object-cover"
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
                to="/contact"
                class="inline-block mt-8 px-8 py-3 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
                Request a Free Estimate
            </NuxtLink>
        </div>
    </section>
</template>

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
