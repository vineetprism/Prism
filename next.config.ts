import type { NextConfig } from 'next';

const ONE_YEAR = 31536000; // seconds

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.prisminfoways.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },

      {
        source: '/storage/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },

      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
