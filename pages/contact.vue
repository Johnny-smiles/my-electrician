<template>
    <main>
        <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Request a Free Electrical Quote</h1>

            <p class="text-lg text-brand-dark/80 mb-4">
                <strong>Your Electrician</strong> provides licensed electrical services in Minneapolis–St. Paul, MN.
                Contact us for a free, no-obligation estimate on your residential or commercial project.
            </p>

            <p class="text-lg text-brand-dark/80 mb-6">
                Fill out the form below and we'll respond within one business day with a detailed, no-obligation estimate
                for your project. Whether it's a panel upgrade, kitchen remodel, EV charger, or commercial lighting retrofit,
                we're happy to help scope it out.
            </p>

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
                <p>
                    Prefer to call? Reach us at
                    <a href="tel:7632489801" class="text-brand-orange font-semibold hover:underline">763-248-9801</a>
                    during business hours (Mon-Fri 8am-6pm, Sat 9am-2pm).
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
                    <label>Don't fill this out <input name="bot-field" /></label>
                </p>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            class="w-full border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-brand-orange"
                        />
                    </div>
                    <div>
                        <label class="block font-medium mb-1">Email <span class="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            required
                            class="w-full border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-brand-orange"
                        />
                    </div>
                </div>

                <div>
                    <label class="block font-medium mb-1">Phone <span class="text-red-500">*</span></label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        class="w-full border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-brand-orange"
                    />
                </div>

                <div>
                    <label class="block font-medium mb-1">Project Details</label>
                    <textarea
                        name="message"
                        rows="5"
                        class="w-full border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-brand-orange"
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

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourelectrician.co' },
        { '@type': 'ListItem', position: 2, name: 'Request Quote', item: 'https://yourelectrician.co/contact' }
    ]
}

useHead({
    title: 'Request a Quote | Your Electrician | Minneapolis MN',
    meta: [
        {
            name: 'description',
            content: 'Request a free electrical quote from Your Electrician. Residential and commercial projects in the Minneapolis-St. Paul metro. Fast response, transparent pricing.'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://yourelectrician.co/contact' }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})

const showConfirmation = ref(false)

onMounted(() => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        if (params.has('success') || window.location.hash === '#success') {
            showConfirmation.value = true
        }
        if (window.location.pathname.endsWith('/thanks/')) {
            showConfirmation.value = true
        }
    }
})
</script>
