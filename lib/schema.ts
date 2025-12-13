/**
 * Structured Data (Schema.org) utilities for SEO
 */

export interface MedicalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": string;
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
  image?: string;
  logo?: string;
  sameAs?: string[];
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
}

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": string;
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
  image?: string;
  logo?: string;
  sameAs?: string[];
}

export interface MedicalConditionSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  code?: {
    "@type": string;
    codeValue: string;
    codingSystem: string;
  };
}

import { CONTACT_INFO, SERVICE_AREAS } from './contact-info';
export { SERVICE_AREAS };

/**
 * Generate MedicalBusiness schema for homepage with Top 6 Services
 */
export function generateMedicalBusinessSchema(): any {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://eyecarecenteroc.com/#organization",
        name: "EyeCare Center of Orange County",
        description: "Comprehensive eye care services in Orange County. Expert LASIK, cataract surgery, keratoconus treatment, dry eye IPL therapy, and comprehensive eye exams. Board-certified specialists serving 65+ Orange County cities.",
        url: "https://eyecarecenteroc.com",
        telephone: CONTACT_INFO.primaryPhone.display,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address.street,
          addressLocality: CONTACT_INFO.address.city,
          addressRegion: CONTACT_INFO.address.state,
          postalCode: CONTACT_INFO.address.zip,
          addressCountry: "US",
        },
        areaServed: [
          ...SERVICE_AREAS.map(city => ({ "@type": "City", name: city })),
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": CONTACT_INFO.geo.latitude.toString(),
              "longitude": CONTACT_INFO.geo.longitude.toString()
            },
            "geoRadius": "48280" // 30 miles in meters
          }
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.geo.latitude.toString(),
          longitude: CONTACT_INFO.geo.longitude.toString()
        },
        openingHoursSpecification: CONTACT_INFO.openingHoursSpecification.map(hours => ({
          "@type": "OpeningHoursSpecification",
          ...hours
        })),
        priceRange: CONTACT_INFO.priceRange,
        image: "https://eyecarecenteroc.com/og-image.jpg",
        logo: "https://eyecarecenteroc.com/favicon.svg",
        sameAs: Object.values(CONTACT_INFO.social),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "288"
        },
        paymentAccepted: CONTACT_INFO.paymentAccepted,
        currenciesAccepted: CONTACT_INFO.currenciesAccepted,
        medicalSpecialty: [
          "Optometry",
          "Cornea and External Diseases"
        ],
        availableService: [
          { "@type": "MedicalProcedure", "name": "Keratoconus Treatment" },
          { "@type": "MedicalProcedure", "name": "Scleral Lens Fitting" },
          { "@type": "MedicalProcedure", "name": "Orthokeratology" },
          { "@type": "MedicalProcedure", "name": "Comprehensive Eye Exam" },
          { "@type": "MedicalProcedure", "name": "Contact Lens Fitting" },
          { "@type": "MedicalProcedure", "name": "Dry Eye Treatment" }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eye Care Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Dry Eye Treatment (IPL)",
                description: "Intense Pulsed Light (IPL) therapy treats the root cause of dry eye syndrome, providing long-lasting relief where eye drops fail.",
                procedureType: "IPL Therapy"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Keratoconus Treatment",
                description: "Expert diagnosis and treatment for keratoconus including scleral lenses, corneal cross-linking, and advanced management strategies.",
                procedureType: "Keratoconus Management"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "LASIK Surgery",
                description: "State-of-the-art LASIK consultation and co-management with Orange County's top refractive surgeons.",
                procedureType: "Refractive Surgery"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Orthokeratology (Ortho-K)",
                description: "Wear custom contact lenses overnight and wake up with clear vision all day—no surgery, no glasses, no daytime contacts.",
                procedureType: "Non-Surgical Vision Correction"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Corneal Cross-Linking",
                description: "Halt keratoconus progression with FDA-approved corneal cross-linking—the only treatment proven to stop the disease from worsening.",
                procedureType: "Corneal Strengthening"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "Scleral Lens Fitting",
                description: "Custom scleral lenses provide superior vision and comfort for keratoconus, post-LASIK complications, severe dry eyes, and other complex conditions.",
                procedureType: "Specialty Contact Lenses"
              }
            }
          ]
        }
      }
    ]
  };
}

/**
 * Generate LocalBusiness schema for general pages
 */
/**
 * Generate LocalBusiness schema for general pages
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: CONTACT_INFO.name,
    description: "Expert eye care services in Orange County. Serving 65+ cities with comprehensive vision care.",
    url: "https://eyecarecenteroc.com",
    telephone: CONTACT_INFO.primaryPhone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT_INFO.geo.latitude.toString(),
      longitude: CONTACT_INFO.geo.longitude.toString()
    },
    openingHoursSpecification: CONTACT_INFO.openingHoursSpecification.map(hours => ({
      "@type": "OpeningHoursSpecification",
      ...hours
    })),
    priceRange: CONTACT_INFO.priceRange,
    image: "https://eyecarecenteroc.com/og-image.jpg",
    logo: "https://eyecarecenteroc.com/favicon.svg",
    sameAs: Object.values(CONTACT_INFO.social),
  };
}

/**
 * Generate Physician Schema for doctor profiles
 */
export function generatePhysicianSchema(doctorName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorName,
    description: description,
    medicalSpecialty: "Optometry",
    worksFor: {
      "@type": "MedicalBusiness",
      "@id": "https://eyecarecenteroc.com/#organization"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state
    }
  };
}

/**
 * Generate FAQ Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate MedicalCondition schema for condition pages
 */
export function generateMedicalConditionSchema(
  conditionName: string,
  description: string,
  url: string
): MedicalConditionSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: conditionName,
    description: description,
    url: url,
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate combined LocalBusiness + MedicalCondition schema for local condition pages
 * This combines location-specific business info with medical condition details
 */
export function generateLocalConditionSchema(
  conditionName: string,
  conditionDescription: string,
  cityName: string,
  county: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `https://eyecarecenteroc.com/#organization`,
        name: "EyeCare Center of Orange County",
        description: `Expert ${conditionName} treatment serving ${cityName}, ${county}. Comprehensive eye care services with over 35 years of experience.`,
        url: "https://eyecarecenteroc.com",
        telephone: "+1-714-558-1182",
        address: {
          "@type": "PostalAddress",
          streetAddress: "801 North Tustin Ave #404",
          addressLocality: "Santa Ana",
          addressRegion: "CA",
          postalCode: "92705",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: cityName,
          containedIn: {
            "@type": "AdministrativeArea",
            name: county,
          },
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "33.758810",
          longitude: "-117.836090"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "288"
        },
      },
      {
        "@type": "MedicalCondition",
        "@id": url,
        name: conditionName,
        description: conditionDescription,
        url: url,
        associatedAnatomy: {
          "@type": "AnatomicalStructure",
          name: "Eye"
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${conditionName} Treatment in ${cityName}`,
        description: `Professional ${conditionName.toLowerCase()} diagnosis and treatment for residents of ${cityName} and ${county}.`,
        provider: {
          "@id": "https://eyecarecenteroc.com/#organization"
        },
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://eyecarecenteroc.com/book-appointment",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: "+1-714-558-1182",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["English", "Spanish"]
          }
        }
      }
    ]
  };
}

