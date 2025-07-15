<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-8">Request a Free Estimate</h1>

            <form
                name="estimate"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                class="space-y-6"
            >
                <input type="hidden" name="form-name" value="estimate" />
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

        <Footer
            name="Your Electrician"
            phone="555-123-4567"
            email="info@yourelectrician.co"
        />
    </main>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
</script>
