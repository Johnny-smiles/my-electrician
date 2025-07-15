<template>
    <div>
        <h3 class="text-2xl font-semibold mb-4">{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>
