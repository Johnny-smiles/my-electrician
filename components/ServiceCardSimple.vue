<template>
    <div class="card-box text-center border-t-2 border-brand-dark pt-2 animate-fade-in">
        <h3 class="text-2xl md:text-3xl font-semibold text-brand-dark mb-3">
            {{ title }}
        </h3>
        <p class="text-base md:text-lg text-brand-dark/80">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>
