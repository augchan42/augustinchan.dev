import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../app/lib/posts'

// Force cache invalidation - 2025-09-27T09:57:00Z

function formatDateUTC(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d)) // avoid TZ issues on Vercel
  return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

export default function BlogList() {
  const posts = getAllPosts()

  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4)
    ;(acc[year] ||= []).push(post)
    return acc
  }, {})

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a))

  return (
    <div style={{ maxWidth: '800px' }}>
      {years.map(year => (
        <div key={year} style={{ marginBottom: '2.5rem' }}>
          <h3 style={{
            borderBottom: '2px solid var(--nx-colors-border)',
            paddingBottom: '0.5rem',
            marginBottom: '1.5rem',
            fontSize: '1.4em',
            fontWeight: 'bold',
            color: 'var(--nx-colors-foreground)'
          }}>
            {year}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {postsByYear[year].map(post => (
              <article key={post.slug} style={{
                padding: '1.25rem',
                border: '1px solid var(--nx-colors-border)',
                borderRadius: '8px',
                backgroundColor: 'var(--nx-colors-card)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <Link
                    href={`/posts/${post.slug}`}
                    style={{
                      fontSize: '1.1em',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      color: 'var(--nx-colors-foreground)'
                    }}
                  >
                    {post.title}
                  </Link>
                </div>
                <div style={{
                  fontSize: '0.9em',
                  color: 'var(--nx-colors-muted-foreground)',
                  marginBottom: post.description ? '0.75rem' : '0'
                }}>
                  {formatDateUTC(post.date)}
                </div>
                {post.description && (
                  <p style={{
                    fontSize: '0.95em',
                    color: 'var(--nx-colors-muted-foreground)',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {post.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
