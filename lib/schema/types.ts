/**
 * FILE: lib/schema/types.ts
 * PURPOSE: TypeScript interfaces for Schema.org structured data
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 */

// Base types for Schema.org entities
export interface Thing {
  '@context': 'https://schema.org';
  '@type': string;
}

// Medical Procedure Schema
export interface MedicalProcedureSchema extends Thing {
  '@type': 'MedicalProcedure';
  name: string;
  description: string;
  procedureType?: 'SurgicalProcedure' | 'DiagnosticProcedure' | 'TherapeuticProcedure';
  bodyLocation?: string;
  howPerformed?: string;
  preparation?: string;
  followup?: string;
  status?: string;
  image?: string;
  medicalSpecialty?: {
    '@type': 'MedicalSpecialty';
    name: string;
  };
  potentialRisk?: string[];
  potentialComplication?: string[];
}

// Physician Schema
export interface PhysicianSchema extends Thing {
  '@type': 'Physician';
  name: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  medicalSpecialty?: {
    '@type': 'MedicalSpecialty';
    name: string;
  };
  knowsAbout?: string[];
  alumniOf?: Array<{
    '@type': 'EducationalOrganization';
    name: string;
  }>;
  memberOf?: Array<{
    '@type': 'Organization';
    name: string;
  }>;
  worksFor?: {
    '@type': 'MedicalBusiness';
    name: string;
    address?: PostalAddress;
    telephone?: string;
  };
  availableService?: Array<{
    '@type': 'MedicalProcedure';
    name: string;
  }>;
  aggregateRating?: AggregateRating;
}

// FAQ Schema
export interface FAQPageSchema extends Thing {
  '@type': 'FAQPage';
  mainEntity: FAQQuestion[];
}

export interface FAQQuestion {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

// Local Business Schema
export interface LocalBusinessSchema extends Thing {
  '@type': 'Optician' | 'MedicalBusiness';
  name: string;
  description?: string;
  image?: string;
  logo?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  geo?: GeoCoordinates;
  openingHoursSpecification?: OpeningHoursSpecification[];
  priceRange?: string;
  aggregateRating?: AggregateRating;
  review?: ReviewSchema[];
  areaServed?: Array<{
    '@type': 'City';
    name: string;
  }>;
  hasMap?: string;
  sameAs?: string[];
}

// Review Schema
export interface ReviewSchema extends Thing {
  '@type': 'Review';
  author: {
    '@type': 'Person';
    name: string;
  };
  datePublished: string;
  reviewBody: string;
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  itemReviewed?: {
    '@type': string;
    name: string;
  };
}

// Supporting types
export interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
}

export interface OpeningHoursSpecification {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

export interface AggregateRating {
  '@type': 'AggregateRating';
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

// Service data types (for data files)
export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  heroImage?: string;
  icon?: string;
  overview: string;
  benefits: string[];
  candidateCriteria: string[];
  notCandidates: string[];
  process: ProcessStep[];
  recovery?: RecoveryInfo;
  cost: CostInfo;
  faqs: FAQ[];
  relatedServices: string[];
  lastUpdated: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface RecoveryInfo {
  timeline: string;
  expectations: string[];
  restrictions: string[];
  followUp: string;
}

export interface CostInfo {
  rangeMin?: number;
  rangeMax?: number;
  insuranceCoverage: string;
  financingAvailable: boolean;
  financingDetails?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Doctor data types
export interface DoctorData {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  photo: string;
  videoIntro?: string;
  yearsExperience: number;
  medicalSchool: string;
  residency?: string;
  fellowships?: string[];
  boardCertifications: string[];
  professionalMemberships: string[];
  specialties: string[];
  proceduresPerformed?: number;
  bio: string;
  philosophy: string;
  locations: string[];
  averageRating: number;
  reviewCount: number;
}
