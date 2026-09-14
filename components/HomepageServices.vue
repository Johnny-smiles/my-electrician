<template>
  <section class="site-container section-space" aria-labelledby="services-heading">
    <div class="section-heading">
      <div><p class="eyebrow">WHAT WE DO</p><h2 id="services-heading">Big plans. Small fixes.<br />We’re here for both.</h2></div>
      <p>Electrical work for the way you live and work.<br class="hidden md:block" /> Find the right service for your next project.</p>
    </div>
    <div class="home-service-grid">
      <NuxtLink v-for="(service, index) in services" :key="service.to" :to="service.to" class="home-service-card">
        <div class="service-card-top"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path :d="service.icon" /></svg><span>0{{ index + 1 }}</span></div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <span class="service-card-link">{{ service.link }} <span aria-hidden="true">↗</span></span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { to: '/home-builds/', title: 'New home wiring', description: 'Start with a solid foundation. Complete electrical wiring, panels, and lighting for your new home.', link: 'Build with confidence', icon: 'M3 10l9-7 9 7M5 9v12h14V9M9 21v-8h6v8' },
  { to: '/home-remodeling/', title: 'Remodels & upgrades', description: 'Make your space work better with updated circuits, outlets, panels, and thoughtfully placed lighting.', link: 'Upgrade your space', icon: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6' },
  { to: '/commercial-lighting/', title: 'Commercial lighting', description: 'Keep business looking bright. LED retrofits, lighting controls, and maintenance for your workplace.', link: 'Light your business', icon: 'M9 18h6M10 21h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2M12 1v1M2 8h1M21 8h1' },
  { to: '/ev-charger-installation/', title: 'EV charger installation', description: 'Plug in at home or at work. Level 2 charging, dedicated circuits, and panel capacity assessments.', link: 'Get ready to charge', icon: 'M6 3h10v18H6zM9 6h4v4H9zM16 7h2l3 3v7a2 2 0 0 1-4 0v-3h-1M4 21h14' }
]
</script>
