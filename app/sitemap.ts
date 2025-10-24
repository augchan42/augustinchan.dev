import { MetadataRoute } from 'next'
import { getAllPosts } from './lib/posts'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  // Get the most recent post modification date for blog listing
  const mostRecentPostDate = posts.length > 0
    ? new Date(Math.max(...posts.map(p => new Date(p.date).getTime())))
    : new Date()

  // Check homepage last modified (use package.json as proxy for deployment changes)
  const homepageLastMod = fs.statSync(path.join(process.cwd(), 'app', 'page.tsx')).mtime

  const staticRoutes = [
    {
      url: 'https://augustinchan.dev',
      lastModified: homepageLastMod,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://augustinchan.dev/blog',
      lastModified: mostRecentPostDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  const postRoutes = posts.map((post) => {
    // Get actual file modification time
    const filePath = path.join(process.cwd(), 'content', 'posts', `${post.slug}.mdx`)
    let lastModified: Date
    try {
      lastModified = fs.statSync(filePath).mtime
    } catch {
      // Fallback to post date if file not found
      lastModified = new Date(post.date)
    }

    return {
      url: `https://augustinchan.dev/posts/${post.slug}`,
      lastModified,
      changeFrequency: 'never' as const,
      priority: 0.6,
    }
  })

  return [...staticRoutes, ...postRoutes]
}