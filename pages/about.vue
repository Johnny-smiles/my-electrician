<template>
    <main>
        <section class="max-w-5xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About Your Electrician</h1>

            <p class="text-lg mb-4">
                <strong>Your Electrician</strong> is a family-owned business serving homeowners and businesses across the
                Minneapolis-St. Paul metro area. Our mission is simple: deliver safe,
                code-compliant electrical work and five-star customer service—every time.
            </p>

            <p class="text-lg mb-4">
                From whole-home wiring on new builds to quick repairs, we handle
                a wide range of electrical projects for homes and businesses.
                Curious what that looks like day to day? <NuxtLink to="/services" class="text-brand-orange font-semibold hover:underline">
                Explore our electrical services</NuxtLink> to see the projects we tackle most.
            </p>

            <!-- <h2 class="text-2xl font-semibold mt-10 mb-4">Why Homeowners and Builders Choose Us</h2>

            <ul class="list-disc pl-6 space-y-2 text-lg mb-6">
                <li><strong>Licensed &amp; Insured:</strong> Full Minnesota electrical contractor license with liability and workers' comp coverage on every job.</li>
                <li><strong>Transparent Pricing:</strong> Itemized quotes before work begins—no surprise charges or hidden fees.</li>
                <li><strong>Code-First Approach:</strong> Every install meets or exceeds current NEC and local Minneapolis code requirements.</li>
                <li><strong>Clean Jobsites:</strong> We respect your property—drop cloths, labeled panels, and debris removed daily.</li>
                <li><strong>Warranty Backed:</strong> Our workmanship warranty gives you confidence long after the final inspection.</li>
            </ul> -->

            <h2 class="text-2xl font-semibold mt-10 mb-4">Our Expertise</h2>

            <p class="text-lg mb-4">
                We specialize in <NuxtLink to="/home-builds" class="text-brand-orange font-semibold hover:underline">new home electrical wiring</NuxtLink>,
                <NuxtLink to="/home-remodeling" class="text-brand-orange font-semibold hover:underline">electrical remodeling</NuxtLink> for kitchens, basements, and additions,
                <NuxtLink to="/commercial-lighting" class="text-brand-orange font-semibold hover:underline">commercial lighting</NuxtLink> retrofits and design,
                and <NuxtLink to="/ev-charger-installation" class="text-brand-orange font-semibold hover:underline">EV charger installation</NuxtLink> for homes and fleets.
                Whether it's a single outlet repair or a full commercial buildout, we bring the same attention to detail and professionalism.
            </p>

            <p class="text-lg mb-4">
                Whether you're planning a remodel, upgrading a panel or just need a
                quick repair, we're ready to help.
                <NuxtLink
                    to="/contact"
                    class="text-brand-orange font-semibold hover:underline"
                    data-analytics-event="cta_click"
                    data-analytics-label="about_request_quote_inline"
                    data-analytics-type="form"
                >
                    Request a quote
                </NuxtLink>
                today.
            </p>

            <NuxtImg
              src="/aboutFamily.jpeg"
              alt="The owner's family of Your Electrician"
              class="w-full max-w-md mx-auto mt-10 rounded-lg shadow-md object-cover"
            />
        </section>

        <section class="next-step" style="margin-top:2rem; padding-top:1rem; border-top:1px solid #ddd;">
            <p>
                Need an electrician now?
                <NuxtLink
                    to="/contact"
                    class="text-brand-orange font-semibold hover:underline"
                    data-analytics-event="cta_click"
                    data-analytics-label="about_request_quote_footer"
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
const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourelectrician.co' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://yourelectrician.co/about' }
    ]
}

useHead({
    title: 'About Us | Your Electrician | Minneapolis MN',
    meta: [
        {
            name: 'description',
            content: 'Your Electrician is a family-owned electrical company serving Minneapolis-St. Paul. We handle residential and commercial projects from new builds to repairs.'
        }
    ],
    link: [
        { rel: 'canonical', href: 'https://yourelectrician.co/about' }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>
