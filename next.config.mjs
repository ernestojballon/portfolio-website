/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WORDPRESS_API_ENDPOINT: process.env.WORDPRESS_API_ENDPOINT,
    WORDPRESS_CLOUDFRONT_DISTRIBUTION_URL:
      process.env.WORDPRESS_CLOUDFRONT_DISTRIBUTION_URL,
    WORDPRESS_CONTENT_REVALIDATION_SECRET_KEY:
      process.env.WORDPRESS_CONTENT_REVALIDATION_SECRET_KEY,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    return config;
  },
};

export default nextConfig;
