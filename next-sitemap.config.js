/** @type {import('next-sitemap').IConfig} */

const URL = process.env.NEXT_PUBLIC_URL

module.exports = {
  siteUrl: URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/articles',
          '/products/umrah',
          '/products/hajj',
          '/products/badal',
        ],
      },
      {
        userAgent: '*',
        disallow: [''],
      },
    ],
    additionalSitemaps: [`${URL}/sitemap-1.xml`],
  },
}
