import { MetadataRoute } from 'next'
import { getAllPosts } from './lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticRoutes = [
    {
      url: 'https://augustinchan.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://augustinchan.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  const postRoutes = posts.map((post) => ({
    url: `https://augustinchan.dev/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'never' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}