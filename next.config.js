/** @type {import('next').NextConfig} */
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

export default nextConfig
