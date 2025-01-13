// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 禁止服务器端渲染时使用与浏览器相关的库
      config.node = {
        fs: 'empty',
        module: 'empty',
      };
    }
    return config;
  },
};
