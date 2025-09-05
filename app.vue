<template>
    <div>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WH87J4BK"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
            ></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->

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
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
</script>
