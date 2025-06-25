import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'surl.li',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'surl.lt',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'surli.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'surl.gd',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'surl.lu',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
