import { CONTACT_INFO } from '@/lib/contact-info';

export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "EyeCare Center of Orange County",
        "url": "https://eyecarecenteroc.com",
        "logo": "https://eyecarecenteroc.com/images/logo.png",
        "image": "https://eyecarecenteroc.com/images/office-exterior.jpg",
        "telephone": CONTACT_INFO.primaryPhone.display,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": CONTACT_INFO.address.street,
            "addressLocality": CONTACT_INFO.address.city,
            "addressRegion": CONTACT_INFO.address.state,
            "postalCode": CONTACT_INFO.address.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.7435",
            "longitude": "-117.8669"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "priceRange": "$$",
        "medicalSpecialty": ["Ophthalmology", "Optometry", "LASIK Surgeon"],
        "sameAs": [
            "https://www.facebook.com/eyecarecenteroc",
            "https://www.instagram.com/eyecarecenteroc",
            "https://www.yelp.com/biz/eyecare-center-of-orange-county-santa-ana"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
