<template>
    <!-- top header -->
    <nav
        class="sticky top-0 z-50 bg-[#f4f5f7] border-b border-brand-dark/10">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            <!-- logo -->
            <NuxtLink to="/" class="flex items-center gap-3">
                <NuxtImg
                    src="/logo1.png"
                    alt="Your Electrician logo"
                    class="max-h-20 w-auto"
                    priority
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
                'list-none text-lg font-semibold tracking-wide',
                isOpen
                  ? 'absolute top-full right-0 w-full bg-white shadow-md flex flex-col items-end px-6 py-6 space-y-4 z-50'
                  : 'hidden sm:flex gap-12 items-center'
              ]"
            >
              <li><NuxtLink to="/"        class="hover:text-brand-orange" @click="isOpen = false">Home</NuxtLink></li>
              <li><NuxtLink to="/about"   class="hover:text-brand-orange" @click="isOpen = false">About</NuxtLink></li>

              <!-- Services dropdown (desktop only, click-based) -->
              <li class="relative hidden sm:block">
                <span
                  class="cursor-pointer hover:text-brand-orange select-none"
                  @click="servicesOpen = !servicesOpen"
                  @keydown.enter.space.prevent="servicesOpen = !servicesOpen"
                  tabindex="0"
                >
                  Services ▾
                </span>
                <ul
                  v-if="servicesOpen"
                  class="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-56 text-sm z-50"
                >
                  <li><NuxtLink to="/home-builds"     class="block px-4 py-2 hover:bg-brand-light" @click="closeMenus">Residential</NuxtLink></li>
                  <li><NuxtLink to="/home-remodeling" class="block px-4 py-2 hover:bg-brand-light" @click="closeMenus">Remodeling</NuxtLink></li>
                  <li><NuxtLink to="/commercial-lighting"      class="block px-4 py-2 hover:bg-brand-light" @click="closeMenus">Commercial</NuxtLink></li>
                  <li><NuxtLink to="/ev-charger-installation"              class="block px-4 py-2 hover:bg-brand-light" @click="closeMenus">EV Chargers</NuxtLink></li>
                  <li class="border-t mx-2 my-1"></li>
                  <li><NuxtLink to="/recent-work" class="block px-4 py-2 hover:bg-brand-light" @click="closeMenus">Recent&nbsp;Work</NuxtLink></li>
                </ul>
              </li>

              <!-- Services + recent‑work sublinks in mobile drawer -->
              <li class="sm:hidden flex flex-col items-end space-y-2 w-full">
                <NuxtLink to="/home-builds"     class="hover:text-brand-orange" @click="isOpen = false">Residential</NuxtLink>
                <NuxtLink to="/home-remodeling" class="hover:text-brand-orange" @click="isOpen = false">Remodeling</NuxtLink>
                <NuxtLink to="/commercial-lighting"      class="hover:text-brand-orange" @click="isOpen = false">Commercial</NuxtLink>
                <NuxtLink to="/ev-charger-installation"  class="hover:text-brand-orange" @click="isOpen = false">EV&nbsp;Chargers</NuxtLink>
                <NuxtLink to="/recent-work" class="hover:text-brand-orange" @click="isOpen = false">Recent&nbsp;Work</NuxtLink>
              </li>

              <!-- Recent‑work top‑level link (desktop) -->
              <li class="hidden sm:block">
                <NuxtLink to="/recent-work" class="hover:text-brand-orange" @click="closeMenus">Recent&nbsp;Work</NuxtLink>
              </li>

              <!-- CTA buttons (desktop) -->
              <li class="hidden sm:block">
                <a href="tel:7632489801"
                   class="inline-block bg-orange-500 text-white px-4 py-2 rounded-md mr-3 font-semibold hover:bg-orange-600 transition">
                  Call&nbsp;Now
                </a>
                <NuxtLink to="/contact"
                   class="inline-block bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                  Request&nbsp;Quote
                </NuxtLink>
              </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const isOpen = ref(false)
const servicesOpen = ref(false)

function closeMenus() {
  isOpen.value = false
  servicesOpen.value = false
}

// Optional: Close dropdown when clicking outside
function handleClickOutside(event: MouseEvent) {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(event.target as Node)) {
    servicesOpen.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const submitForm = async () => {
  // Use fetch/axios to POST data
  // Show a success message or redirect as needed
}
</script>