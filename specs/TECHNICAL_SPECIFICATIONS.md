# Technical Specifications
## EyeCare Center OC - Phase 2-4 Local SEO Implementation

**Version:** 1.0
**Created:** November 21, 2025
**Based On:** PHASE2-4-LOCAL-SEO-PRD.md
**Status:** APPROVED FOR IMPLEMENTATION

---

## 1. TECHNICAL ARCHITECTURE

### 1.1 Directory Structure

```
app/
├── services/
│   └── [service-slug]/
│       └── page.tsx           # Dynamic service pages
├── doctors/
│   └── [doctor-slug]/
│       └── page.tsx           # Dynamic doctor bio pages
├── faq/
│   └── [topic-slug]/
│       └── page.tsx           # Dynamic FAQ pages
├── patient-reviews/
│   ├── page.tsx               # Main reviews page
│   └── [category-slug]/
│       └── page.tsx           # Category-specific reviews
├── locations/
│   └── [city-slug]/
│       └── page.tsx           # City landing pages
└── blog/
    ├── page.tsx               # Blog index
    └── [post-slug]/
        └── page.tsx           # Individual blog posts

components/
├── services/
│   ├── ServiceHero.tsx
│   ├── ServiceProcess.tsx
│   ├── ServiceFAQ.tsx
│   ├── ServiceCTA.tsx
│   └── ServiceTestimonials.tsx
├── doctors/
│   ├── DoctorHero.tsx
│   ├── DoctorCredentials.tsx
│   ├── DoctorSpecialties.tsx
│   └── DoctorReviews.tsx
├── reviews/
│   ├── ReviewCard.tsx
│   ├── ReviewGrid.tsx
│   ├── StarRating.tsx
│   └── ReviewFilter.tsx
├── faq/
│   ├── FAQAccordion.tsx
│   └── FAQSchema.tsx
├── locations/
│   ├── LocationMap.tsx
│   ├── LocationHours.tsx
│   └── LocationDirections.tsx
└── shared/
    ├── MedicalDisclaimer.tsx
    ├── AuthorByline.tsx
    ├── BookAppointmentCTA.tsx
    └── TrustSignals.tsx

lib/
├── schema/
│   ├── index.ts               # Schema exports
│   ├── physician.ts           # Physician schema generator
│   ├── medical-procedure.ts   # MedicalProcedure schema
│   ├── review.ts              # Review schema generator
│   ├── faq.ts                 # FAQPage schema generator
│   ├── local-business.ts      # Enhanced LocalBusiness
│   └── video.ts               # VideoObject schema
├── data/
│   ├── services.ts            # Service data & metadata
│   ├── doctors.ts             # Doctor profiles data
│   ├── faqs.ts                # FAQ content by topic
│   ├── testimonials.ts        # Patient testimonials
│   └── cities.ts              # City data & neighborhoods
└── utils/
    ├── seo.ts                 # SEO utility functions
    └── content.ts             # Content helpers
```

### 1.2 Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      PAGE LAYOUT                            │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                 SCHEMA MARKUP (JSON-LD)              │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    HERO SECTION                      │   │
│  │  - Title (H1)                                       │   │
│  │  - Subtitle                                         │   │
│  │  - Primary CTA                                      │   │
│  │  - Trust Signals (optional)                         │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  CONTENT SECTIONS                    │   │
│  │  - Overview (H2)                                    │   │
│  │  - Process/Details (H2)                             │   │
│  │  - Benefits/Why Choose Us (H2)                      │   │
│  │  - Cost/Insurance (H2)                              │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    FAQ SECTION                       │   │
│  │  - FAQ Schema                                       │   │
│  │  - Accordion Component                              │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                 TESTIMONIALS                         │   │
│  │  - Review Schema                                    │   │
│  │  - Review Cards                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  MEDICAL DISCLAIMER                  │   │
│  │  - E-E-A-T Compliance                              │   │
│  │  - Author Byline                                    │   │
│  │  - Last Updated                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   FINAL CTA                          │   │
│  │  - Book Appointment                                 │   │
│  │  - Phone Number                                     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. TYPESCRIPT INTERFACES

### 2.1 Core Data Types

