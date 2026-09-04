#!/usr/bin/env node
/**
 * Post-generate SEO / crawlability guard.
 *
 * Runs against .output/public after `nuxt generate` and exits non-zero when a
 * known-bad pattern reappears, so the Netlify deploy fails instead of silently
 * shipping a regression. Every check here corresponds to a real bug found in
 * the Sept 2026 audit (see HANDOVER / git log), not a hypothetical one.
 *
 * Usage: node scripts/verify-build.mjs [outputDir]
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const OUT = process.argv[2] || join(process.cwd(), '.output/public')
const SITE = 'https://yourelectrician.co'
const MAX_DESCRIPTION = 160
const MIN_SRCSET_WIDTH = 100
const NOINDEX_PAGES = new Set(['thank-you'])
const SHELL_FILES = new Set(['200.html', '404.html'])
const ASSET_EXT = /\.(png|jpe?g|webp|avif|gif|svg|ico|xml|txt|json|js|css|pdf)$/i

const failures = []
const fail = (file, msg) => failures.push(`${file}: ${msg}`)

// ---------------------------------------------------------------- helpers
function walkHtml(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (name.startsWith('_') || name === '__sitemap__') continue
    if (statSync(p).isDirectory()) out.push(...walkHtml(p))
    else if (name === 'index.html') out.push(p)
  }
  return out
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1]
const metaContent = (html, selector) =>
  html.match(new RegExp(`<meta\\s+${selector}\\s+content="([^"]*)"`, 'i'))?.[1]
    ?? html.match(new RegExp(`<meta\\s+content="([^"]*)"\\s+${selector}`, 'i'))?.[1]

// ---------------------------------------------------------------- sitemap
const sitemapPath = join(OUT, 'sitemap.xml')
if (!existsSync(sitemapPath)) {
  fail('sitemap.xml', 'missing')
} else {
  const xml = readFileSync(sitemapPath, 'utf8')
  if (xml.includes('&amp;amp;')) fail('sitemap.xml', 'double-encoded "&amp;amp;" in a URL')
  for (const loc of [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])) {
    if (!loc.startsWith(SITE + '/')) fail('sitemap.xml', `page loc not on ${SITE}: ${loc}`)
    if (!loc.endsWith('/')) fail('sitemap.xml', `page loc missing trailing slash: ${loc}`)
    const slug = loc.slice(SITE.length + 1).replace(/\/$/, '')
    if (NOINDEX_PAGES.has(slug)) fail('sitemap.xml', `noindex page listed: ${loc}`)
    if (slug && !existsSync(join(OUT, slug, 'index.html'))) fail('sitemap.xml', `loc has no built page: ${loc}`)
  }
  for (const loc of [...xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map(m => m[1])) {
    if (loc.endsWith('/')) fail('sitemap.xml', `image loc has trailing slash: ${loc}`)
    if (loc.includes('/_ipx/')) fail('sitemap.xml', `image loc points at an IPX transform, not a stable file: ${loc}`)
    if (loc.includes('blur_')) fail('sitemap.xml', `image loc is a blur placeholder: ${loc}`)
    if (!ASSET_EXT.test(loc)) fail('sitemap.xml', `image loc is not a file: ${loc}`)
    const rel = loc.slice(SITE.length + 1)
    if (loc.startsWith(SITE + '/') && !existsSync(join(OUT, rel))) fail('sitemap.xml', `image file missing from build: ${rel}`)
  }
}

// ---------------------------------------------------------------- robots
const robots = existsSync(join(OUT, 'robots.txt')) ? readFileSync(join(OUT, 'robots.txt'), 'utf8') : ''
if (!robots) fail('robots.txt', 'missing')
if (/^Disallow:\s*\/_ipx/im.test(robots)) fail('robots.txt', 'blocks /_ipx/ (Google Images cannot fetch site photos)')
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt', 'Sitemap line missing or wrong host')

// ---------------------------------------------------------------- pages
for (const file of walkHtml(OUT)) {
  const rel = relative(OUT, file)
  const html = readFileSync(file, 'utf8')
  const dir = rel.replace(/index\.html$/, '')
  const expectedUrl = `${SITE}/${dir}`
  const slug = dir.replace(/\/$/, '')
  const isNoindex = NOINDEX_PAGES.has(slug)

  const h1s = (html.match(/<h1[\s>]/g) || []).length
  if (h1s !== 1) fail(rel, `expected 1 <h1>, found ${h1s}`)

  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1]
    ?? html.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/i)?.[1]
  if (!canonical) fail(rel, 'missing canonical')
  else if (canonical !== expectedUrl) fail(rel, `canonical "${canonical}" != "${expectedUrl}"`)

  const ogUrl = metaContent(html, 'property="og:url"')
  if (ogUrl !== expectedUrl) fail(rel, `og:url "${ogUrl}" != "${expectedUrl}"`)

  const description = metaContent(html, 'name="description"')
  if (!description) fail(rel, 'missing meta description')
  else if (description.length > MAX_DESCRIPTION) fail(rel, `description ${description.length} chars > ${MAX_DESCRIPTION}`)

  const robotsMeta = metaContent(html, 'name="robots"') || ''
  if (isNoindex && !/noindex/i.test(robotsMeta)) fail(rel, 'should be noindex')
  if (!isNoindex && /noindex/i.test(robotsMeta)) fail(rel, 'indexable page is noindex')

  const twitterTitle = metaContent(html, 'name="twitter:title"')
  const ogTitle = metaContent(html, 'property="og:title"')
  if (ogTitle && twitterTitle && twitterTitle !== ogTitle) fail(rel, 'twitter:title does not match og:title (page-specific override missing?)')

  // Internal links must carry the trailing slash Netlify serves, or every crawl hop is a 301.
  for (const href of [...html.matchAll(/<a\s[^>]*href="(\/[^"#?]*)"/gi)].map(m => m[1])) {
    if (href.startsWith('/_nuxt/') || ASSET_EXT.test(href)) continue
    if (!href.endsWith('/')) fail(rel, `internal link without trailing slash: ${href}`)
  }

  // Responsive images: no degenerate candidates, no undimensioned images.
  for (const img of html.match(/<img\s[^>]*>/gi) || []) {
    const src = attr(img, 'src') || ''
    const srcset = attr(img, 'srcset') || ''
    if (!attr(img, 'alt') && attr(img, 'alt') !== '') fail(rel, `img missing alt: ${src}`)
    if (!attr(img, 'width') || !attr(img, 'height')) fail(rel, `img missing width/height (CLS): ${src}`)
    if (/blur_/.test(src)) fail(rel, `img src is a blur placeholder (remove NuxtImg "placeholder"): ${src}`)
    for (const cand of srcset.split(',')) {
      const w = cand.trim().match(/\s(\d+)w$/)?.[1]
      if (w !== undefined && Number(w) < MIN_SRCSET_WIDTH) fail(rel, `srcset candidate ${w}w (bare "100vw" in sizes? use "xs:100vw"): ${src}`)
    }
    if (/\/_ipx\/[^"]*\/recent\//.test(src) && !/s_\d+x\d+/.test(src)) fail(rel, `gallery image served without a resize: ${src}`)
  }
}

// ---------------------------------------------------------------- shells
for (const name of SHELL_FILES) {
  if (!existsSync(join(OUT, name))) fail(name, 'missing')
}

// ---------------------------------------------------------------- result
if (failures.length) {
  console.error(`\n✖ verify-build: ${failures.length} problem(s)\n`)
  for (const f of failures) console.error('  - ' + f)
  console.error('')
  process.exit(1)
}
console.log('✔ verify-build: sitemap, robots, canonicals, links, and image markup all pass')
