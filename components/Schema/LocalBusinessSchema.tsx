import { City } from '@/data/cities';

interface LocalBusinessSchemaProps {
    city: City;
}

export default function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Optician",
        "name": `EyeCare Center - ${city.name} Area`,
        "url": `https://eyecarecenteroc.com/locations/${city.slug}`,
        "description": `Expert eye care services for patients in ${city.name}, CA. Specializing in LASIK, cataract surgery, and comprehensive eye exams.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "containedIn": {
                "@type": "State",
                "name": "California"
            }
        },
        "provider": {
            "@type": "MedicalBusiness",
            "name": "EyeCare Center of Orange County",
            "url": "https://eyecarecenteroc.com"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
