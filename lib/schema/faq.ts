/**
 * FILE: lib/schema/faq.ts
 * PURPOSE: FAQPage schema generator for FAQ sections
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Generates FAQ structured data for rich search results.
 * FAQ schema enables accordion display in Google search results.
 */

import { FAQPageSchema, FAQ } from './types';

/**
 * Generates FAQPage schema from an array of FAQs
 */
export function generateFAQPageSchema(faqs: FAQ[]): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generates JSON-LD script tag content for FAQs
 */
export function getFAQJsonLd(faqs: FAQ[]): string {
  const schema = generateFAQPageSchema(faqs);
  return JSON.stringify(schema);
}

/**
 * Validates FAQ content for SEO best practices
 * Returns array of warnings if any
 */
export function validateFAQContent(faqs: FAQ[]): string[] {
  const warnings: string[] = [];

  faqs.forEach((faq, index) => {
    // Check question length (50-100 chars recommended)
    if (faq.question.length < 20) {
      warnings.push(`FAQ ${index + 1}: Question is too short (${faq.question.length} chars)`);
    }
    if (faq.question.length > 150) {
      warnings.push(`FAQ ${index + 1}: Question is too long (${faq.question.length} chars)`);
    }

    // Check answer length (50-300 chars recommended for snippets)
    if (faq.answer.length < 50) {
      warnings.push(`FAQ ${index + 1}: Answer is too short (${faq.answer.length} chars)`);
    }
    if (faq.answer.length > 500) {
      warnings.push(`FAQ ${index + 1}: Answer may be too long for rich results (${faq.answer.length} chars)`);
    }

    // Check for question mark
    if (!faq.question.endsWith('?')) {
      warnings.push(`FAQ ${index + 1}: Question should end with a question mark`);
    }
  });

  // Check FAQ count (2-10 recommended for rich results)
  if (faqs.length < 2) {
    warnings.push('Consider adding more FAQs (at least 2 recommended)');
  }
  if (faqs.length > 10) {
    warnings.push('Consider reducing FAQs to 10 or fewer for better rich results');
  }

  return warnings;
}
