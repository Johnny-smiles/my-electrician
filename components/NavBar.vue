<template>
  <header class="site-header" @keydown.esc="closeMenu(true)">
    <div class="utility-bar">
      <div class="site-container flex items-center justify-between gap-4">
        <span>Family-owned. Twin Cities local.</span>
        <a :href="`tel:${siteConfig.phone}`" data-analytics-event="cta_click" data-analytics-label="header_phone" data-analytics-type="phone">Call 763-248-9801 <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <nav aria-label="Main navigation" class="site-container nav-inner">
      <NuxtLink to="/" aria-label="Your Electrician home" class="shrink-0" @click="closeMenu()">
        <NuxtImg src="/logo1.png" alt="Your Electrician" width="244" height="55" sizes="244px" format="webp" loading="eager" class="nav-logo" />
      </NuxtLink>
      <button ref="menuButton" type="button" class="menu-toggle" :aria-expanded="isOpen" aria-controls="main-navigation" :aria-label="isOpen ? 'Close navigation' : 'Open navigation'" @click="isOpen = !isOpen">
        <span>{{ isOpen ? 'Close' : 'Menu' }}</span>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path :d="isOpen ? 'M6 6l12 12M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'" /></svg>
      </button>
      <div id="main-navigation" class="nav-links" :class="{ 'is-open': isOpen }">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" @click="closeMenu()">{{ link.label }}</NuxtLink>
        <NuxtLink to="/contact/" class="button-primary" data-analytics-event="cta_click" data-analytics-label="nav_request_quote" data-analytics-type="form" @click="closeMenu()">Get a free quote <span aria-hidden="true">↗</span></NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { siteConfig } from '~/site.config'
const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const route = useRoute()
const links = [
  { to: '/services/', label: 'Services' },
  { to: '/recent-work/', label: 'Our work' },
  { to: '/about/', label: 'About us' },
  { to: '/areas/', label: 'Service areas' }
]
function closeMenu(restoreFocus = false) {
  isOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}
watch(() => route.fullPath, () => closeMenu())
</script>
