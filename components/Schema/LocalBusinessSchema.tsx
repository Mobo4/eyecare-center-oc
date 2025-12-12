import { City } from '@/data/cities';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { CONTACT_INFO } from '@/lib/contact-info';

interface LocalBusinessSchemaProps {
    city: City;
}

export default function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
    // Get base schema which is fully populated with address, phone, image, etc.
    const baseSchema = generateLocalBusinessSchema();

    // Override specific fields for this city page
    const schema = {
        ...baseSchema,
        "@type": "Optician", // Keep Optician as it is accurate
        "name": `EyeCare Center - ${city.name}`, // Stronger local branding
        "url": `https://eyecarecenteroc.com/locations/${city.slug}`,
        "description": `Expert eye care services for patients in ${city.name}, CA. Specializing in LASIK, cataract surgery, and comprehensive eye exams. Served by EyeCare Center of Orange County.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedIn": {
                "@type": "State",
                "name": "California"
            }
        },
        // Ensure main clinic address is kept as the "offered by" or "parent" entity location
        // But for local SEO, we might want to say we "service" this area.
        // The base schema has the physical address of the clinic, which is correct (we are located there, serving this area)
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
