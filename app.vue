<template>
    <div>
        <ClientOnly>
            <GoogleTagManager />
        </ClientOnly>

        <a href="#main-content" class="skip-link">Skip to content</a>
        <NavBar />
        <div id="main-content" tabindex="-1"><NuxtPage /></div>
        <Footer
            name="Your Electrician"
            phone="763-248-9801"
            email="hireyourelectrician@gmail.com"
        />
    </div>
</template>

<script setup>
import GoogleTagManager from '~/components/GoogleTagManager.vue'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>
