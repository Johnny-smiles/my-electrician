import { siteConfig } from '~/site.config'

/**
 * Absolute URL for a page path, always with a trailing slash.
 * Netlify serves every prerendered page at the trailing-slash URL and 301s
 * the bare form, so canonicals, og:url, sitemap, and schema URLs must all
 * use this shape or Google receives a canonical that redirects.
 */
export function siteUrl(path: string = '/'): string {
    const base: string = siteConfig.siteUrl.replace(/\/+$/, '')
    const trimmed: string = path.replace(/^\/+/, '').replace(/\/+$/, '')
    return trimmed ? `${base}/${trimmed}/` : `${base}/`
}
