import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/',
    },
    sitemap: 'https://3ee-art.github.io/3ee.org.haddad/sitemap.xml',
  }
}
