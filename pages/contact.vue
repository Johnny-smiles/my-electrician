<template>
    <main class="contact-page">
        <section class="site-container section-space contact-layout" aria-labelledby="contact-heading">
            <div class="contact-intro">
                <p class="eyebrow">REQUEST A QUOTE</p>
                <h1 id="contact-heading">Tell us about your electrical project.</h1>
                <p class="contact-lede">Your Electrician provides licensed residential and commercial electrical services throughout Minneapolis–St. Paul. Share a few details and we’ll follow up about your project.</p>
                <div class="contact-details">
                    <div><p class="contact-detail-label">Prefer to talk it through?</p><a href="tel:7632489801" class="contact-phone">763-248-9801 <span aria-hidden="true">↗</span></a><p>Mon–Fri 8am–6pm · Sat 9am–2pm</p></div>
                    <div class="contact-note"><span aria-hidden="true">→</span><p>Not sure where to begin? Browse our <NuxtLink to="/services/">electrical services</NuxtLink> or learn more <NuxtLink to="/about/">about our team</NuxtLink>.</p></div>
                </div>
            </div>
            <div class="contact-form-wrap">
                <div class="form-heading"><h2>Project details</h2><p><span aria-hidden="true">*</span> Required fields</p></div>
                <form name="contact" method="POST" action="/thank-you/" data-netlify="true" data-netlify-honeypot="bot-field" class="contact-form">
                    <!-- Netlify required hidden input -->
                    <input type="hidden" name="form-name" value="contact" />
                    <p class="hidden"><label>Don't fill this out <input name="bot-field" /></label></p>
                    <div class="form-grid">
                        <div class="form-field"><label for="contact-name">Name <span aria-hidden="true">*</span></label><input id="contact-name" type="text" name="name" autocomplete="name" required /></div>
                        <div class="form-field"><label for="contact-email">Email <span aria-hidden="true">*</span></label><input id="contact-email" type="email" name="email" autocomplete="email" required /></div>
                    </div>
                    <div class="form-field"><label for="contact-phone">Phone <span aria-hidden="true">*</span></label><input id="contact-phone" type="tel" name="phone" autocomplete="tel" required /></div>
                    <div class="form-field"><label for="contact-message">How can we help?</label><textarea id="contact-message" name="message" rows="6" placeholder="For example: panel upgrade, remodel, EV charger, or lighting project"></textarea></div>
                    <button type="submit" class="button-primary">Send request <span aria-hidden="true">↗</span></button>
                </form>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl() },
        { '@type': 'ListItem', position: 2, name: 'Request Quote', item: siteUrl('/contact') }
    ]
}

const pageTitle = 'Request a Quote | Your Electrician | Minneapolis MN'
const pageDescription = 'Request a free quote from Your Electrician, licensed electricians in Minneapolis, MN. Residential and commercial projects, fast and clearly priced.'

useHead({
    title: pageTitle,
    meta: socialMeta({ title: pageTitle, description: pageDescription, url: siteUrl('/contact') }),
    link: [
        { rel: 'canonical', href: siteUrl('/contact') }
    ],
    script: [
        { type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema) }
    ]
})
</script>

<style scoped>
.contact-layout { display: grid; grid-template-columns: minmax(0, .9fr) minmax(420px, 1.1fr); gap: clamp(48px, 8vw, 120px); align-items: start; }
.contact-intro { padding-top: 14px; } .contact-intro h1 { max-width: 500px; font-size: clamp(40px, 4.2vw, 59px); line-height: 1.06; letter-spacing: -.055em; } .contact-lede { max-width: 490px; margin-top: 25px; color: #52616a; font-size: 15px; line-height: 1.85; }
.contact-details { display: grid; gap: 30px; margin-top: 48px; padding-top: 28px; border-top: 1px solid #deded6; color: #52616a; font-size: 13px; line-height: 1.75; } .contact-detail-label { color: #182b38; font-size: 11px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; } .contact-phone { display: inline-flex; gap: 12px; margin-block: 5px 1px; color: #182b38; font-size: 21px; font-weight: 700; letter-spacing: -.03em; } .contact-phone span, .contact-note > span { color: var(--brand-orange); } .contact-note { display: flex; align-items: start; gap: 12px; max-width: 410px; } .contact-note > span { padding-top: 1px; font-size: 16px; } .contact-note a { color: #182b38; font-weight: 700; text-decoration: underline; text-decoration-color: var(--brand-orange); text-underline-offset: 3px; }
.contact-form-wrap { padding: clamp(26px, 4vw, 44px); background: #fff; border: 1px solid #deded6; border-radius: 7px; box-shadow: 0 14px 36px #182b3808; } .form-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; padding-bottom: 24px; border-bottom: 1px solid #e7e6e1; } .form-heading h2 { font-size: 24px; letter-spacing: -.04em; } .form-heading p { color: #69767e; font-size: 11px; white-space: nowrap; } .form-heading p span, .form-field label span { color: var(--brand-orange); }
.contact-form { display: grid; gap: 22px; margin-top: 27px; } .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; } .form-field { display: grid; gap: 8px; } .form-field label { color: #182b38; font-size: 12px; font-weight: 700; } .form-field input, .form-field textarea { width: 100%; border: 1px solid #cbd0cc; border-radius: 4px; background: #fff; padding: 12px 13px; color: #182b38; font-size: 14px; line-height: 1.4; transition: border-color .2s, box-shadow .2s; } .form-field textarea { min-height: 142px; resize: vertical; } .form-field input::placeholder, .form-field textarea::placeholder { color: #7b8589; } .form-field input:focus, .form-field textarea:focus { border-color: var(--brand-orange); box-shadow: 0 0 0 3px #f4944530; outline: none; } .contact-form .button-primary { justify-self: start; margin-top: 5px; border: 0; cursor: pointer; }
@media (max-width: 850px) { .contact-layout { grid-template-columns: 1fr; gap: 42px; } .contact-intro { padding-top: 0; } .contact-lede { max-width: 610px; } .contact-details { margin-top: 34px; } }
@media (max-width: 520px) { .contact-form-wrap { padding: 24px 20px; } .form-heading { align-items: start; flex-direction: column; gap: 7px; } .form-grid { grid-template-columns: 1fr; gap: 22px; } .contact-form .button-primary { width: 100%; } }
</style>
