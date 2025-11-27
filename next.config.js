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