```typescript
// lib/types/index.ts

// Service Types
export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  icon: string;

  // Content sections
  overview: string;
  benefits: string[];
  candidateCriteria: string[];
  notCandidates: string[];
  process: ProcessStep[];
  recovery: RecoveryInfo;
  cost: CostInfo;

  // FAQs
  faqs: FAQ[];

  // Related
  relatedServices: string[]; // slugs
  testimonials: string[]; // testimonial IDs

  // SEO
  structuredData: MedicalProcedureSchema;
  lastUpdated: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
  icon?: string;
}

export interface RecoveryInfo {
  timeline: string;
  expectations: string[];
  restrictions: string[];
  followUp: string;
}

export interface CostInfo {
  rangeMin: number;
  rangeMax: number;
  insuranceCoverage: string;
  financingAvailable: boolean;
  financingDetails?: string;
}

// Doctor Types
export interface Doctor {
  slug: string;
  name: string;
  credentials: string; // "OD", "MD", etc.
  title: string;
  photo: string;
  videoIntro?: string;

  // Professional info
  yearsExperience: number;
  medicalSchool: string;
  residency?: string;
  fellowships?: string[];
  boardCertifications: string[];
  professionalMemberships: string[];
  hospitalAffiliations?: string[];

  // Expertise
  specialties: string[];
  proceduresPerformed: number;
  advancedCertifications?: string[];
  publications?: Publication[];
  speakingEngagements?: string[];

  // Content
  bio: string;
  philosophy: string;

  // Location & scheduling
  locations: string[]; // location slugs
  acceptingNewPatients: boolean;

  // Reviews
  reviews: DoctorReview[];
  averageRating: number;

  // SEO
  structuredData: PhysicianSchema;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  url?: string;
}

export interface DoctorReview {
  id: string;
  patientName: string;
  patientCity: string;
  rating: number;
  treatment: string;
  date: string;
  text: string;
  verified: boolean;
}

// FAQ Types
export interface FAQTopic {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  keywords: string[];

  faqs: FAQ[];
  relatedServices: string[];
  relatedFAQTopics: string[];

  structuredData: FAQPageSchema;
  lastUpdated: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  relatedService?: string;
}

// Review/Testimonial Types
export interface Testimonial {
  id: string;
  patientName: string;
  patientInitials: string;
  patientCity: string;
  rating: number;
  treatmentType: string;
  treatmentSlug: string;
  date: string;
  text: string;
  videoUrl?: string;
  beforeAfter?: BeforeAfterImages;
  verified: boolean;
  hipaaConsentDate: string;

  structuredData: ReviewSchema;
}

export interface BeforeAfterImages {
  before: string;
  after: string;
  description: string;
}

// Location Types
export interface CityLocation {
  slug: string;
  name: string;
  state: string;
  county: string;

  // Geographic
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromOffice: number;
  driveTime: string;

  // Neighborhoods
  neighborhoods: string[];
  landmarks: string[];
  zipCodes: string[];

  // Content
  description: string;
  servicesAvailable: string[];
  directions: DirectionsInfo[];

  // SEO
  monthlySearches: number;
  keywords: string[];
  metaDescription: string;

  structuredData: LocalBusinessSchema;
}

export interface DirectionsInfo {
  from: string;
  instructions: string;
  distance: string;
  time: string;
}
```

### 2.2 Schema Types

```typescript
// lib/types/schema.ts

export interface PhysicianSchema {
  "@context": "https://schema.org";
  "@type": "Physician";
  name: string;
  honorificPrefix: string;
  honorificSuffix: string;
  jobTitle: string;
  description: string;
  image: string;
  medicalSpecialty: {
    "@type": "MedicalSpecialty";
    name: string;
  };
  knowsAbout: string[];
  address: PostalAddressSchema;
  telephone: string;
  url: string;
  alumniOf: EducationalOrganizationSchema;
  memberOf: OrganizationSchema[];
  hasCredential: CredentialSchema;
  worksFor: MedicalBusinessSchema;
}

export interface MedicalProcedureSchema {
  "@context": "https://schema.org";
  "@type": "MedicalProcedure";
  name: string;
  alternateName?: string[];
  description: string;
  procedureType: string;
  bodyLocation: string;
  followup: string;
  howPerformed: string;
  preparation: string;
  status?: string;
  relevantSpecialty: {
    "@type": "MedicalSpecialty";
    name: string;
  };
}

export interface ReviewSchema {
  "@context": "https://schema.org";
  "@type": "Review";
  itemReviewed: {
    "@type": "MedicalBusiness";
    name: string;
    image?: string;
  };
  reviewRating: {
    "@type": "Rating";
    ratingValue: string;
    bestRating: string;
    worstRating: string;
  };
  author: {
    "@type": "Person";
    name: string;
    address?: {
      "@type": "PostalAddress";
      addressLocality: string;
      addressRegion: string;
    };
  };
  reviewBody: string;
  datePublished: string;
  publisher?: {
    "@type": "Organization";
    name: string;
  };
}

export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: QuestionAnswerSchema[];
}

export interface QuestionAnswerSchema {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  name: string;
  alternateName?: string;
  description: string;
  priceRange: string;
  paymentAccepted: string;
  currenciesAccepted: string;
  address: PostalAddressSchema;
  geo: GeoCoordinatesSchema;
  telephone: string;
  email?: string;
  url: string;
  openingHoursSpecification: OpeningHoursSchema[];
  aggregateRating?: AggregateRatingSchema;
  hasOfferCatalog?: OfferCatalogSchema;
}
```

