/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  transpilePackages: ['three'],
  experimental:{
    appDir:true
  }
};

module.exports = nextConfig
