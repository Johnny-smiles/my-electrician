<template>
    <main>
        <section class="max-w-5xl mx-auto px-6 py-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">About Us</h1>

            <p class="mb-4">
                <strong>Your Electrician</strong> is a family-owned business with more than
                15 years of experience serving homeowners and businesses across the metro.
                Our mission is simple: deliver safe, code-compliant electrical work &
                five-star customer service—every time.
            </p>

            <p class="mb-4">
                From whole-home wiring on new builds to late-night emergency calls,
                we’ve seen (and fixed) it all. Fully licensed, bonded and insured,
                our technicians stay current on the latest National Electrical Code
                updates and energy-efficient technologies. Curious what that looks
                like day to day? <NuxtLink to="/services" class="text-brand-orange font-semibold hover:underline">
                Explore our electrical services</NuxtLink> to see the projects we tackle most.
            </p>

            <p>
                Whether you’re planning a remodel, upgrading a panel or just need a
                quick repair, we’re ready to help. <NuxtLink to="/contact" class="text-brand-orange">
                Request Quote</NuxtLink> today.
            </p>

            <!-- Owner's Family Photo (smaller and underneath text) -->
            <NuxtImg
              src="/aboutFamily.jpeg"
              alt="The owner's family of Your Electrician"
              class="w-full max-w-md mx-auto mt-10 rounded-lg shadow-md object-cover"
            />
        </section>

        <section class="next-step" style="margin-top:2rem; padding-top:1rem; border-top:1px solid #ddd;">
            <p>
                Need an electrician now?
                <NuxtLink to="/contact" class="text-brand-orange font-semibold hover:underline">
                    Request Quote
                </NuxtLink>
                and we’ll get you scheduled.
            </p>
        </section>
    </main>
</template>

<script setup>
</script>
