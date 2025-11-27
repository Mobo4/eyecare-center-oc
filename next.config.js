/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Core Web Vitals optimization
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.clarity.ms https://cdn.callrail.com https://api.leadconnectorhq.com https://widgets.leadconnectorhq.com https://link.msgsndr.com https://va.vercel-scripts.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: blob: https: http:;
              font-src 'self' https://fonts.gstatic.com data:;
              connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net https://www.clarity.ms https://api.callrail.com https://api.leadconnectorhq.com https://backend.leadconnectorhq.com https://vitals.vercel-insights.com;
              frame-src 'self' https://www.google.com https://www.youtube.com https://api.leadconnectorhq.com https://link.msgsndr.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self' https://api.leadconnectorhq.com;
              frame-ancestors 'self';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      // Domain Redirects from drbonakdar.net
      {
        source: '/',
        destination: 'https://eyecarecenteroc.com/',
        permanent: true,
        has: [{ type: 'host', value: 'www.drbonakdar.net' }],
      },
      {
        source: '/',
        destination: 'https://eyecarecenteroc.com/',
        permanent: true,
        has: [{ type: 'host', value: 'drbonakdar.net' }],
      },
      // Subdomain and specific page redirects
      {
        source: '/:path*',
        destination: 'https://eyecarecenteroc.com/conditions/keratoconus',
        permanent: true,
        has: [{ type: 'host', value: 'keratoconus.drbonakdar.net' }],
      },
      {
        source: '/keratoconus',
        destination: '/conditions/keratoconus',
        permanent: true,
      },
      {
        source: '/dry-eye',
        destination: '/conditions/dry-eye',
        permanent: true,
      },
      {
        source: '/about-dr-bonakdar',
        destination: '/about',
        permanent: true,
      },
      // Redirects for old camelCase URLs (as a fallback, in case they exist)
      {
        source: '/AboutPage',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/DryEyes',
        destination: '/conditions/dry-eye',
        permanent: true,
      },
      {
        source: '/Keratoconus',
        destination: '/conditions/keratoconus',
        permanent: true,
      },
      {
        source: '/ServicesPage',
        destination: '/services', // This page will need to be created
        permanent: true,
      },
      // Service URL variations - catch common alternative URLs
      {
        source: '/services/lasik',
        destination: '/services/lasik-consultation',
        permanent: true,
      },
      {
        source: '/services/ipl',
        destination: '/services/dry-eye-ipl-treatment',
        permanent: true,
      },
      {
        source: '/services/ipl-treatment',
        destination: '/services/dry-eye-ipl-treatment',
        permanent: true,
      },
      {
        source: '/services/dry-eye',
        destination: '/services/dry-eye-specialist',
        permanent: true,
      },
      {
        source: '/services/keratoconus',
        destination: '/services/keratoconus-treatment',
        permanent: true,
      },
      {
        source: '/services/ortho-k-lenses',
        destination: '/services/ortho-k',
        permanent: true,
      },
      {
        source: '/services/overnight-contacts',
        destination: '/services/orthokeratology',
        permanent: true,
      },
      {
        source: '/services/cxl',
        destination: '/services/corneal-cross-linking',
        permanent: true,
      },
      {
        source: '/services/cross-linking',
        destination: '/services/corneal-cross-linking',
        permanent: true,
      },
      {
        source: '/services/scleral',
        destination: '/services/scleral-lenses',
        permanent: true,
      },
      {
        source: '/services/scleral-contacts',
        destination: '/services/scleral-lenses',
        permanent: true,
      },
      {
        source: '/services/glaucoma',
        destination: '/services/glaucoma-management',
        permanent: true,
      },
      {
        source: '/services/cataracts',
        destination: '/services/cataract-surgery',
        permanent: true,
      },
      {
        source: '/services/macular-degeneration',
        destination: '/services/macular-degeneration-care',
        permanent: true,
      },
      {
        source: '/services/amd',
        destination: '/services/macular-degeneration-care',
        permanent: true,
      },
      {
        source: '/services/diabetic-eye',
        destination: '/services/diabetic-retinopathy-treatment',
        permanent: true,
      },
      {
        source: '/services/diabetic-retinopathy',
        destination: '/services/diabetic-retinopathy-treatment',
        permanent: true,
      },
      {
        source: '/services/eye-exam',
        destination: '/services/comprehensive-eye-exam',
        permanent: true,
      },
      {
        source: '/services/exam',
        destination: '/services/comprehensive-eye-exam',
        permanent: true,
      },
    ]
  },
  // Enable static exports for better SEO
  output: 'standalone',
}

export default withBundleAnalyzer(nextConfig);
