<template>
    <!-- top header -->
    <nav
        class="sticky top-0 z-50 bg-brand-light/90 backdrop-blur
           supports-[backdrop-filter]:bg-brand-light/70 border-b border-brand-dark/10">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            <!-- logo -->
            <NuxtLink to="/" class="flex items-center gap-3">
                <NuxtImg
                    src="/logo1.png"
                    alt="Your Electrician logo"
                    width="240"
                    height="80"
                />
            </NuxtLink>

            <!-- mobile hamburger -->
            <button
                class="sm:hidden flex flex-col gap-[6px] focus:outline-none"
                @click="isOpen = !isOpen"
                aria-label="Toggle navigation"
            >
                <span class="w-6 h-[2px] bg-orange-500 transition-transform"
                      :class="{ 'rotate-45 translate-y-[8px]': isOpen }" />
                <span class="w-6 h-[2px] bg-orange-500"
                      :class="{ 'opacity-0': isOpen }" />
                <span class="w-6 h-[2px] bg-orange-500 transition-transform"
                      :class="{ '-rotate-45 -translate-y-[8px]': isOpen }" />
            </button>

            <!-- desktop / mobile links -->
            <ul
                :class="[
          'list-none gap-12 text-lg font-semibold tracking-wide',
          isOpen
            ? 'flex flex-col absolute top-full left-0 w-full bg-brand-light px-6 py-4 border-b border-brand-dark/10'
            : 'hidden sm:flex'     // hidden on mobile, flex on ≥ sm
        ]"
            >
                <li><NuxtLink to="/"        class="hover:text-brand-orange" @click="isOpen = false">Home</NuxtLink></li>
                <li><NuxtLink to="/about"   class="hover:text-brand-orange" @click="isOpen = false">About</NuxtLink></li>
                <li><NuxtLink to="/services" class="hover:text-brand-orange" @click="isOpen = false">Services</NuxtLink></li>
                <li><NuxtLink to="/contact" class="hover:text-brand-orange" @click="isOpen = false">Contact</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>