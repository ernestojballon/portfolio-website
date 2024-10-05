type Config = {
  wordpressApiUrl: string;
  wordpressCloudfrontUrl: string;
  revalidationWordpressContentSecret: string;
};

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const config: Config = {
  wordpressApiUrl: getEnvVariable('WORDPRESS_API_ENDPOINT'),
  wordpressCloudfrontUrl: getEnvVariable(
    'WORDPRESS_CLOUDFRONT_DISTRIBUTION_URL'
  ),
  revalidationWordpressContentSecret: getEnvVariable(
    'WORDPRESS_CONTENT_REVALIDATION_SECRET_KEY'
  ),
};

export default config;
