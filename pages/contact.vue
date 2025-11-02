<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-8">Request Quote</h1>

            <div class="space-y-4 text-lg text-brand-dark/80 mb-8">
                <p>
                    Not sure what to include? Browse our
                    <NuxtLink to="/services" class="text-brand-orange font-semibold hover:underline">
                        full list of electrical services
                    </NuxtLink>
                    to get ideas and note the upgrades you need.
                </p>
                <p>
                    Want to know who will show up at your door?
                    <NuxtLink to="/about" class="text-brand-orange font-semibold hover:underline">
                        Learn about our local team
                    </NuxtLink>
                    before you submit the form.
                </p>
            </div>

            <!-- Confirmation message -->
            <div
                v-if="showConfirmation"
                class="mb-8 p-4 rounded-md bg-green-100 text-green-800 border border-green-300 text-lg font-medium"
            >
                Thank you! Your request has been received. We'll be in touch soon.
            </div>

            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                class="space-y-6"
            >
                <!-- Netlify required hidden input -->
                <input type="hidden" name="form-name" value="contact" />
                <p class="hidden">
                    <label>Don’t fill this out <input name="bot-field" /></label>
                </p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            class="w-full border border-brand-brown/30 rounded-md px-4 py-2 focus:outline-brand-orange"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            class="w-full border border-brand-brown/30 rounded-md px-4 py-2 focus:outline-brand-orange"
                        />
                    </div>
                </div>

                <div>
                    <label class="block font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        class="w-full border border-brand-brown/30 rounded-md px-4 py-2 focus:outline-brand-orange"
                    />
                </div>

                <div>
                    <label class="block font-medium mb-1">Project Details</label>
                    <textarea
                        name="message"
                        rows="5"
                        class="w-full border border-brand-brown/30 rounded-md px-4 py-2 focus:outline-brand-orange"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
                >
                    Send Request
                </button>
            </form>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showConfirmation = ref(false)

onMounted(() => {
    // Netlify appends ?success or #success to the URL after a successful submission
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        if (params.has('success') || window.location.hash === '#success') {
            showConfirmation.value = true
        }
        // Also handle Netlify's default behavior: /contact/thanks/
        if (window.location.pathname.endsWith('/thanks/')) {
            showConfirmation.value = true
        }
    }
})
</script>
