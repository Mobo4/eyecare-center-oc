# Next.js Image Component Usage Guide

**Purpose:** Practical implementation examples for all optimized images with SEO best practices

---

## Quick Reference: Image Categories

| Category | Location | Priority | Lazy Load | Typical Use |
|----------|----------|----------|-----------|-------------|
| Hero Backgrounds | `/images/hero/` | Yes | No | Above-fold hero sections |
| Trust Signals | `/images/trust-signals/` | No | Yes | Statistics, badges, social proof |
| Services | `/images/services/` | No | Yes | Service cards, treatment pages |

---

## 1. Hero Section Implementation

### Hero with Full-Screen Background

```tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-background-modern-eyecare-orange-county.png"
        alt="Modern eyecare facility in Orange County with advanced diagnostic equipment and comfortable patient consultation areas"
        title="EyeCare Center of Orange County | Modern Optometry Facility"
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Expert Eye Care in Orange County
          </h1>
          <p className="text-xl mb-8">
            35 Years of Experience | 10,000+ Patients Treated
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg">
            Schedule Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
```

### Hero with Rotating Backgrounds

```tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroBackgrounds = [
  {
    src: '/images/hero/hero-background-modern-eyecare-orange-county.png',
    alt: 'Modern eyecare facility in Orange County with advanced diagnostic equipment and comfortable patient consultation areas',
    title: 'EyeCare Center of Orange County | Modern Optometry Facility'
  },
  {
    src: '/images/hero/hero-background-optometry-clinic-california.png',
    alt: 'Professional optometry clinic in California featuring comprehensive eye care services and experienced eye doctors',
    title: 'California Optometry Clinic | Comprehensive Eye Care'
  },
  {
    src: '/images/hero/hero-background-vision-center-oc.png',
    alt: 'Vision center in Orange County offering specialized eye care treatments including LASIK, keratoconus management, and dry eye therapy',
    title: 'OC Vision Center | Specialized Eye Care Treatments'
  }
];

export default function RotatingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroBackgrounds.map((bg, index) => (
        <Image
          key={bg.src}
          src={bg.src}
          alt={bg.alt}
          title={bg.title}
          fill
          priority={index === 0} // Only prioritize first image
          quality={90}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="100vw"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

---

## 2. Trust Signals Component

### Trust Badges Row

```tsx
import Image from 'next/image';

const trustSignals = [
  {
    src: '/images/trust-signals/patients-treated-10000-eyecare-center-orange-county.png',
    alt: 'Over 10,000 patients successfully treated at EyeCare Center of Orange County since 1990',
    title: '10,000+ Patients Treated | Trusted Eye Care Since 1990',
    stat: '10,000+',
    label: 'Patients Treated'
  },
  {
    src: '/images/trust-signals/experience-35-years-optometry-california.png',
    alt: '35 years of professional optometry experience serving Orange County and California communities',
    title: '35 Years Experience | Expert Eye Care Since 1990',
    stat: '35 Years',
    label: 'Experience'
  },
  {
    src: '/images/trust-signals/five-star-rating-google-reviews-eyecare.png',
    alt: '5-star Google reviews from satisfied patients at EyeCare Center of Orange County',
    title: '5-Star Rated | Exceptional Patient Care & Reviews',
    stat: '5 Stars',
    label: 'Google Rating'
  }
];

