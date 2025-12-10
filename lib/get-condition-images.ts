/**
 * Get Atlas Images for Conditions
 * Server-side utility to read and map atlas images to conditions
 */

import { ClinicalImage } from '@/lib/schema/types';
import { findConditionSlug, processImage } from '@/lib/atlas-image-mapper';
import { ATLAS_IMAGES } from '@/lib/generated-atlas-map';

// Cache the image mappings
let cachedMappings: Map<string, ClinicalImage[]> | null = null;

/**
 * Get list of all atlas images from the generated map
 */
function getAtlasImageList(): string[] {
    return ATLAS_IMAGES;
}

/**
 * Build the mapping of condition slugs to images
 */
function buildImageMappings(): Map<string, ClinicalImage[]> {
    if (cachedMappings) return cachedMappings;

    const images = getAtlasImageList();
    const mappings = new Map<string, ClinicalImage[]>();

    for (const filename of images) {
        const parts = filename.split('_');
        const category = parts[0];
        const slug = findConditionSlug(filename, category);

        // Skip images that don't satisfy any mapping rules
        if (!slug) continue;

        if (!mappings.has(slug)) {
            mappings.set(slug, []);
        }

        mappings.get(slug)!.push(processImage(filename));
    }

    // Deduplicate images by title (remove duplicates with similar names)
    for (const [slug, imgs] of mappings) {
        const seen = new Set<string>();
        const deduped: ClinicalImage[] = [];

        for (const img of imgs) {
            // Normalize title for comparison (lowercase, remove extra spaces)
            const normalizedTitle = img.title.toLowerCase().replace(/\s+/g, ' ').trim();

            if (!seen.has(normalizedTitle)) {
                seen.add(normalizedTitle);
                deduped.push(img);
            }
        }

        mappings.set(slug, deduped);
    }

    // Sort images within each condition by title
    for (const [, imgs] of mappings) {
        imgs.sort((a, b) => a.title.localeCompare(b.title));
    }

    cachedMappings = mappings;
    return mappings;
}

/**
 * Get clinical images for a specific condition
 * @param conditionSlug - The slug of the condition
 * @returns Array of ClinicalImage objects
 */
export function getImagesForCondition(conditionSlug: string): ClinicalImage[] {
    const mappings = buildImageMappings();
    return mappings.get(conditionSlug) || [];
}

/**
 * Get count of images for a condition
 */
export function getImageCountForCondition(conditionSlug: string): number {
    return getImagesForCondition(conditionSlug).length;
}

/**
 * Get all condition slugs that have images
 */
export function getConditionsWithImages(): string[] {
    const mappings = buildImageMappings();
    return Array.from(mappings.keys());
}

/**
 * Get image statistics
 */
export function getImageStats(): { totalImages: number; conditionsWithImages: number } {
    const images = getAtlasImageList();
    const mappings = buildImageMappings();

    return {
        totalImages: images.length,
        conditionsWithImages: mappings.size
    };
}
