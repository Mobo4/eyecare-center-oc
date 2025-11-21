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
    ]
  },
  // Enable static exports for better SEO
  output: 'standalone',
}

export default withBundleAnalyzer(nextConfig);
