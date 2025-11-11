/**
 * Image utilities and constants for Next.js Image component
 */

// Image directory paths
export const IMAGE_PATHS = {
  clinic: '/images/clinic',
  doctors: '/images/doctors',
  equipment: '/images/equipment',
  testimonials: '/images/testimonials',
} as const;

// Image optimization settings
export const IMAGE_SIZES = {
  hero: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 1024, height: 576 },
    mobile: { width: 768, height: 432 },
  },
  thumbnail: {
    width: 400,
    height: 300,
  },
  profile: {
    width: 400,
    height: 400,
  },
  card: {
    width: 600,
    height: 400,
  },
} as const;

/**
 * Generate responsive image sizes for Next.js Image component
 */
export function getResponsiveSizes(breakpoint: 'hero' | 'thumbnail' | 'profile' | 'card' = 'card'): string {
  switch (breakpoint) {
    case 'hero':
      return '(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px';
    case 'thumbnail':
      return '(max-width: 768px) 400px, 400px';
    case 'profile':
      return '(max-width: 768px) 300px, 400px';
    case 'card':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px';
    default:
      return '100vw';
  }
}

/**
 * Helper to create image paths
 */
export function getImagePath(category: keyof typeof IMAGE_PATHS, filename: string): string {
  return `${IMAGE_PATHS[category]}/${filename}`;
}

