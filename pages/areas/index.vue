<template>
    <main class="flex flex-col bg-brand-sand">

        <!-- Intro -->
        <section class="max-w-4xl mx-auto w-full px-6 pt-16 pb-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Areas We Serve</h1>
            <p class="text-lg text-brand-dark/80 mb-4">
                <strong>Your Electrician</strong> provides licensed electrical services across the Minneapolis–St. Paul metro area, MN.
                From new home wiring and remodeling to commercial lighting and EV charger installation,
                our team serves homes and businesses throughout the Twin Cities.
            </p>
            <p class="text-lg text-brand-dark/80">
                Looking for an electrician near you? Pick your city below to see the services we offer in your area.
            </p>
        </section>

        <!-- Area cards -->
        <section class="max-w-4xl mx-auto w-full px-6 py-10">
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <NuxtLink
                    v-for="area in serviceAreas"
                    :key="area.slug"
                    :to="`/areas/${area.slug}/`"
                    class="block p-6 bg-white border border-brand-dark/10 rounded-lg shadow-sm hover:shadow-md transition"
                >
                    <h2 class="text-xl font-semibold text-brand-orange mb-1">Electrician in {{ area.name }}</h2>
                    <p class="text-brand-dark/70">Licensed electrical services in {{ area.name }}, MN.</p>
                </NuxtLink>
            </div>
            <p class="text-brand-dark/60 mt-6 text-sm">
                Don't see your city? <NuxtLink to="/contact/" class="text-brand-orange hover:underline">Contact us</NuxtLink>—we likely cover your area.
            </p>
        </section>

        <section class="next-step" style="margin-top:2rem; padding-top:1rem; border-top:1px solid #ddd;">
            <p class="text-center text-lg">
                Need an electrician now?
                <NuxtLink
                    to="/contact/"
                    class="text-brand-orange font-semibold hover:underline"
                    data-analytics-event="cta_click"
                    data-analytics-label="areas_request_quote_footer"
                    data-analytics-type="form"
                >
                    Request Quote
                </NuxtLink>
                and we'll get you scheduled.
            </p>
        </section>

    </main>
</template>

<script setup lang="ts">
import { serviceAreas } from '~/data/areas'

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl() },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: siteUrl('/areas') }
    ]
}

const pageTitle = 'Areas We Serve | Minneapolis–St. Paul MN | Your Electrician'
const pageDescription = 'Your Electrician serves Minneapolis, St. Paul, Bloomington, Plymouth, and Maple Grove, MN. Licensed residential and commercial electrical work.'

useHead({
    title: pageTitle,
    meta: socialMeta({ title: pageTitle, description: pageDescription, url: siteUrl('/areas') }),
    link: [
        { rel: 'canonical', href: siteUrl('/areas') }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>
