const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'vn',
    locales: ['en', 'zh', 'vn'],
    domains: [
      // {
      //   domain: 'jp.domain.com',
      //   defaultLocale: 'jp'
      // },
    ]
  },
  localePath: path.resolve('./locales')
};
