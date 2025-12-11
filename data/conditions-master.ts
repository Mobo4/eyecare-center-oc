import { conditions as rawConditions } from './conditions-raw';
import { conditions as curatedConditions } from './conditions-curated';
import { allConditions as searchConditions } from './conditions-search';

export type ConditionSeverity = "Mild" | "Moderate" | "Serious" | "Emergency";

export interface Condition {
  name: string;
  slug: string;
  category: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  seoTitle: string;
  seoDescription: string;

  // Fields from conditions-raw
  severity?: ConditionSeverity;
  keywords?: string[];

  // Fields from conditions-curated
  localKeywords?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  relatedServices?: string[];
  recoveryTimeline?: string;

  // Fields from conditions-search match
  aliases?: string[];
}

// Map raw conditions to the superset interface
const mappedRawConditions: Condition[] = rawConditions.map(c => ({
  ...c,
  // Ensure strict compatibility if needed, though most fields match
}));

// Merge curated data into raw data
// We iterate over the raw (comprehensive) list and upgrade entries if they exist in curated list.
export const allConditions: Condition[] = mappedRawConditions.map(raw => {
  const curated = curatedConditions.find(c => c.slug === raw.slug);
  const search = searchConditions.find(c => c.slug === raw.slug);

  const base = curated ? {
    ...raw, // Keep properties from raw (like severity)
    ...curated, // Overwrite with curated (richer description, FAQS, etc)
    // If curated has specific arrays, we might want to ensure we don't prefer empty lists, 
    // but generally curated is trusted more.

    // Unify keywords
    keywords: curated.localKeywords || raw.keywords,
    localKeywords: curated.localKeywords || raw.keywords
  } : {
    ...raw,
    localKeywords: raw.keywords
  };

  return {
    ...base,
    aliases: search?.aliases
  };
});

export const conditions = allConditions;


/**
 * Retrieves a condition by slug from the master comprehensive list.
 */
export function getEnhancedConditionBySlug(slug: string): Condition | undefined {
  const condition = allConditions.find(c => c.slug === slug);
  if (condition) return condition;

  // Fallback: Check if it exists in search-conditions but NOT in raw (unlikely, but safe)
  // This preserves the old "hydration" behavior for any edge cases
  const searchCondition = searchConditions.find(c => c.slug === slug);
  if (searchCondition) {
    return {
      name: searchCondition.name,
      slug: searchCondition.slug,
      category: searchCondition.category,
      description: `Expert diagnosis and treatment for ${searchCondition.name} is available at EyeCare Center of Orange County.`,
      symptoms: searchCondition.symptoms || ["Vision changes", "Eye irritation"],
      treatments: ["Comprehensive Eye Exam", "Personalized Treatment Plan"],
      seoTitle: `${searchCondition.name} Treatment Orange County`,
      seoDescription: `Expert ${searchCondition.name} treatment in Orange County. Call (714) 558-1182.`,
      localKeywords: [`${searchCondition.name} specialist`, "eye doctor"],
      severity: "Moderate" // Default
    };
  }

  return undefined;
}
