const { i18n } = require('./next-i18next.config');

module.exports = {
  distDir: 'build',
  i18n,
  images: {},
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/',
        permanent: true
      }
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
};
