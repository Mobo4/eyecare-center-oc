import { MetadataRoute } from 'next'
import { conditions, allConditions } from '@/data/conditions';
import { cities } from '@/data/cities';
import { allSmartServices } from '@/data/services-enhanced';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eyecarecenteroc.com';
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    '/',
    '/about',
    '/conditions',
    '/locations',
    '/services',
    '/contact',
    '/book-appointment',
    '/privacy-policy',
    '/terms-of-service',
    '/medical-disclaimer',
    '/doctors',
    '/insurance',
    '/lp/headaches-cvs',
    '/lp/designer-frames',
    '/lp/dry-eye-ipl',
    '/lp/keratoconus-scleral',
    '/lp/surgical-consult',
    '/accessibility',
    '/blog',
    '/financing',
    '/fsa-hsa-eye-care',
    '/icons-preview',
    '/insurance-coverage',
    '/medical-professionals',
    '/services/diagnostic-technology',
    '/services/faa-color-vision-testing',
    '/services/optical-lenses',
    '/services/ortho-k-adults',
    '/services/pediatric-keratoconus',
    '/services/contact-lenses',
    '/services/contact-lenses/hybrid',
    '/services/contact-lenses/rgp',
    '/services/contact-lenses/scleral',
    '/services/contact-lenses/soft',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page === '/' ? 1.0 : 0.8,
  }));

  // General condition pages - ALL 263+ conditions from search data
  const conditionUrls = allConditions.map((condition) => ({
    url: `${baseUrl}/conditions/${condition.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Location/city pages
  const locationUrls = cities.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service pages (main service pages)
  const serviceUrls = allSmartServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Service + City combinations - ALL cities + Orange County region
  const allCitySlugs = [...cities.map(c => c.slug), 'orange-county'];
  const serviceCityUrls = allSmartServices.flatMap((service) =>
    allCitySlugs.map((citySlug) => ({
      url: `${baseUrl}/services/${service.slug}/${citySlug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Condition + City combinations (HIGH PRIORITY for local SEO)
  // 338 conditions × 66 cities = ~22,300 pages
  const conditionCityUrls = allConditions.flatMap((condition) =>
    cities.map((city) => ({
      url: `${baseUrl}/conditions/${condition.slug}/${city.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // High priority for local SEO
    }))
  );

  return [
    ...staticUrls,
    ...conditionUrls,
    ...locationUrls,
    ...serviceUrls,
    ...serviceCityUrls,
    ...conditionCityUrls,
  ]
}
