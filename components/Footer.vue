<template>
    <footer class="bg-brand-light text-brand-dark pt-14 pb-8">
        <div class="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-3 justify-items-center">
            <!-- branding -->
            <div>
                <NuxtImg
                    src="logo1.png"
                    alt="Your Electrician logo"
                    width="180"
                    height="60"
                />
                <p class="mt-4 font-semibold">{{ name }}</p>
                <p class="mt-1">{{ phone }}</p>
                <p>{{ email }}</p>
            </div>

            <!-- links -->
            <div>
                <h3 class="text-lg font-semibold mb-3">Company</h3>
                <ul class="list-none space-y-2">
                    <li><NuxtLink to="/about" class="hover:text-brand-orange">About</NuxtLink></li>
                    <li><NuxtLink to="/services" class="hover:text-brand-orange">Services</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="hover:text-brand-orange">Contact</NuxtLink></li>
                </ul>
            </div>

            <!-- cta -->
            <div>
                <h3 class="text-lg font-semibold mb-3">Need Help Fast?</h3>
                <NuxtLink
                    to="/contact"
                    class="inline-block mt-2 px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition"
                >
                    Request a Free Estimate
                </NuxtLink>
            </div>
        </div>

        <p class="text-center text-sm mt-10 border-t border-brand-dark/10 pt-6">
            &copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
        </p>
    </footer>
</template>

<script setup lang="ts">
defineProps<{ name: string; phone: string; email: string }>()
</script>