---

## 3. SCHEMA MARKUP IMPLEMENTATION

### 3.1 Physician Schema Generator

```typescript
// lib/schema/physician.ts

import { Doctor, PhysicianSchema } from '@/lib/types';
import { CONTACT_INFO } from '@/lib/contact-info';

export function generatePhysicianSchema(doctor: Doctor): PhysicianSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `Dr. ${doctor.name}`,
    honorificPrefix: "Dr.",
    honorificSuffix: doctor.credentials,
    jobTitle: doctor.title,
    description: `${doctor.title} with ${doctor.yearsExperience}+ years of experience specializing in ${doctor.specialties.slice(0, 3).join(', ')}.`,
    image: `https://eyecarecenteroc.com${doctor.photo}`,
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Optometry"
    },
    knowsAbout: doctor.specialties,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zip,
      addressCountry: "US"
    },
    telephone: CONTACT_INFO.primaryPhone.href,
    url: `https://eyecarecenteroc.com/doctors/${doctor.slug}`,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: doctor.medicalSchool
    },
    memberOf: doctor.professionalMemberships.map(org => ({
      "@type": "Organization",
      name: org
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "board certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Board of Optometry"
      }
    },
    worksFor: {
      "@type": "MedicalBusiness",
      name: "EyeCare Center of Orange County"
    }
  };
}
```

### 3.2 MedicalProcedure Schema Generator

```typescript
// lib/schema/medical-procedure.ts

import { Service, MedicalProcedureSchema } from '@/lib/types';

export function generateMedicalProcedureSchema(service: Service): MedicalProcedureSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    alternateName: service.keywords.slice(0, 3),
    description: service.description,
    procedureType: "Therapeutic procedure",
    bodyLocation: getBodyLocation(service.slug),
    followup: service.recovery.followUp,
    howPerformed: service.process.map(step => step.description).join(' '),
    preparation: getPreparation(service.slug),
    status: "Approved by FDA",
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Optometry"
    }
  };
}

function getBodyLocation(serviceSlug: string): string {
  const locations: Record<string, string> = {
    'keratoconus-treatment': 'Cornea',
    'lasik-surgery': 'Cornea',
    'cataract-surgery': 'Lens',
    'dry-eye-ipl-treatment': 'Eye surface',
    'glaucoma-treatment': 'Eye (optic nerve)',
    'scleral-lens-fitting': 'Cornea',
    'orthokeratology': 'Cornea',
    'corneal-cross-linking': 'Cornea'
  };
  return locations[serviceSlug] || 'Eye';
}

function getPreparation(serviceSlug: string): string {
  const preparations: Record<string, string> = {
    'keratoconus-treatment': 'Discontinue contact lens wear 2 weeks prior. Complete comprehensive eye exam.',
    'lasik-surgery': 'Stop wearing contacts 2 weeks before. Avoid eye makeup day of procedure.',
    'cataract-surgery': 'Eye drops prescribed 3 days before. Arrange transportation. Fast 8 hours.',
    'dry-eye-ipl-treatment': 'Remove makeup. Avoid sun exposure 2 weeks prior.',
    'glaucoma-treatment': 'Continue current medications unless directed otherwise.',
    'scleral-lens-fitting': 'Bring current glasses. Allow 2-3 hours for fitting appointment.',
    'orthokeratology': 'Comprehensive eye exam. Current prescription information.',
    'corneal-cross-linking': 'Stop contact lenses 2 weeks prior. Comprehensive corneal evaluation.'
  };
  return preparations[serviceSlug] || 'Comprehensive eye examination required before procedure.';
}
```

### 3.3 Review Schema Generator

```typescript
// lib/schema/review.ts

