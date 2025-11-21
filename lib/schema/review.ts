/**
 * FILE: lib/schema/review.ts
 * PURPOSE: Review schema generator for testimonials
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Generates Review structured data for patient testimonials.
 * Enables star ratings in search results.
 */

import { ReviewSchema, AggregateRating } from './types';

export interface ReviewData {
  authorName: string;
  datePublished: string;
  reviewBody: string;
  rating: number;
  serviceName?: string;
}

/**
 * Generates Review schema for a single review
 */
export function generateReviewSchema(
  review: ReviewData,
  itemReviewed?: { type: string; name: string }
): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.authorName
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    },
    itemReviewed: itemReviewed ? {
      '@type': itemReviewed.type,
      name: itemReviewed.name
    } : undefined
  };
}

/**
 * Generates AggregateRating schema from multiple reviews
 */
export function generateAggregateRatingSchema(
  reviews: ReviewData[]
): AggregateRating {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  return {
    '@type': 'AggregateRating',
    ratingValue: Math.round(averageRating * 10) / 10,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1
  };
}

/**
 * Generates JSON-LD for multiple reviews
 */
export function getReviewsJsonLd(
  reviews: ReviewData[],
  itemReviewed?: { type: string; name: string }
): string {
  const schemas = reviews.map(review =>
    generateReviewSchema(review, itemReviewed)
  );
  return JSON.stringify(schemas);
}

/**
 * Validates review for HIPAA compliance and content guidelines
 * Returns array of issues if any
 */
export function validateReviewContent(review: ReviewData): string[] {
  const issues: string[] = [];

  // Check for potential PHI indicators
  const phiPatterns = [
    /\b\d{3}-\d{2}-\d{4}\b/,  // SSN pattern
    /\b\d{3}-\d{3}-\d{4}\b/,  // Phone pattern (might be intentional)
    /\bdate of birth\b/i,
    /\bdiagnosis\b/i,
    /\bmedication\b.*\b\d+\s*mg\b/i  // Specific medication dosages
  ];

  phiPatterns.forEach(pattern => {
    if (pattern.test(review.reviewBody)) {
      issues.push(`Review may contain sensitive information (pattern: ${pattern})`);
    }
  });

  // Check rating validity
  if (review.rating < 1 || review.rating > 5) {
    issues.push('Rating must be between 1 and 5');
  }

  // Check review length
  if (review.reviewBody.length < 20) {
    issues.push('Review body is too short (minimum 20 characters)');
  }

  // Check date validity
  const date = new Date(review.datePublished);
  if (isNaN(date.getTime())) {
    issues.push('Invalid date format');
  }

  return issues;
}
