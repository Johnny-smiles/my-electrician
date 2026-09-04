import { siteConfig } from '~/site.config'
import { serviceAreas } from '~/data/areas'
import { siteAsset, siteUrl } from '~/utils/siteUrl'

/* ------------------------------------------------------------------ *
 *  Single source of truth for the organisation's structured data.
 *
 *  Every page used to emit its own partial `Electrician` node, which gave
 *  Google several conflicting descriptions of the same business. Now the
 *  full node is emitted once (home page) and every other page references it
 *  by @id, so there is exactly one business entity in the graph.
 * ------------------------------------------------------------------ */

export interface SchemaCity {
    '@type': 'City'
    name: string
    containedInPlace: { '@type': 'State'; name: string }
}

export interface SchemaPostalAddress {
    '@type': 'PostalAddress'
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
}

export interface SchemaGeo {
    '@type': 'GeoCoordinates'
    latitude: string
    longitude: string
}

export interface SchemaOpeningHours {
    '@type': 'OpeningHoursSpecification'
    dayOfWeek: string[]
    opens: string
    closes: string
}

export interface SchemaOffer {
    '@type': 'Offer'
    itemOffered: { '@type': 'Service'; name: string; url: string }
}

export interface SchemaOfferCatalog {
    '@type': 'OfferCatalog'
    name: string
    itemListElement: SchemaOffer[]
}

export interface BusinessSchema {
    '@context': string
    '@type': 'Electrician'
    '@id': string
    name: string
    url: string
    telephone: string
    email: string
    description: string
    image: string
    logo: string
    priceRange: string
    address: SchemaPostalAddress
    geo: SchemaGeo
    openingHoursSpecification: SchemaOpeningHours[]
    sameAs: string[]
    areaServed: SchemaCity[]
    hasOfferCatalog: SchemaOfferCatalog
}

/** Stable identifier every page uses to point at the one business node. */
export function businessId(): string {
    return `${siteUrl()}#business`
}

/** `{ '@id': ... }` reference — use as `provider`, `about`, `publisher`, etc. */
export function businessRef(): { '@id': string } {
    return { '@id': businessId() }
}

/** A schema.org City in Minnesota. */
export function cityNode(name: string): SchemaCity {
    return {
        '@type': 'City',
        name,
        containedInPlace: { '@type': 'State', name: 'Minnesota' }
    }
}

const DAY_ORDER: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const DAY_NAMES: Record<string, string> = {
    Mo: 'Monday',
    Tu: 'Tuesday',
    We: 'Wednesday',
    Th: 'Thursday',
    Fr: 'Friday',
    Sa: 'Saturday',
    Su: 'Sunday'
}

/** Expands `Mo-Fr` / `Sa` / `Mo,We` into full schema.org day names. */
function expandDays(token: string): string[] {
    return token.split(',').flatMap((part: string): string[] => {
        const [start, end] = part.split('-')
        const from: number = DAY_ORDER.indexOf(start)
        if (from === -1) return []
        if (!end) return [DAY_NAMES[start]]
        const to: number = DAY_ORDER.indexOf(end)
        if (to === -1) return [DAY_NAMES[start]]
        return DAY_ORDER.slice(from, to + 1).map((day: string): string => DAY_NAMES[day])
    })
}

/**
 * Turns the human-readable `siteConfig.hours` string
 * (`'Mo-Fr 08:00-18:00, Sa 09:00-14:00'`) into schema.org opening hours, so
 * the published hours and the structured data can never drift apart.
 */
export function openingHoursSpecification(hours: string = siteConfig.hours): SchemaOpeningHours[] {
    return hours
        .split(/,\s+/)
        .map((spec: string): SchemaOpeningHours => {
            const [days, times] = spec.trim().split(/\s+/)
            const [opens, closes] = (times ?? '').split('-')
            return {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: expandDays(days ?? ''),
                opens: opens ?? '',
                closes: closes ?? ''
            }
        })
        .filter((spec: SchemaOpeningHours): boolean =>
            spec.dayOfWeek.length > 0 && spec.opens !== '' && spec.closes !== ''
        )
}

/** The one canonical business node. Emitted in full by the home page only. */
export function businessSchema(): BusinessSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': businessId(),
        name: siteConfig.siteName,
        url: siteUrl(),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        description: siteConfig.description,
        image: siteAsset(siteConfig.socialImage),
        logo: siteAsset('/logo1.png'),
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.state,
            postalCode: siteConfig.location.zip,
            addressCountry: siteConfig.location.country
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.location.latitude,
            longitude: siteConfig.location.longitude
        },
        openingHoursSpecification: openingHoursSpecification(),
        sameAs: [
            'https://www.facebook.com/share/1ArHV6nQsA/?mibextid=wwXIfr'
        ],
        areaServed: serviceAreas.map((area): SchemaCity => cityNode(area.name)),
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Electrical Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Home Electrical Wiring', url: siteUrl('/home-builds') } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Electrical Remodeling', url: siteUrl('/home-remodeling') } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Lighting Services', url: siteUrl('/commercial-lighting') } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EV Charger Installation', url: siteUrl('/ev-charger-installation') } }
            ]
        }
    }
}
