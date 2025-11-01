/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static1.squarespace.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lyonfinancial.net',
      },
      {
        protocol: 'https',
        hostname: 'www.lightstream.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hfsfinancial.net',
      },
      {
        protocol: 'https',
        hostname: 'www.lendingtree.com',
      },
      {
        protocol: 'https',
        hostname: 'poolloan.net',
      },
      {
        protocol: 'https',
        hostname: 'amsfsg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lendkey.com',
      },
      {
        protocol: 'https',
        hostname: 'dtjax.com',
      },
    ],
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
    ];
  },
};

export default nextConfig;
