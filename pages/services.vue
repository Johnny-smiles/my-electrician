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

        <Footer
            name="Your Electrician"
            phone="555-123-4567"
            email="info@yourelectrician.co"
        />
    </main>
</template>

<script setup lang="ts">
import ServicesSection from '~/components/ServicesSection.vue'
import FaqSection      from '~/components/FaqSection.vue'
import Footer          from '~/components/Footer.vue'
</script>