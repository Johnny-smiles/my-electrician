import { siteConfig } from '~/site.config'
import { siteAsset } from '~/utils/siteUrl'

export interface SocialMetaOptions {
    /** Page <title>; also used for og:title / twitter:title. */
    title: string
    /** Meta description (aim for <= 155 chars); also og/twitter description. */
    description: string
    /** Absolute canonical URL of the page — use siteUrl(). */
    url: string
    /** Absolute image URL. Defaults to the site-wide social preview. */
    image?: string
}

export interface MetaTag {
    name?: string
    property?: string
    content: string
}

/**
 * Per-page description + Open Graph + Twitter tags.
 *
 * nuxt.config sets one generic set of social tags for the whole site; unhead
 * dedupes on `name`/`property`, so returning these from a page's useHead()
 * replaces the generic values with ones that actually describe that page.
 */
export function socialMeta(options: SocialMetaOptions): MetaTag[] {
    const image: string = options.image ?? siteAsset(siteConfig.socialImage)

    return [
        { name: 'description', content: options.description },
        { property: 'og:title', content: options.title },
        { property: 'og:description', content: options.description },
        { property: 'og:url', content: options.url },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: options.title },
        { name: 'twitter:description', content: options.description },
        { name: 'twitter:image', content: image }
    ]
}
