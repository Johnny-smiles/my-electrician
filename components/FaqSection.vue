<template>
  <section id="faqs" class="site-container section-space faq-section" aria-labelledby="faq-heading">
    <div><p class="eyebrow">A FEW HELPFUL ANSWERS</p><h2 id="faq-heading">Before we<br class="hidden lg:block" /> get started.</h2><p class="mt-5 text-brand-dark/70">Have something else in mind?</p><NuxtLink to="/contact/" class="text-link mt-3">Let’s talk about it <span aria-hidden="true">↗</span></NuxtLink></div>
    <div class="faq-list">
      <details v-for="(faq, index) in electricalFaqs" :key="faq.q" :open="index === 0" class="faq-item">
        <summary>{{ faq.q }}<span aria-hidden="true" class="faq-plus">+</span></summary>
        <p>{{ faq.a }}</p>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import { electricalFaqs } from '~/data/faqs'
// Native details keeps every answer in the generated HTML and works without JS.
useHead({ script: [{
  key: 'electrical-faqs',
  type: 'application/ld+json',
  children: JSON.stringify({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: electricalFaqs.map(faq => ({
      '@type': 'Question', name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  })
}] })
</script>
