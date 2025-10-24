import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/private/', '/admin/'],
    },
    sitemap: 'https://augustinchan.dev/sitemap.xml',
  }
}