import { Testimonial, ReviewSchema } from '@/lib/types';

export function generateReviewSchema(testimonial: Testimonial): ReviewSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: "EyeCare Center of Orange County",
      image: "https://eyecarecenteroc.com/og-image.jpg"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    author: {
      "@type": "Person",
      name: testimonial.patientInitials,
      address: {
        "@type": "PostalAddress",
        addressLocality: testimonial.patientCity,
        addressRegion: "CA"
      }
    },
    reviewBody: testimonial.text,
    datePublished: testimonial.date,
    publisher: {
      "@type": "Organization",
      name: "EyeCare Center of Orange County"
    }
  };
}

export function generateAggregateRatingSchema(
  reviews: Testimonial[],
  businessName: string = "EyeCare Center of Orange County"
) {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);

  return {
    "@type": "AggregateRating",
    ratingValue: averageRating,
    bestRating: "5",
    worstRating: "1",
    ratingCount: reviews.length.toString(),
    reviewCount: reviews.length.toString()
  };
}
```

### 3.4 FAQ Schema Generator

```typescript
// lib/schema/faq.ts

import { FAQ, FAQPageSchema } from '@/lib/types';

export function generateFAQPageSchema(faqs: FAQ[]): FAQPageSchema {
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
```

---

## 4. COMPONENT SPECIFICATIONS

### 4.1 Service Page Components

```typescript
// components/services/ServiceHero.tsx

interface ServiceHeroProps {
  service: Service;
  doctor: Doctor;
}

export default function ServiceHero({ service, doctor }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.name} in Orange County
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.description}
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              <TrustBadge icon="experience" text={`${doctor.yearsExperience}+ Years Experience`} />
              <TrustBadge icon="patients" text="10,000+ Patients Treated" />
              <TrustBadge icon="rating" text="4.9/5 Star Rating" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <BookAppointmentCTA variant="primary" service={service.slug} />
              <CallNowCTA variant="secondary" />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src={service.heroImage}
              alt={`${service.name} treatment at EyeCare Center of Orange County`}
              width={600}
              height={400}
              priority
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 4.2 Doctor Bio Components

```typescript
// components/doctors/DoctorHero.tsx

interface DoctorHeroProps {
  doctor: Doctor;
}

export default function DoctorHero({ doctor }: DoctorHeroProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="relative">
              <Image
                src={doctor.photo}
                alt={`Dr. ${doctor.name}, ${doctor.credentials} - ${doctor.title}`}
                width={400}
                height={500}
                priority
                className="rounded-xl shadow-lg"
              />
              {doctor.videoIntro && (
                <button className="absolute bottom-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  Watch Introduction
                </button>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Dr. {doctor.name}, {doctor.credentials}
            </h1>
            <p className="text-xl text-emerald-600 font-medium mb-6">
              {doctor.title}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <StatCard
                value={`${doctor.yearsExperience}+`}
                label="Years Experience"
              />
              <StatCard
                value={doctor.proceduresPerformed.toLocaleString()}
                label="Procedures Performed"
              />
              <StatCard
                value={doctor.averageRating.toFixed(1)}
                label="Star Rating"
              />
            </div>

            {/* Bio excerpt */}
            <p className="text-lg text-gray-600 mb-6">
              {doctor.bio.substring(0, 300)}...
            </p>

            <BookAppointmentCTA
              variant="primary"
              text={`Book with Dr. ${doctor.name.split(' ')[1]}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 4.3 Medical Disclaimer Component

