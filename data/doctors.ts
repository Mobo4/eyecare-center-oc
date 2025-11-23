/**
 * FILE: data/doctors.ts
 * PURPOSE: Doctor profile data for bio pages and E-E-A-T compliance
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Contains comprehensive doctor information for SEO-optimized
 * bio pages. Critical for E-E-A-T signals on medical content.
 */

import { DoctorData } from '@/lib/schema/types';

export const doctors: DoctorData[] = [
  {
    slug: 'dr-alexander-bonakdar',
    name: 'Alexander Bonakdar',
    credentials: 'O.D.',
    title: 'Optometrist & Keratoconus Specialist',
    photo: '/images/doctors/drbonakdar.png',
    videoIntro: undefined,
    yearsExperience: 35,
    medicalSchool: 'Southern California College of Optometry',
    residency: undefined,
    fellowships: [
      'Advanced Contact Lens Fellowship',
      'Corneal Disease Fellowship'
    ],
    boardCertifications: [
      'California State Board of Optometry',
      'National Board of Examiners in Optometry'
    ],
    professionalMemberships: [
      'American Optometric Association (AOA)',
      'California Optometric Association (COA)',
      'American Academy of Optometry (AAO)',
      'Scleral Lens Education Society',
      'International Keratoconus Academy'
    ],
    specialties: [
      'Keratoconus Treatment',
      'Scleral Contact Lens Fitting',
      'Dry Eye Management',
      'IPL Therapy for Dry Eye',
      'Corneal Cross-Linking Co-Management',
      'Orthokeratology (Ortho-K)',
      'Myopia Control',
      'Complex Contact Lens Fitting',
      'Post-Surgical Vision Correction',
      'Comprehensive Eye Exams'
    ],
    proceduresPerformed: 50000,
    bio: `Dr. Alexander Bonakdar has been serving patients in Orange County for over 35 years, establishing himself as one of the region's leading specialists in keratoconus treatment and complex contact lens fitting.

After graduating from the Southern California College of Optometry, Dr. Bonakdar dedicated his career to helping patients with challenging vision conditions that other practices often couldn't address. His expertise in scleral lens fitting has helped thousands of patients with keratoconus, post-surgical complications, and severe dry eye regain clear, comfortable vision.

Dr. Bonakdar was among the first optometrists in Orange County to offer IPL (Intense Pulsed Light) therapy for dry eye disease, bringing this breakthrough treatment to patients who had exhausted traditional options. His practice has become a referral center for complex cases from ophthalmologists and optometrists throughout Southern California.

His patient-centered approach combines cutting-edge technology with personalized care. Every treatment plan is customized to the individual patient's needs, lifestyle, and visual goals. This commitment to individualized care has earned EyeCare Center of Orange County a reputation for excellence and has resulted in thousands of satisfied patients over the decades.`,
    philosophy: `"I believe every patient deserves to see clearly and comfortably. Many patients come to us after being told nothing more can be done for their condition. Our mission is to find solutions where others see limitations. With advanced technology and decades of experience, we can help most patients achieve vision they never thought possible."`,
    locations: ['santa-ana'],
    averageRating: 4.9,
    reviewCount: 847
  }
];

/**
 * Get doctor by slug
 */
export function getDoctorBySlug(slug: string): DoctorData | undefined {
  return doctors.find(d => d.slug === slug);
}

/**
 * Get primary doctor (for E-E-A-T author attribution)
 */
export function getPrimaryDoctor(): DoctorData {
  return doctors[0];
}

/**
 * Get all doctors
 */
export function getAllDoctors(): DoctorData[] {
  return doctors;
}
