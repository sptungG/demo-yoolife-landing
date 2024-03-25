/** @type {import('next').NextConfig} */
const { createSecureHeaders } = require('next-secure-headers');

const nextConfig = {
  // output: 'output',
  swcMinify: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    siteTitle: 'Yoolife',
    siteDescription: 'Yoolife IoT Platform',
    siteKeywords: 'yoo, yoolife, iot',
    siteUrl: 'https://yoolife.vn/',
    siteImagePreviewUrl: 'preview-tiny.png',
    twitterHandle: '@yoolife',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // https://react-svgr.com/docs/options/
            icon: true,
            dimensions: false,
            svgo: true,
          },
        },
      ],
    });
    return config;
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders(),
          // HSTS Preload: https://hstspreload.org/
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
