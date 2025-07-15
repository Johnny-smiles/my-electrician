<template>
    <div
        class="card-box flex flex-col md:flex-row items-start gap-6"
    >
        <!-- text -->
        <div class="flex-1">
            <h3 class="text-2xl md:text-3xl font-semibold text-brand-dark mb-4">
                {{ title }}
            </h3>
            <ul class="list-disc list-inside space-y-1 text-base md:text-lg">
                <li v-for="(line, idx) in items" :key="idx">{{ line }}</li>
            </ul>
        </div>

        <!-- thumbnail -->
        <NuxtImg
            v-if="img"
            :src="img"
            :alt="alt"
            class="w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg flex-shrink-0"
        />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    items: string[]
    img?: string
    alt?: string
}>()
</script>
