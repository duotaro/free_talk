const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  // i18n: {
  //   locales: ['ja', 'en'],
  //   defaultLocale: 'ja'
  // },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/blog/:categories',
        destination: '/blog/:categories/list',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/',
        permanent: true,
      },
    ]
  },
};