import { MetadataRoute } from 'next'
import { conditions } from '@/data/conditions';
import { conditions as fullConditions } from '@/data/conditions-full';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
 
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
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page === '/' ? 1.0 : 0.8,
  }));

  // General condition pages (from conditions-full.ts)
  const conditionUrls = fullConditions.map((condition) => ({
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

  // Service + City combinations
  const serviceCityUrls = services.flatMap((service) =>
    cities.slice(0, 5).map((city) => ({
      url: `${baseUrl}/services/${service.slug}/${city.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Condition + City combinations (HIGH PRIORITY for local SEO)
  // 15 conditions × 64 cities = 960 pages
  const conditionCityUrls = conditions.flatMap((condition) =>
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
    ...serviceCityUrls,
    ...conditionCityUrls,
  ]
}
