<template>
    <section class="bg-brand-sand py-20">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
                Full‑Service Electrical Expertise
            </h2>

            <div class="grid gap-12 md:grid-cols-2">
                <NuxtLink to="/home-builds" class="block hover:no-underline">
                    <ServiceCard
                        title="Home Builds"
                        :items="[
                          'Complete rough‑in & finish wiring',
                          'Panel installations & service upgrades',
                          'Energy‑efficient lighting design'
                        ]"
                    />
                </NuxtLink>

                <NuxtLink to="/home-remodeling" class="block hover:no-underline">
                    <ServiceCard
                        title="Home Remodeling"
                        :items="[
                          'Room additions & kitchen rewires',
                          'Code‑compliance corrections',
                          'Smart‑home device integration'
                        ]"
                    />
                </NuxtLink>

                <NuxtLink to="/commercial-lighting" class="block hover:no-underline">
                    <ServiceCard
                        title="Office & Commercial Lighting"
                        :items="[
                          'LED retrofits & maintenance',
                          'Emergency & exit lighting',
                          'Occupancy‑sensor solutions'
                        ]"
                    />
                </NuxtLink>

                <NuxtLink to="/ev-charger-installation" class="block hover:no-underline">
                    <ServiceCard
                        title="EV Charger Installation"
                        :items="[
                          'Level 2 home charger setup',
                          'Fleet charging station design',
                          'Permit & code compliance'
                        ]"
                    />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
</script>
