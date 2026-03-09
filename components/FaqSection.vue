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
    { q: 'Do you provide electrical services in Minneapolis and St. Paul, MN?', a: 'Yes \u2014 Your Electrician is fully licensed, bonded, and insured for residential and commercial electrical work throughout Minneapolis, St. Paul, and the surrounding Twin Cities metro.' },
    { q: 'What types of electrical work do you do in the Minneapolis metro?', a: 'We handle new home wiring, panel upgrades, whole-house rewiring, EV charger installation, commercial lighting retrofits, kitchen and basement remodeling, smart home integration, and 24/7 emergency electrical repair.' },
    { q: 'How quickly can you schedule an electrician in Minneapolis or St. Paul?', a: 'Most estimates are scheduled within 1\u20132 business days. Use the Request Quote button or call 763-248-9801.' },
    { q: 'Which Twin Cities suburbs do you serve?', a: 'We serve Minneapolis, St. Paul, and surrounding communities including Bloomington, Plymouth, Maple Grove, Eagan, Eden Prairie, Burnsville, Minnetonka, Edina, Woodbury, and more. Contact us to confirm your area.' }
]

const openIndex = ref<number | null>(null)
function toggle(i: number) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>
