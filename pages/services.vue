<template>
    <main class="flex flex-col min-h-screen bg-brand-sand">

        <!-- boxed services area -->
        <section class="my-6 max-w-7xl mx-auto w-full px-6">
            <ServicesSection />
        </section>

        <!-- boxed FAQ area -->
        <section class="my-6 max-w-7xl mx-auto w-full px-6">
            <FaqSection />
        </section>

        <section class="next-step" style="margin-top:2rem; padding-top:1rem; border-top:1px solid #ddd;">
            <p class="text-center text-lg">
                Need an electrician now?
                <NuxtLink to="/contact" class="text-brand-orange font-semibold hover:underline">
                    Request Quote
                </NuxtLink>
                and we’ll get you scheduled.
            </p>
        </section>

    </main>
</template>

<script setup lang="ts">
import ServicesSection from '~/components/ServicesSection.vue'
import FaqSection      from '~/components/FaqSection.vue'
</script>