export default function TrustSignals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSignals.map((signal) => (
            <div key={signal.src} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={signal.src}
                  alt={signal.alt}
                  title={signal.title}
                  width={128}
                  height={128}
                  loading="lazy"
                  quality={85}
                  className="object-contain"
                />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {signal.stat}
              </h3>
              <p className="text-gray-600 text-lg">
                {signal.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Animated Trust Badge (with count-up effect)

```tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface TrustBadgeProps {
  src: string;
  alt: string;
  title: string;
  targetNumber: number;
  label: string;
  suffix?: string;
}

export default function AnimatedTrustBadge({
  src,
  alt,
  title,
  targetNumber,
  label,
  suffix = '+'
}: TrustBadgeProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const increment = Math.ceil(targetNumber / 50);
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + increment, targetNumber));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count, targetNumber]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={src}
          alt={alt}
          title={title}
          width={96}
          height={96}
          loading="lazy"
          quality={85}
          className="object-contain"
        />
      </div>
      <h3 className="text-4xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

// Usage:
<AnimatedTrustBadge
  src="/images/trust-signals/patients-treated-10000-eyecare-center-orange-county.png"
  alt="Over 10,000 patients successfully treated at EyeCare Center of Orange County since 1990"
  title="10,000+ Patients Treated | Trusted Eye Care Since 1990"
  targetNumber={10000}
  label="Patients Treated"
  suffix="+"
/>
```

---

## 3. Service Cards Component

### Service Grid with Hover Effects

```tsx
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    src: '/images/services/lasik-laser-eye-surgery-orange-county.png',
    alt: 'LASIK laser eye surgery consultation at EyeCare Center Orange County - bladefree vision correction',
    title: 'LASIK Surgery Orange County | Bladefree Vision Correction',
    heading: 'LASIK Surgery',
    description: 'Bladefree laser vision correction for nearsightedness, farsightedness, and astigmatism.',
    href: '/services/lasik'
  },
  {
    src: '/images/services/orthokeratology-overnight-vision-correction.png',
    alt: 'Orthokeratology overnight vision correction lenses for myopia control and nearsightedness treatment',
    title: 'Ortho-K | Non-Surgical Vision Correction While You Sleep',
    heading: 'Orthokeratology',
    description: 'Overnight vision correction that reshapes your cornea while you sleep. Perfect for active lifestyles.',
    href: '/services/ortho-k'
  },
  {
    src: '/images/services/scleral-contact-lenses-keratoconus.png',
    alt: 'Custom scleral contact lenses for keratoconus and irregular cornea treatment at EyeCare Center OC',
    title: 'Scleral Lenses | Advanced Keratoconus Treatment',
    heading: 'Scleral Contact Lenses',
    description: 'Custom-designed lenses for keratoconus and irregular corneas providing superior comfort.',
    href: '/services/scleral-lenses'
  },
  {
    src: '/images/services/corneal-crosslinking-keratoconus-treatment.png',
    alt: 'Corneal crosslinking procedure for keratoconus treatment - strengthening cornea to halt disease progression',
    title: 'Corneal Crosslinking | Stop Keratoconus Progression',
    heading: 'Corneal Crosslinking',
    description: 'FDA-approved procedure to strengthen your cornea and halt keratoconus progression.',
    href: '/services/corneal-crosslinking'
  },
  {
    src: '/images/services/dry-eye-treatment-therapy-orange-county.png',
    alt: 'Comprehensive dry eye treatment and therapy at Orange County eye care center with advanced diagnostic technology',
    title: 'Dry Eye Treatment Orange County | Advanced Therapy Solutions',
    heading: 'Dry Eye Treatment',
    description: 'Advanced diagnostics and treatments for chronic dry eye and meibomian gland dysfunction.',
    href: '/services/dry-eye'
  },
  {
    src: '/images/services/keratoconus-specialist-treatment-oc.png',
    alt: 'Keratoconus specialist in Orange County providing comprehensive treatment including scleral lenses and crosslinking',
    title: 'Keratoconus Specialist OC | Comprehensive Treatment Options',
    heading: 'Keratoconus Specialist',
    description: 'Comprehensive keratoconus care from diagnosis through advanced treatment options.',
    href: '/services/keratoconus'
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Specialized Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.src}
              href={service.href}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.src}
                  alt={service.alt}
                  title={service.title}
                  width={800}
                  height={450}
                  loading="lazy"
                  quality={85}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Individual Service Card Component

```tsx
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  heading: string;
  description: string;
  href: string;
  badge?: string;
}

export default function ServiceCard({
  src,
  alt,
  title,
  heading,
  description,
  href,
  badge
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Badge (optional) */}
      {badge && (
        <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          loading="lazy"
          quality={85}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {heading}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center text-blue-600 font-semibold text-sm">
          Explore Service
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Usage:
<ServiceCard
  src="/images/services/lasik-laser-eye-surgery-orange-county.png"
  alt="LASIK laser eye surgery consultation at EyeCare Center Orange County - bladefree vision correction"
  title="LASIK Surgery Orange County | Bladefree Vision Correction"
  heading="LASIK Surgery"
  description="Bladefree laser vision correction for nearsightedness, farsightedness, and astigmatism."
  href="/services/lasik"
  badge="Popular"
/>
```

---

## 4. Treatment Page Hero

### Full-Width Treatment Hero with Image

```tsx
import Image from 'next/image';

interface TreatmentHeroProps {
  backgroundSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function TreatmentHero({
  backgroundSrc,
  title,
  subtitle,
  description
}: TreatmentHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundSrc}
        alt={`${title} - ${subtitle}`}
        title={`${title} | EyeCare Center Orange County`}
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-blue-400 font-semibold mb-2 uppercase tracking-wide">
              {subtitle}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Usage:
<TreatmentHero
  backgroundSrc="/images/services/lasik-laser-eye-surgery-orange-county.png"
  title="LASIK Surgery"
  subtitle="Vision Correction"
  description="Experience freedom from glasses and contacts with our advanced bladefree LASIK technology. Safe, precise, and life-changing."
/>
```

---

## 5. Before/After Image Comparison

### Interactive Slider Component

```tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

export default function BeforeAfterComparison({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        {/* After Image (full) */}
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={afterAlt}
            title={`${title} - After Treatment`}
            fill
            loading="lazy"
            quality={90}
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded font-semibold">
            After
          </div>
        </div>

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            title={`${title} - Before Treatment`}
            fill
            loading="lazy"
            quality={90}
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded font-semibold">
            Before
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="w-full mt-4 cursor-pointer"
      />
    </div>
  );
}
```

---

## 6. Responsive Image Gallery

### Masonry Grid Layout

```tsx
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/services/lasik-laser-eye-surgery-orange-county.png',
    alt: 'LASIK laser eye surgery consultation',
    title: 'LASIK Surgery',
    category: 'Vision Correction'
  },
  {
    src: '/images/services/dry-eye-treatment-therapy-orange-county.png',
    alt: 'Dry eye treatment therapy',
    title: 'Dry Eye Treatment',
    category: 'Specialty Care'
  },
  // Add more images...
];

export default function ImageGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services & Treatments
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  fill
                  loading="lazy"
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="text-sm text-blue-300 mb-1">{image.category}</p>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 7. Performance Optimization Tips

### Blur Placeholder (Progressive Loading)

```tsx
import Image from 'next/image';

export default function OptimizedImage() {
  return (
    <Image
      src="/images/services/lasik-laser-eye-surgery-orange-county.png"
      alt="LASIK laser eye surgery consultation"
      width={800}
      height={450}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
      quality={85}
      className="rounded-lg"
    />
  );
}
```

### Generate Blur Data URL (Build Time)

```bash
# Install plaiceholder
npm install plaiceholder sharp

# Create utility function
import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
```

### Responsive Sizes Configuration

```tsx
// For different screen sizes, load appropriate image size

<Image
  src="/images/services/lasik-laser-eye-surgery-orange-county.png"
  alt="LASIK surgery"
  width={800}
  height={450}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  loading="lazy"
/>

// Sizes breakdown:
// Mobile (<640px): Full viewport width
// Tablet (640-1024px): Half viewport width
// Desktop (>1024px): Fixed 800px width
```

---

## 8. SEO Schema Markup Integration

### ImageObject Schema for Service Images

```tsx
import Image from 'next/image';

interface ServiceImageWithSchemaProps {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  description: string;
}

export default function ServiceImageWithSchema({
  src,
  alt,
  title,
  width,
  height,
  description
}: ServiceImageWithSchemaProps) {
  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `https://eyecarecenteroc.com${src}`,
    description: description,
    name: title,
    width: width,
    height: height
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <Image
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        loading="lazy"
        quality={85}
      />
    </>
  );
}
```

---

## 9. Accessibility Best Practices

### Accessible Image with Caption

```tsx
import Image from 'next/image';

interface AccessibleImageProps {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
}

export default function AccessibleImage({
  src,
  alt,
  title,
  caption,
  width,
  height
}: AccessibleImageProps) {
  return (
    <figure className="max-w-2xl mx-auto">
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          loading="lazy"
          quality={85}
          className="rounded-lg"
        />
      </div>
      <figcaption className="mt-3 text-sm text-gray-600 text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}

// Usage:
<AccessibleImage
  src="/images/services/lasik-laser-eye-surgery-orange-county.png"
  alt="LASIK laser eye surgery consultation at EyeCare Center Orange County - bladefree vision correction"
  title="LASIK Surgery Orange County | Bladefree Vision Correction"
  caption="Our state-of-the-art LASIK suite featuring the latest bladefree laser technology"
  width={800}
  height={450}
/>
```

---

## 10. Common Patterns Summary

### Quick Copy-Paste Templates

**Hero Background:**
```tsx
<Image src="/images/hero/hero-background-modern-eyecare-orange-county.png" alt="Modern eyecare facility" fill priority quality={90} className="object-cover" sizes="100vw" />
```

**Trust Badge:**
```tsx
<Image src="/images/trust-signals/patients-treated-10000-eyecare-center-orange-county.png" alt="10,000+ patients treated" width={300} height={300} loading="lazy" quality={85} />
```

**Service Card:**
```tsx
<Image src="/images/services/lasik-laser-eye-surgery-orange-county.png" alt="LASIK surgery" width={800} height={450} loading="lazy" quality={85} sizes="(max-width: 768px) 100vw, 50vw" />
```

**Responsive Grid Item:**
```tsx
<Image src="/images/services/dry-eye-treatment-therapy-orange-county.png" alt="Dry eye treatment" fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
```

---

## Checklist for Every Image Implementation

- [ ] Import `Image` from `'next/image'`
- [ ] Add descriptive `alt` text (125 chars max)
- [ ] Add SEO-optimized `title` attribute
- [ ] Specify `width` and `height` (or use `fill`)
- [ ] Set appropriate `priority` (true for above-fold, false otherwise)
- [ ] Configure `loading` ("eager" for priority, "lazy" for below-fold)
- [ ] Set `quality` (90 for hero, 85 for general use)
- [ ] Add responsive `sizes` attribute
- [ ] Apply appropriate CSS classes
- [ ] Verify image path is correct

---

**End of Usage Guide**
