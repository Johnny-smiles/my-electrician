export interface AreaFaq {
    question: string
    answer: string
}

export interface ServiceArea {
    name: string
    slug: string
    /** Unique meta description for the page head (~155 chars). */
    metaDescription: string
    /** Unique opening paragraph for the page. */
    intro: string
    /** City-specific housing-stock / common-work paragraph. */
    housingNote: string
    /** Neighborhoods or nearby areas, rendered on the page. */
    localAreas: string[]
    /** One city-specific FAQ, shown and included in FAQ schema. */
    cityFaq: AreaFaq
}

export const serviceAreas: ServiceArea[] = [
    {
        name: 'Minneapolis',
        slug: 'minneapolis',
        metaDescription: 'Licensed electrician in Minneapolis, MN. Knob-and-tube rewiring, panel upgrades, EV chargers, and remodel wiring from Northeast to Linden Hills. Call 763-248-9801.',
        intro: 'Your Electrician provides licensed electrical services across Minneapolis — from Northeast and Uptown to Longfellow, Linden Hills, and Camden. Whether you\'re updating a 1920s bungalow or adding power to a detached garage off the alley, our team handles residential wiring, panel upgrades, EV charger installation, commercial lighting, and remodel electrical work throughout the city.',
        housingNote: 'Much of Minneapolis\'s housing stock predates 1940, and we work on it every week: knob-and-tube remediation, 60-amp fuse panel replacements, grounded outlet retrofits, and whole-house rewires during remodels. Detached alley garages are common here too — we run sub-panels and conduit for garage power, heaters, and EV charging. We pull the electrical permit and schedule the inspection on every Minneapolis job.',
        localAreas: ['Northeast', 'Uptown', 'Longfellow', 'Linden Hills', 'Powderhorn', 'Nokomis', 'North Loop', 'Camden'],
        cityFaq: {
            question: 'Can you replace knob-and-tube wiring in older Minneapolis homes?',
            answer: 'Yes — knob-and-tube and cloth-wrapped wiring are common in Minneapolis homes built before 1940. We replace it room by room during a remodel or as a whole-house rewire, and we handle the permit and inspection process.'
        }
    },
    {
        name: 'St. Paul',
        slug: 'st-paul',
        metaDescription: 'Licensed electrician in St. Paul, MN. Fuse box and panel upgrades, rewiring for older homes, EV chargers, and remodels from Highland Park to Como. Call 763-248-9801.',
        intro: 'Your Electrician serves homes and businesses across St. Paul — Highland Park, Mac-Groveland, Como, Summit Hill, Payne-Phalen, and beyond. From Victorian-era rewires to modern EV charger installs, our team handles residential wiring, panel upgrades, commercial lighting, and remodel electrical work throughout the city.',
        housingNote: 'St. Paul\'s Victorian and early-1900s homes bring the electrical work we know best: fuse-box-to-breaker panel upgrades, knob-and-tube replacement, grounded circuits for older outlets, and kitchen or bath remodel wiring that brings a century-old home up to today\'s code. We pull the electrical permit and schedule the inspection on every St. Paul project.',
        localAreas: ['Highland Park', 'Mac-Groveland', 'Como Park', 'Summit Hill', 'Payne-Phalen', 'St. Anthony Park', 'Dayton\'s Bluff'],
        cityFaq: {
            question: 'Do you upgrade fuse boxes and 60-amp services in St. Paul homes?',
            answer: 'Yes — many St. Paul homes still run on original fuse boxes or 60-amp services. We upgrade them to modern breaker panels with capacity for EV charging, kitchen appliances, and finished attics or basements, with permit and inspection included.'
        }
    },
    {
        name: 'Bloomington',
        slug: 'bloomington',
        metaDescription: 'Licensed electrician in Bloomington, MN. Panel upgrades for mid-century homes, basement finish wiring, EV chargers, and commercial lighting off I-494. Call 763-248-9801.',
        intro: 'Your Electrician provides licensed electrical services throughout Bloomington — east and west side alike. From mid-century ramblers to businesses along the I-494 corridor, our team handles panel upgrades, basement finish wiring, EV charger installation, and commercial lighting across the city.',
        housingNote: 'Bloomington\'s housing stock is heavy on 1950s–70s ramblers and split-levels, so we see a lot of original panels near end of life, ungrounded two-prong outlets, and basements ready to be finished. We upgrade panels, add dedicated circuits for appliances and workshops, and wire basement finishes from rough-in to trim. For businesses near the I-494 strip we handle LED retrofits and parking lot lighting.',
        localAreas: ['East Bloomington', 'West Bloomington', 'Oxboro', 'Penn-American district'],
        cityFaq: {
            question: 'Can you add circuits or finish a basement in a 1960s Bloomington rambler?',
            answer: 'Yes — that\'s some of our most common Bloomington work. We run a load calculation first, upgrade the panel if it\'s needed, then wire the basement finish or new circuits to code with permit and inspection included.'
        }
    },
    {
        name: 'Plymouth',
        slug: 'plymouth',
        metaDescription: 'Licensed electrician in Plymouth, MN. EV charger installs, basement finish wiring, panel capacity upgrades, and smart home wiring. Call 763-248-9801.',
        intro: 'Your Electrician serves homeowners and businesses across Plymouth and the nearby northwest metro — Medicine Lake, Golden Valley, Wayzata, and Minnetonka. Our team handles EV charger installation, basement finishes, panel capacity upgrades, smart home wiring, and commercial lighting throughout the area.',
        housingNote: 'Plymouth homes from the \'80s, \'90s, and 2000s usually have solid bones but weren\'t wired for today\'s loads — Level 2 EV chargers, hot tubs, saunas, basement theaters, and smart-home gear. We run load calculations, add panel capacity where it\'s needed, and install clean, code-compliant circuits for whatever you\'re adding. We also handle lighting retrofits for offices and businesses around the Highway 55 corridor.',
        localAreas: ['Medicine Lake', 'Golden Valley', 'New Hope', 'Wayzata', 'Minnetonka', 'Maple Grove'],
        cityFaq: {
            question: 'Do you install Level 2 EV chargers in Plymouth homes with finished garages?',
            answer: 'Yes — finished garages are the norm in Plymouth, and we route new charger circuits cleanly with surface conduit or through unfinished chases. We handle the load calculation, permit, and inspection on every install.'
        }
    },
    {
        name: 'Maple Grove',
        slug: 'maple-grove',
        metaDescription: 'Licensed electrician in Maple Grove, MN. New construction wiring, EV chargers, basement finishes, and commercial lighting near Arbor Lakes. Call 763-248-9801.',
        intro: 'Your Electrician provides licensed electrical services across Maple Grove — one of the metro\'s fastest-growing cities. From new construction wiring to EV chargers and basement finishes, our team serves homeowners, builders, and businesses from Arbor Lakes to Weaver Lake and Rush Creek.',
        housingNote: 'Much of our Maple Grove work is in newer homes: Level 2 EV charger installs, basement finishes, hot tub hookups, landscape and holiday lighting circuits, and smart-home wiring. For new builds we work directly with builders and GCs — load calcs and panel schedules up front, then rough-in and trim on schedule. For businesses around Arbor Lakes we handle commercial lighting and tenant build-outs.',
        localAreas: ['Arbor Lakes', 'Weaver Lake', 'Fish Lake', 'Rush Creek', 'Osseo', 'Brooklyn Park'],
        cityFaq: {
            question: 'Do you wire new construction homes in Maple Grove?',
            answer: 'Yes — we provide turnkey electrical for new builds and custom homes in Maple Grove, from the service and main panel through rough-in, trim, and final inspection. We coordinate directly with your builder to hit milestones.'
        }
    }
    // To add a city, copy an entry above and write genuinely city-specific
    // content — duplicated copy across cities is what keeps pages unindexed.
]
