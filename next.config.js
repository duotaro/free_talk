const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja'
  },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true
};