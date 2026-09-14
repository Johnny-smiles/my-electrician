<template>
  <footer class="site-footer">
    <div class="site-container footer-grid">
      <div><NuxtLink to="/" class="footer-wordmark">Your Electrician<span>.</span></NuxtLink><p class="mt-4">Family-owned electrical services.<br />Minneapolis, St. Paul &amp; the metro.</p><p class="mt-5 text-sm">Licensed, bonded &amp; insured.</p></div>
      <div><h2>Explore</h2><ul><li><NuxtLink to="/services/">Our services</NuxtLink></li><li><NuxtLink to="/recent-work/">Recent work</NuxtLink></li><li><NuxtLink to="/about/">About us</NuxtLink></li><li><NuxtLink to="/areas/">Service areas</NuxtLink></li></ul></div>
      <div><h2>Let’s talk</h2><ul><li><a :href="`tel:${phone.replace(/[^+\d]/g, '')}`" data-analytics-event="cta_click" data-analytics-label="footer_call_now" data-analytics-type="phone">{{ phone }} <span aria-hidden="true">↗</span></a></li><li><a :href="`mailto:${email}`">{{ email }}</a></li><li><NuxtLink to="/contact/">Request a free quote <span aria-hidden="true">↗</span></NuxtLink></li></ul></div>
      <div><h2>Business hours</h2><p>Monday–Friday<br /><span class="text-white">8am–6pm</span></p><p class="mt-3">Saturday<br /><span class="text-white">9am–2pm</span></p></div>
    </div>
    <div class="site-container footer-bottom"><span>© {{ new Date().getFullYear() }} {{ name }}. All rights reserved.</span><span>Website by <a href="https://www.barnabasmn.com/" target="_blank" rel="noopener noreferrer">Barnabas MN <span aria-hidden="true">↗</span></a></span></div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ name: string; phone: string; email: string }>()
</script>
