<template>
    <div class="card-box text-center border-t-2 border-brand-dark pt-2 animate-fade-in">
        <h3 class="text-2xl md:text-3xl font-semibold text-brand-dark mb-3">
            {{ title }}
        </h3>
        <p class="text-base md:text-lg text-brand-dark/80 mb-4">
            {{ description }}
        </p>
        <span class="text-sm text-brand-dark/70 font-medium inline-flex items-center gap-1">
            Learn more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>
