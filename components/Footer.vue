<template>
    <footer class="bg-brand-light text-brand-dark pt-14 pb-8">
        <!-- Centered columns on all screens, stacked and centered on mobile -->
        <div class="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center text-center">
            <!-- branding -->
            <div class="w-full text-center md:text-left justify-self-center">
                <NuxtImg
                    src="/logo1.png"
                    alt="Your Electrician logo"
                    class="max-h-16 w-auto mx-auto md:mx-0"
                />
                <p class="mt-4 font-semibold">{{ name }}</p>
                <p class="mt-1">{{ phone }}</p>
                <p>{{ email }}</p>
            </div>

            <!-- links (centered) -->
            <div class="w-full space-y-8 md:space-y-0 md:col-span-2 md:flex md:justify-center text-center">
                <!-- Company links -->
                <div class="w-full">
                    <h3 class="text-lg font-semibold mb-3">Company</h3>
                    <ul class="list-none space-y-2">
                        <li><NuxtLink to="/about" class="hover:text-brand-orange">About</NuxtLink></li>
                        <li><NuxtLink to="/services" class="hover:text-brand-orange">Services</NuxtLink></li>
                        <li><NuxtLink to="/recent-work" class="hover:text-brand-orange">Recent&nbsp;Work</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="hover:text-brand-orange">Contact</NuxtLink></li>
                    </ul>
                </div>
            </div>

            <!-- CTA : centered -->
            <div class="w-full text-center md:text-center justify-self-center">
                <h3 class="text-lg font-semibold mb-3">Need Help Fast?</h3>
                <a
                    href="tel:7632489801"
                    data-analytics-event="cta_click"
                    data-analytics-label="footer_call_now"
                    data-analytics-type="phone"
                    class="inline-block mt-2 px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition"
                >
                    Call&nbsp;Now
                </a>
            </div>
        </div>

        <div class="text-center text-sm mt-10 border-t border-brand-dark/10 pt-6">
            <p>&copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.</p>
            <p class="mt-2">
                Website by <a href="https://barnabasmn.com/" target="_blank" rel="noopener noreferrer" class="text-brand-orange hover:underline">Barnabas MN</a>
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
defineProps<{ name: string; phone: string; email: string }>()
</script>
