<template>
    <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
            <!-- four‑wide grid on lg, two‑wide on md, single on mobile -->
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <ServiceCardSimple
                    title="Residential"
                    description="Expert electrical services for your home."
                />

                <ServiceCardSimple
                    title="Commercial"
                    description="Professional wiring for your business."
                />

                <ServiceCardSimple
                    title="Emergency"
                    description="24/7 emergency electrical support."
                />

                <ServiceCardSimple
                    title="EV Chargers"
                    description="Installations and upgrades for home or fleet."
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCardSimple from '~/components/ServiceCardSimple.vue'
</script>
