<template>
    <div>
        <ClientOnly>
            <GoogleTagManager />
        </ClientOnly>

        <NavBar />
        <NuxtPage />
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
