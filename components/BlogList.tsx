import React from 'react'
import Link from 'next/link'
import { getPagesUnderRoute } from 'nextra/context'

interface BlogPost {
  route: string
  title: string
  date: string
  description?: string
  frontMatter?: any
}

export default function BlogList() {
  const posts = getPagesUnderRoute('/posts')
    .map(page => {
      const filename = page.route.split('/').pop()?.replace('.mdx', '') || ''
      const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/)

      if (dateMatch) {
        return {
          route: page.route.replace('.mdx', ''),
          title: page.meta?.title || page.frontMatter?.title || filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' '),
          date: dateMatch[1],
          description: page.frontMatter?.description,
          frontMatter: page.frontMatter
        }
      }
      return null
    })
    .filter(Boolean)
    .sort((a, b) => b.date.localeCompare(a.date))

  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date.split('-')[0]
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {} as Record<string, BlogPost[]>)

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a))

  function formatDate(dateStr: string) {
    const [year, month, day] = dateStr.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <>
      {years.map(year => (
        <div key={year}>
          <h3>{year}</h3>
          <ul>
            {postsByYear[year].map(post => (
              <li key={post.route}>
                <Link href={post.route}>
                  {post.title}
                </Link>
                {' - '}
                {formatDate(post.date)}
                {post.description && (
                  <p style={{ fontSize: '0.9em', color: '#666', marginTop: '0.25rem' }}>
                    {post.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}