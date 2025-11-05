/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Blog redirects
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      // Support redirects
      {
        source: '/support/:path*',
        destination: '/',
        permanent: true,
      },
      // Home page variations
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // Archived pool instruction pages -> redirect to homepage or gallery
      {
        source: '/spa-instructions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pool-shopping-tips',
        destination: '/',
        permanent: true,
      },
      {
        source: '/troubleshooting-checklist',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pool-start-up',
        destination: '/',
        permanent: true,
      },
      {
        source: '/skimmer-settings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dual-time-clock-instructions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/servicing-check-valve',
        destination: '/',
        permanent: true,
      },
      {
        source: '/filter-cleaning-instructions',
        destination: '/',
        permanent: true,
      },
      // Archived info pages
      {
        source: '/go-green',
        destination: '/',
        permanent: true,
      },
      {
        source: '/useful-info-about-your-pool',
        destination: '/',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/',
        permanent: true,
      },
      {
        source: '/_downloads/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
