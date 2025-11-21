/**
 * FILE: lib/schema/medical-procedure.ts
 * PURPOSE: MedicalProcedure schema generator for service pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Generates structured data for medical/eye care procedures
 * to improve search visibility and enable rich results.
 */

import { MedicalProcedureSchema, ServiceData } from './types';

const BASE_URL = 'https://eyecarecenteroc.com';

/**
 * Generates MedicalProcedure schema for a service
 */
export function generateMedicalProcedureSchema(
  service: ServiceData,
  cityName?: string
): MedicalProcedureSchema {
  const location = cityName ? ` in ${cityName}, CA` : ' in Orange County, CA';

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: `${service.name}${location}`,
    description: service.metaDescription || service.description,
    procedureType: getProcedureType(service.slug),
    bodyLocation: 'Eyes',
    howPerformed: service.process.map(step => step.description).join(' '),
    preparation: getPreparationText(service),
    followup: service.recovery?.followUp,
    status: 'https://schema.org/ActiveStatus',
    image: service.heroImage ? `${BASE_URL}${service.heroImage}` : undefined,
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Optometry'
    },
    potentialRisk: getPotentialRisks(service.slug),
    potentialComplication: getPotentialComplications(service.slug)
  };
}

/**
 * Determines procedure type based on service slug
 */
function getProcedureType(slug: string): 'SurgicalProcedure' | 'DiagnosticProcedure' | 'TherapeuticProcedure' {
  const surgicalProcedures = ['lasik', 'cataract-surgery', 'corneal-cross-linking'];
  const diagnosticProcedures = ['comprehensive-eye-exam', 'contact-lens-exam', 'glaucoma-screening'];

  if (surgicalProcedures.some(p => slug.includes(p))) return 'SurgicalProcedure';
  if (diagnosticProcedures.some(p => slug.includes(p))) return 'DiagnosticProcedure';
  return 'TherapeuticProcedure';
}

/**
 * Generates preparation text from process steps
 */
function getPreparationText(service: ServiceData): string {
  const firstStep = service.process.find(step => step.step === 1);
  return firstStep?.description || 'Schedule a consultation to discuss your candidacy and preparation requirements.';
}

/**
 * Returns potential risks based on procedure type
 */
function getPotentialRisks(slug: string): string[] {
  const riskMap: Record<string, string[]> = {
    'lasik': ['Dry eyes', 'Glare or halos', 'Under or over correction'],
    'cataract-surgery': ['Infection', 'Inflammation', 'Retinal detachment'],
    'corneal-cross-linking': ['Corneal haze', 'Infection', 'Delayed healing'],
    'default': ['Minor discomfort', 'Temporary vision changes']
  };

  return riskMap[slug] || riskMap['default'];
}

/**
 * Returns potential complications based on procedure type
 */
function getPotentialComplications(slug: string): string[] {
  const complicationMap: Record<string, string[]> = {
    'lasik': ['Flap complications', 'Ectasia', 'Need for enhancement'],
    'cataract-surgery': ['Posterior capsule opacity', 'Macular edema'],
    'default': ['Rare complications vary by individual']
  };

  return complicationMap[slug] || complicationMap['default'];
}

/**
 * Generates JSON-LD script tag content
 */
export function getMedicalProcedureJsonLd(
  service: ServiceData,
  cityName?: string
): string {
  const schema = generateMedicalProcedureSchema(service, cityName);
  return JSON.stringify(schema);
}
