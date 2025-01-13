/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
