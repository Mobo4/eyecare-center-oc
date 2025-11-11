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

/**
 * Generate MedicalBusiness schema for homepage
 */
export function generateMedicalBusinessSchema(): MedicalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "EyeCare Center of Orange County",
    description: "Comprehensive eye care services in Orange County. Expert LASIK, cataract surgery, keratoconus treatment, and comprehensive eye exams. Board-certified specialists serving 65+ Orange County cities.",
    url: "https://eyecarecenteroc.com",
    telephone: "+19493640008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "801 North Tustin Ave #404",
      addressLocality: "Santa Ana",
      addressRegion: "CA",
      postalCode: "92705",
      addressCountry: "US",
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
    image: "https://eyecarecenteroc.com/og-image.jpg",
    logo: "https://eyecarecenteroc.com/favicon.svg",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50000",
    },
  };
}

/**
 * Generate LocalBusiness schema for general pages
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EyeCare Center of Orange County",
    description: "Expert eye care services in Orange County. Serving 65+ cities with comprehensive vision care.",
    url: "https://eyecarecenteroc.com",
    telephone: "+19493640008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "801 North Tustin Ave #404",
      addressLocality: "Santa Ana",
      addressRegion: "CA",
      postalCode: "92705",
      addressCountry: "US",
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
    image: "https://eyecarecenteroc.com/og-image.jpg",
    logo: "https://eyecarecenteroc.com/favicon.svg",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/",
    ],
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

