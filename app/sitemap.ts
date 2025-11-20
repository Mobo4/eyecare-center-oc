import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eyecarecenteroc.com';

  // For now, only static pages are included.
  // This will be expanded to include all dynamic pages (conditions, locations, services, blog)
  // once the content generation phase is complete.

  const staticPages = [
    '/',
    '/about',
    '/conditions',
    '/locations',
    '/contact',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '/' ? 1.0 : 0.8,
  }));
 
  return [
    ...staticUrls,
    // Add dynamic routes here later, e.g.,
    // ...conditions.map((condition) => ({...})),
    // ...services.map((service) => ({...})),
  ]
}