```typescript
// components/shared/MedicalDisclaimer.tsx

interface MedicalDisclaimerProps {
  doctor: Doctor;
  lastUpdated: string;
  contentType?: 'service' | 'condition' | 'blog';
}

export default function MedicalDisclaimer({
  doctor,
  lastUpdated,
  contentType = 'service'
}: MedicalDisclaimerProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={doctor.photo}
            alt={`Dr. ${doctor.name}`}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">
            <strong className="text-gray-900">Medical Review:</strong> This {contentType} content has been reviewed and approved by{' '}
            <a href={`/doctors/${doctor.slug}`} className="text-emerald-600 hover:underline">
              Dr. {doctor.name}, {doctor.credentials}
            </a>
            , {doctor.title} with {doctor.yearsExperience}+ years of experience.
          </p>
          <p className="text-sm text-gray-500">
            <strong>Last Updated:</strong> {new Date(lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {contentType === 'service' && (
        <p className="text-xs text-gray-500 mt-4 border-t pt-4">
          <strong>Medical Disclaimer:</strong> The information provided on this page is for educational purposes only and is not intended as medical advice. Individual results may vary. Please consult with a qualified healthcare provider before making any medical decisions or starting any treatment. Only a qualified eye care professional can determine if you are a suitable candidate for any procedure.
        </p>
      )}
    </div>
  );
}
```

### 4.4 FAQ Accordion Component

```typescript
// components/faq/FAQAccordion.tsx

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/lib/types';

interface FAQAccordionProps {
  faqs: FAQ[];
  showSchema?: boolean;
}

export default function FAQAccordion({ faqs, showSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-6 pt-0 text-gray-600">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

## 5. PAGE TEMPLATES

### 5.1 Service Page Template

```typescript
// app/services/[service-slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/data/services';
import { getDoctorBySlug } from '@/lib/data/doctors';
import { generateMedicalProcedureSchema } from '@/lib/schema/medical-procedure';
import { generateFAQPageSchema } from '@/lib/schema/faq';
import { generateReviewSchema } from '@/lib/schema/review';

import ServiceHero from '@/components/services/ServiceHero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCandidates from '@/components/services/ServiceCandidates';
import ServiceRecovery from '@/components/services/ServiceRecovery';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import MedicalDisclaimer from '@/components/shared/MedicalDisclaimer';
import RelatedServices from '@/components/services/RelatedServices';
import BookAppointmentCTA from '@/components/shared/BookAppointmentCTA';

interface ServicePageProps {
  params: { 'service-slug': string };
}

// Generate static params for all service pages
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map(slug => ({ 'service-slug': slug }));
}

// Generate metadata
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params['service-slug']);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} in Orange County | EyeCare Center OC`,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} | EyeCare Center of Orange County`,
      description: service.metaDescription,
      images: [{ url: service.heroImage }],
      type: 'website',
    },
    alternates: {
      canonical: `https://eyecarecenteroc.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params['service-slug']);
  const doctor = getDoctorBySlug('dr-alexander-bonakdar');

  if (!service || !doctor) {
    notFound();
  }

  // Generate schema markup
  const procedureSchema = generateMedicalProcedureSchema(service);
  const faqSchema = generateFAQPageSchema(service.faqs);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(procedureSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Page Content */}
      <main>
        <ServiceHero service={service} doctor={doctor} />

        <ServiceOverview service={service} />

        <ServiceProcess steps={service.process} />

        <ServiceCandidates
          criteria={service.candidateCriteria}
          notCandidates={service.notCandidates}
        />

        <ServiceRecovery recovery={service.recovery} />

        <ServiceCost cost={service.cost} serviceName={service.name} />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions About {service.name}
            </h2>
            <ServiceFAQ faqs={service.faqs} />
          </div>
        </section>

        <ServiceTestimonials
          testimonialIds={service.testimonials}
          serviceName={service.name}
        />

        <MedicalDisclaimer
          doctor={doctor}
          lastUpdated={service.lastUpdated}
          contentType="service"
        />

        <RelatedServices serviceSlugs={service.relatedServices} />

        <section className="py-16 bg-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Schedule your consultation with Dr. {doctor.name.split(' ')[1]} today and take the first step toward better vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BookAppointmentCTA variant="white" service={service.slug} />
              <CallNowCTA variant="outline-white" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
```

### 5.2 Doctor Bio Page Template

```typescript
// app/doctors/[doctor-slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDoctorBySlug, getAllDoctorSlugs } from '@/lib/data/doctors';
import { generatePhysicianSchema } from '@/lib/schema/physician';
import { generateAggregateRatingSchema } from '@/lib/schema/review';

import DoctorHero from '@/components/doctors/DoctorHero';
import DoctorBio from '@/components/doctors/DoctorBio';
import DoctorCredentials from '@/components/doctors/DoctorCredentials';
import DoctorSpecialties from '@/components/doctors/DoctorSpecialties';
import DoctorMemberships from '@/components/doctors/DoctorMemberships';
import DoctorReviews from '@/components/doctors/DoctorReviews';
import DoctorLocations from '@/components/doctors/DoctorLocations';
import BookAppointmentCTA from '@/components/shared/BookAppointmentCTA';

interface DoctorPageProps {
  params: { 'doctor-slug': string };
}

export async function generateStaticParams() {
  const slugs = getAllDoctorSlugs();
  return slugs.map(slug => ({ 'doctor-slug': slug }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const doctor = getDoctorBySlug(params['doctor-slug']);

  if (!doctor) {
    return { title: 'Doctor Not Found' };
  }

  return {
    title: `Dr. ${doctor.name}, ${doctor.credentials} - ${doctor.title} | EyeCare Center OC`,
    description: `Board-certified ${doctor.title.toLowerCase()} with ${doctor.yearsExperience}+ years experience. Specializing in ${doctor.specialties.slice(0, 3).join(', ')}. Serving Orange County, CA.`,
    openGraph: {
      title: `Dr. ${doctor.name} | EyeCare Center of Orange County`,
      description: `${doctor.title} specializing in ${doctor.specialties[0]}`,
      images: [{ url: doctor.photo }],
      type: 'profile',
    },
    alternates: {
      canonical: `https://eyecarecenteroc.com/doctors/${doctor.slug}`,
    },
  };
}

