/**
 * Service to Condition Image Mapping
 * Maps service slugs to condition slugs for image gallery sharing
 */

// Services that should show clinical images from specific conditions
export const serviceToConditionMap: Record<string, string[]> = {
    'keratoconus-treatment': ['keratoconus'],
    'scleral-lens-fitting': ['keratoconus', 'dry-eye-syndrome'],
    'dry-eye-specialist': ['dry-eye-syndrome'],
    'cataract-surgery-comanagement': ['cataracts'],
    'glaucoma-management': ['glaucoma'],
    'diabetic-eye-care': ['diabetic-retinopathy'],
    'macular-degeneration-care': ['macular-degeneration'],
    'contact-lens-fitting': ['keratoconus'],
    'myopia-control': ['myopia'],
    'orthokeratology': ['myopia'],
};

/**
 * Get condition slugs that should provide images for a service
 */
export function getConditionsForService(serviceSlug: string): string[] {
    return serviceToConditionMap[serviceSlug] || [];
}
