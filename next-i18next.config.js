const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'jp', 'it'],
    domains: [
      // {
      //   domain: 'jp.domain.com',
      //   defaultLocale: 'jp'
      // },
    ]
  },
  localePath: path.resolve('./locales')
};
