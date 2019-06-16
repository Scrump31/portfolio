const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Scottie Crump', // Navigation and Site Title
  siteTitleAlt: 'Scottie Crump', // Alternative Site title for SEO
  siteTitleShort: 'Scottie Crump', // short_name for manifest
  siteHeadline: 'Building modern, responsive websites', // Headline for schema.org JSONLD
  siteUrl: 'https://scottiecrump.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'A Portfolio site created by Scottie Crump',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@scottiecrump', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
