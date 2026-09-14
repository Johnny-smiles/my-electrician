<template>
  <section class="home-hero">
    <div class="site-container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" /> YOUR TWIN CITIES ELECTRICIAN</p>
        <h1>Good people.<br />Great electrical work<span class="text-brand-orange">.</span></h1>
        <p class="hero-description">Your Electrician is a family-owned electrical contractor serving Minneapolis, St. Paul, and the surrounding metro. From your next remodel to your first EV charger, let’s get it done right.</p>
        <div class="hero-actions">
          <NuxtLink to="/contact/" class="button-primary" data-analytics-event="cta_click" data-analytics-label="hero_request_quote" data-analytics-type="form">Get a free quote <span aria-hidden="true">↗</span></NuxtLink>
          <NuxtLink to="/services/" class="text-link">Explore our services <span aria-hidden="true">→</span></NuxtLink>
        </div>
        <div class="hero-assurance"><span aria-hidden="true">✓</span> Licensed, bonded &amp; insured <span class="assurance-divider" /> Residential &amp; commercial</div>
      </div>
      <div class="hero-visual">
        <NuxtImg src="/hero.png" alt="Electrician working on a wall outlet in a home" width="720" height="640" fit="cover" sizes="xs:100vw sm:100vw md:50vw lg:640px" format="webp" preload loading="eager" fetchpriority="high" class="hero-photo" />
        <div class="hero-photo-label"><span class="photo-mark" aria-hidden="true">↗</span><div><strong>Powering your everyday.</strong><span>Homes. Businesses. What’s next.</span></div></div>
      </div>
    </div>
  </section>
</template>
