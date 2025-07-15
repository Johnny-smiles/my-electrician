<template>
    <section class="bg-brand-sand py-20">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
                Full‑Service Electrical Expertise
            </h2>

            <div class="grid gap-12 md:grid-cols-2">
                <ServiceCard
                    title="Home Builds"
                    img="/images/service-home-builds.jpg"
                    alt="Electrician wiring a new home"
                    :items="[
            'Complete rough‑in & finish wiring',
            'Panel installations & service upgrades',
            'Energy‑efficient lighting design'
          ]"
                />

                <ServiceCard
                    title="Home Remodeling"
                    img="/images/service-remodel.jpg"
                    alt="Electrician upgrading kitchen wiring"
                    :items="[
            'Room additions & kitchen rewires',
            'Code‑compliance corrections',
            'Smart‑home device integration'
          ]"
                />

                <ServiceCard
                    title="Office & Commercial Lighting"
                    img="/images/service-commercial-lighting.jpg"
                    alt="LED lighting in an office"
                    :items="[
            'LED retrofits & maintenance',
            'Emergency & exit lighting',
            'Occupancy‑sensor solutions'
          ]"
                />

                <ServiceCard
                    title="Security & Safety"
                    img="/images/service-security.jpg"
                    alt="Installing outdoor security lighting"
                    :items="[
            'Outdoor motion & flood lighting',
            'CCTV & doorbell cameras',
            'Whole‑house surge protection'
          ]"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
</script>
