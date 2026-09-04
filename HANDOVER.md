# Handover — SEO / performance audit, 2026-09-04

Audit of this site against the problem classes Codex found on the sibling
North Haven build. All technical fixes are committed on `main`
(`d3de016..edd61ec`). Content items below need client input.

## What was wrong here (and is now fixed)

| Codex class | Verdict here | Fix |
|---|---|---|
| Canonical vs. redirect URL | Partial — canonicals were right, all 275 internal links were slash-less (301 per hop) | Every internal link now ends in `/` |
| robots blocks `/_ipx/` | Not present | — |
| Malformed responsive images | Same, worse: heroes shipped a 10×10 blur as `src`, gallery served 13 full-size originals (~18 MB), `formats` config key ignored so no WebP | Placeholder removed, `sizes` in Nuxt syntax, real dimensions, `format: ['webp']`, gallery resized + lazy |
| Image sitemap double-encoding | Same: all 19 image URLs 404'd (double `&amp;`, blur placeholders, trailing slash from uppercase `.JPG`) | Images hand-listed with clean public URLs; gallery files renamed lowercase |
| Schema entity duplication | Same: `#business` declared in 3 conflicting shapes | `composables/useBusinessSchema.ts` is the single node; other pages reference by `@id` |
| Stale claims | Not present, but "24/7 emergency" contradicted published hours; "five-star" with no reviews | Reworded |
| Twitter meta generic | Same | `utils/pageMeta.ts` `socialMeta()` per page |
| Long descriptions | 6 pages >160 | All ≤155 |
| Templated city pages | Same (~38% shared 5-word shingles) | **Not fixed — needs client content** |
| Case studies | N/A (13 unlabeled photos) | **Needs client content** |

Also fixed: `tailwind.config.js` had no default export so no `brand-*`
utilities existed; Inter/Montserrat were declared but never loaded; the
200/404 shells were indexable; `error.vue` now renders a real 404.

## Regression guard

`npm run generate` now runs `scripts/verify-build.mjs`, which fails the
build on: double-encoded or slash-terminated sitemap image URLs, IPX or
blur URLs in the sitemap, slash-less internal links, canonical/og:url
mismatches, descriptions >160, images without width/height, srcset
candidates under 100w, gallery images without a resize, noindex drift.
Lift this into the template repo.

## Needs the client

- MN electrical contractor license number (+ link to MN DLI lookup) so
  "licensed, bonded, insured" is verifiable. Trust block in `about.vue`
  stays commented out until then.
- Per-city proof for `data/areas.ts`: a named project, neighborhoods
  actually served, permit/inspection notes, a local testimonial. Without
  it, consider folding the weakest city pages into `/areas/`.
- Project captions for the 13 gallery photos (city, service, scope) —
  prerequisite for any case-study pages.
- Google Business Profile category/NAP/hours to keep schema in sync.
- Decide Plausible vs GTM (both load today).

## Not done / open

- FAQ data is duplicated between `components/FaqSection.vue` and the
  FAQPage JSON-LD in `pages/services.vue` (component keeps it in a
  `<script setup>` const). Export it from `data/` to dedupe.
- `nitro.prerender.routes` in `nuxt.config.ts` still lists slash-less
  input paths (harmless, output is normalised).
- WebKit could not be crawled in the sandbox (content filter); Chromium
  verified all routes.
