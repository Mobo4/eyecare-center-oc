# Image Assets Directory

This directory contains all image assets for the EyeCare Center OC website.

## Directory Structure

```
images/
├── clinic/          # Clinic exterior, interior, waiting room photos
├── doctors/         # Doctor and staff professional headshots
├── equipment/      # Medical equipment and technology photos
└── testimonials/    # Patient testimonial photos (if available)
```

## Image Requirements

### Format
- **Primary:** WebP format (with JPEG fallback)
- **Optimization:** Compress to 80-85% quality
- **Responsive:** Multiple sizes for different screen sizes

### Sizes
- **Hero images:** 1920x1080px (desktop), 768x432px (mobile)
- **Thumbnails:** 400x300px
- **Profile photos:** 400x400px (square)
- **Card images:** 600x400px

### Naming Convention
- Use lowercase with hyphens
- Example: `clinic-exterior.jpg`, `doctor-john-smith.jpg`

## Usage

Images should be used with Next.js `Image` component for automatic optimization:

```tsx
import Image from 'next/image';
import { getImagePath } from '@/lib/images';

<Image
  src={getImagePath('clinic', 'clinic-exterior.jpg')}
  alt="EyeCare Center exterior"
  width={1920}
  height={1080}
  priority
/>
```

## Alt Text

All images must have descriptive alt text for accessibility and SEO.

## Current Status

**⚠️ Images need to be added:**
- Clinic photos: 0/5
- Doctor photos: 0/3
- Equipment photos: 0/3
- Testimonial photos: 0/3

## Next Steps

1. Source professional photos
2. Optimize images (compress, convert to WebP)
3. Add images to appropriate directories
4. Update components to use images
5. Test image loading and optimization

