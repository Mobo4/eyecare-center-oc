/**
 * FILE: lib/schema/local-business.ts
 * PURPOSE: LocalBusiness schema generator for location pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Generates enhanced LocalBusiness structured data
 * for Google Business Profile integration and local search.
 */

import { LocalBusinessSchema } from './types';
import { CONTACT_INFO } from '@/lib/contact-info';

const BASE_URL = 'https://eyecarecenteroc.com';

/**
 * Business information constants
 */
const BUSINESS_INFO = {
  name: 'EyeCare Center of Orange County',
  description: 'Comprehensive eye care services including eye exams, contact lenses, keratoconus treatment, dry eye therapy, and LASIK consultations. Serving Orange County for over 35 years.',
  priceRange: '$$',
  logo: '/images/logo/eyecare-center-oc-logo.png',
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:30' },
    { days: ['Friday'], opens: '09:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' }
  ],
  socialProfiles: [
    'https://www.facebook.com/eyecarecenteroc',
    'https://www.instagram.com/eyecarecenteroc',
    'https://www.yelp.com/biz/eyecare-center-of-orange-county'
  ],
  geo: {
    latitude: 33.7175,  // Update with actual coordinates
    longitude: -117.8311
  }
};

/**
 * Generates LocalBusiness schema
 */
export function generateLocalBusinessSchema(
  cityName?: string,
  averageRating?: number,
  reviewCount?: number
): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Optician',
    name: BUSINESS_INFO.name,
    description: cityName
      ? `${BUSINESS_INFO.description} Proudly serving ${cityName} and surrounding communities.`
      : BUSINESS_INFO.description,
    image: `${BASE_URL}${BUSINESS_INFO.logo}`,
    logo: `${BASE_URL}${BUSINESS_INFO.logo}`,
    url: BASE_URL,
    telephone: CONTACT_INFO.primaryPhone.display,
    email: CONTACT_INFO.email.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes
    })),
    priceRange: BUSINESS_INFO.priceRange,
    aggregateRating: averageRating ? {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: reviewCount || 0,
      bestRating: 5,
      worstRating: 1
    } : undefined,
    sameAs: BUSINESS_INFO.socialProfiles,
    hasMap: `https://www.google.com/maps?q=${BUSINESS_INFO.geo.latitude},${BUSINESS_INFO.geo.longitude}`
  };
}

/**
 * Generates LocalBusiness schema for a specific city landing page
 */
export function generateCityLocalBusinessSchema(
  cityName: string,
  neighborhoods: string[],
  averageRating?: number,
  reviewCount?: number
): LocalBusinessSchema {
  const baseSchema = generateLocalBusinessSchema(cityName, averageRating, reviewCount);

  return {
    ...baseSchema,
    areaServed: [
      {
        '@type': 'City',
        name: cityName
      },
      ...neighborhoods.map(n => ({
        '@type': 'City' as const,
        name: n
      }))
    ]
  };
}

/**
 * Generates JSON-LD script tag content for LocalBusiness
 */
export function getLocalBusinessJsonLd(
  cityName?: string,
  averageRating?: number,
  reviewCount?: number
): string {
  const schema = generateLocalBusinessSchema(cityName, averageRating, reviewCount);
  return JSON.stringify(schema);
}