export default function DoctorPage({ params }: DoctorPageProps) {
  const doctor = getDoctorBySlug(params['doctor-slug']);

  if (!doctor) {
    notFound();
  }

  const physicianSchema = generatePhysicianSchema(doctor);
  const aggregateRating = generateAggregateRatingSchema(doctor.reviews);

  return (
    <>
      {/* Physician Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />

      <main>
        <DoctorHero doctor={doctor} />

        <DoctorBio doctor={doctor} />

        <DoctorCredentials doctor={doctor} />

        <DoctorSpecialties specialties={doctor.specialties} />

        <DoctorMemberships memberships={doctor.professionalMemberships} />

        <DoctorReviews
          reviews={doctor.reviews}
          averageRating={doctor.averageRating}
        />

        <DoctorLocations locations={doctor.locations} />

        <section className="py-16 bg-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Schedule an Appointment with Dr. {doctor.name.split(' ')[1]}
            </h2>
            <BookAppointmentCTA variant="white" />
          </div>
        </section>
      </main>
    </>
  );
}
```

---

## 6. IMPLEMENTATION CHECKLIST

### Phase 2, Week 4-5: Service Pages

**Setup Tasks:**
- [ ] Create `/app/services/[service-slug]/` directory structure
- [ ] Create service data file `/lib/data/services.ts`
- [ ] Implement `generateMedicalProcedureSchema()` function
- [ ] Implement `generateFAQPageSchema()` function
- [ ] Create shared components (MedicalDisclaimer, AuthorByline)

**Service Page Components:**
- [ ] ServiceHero component
- [ ] ServiceOverview component
- [ ] ServiceProcess component
- [ ] ServiceCandidates component
- [ ] ServiceRecovery component
- [ ] ServiceCost component
- [ ] ServiceFAQ component
- [ ] ServiceTestimonials component
- [ ] RelatedServices component

**Content Creation (8 pages):**
- [ ] Keratoconus Treatment (1,800 words)
- [ ] Dry Eye IPL Treatment (1,700 words)
- [ ] LASIK Surgery (1,600 words)
- [ ] Cataract Surgery (1,500 words)
- [ ] Orthokeratology (1,500 words)
- [ ] Corneal Cross-Linking (1,500 words)
- [ ] Scleral Lens Fitting (1,500 words)
- [ ] Glaucoma Treatment (1,500 words)

**Validation:**
- [ ] Schema validation (Rich Results Test)
- [ ] Lighthouse audit (85+ performance, 95+ accessibility)
- [ ] E-E-A-T compliance check
- [ ] Mobile responsiveness
- [ ] Cross-browser testing

### Phase 2, Week 6: Doctor Biography Pages

**Setup Tasks:**
- [ ] Create `/app/doctors/[doctor-slug]/` directory structure
- [ ] Create doctor data file `/lib/data/doctors.ts`
- [ ] Implement `generatePhysicianSchema()` function

**Doctor Page Components:**
- [ ] DoctorHero component
- [ ] DoctorBio component
- [ ] DoctorCredentials component
- [ ] DoctorSpecialties component
- [ ] DoctorMemberships component
- [ ] DoctorReviews component
- [ ] DoctorLocations component

**Content Creation:**
- [ ] Dr. Alexander Bonakdar biography (1,200 words)
- [ ] Professional photo optimization
- [ ] Video introduction embed (if available)

**Validation:**
- [ ] Physician schema validation
- [ ] E-E-A-T compliance verification
- [ ] Review schema for doctor reviews

### Phase 2, Week 7: FAQ Pages

**Setup Tasks:**
- [ ] Create `/app/faq/[topic-slug]/` directory structure
- [ ] Create FAQ data file `/lib/data/faqs.ts`
- [ ] Implement batch FAQPage schema generation

**FAQ Components:**
- [ ] FAQAccordion component
- [ ] FAQNavigation component
- [ ] RelatedFAQs component

**Content Creation (6-8 pages, 10-15 questions each):**
- [ ] Keratoconus Treatment FAQ
- [ ] LASIK Surgery FAQ
- [ ] Dry Eye Treatment FAQ
- [ ] Cataract Surgery FAQ
- [ ] Contact Lenses FAQ
- [ ] Insurance & Financing FAQ
- [ ] General Eye Care FAQ
- [ ] Emergency Eye Care FAQ

**Validation:**
- [ ] FAQPage schema validation for ALL questions
- [ ] Voice search optimization check
- [ ] Featured snippet optimization

### Phase 2, Week 8: Reviews & Testimonials

**Setup Tasks:**
- [ ] Create `/app/patient-reviews/` directory structure
- [ ] Create testimonials data file `/lib/data/testimonials.ts`
- [ ] Implement Review schema generator
- [ ] Implement AggregateRating schema

**Review Components:**
- [ ] ReviewCard component
- [ ] ReviewGrid component
- [ ] StarRating component
- [ ] ReviewFilter component
- [ ] BeforeAfterSlider component

**Content Organization:**
- [ ] Main patient reviews page (30 reviews)
- [ ] Keratoconus success stories (20 reviews)
- [ ] LASIK testimonials (20 reviews)
- [ ] Dry eye treatment reviews (15 reviews)
- [ ] Before/after gallery (10 cases)

**HIPAA Compliance:**
- [ ] Verify signed releases on file
- [ ] PHI redaction complete
- [ ] Photo consent verified

---

## 7. TESTING REQUIREMENTS

### 7.1 Unit Tests

```typescript
// __tests__/schema/physician.test.ts

import { generatePhysicianSchema } from '@/lib/schema/physician';
import { mockDoctor } from '@/lib/test-utils/mocks';

describe('generatePhysicianSchema', () => {
  it('generates valid Physician schema', () => {
    const schema = generatePhysicianSchema(mockDoctor);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Physician');
    expect(schema.name).toContain('Dr.');
    expect(schema.medicalSpecialty['@type']).toBe('MedicalSpecialty');
  });

  it('includes all required fields', () => {
    const schema = generatePhysicianSchema(mockDoctor);

    expect(schema.honorificPrefix).toBeDefined();
    expect(schema.honorificSuffix).toBeDefined();
    expect(schema.telephone).toBeDefined();
    expect(schema.address).toBeDefined();
  });
});
```

### 7.2 Integration Tests

```typescript
// __tests__/pages/service-page.test.tsx

import { render, screen } from '@testing-library/react';
import ServicePage from '@/app/services/[service-slug]/page';

describe('Service Page', () => {
  it('renders service hero section', async () => {
    render(<ServicePage params={{ 'service-slug': 'keratoconus-treatment' }} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/keratoconus/i);
  });

  it('includes medical disclaimer', async () => {
    render(<ServicePage params={{ 'service-slug': 'keratoconus-treatment' }} />);

    expect(screen.getByText(/medical review/i)).toBeInTheDocument();
    expect(screen.getByText(/dr\./i)).toBeInTheDocument();
  });

  it('renders FAQ section with schema', async () => {
    const { container } = render(
      <ServicePage params={{ 'service-slug': 'keratoconus-treatment' }} />
    );

    const schemaScripts = container.querySelectorAll('script[type="application/ld+json"]');
    const schemas = Array.from(schemaScripts).map(s => JSON.parse(s.textContent || '{}'));

    const faqSchema = schemas.find(s => s['@type'] === 'FAQPage');
    expect(faqSchema).toBeDefined();
    expect(faqSchema.mainEntity.length).toBeGreaterThan(0);
  });
});
```

### 7.3 E2E Tests

```typescript
// e2e/service-pages.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Service Pages', () => {
  test('keratoconus page loads and has correct SEO elements', async ({ page }) => {
    await page.goto('/services/keratoconus-treatment');

    // Check meta tags
    const title = await page.title();
    expect(title).toContain('Keratoconus Treatment');
    expect(title).toContain('Orange County');

    // Check H1
    const h1 = await page.locator('h1').textContent();
    expect(h1).toContain('Keratoconus');

    // Check schema markup
    const schemas = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      return Array.from(scripts).map(s => JSON.parse(s.textContent || '{}'));
    });

    const procedureSchema = schemas.find(s => s['@type'] === 'MedicalProcedure');
    expect(procedureSchema).toBeDefined();

    // Check medical disclaimer
    await expect(page.locator('text=Medical Review')).toBeVisible();
  });

  test('page meets accessibility standards', async ({ page }) => {
    await page.goto('/services/keratoconus-treatment');

    // Run axe accessibility check
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('page meets performance targets', async ({ page }) => {
    await page.goto('/services/keratoconus-treatment');

    const metrics = await page.evaluate(() => {
      return {
        lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
        cls: performance.getEntriesByType('layout-shift').reduce((sum, e) => sum + e.value, 0),
      };
    });

    expect(metrics.lcp).toBeLessThan(2500); // LCP < 2.5s
    expect(metrics.cls).toBeLessThan(0.1);  // CLS < 0.1
  });
});
```

---

## 8. PERFORMANCE REQUIREMENTS

### 8.1 Core Web Vitals Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | ≤2.5 seconds | 75th percentile |
| INP (Interaction to Next Paint) | <200ms | 75th percentile |
| CLS (Cumulative Layout Shift) | <0.1 | 75th percentile |

### 8.2 Image Optimization

```typescript
// next.config.js image configuration

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
};
```

### 8.3 Bundle Size Targets

| Page Type | Target Bundle Size | Max Bundle Size |
|-----------|-------------------|-----------------|
| Service Page | <100KB | 150KB |
| Doctor Page | <80KB | 120KB |
| FAQ Page | <60KB | 100KB |
| Review Page | <70KB | 110KB |

---

## 9. ACCEPTANCE CRITERIA SUMMARY

### Service Pages
- [ ] 1,500-2,000 words of original content
- [ ] MedicalProcedure + FAQPage schema validated
- [ ] E-E-A-T signals (doctor credentials, byline, disclaimer, date)
- [ ] 5-7 FAQs with accordion UI
- [ ] 2-3 testimonials with Review schema
- [ ] Multiple CTAs (hero, mid-page, footer)
- [ ] Lighthouse Performance: 85+
- [ ] Lighthouse Accessibility: 95+
- [ ] Mobile responsive
- [ ] Keyboard navigable

### Doctor Bio Pages
- [ ] 800-1,200 words of content
- [ ] Physician schema validated
- [ ] Professional photo optimized
- [ ] Credentials prominently displayed
- [ ] Patient reviews with Review schema
- [ ] Booking CTA
- [ ] E-E-A-T compliance verified

### FAQ Pages
- [ ] 10-15 questions per topic
- [ ] FAQPage schema for ALL questions
- [ ] Accordion UI with smooth animations
- [ ] Voice search optimized (natural language)
- [ ] Internal links to service pages
- [ ] CTA to book consultation

### Review Pages
- [ ] Review schema for each testimonial
- [ ] AggregateRating schema
- [ ] Star rating visualization
- [ ] Filter by treatment type
- [ ] HIPAA compliance verified
- [ ] Before/after gallery (consent verified)

---

**Document Status:** APPROVED FOR IMPLEMENTATION
**Next Step:** Begin Phase 2, Week 4 - Service Pages
**Start Date:** Ready to begin immediately

