<template>
    <section class="max-w-4xl mx-auto px-6 py-16">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
        </h2>

        <div class="divide-y divide-brand-brown/20">
            <div
                v-for="(q, i) in faqs"
                :key="i"
                class="py-8 cursor-pointer"
                @click="toggle(i)"
            >
                <h3 class="flex items-center justify-between text-xl md:text-2xl font-semibold">
                    {{ q.q }}
                    <span
                        class="text-brand-orange transition-transform select-none text-3xl"
                        :class="openIndex === i ? 'rotate-45' : ''"
                    >
                        +
                    </span>
                </h3>

                <p v-if="openIndex === i" class="mt-6 text-lg md:text-xl text-brand-dark/80">
                    {{ q.a }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQ { q: string; a: string }

const faqs: FAQ[] = [
    { q: 'Are you licensed and insured?',  a: 'Yes—Your Electrician is fully licensed, bonded and insured for residential and commercial work.' },
    { q: 'Do you offer 24/7 emergency service?', a: 'Absolutely. Call us anytime for urgent electrical issues and we’ll dispatch a technician.' },
    { q: 'How soon can I book an estimate?',     a: 'Most estimates are scheduled within 1–2 business days. Use the “Request Quote” button or call us.' },
    { q: 'What areas do you serve?',             a: 'We cover the greater metro area including neighboring suburbs. Contact us to confirm we service your ZIP code.' }
]

const openIndex = ref<number | null>(null)
function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>