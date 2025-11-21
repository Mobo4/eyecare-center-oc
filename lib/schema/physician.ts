/**
 * FILE: lib/schema/physician.ts
 * PURPOSE: Physician schema generator for doctor bio pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Generates structured data for doctor profiles
 * Critical for E-E-A-T compliance on medical websites.
 */

import { PhysicianSchema, DoctorData } from './types';
import { CONTACT_INFO } from '@/lib/contact-info';

const BASE_URL = 'https://eyecarecenteroc.com';

/**
 * Generates Physician schema for a doctor profile
 */
export function generatePhysicianSchema(doctor: DoctorData): PhysicianSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: `Dr. ${doctor.name}`,
    honorificPrefix: 'Dr.',
    honorificSuffix: doctor.credentials,
    jobTitle: doctor.title,
    description: `${doctor.title} with ${doctor.yearsExperience}+ years of experience specializing in ${doctor.specialties.slice(0, 3).join(', ')}. Serving Orange County, CA.`,
    image: `${BASE_URL}${doctor.photo}`,
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Optometry'
    },
    knowsAbout: doctor.specialties,
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: doctor.medicalSchool
      },
      ...(doctor.residency ? [{
        '@type': 'EducationalOrganization' as const,
        name: doctor.residency
      }] : []),
      ...(doctor.fellowships || []).map(f => ({
        '@type': 'EducationalOrganization' as const,
        name: f
      }))
    ],
    memberOf: doctor.professionalMemberships.map(org => ({
      '@type': 'Organization',
      name: org
    })),
    worksFor: {
      '@type': 'MedicalBusiness',
      name: 'EyeCare Center of Orange County',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT_INFO.address.street,
        addressLocality: CONTACT_INFO.address.city,
        addressRegion: CONTACT_INFO.address.state,
        postalCode: CONTACT_INFO.address.zip,
        addressCountry: 'US'
      },
      telephone: CONTACT_INFO.primaryPhone.display
    },
    availableService: doctor.specialties.map(specialty => ({
      '@type': 'MedicalProcedure',
      name: specialty
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: doctor.averageRating,
      reviewCount: doctor.reviewCount,
      bestRating: 5,
      worstRating: 1
    }
  };
}

/**
 * Generates JSON-LD script tag content for physician
 */
export function getPhysicianJsonLd(doctor: DoctorData): string {
  const schema = generatePhysicianSchema(doctor);
  return JSON.stringify(schema);
}
