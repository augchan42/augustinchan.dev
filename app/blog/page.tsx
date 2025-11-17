import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import { cardStyles, tagStyles, textStyles, headingStyles } from '../lib/styles'

export const metadata = {
  title: 'Blog | Augustin Chan',
  description: 'Thoughts on building systems that reason, AI architecture decisions, Web3 experiments, and the occasionally crushing anxiety of optimizing for search engines that might not exist in three years.',
  keywords: ['AI', 'Machine Learning', 'Web3', 'Software Engineering', 'React', 'Next.js', 'TypeScript', 'Blog', 'DSPy', 'LLMs', 'Tech Noir'],
  authors: [{ name: 'Augustin Chan', url: 'https://augustinchan.dev' }],
  creator: 'Augustin Chan',
  publisher: 'Augustin Chan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://augustinchan.dev/blog',
    title: 'Blog | Augustin Chan',
    description: 'Thoughts on building systems that reason, AI architecture decisions, Web3 experiments, and the occasionally crushing anxiety of optimizing for search engines that might not exist in three years.',
    siteName: 'Augustin Chan',
    images: [
      {
        url: 'https://augustinchan.dev/img/Xrn0Id68_400x400.jpg',
        width: 400,
        height: 400,
        alt: 'Augustin Chan Blog - Technical posts about AI, Web3, and software development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Augustin Chan',
    description: 'Thoughts on building systems that reason, AI architecture decisions, Web3 experiments, and the crushing anxiety of optimizing for search engines that might not exist.',
    images: ['https://augustinchan.dev/img/Xrn0Id68_400x400.jpg'],
    creator: '@augchan42',
  },
  alternates: {
    canonical: 'https://augustinchan.dev/blog',
  },
}

function formatDateUTC(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d)) // avoid TZ issues
  return dt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  // Group posts by year
  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4)
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a))

  // Breadcrumb schema for SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://augustinchan.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://augustinchan.dev/blog',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <h1>Blog</h1>
        <p style={{ maxWidth: '700px', lineHeight: '1.6' }}>
          Thoughts on building systems that reason, AI architecture decisions, Web3 experiments,
          and the occasionally crushing anxiety of optimizing for search engines that might not exist in three years.
        </p>

      <div style={{ maxWidth: '800px', marginTop: '2rem' }}>
        {years.map(year => (
          <div key={year} style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              borderBottom: '2px solid var(--color-border-strong, #333)',
              paddingBottom: '0.5rem',
              marginBottom: '1.5rem',
              fontSize: '1.4em',
              fontWeight: 'bold',
              ...textStyles.primary,
            }}>
              {year}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--card-gap, 1.5rem)' }}>
              {postsByYear[year].map(post => {
                const tags = post.tag
                  ? post.tag.split(',').map(t => t.trim()).filter(Boolean).slice(0, 5)
                  : []

                return (
                  <article key={post.slug} style={{
                    ...cardStyles,
                    padding: '1.25rem',
                  }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <Link
                        href={`/posts/${post.slug}`}
                        style={{
                          fontSize: '1.1em',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          ...textStyles.primary,
                        }}
                      >
                        {post.title}
                      </Link>
                    </div>
                    <div style={{
                      ...textStyles.small,
                      marginBottom: post.description || tags.length > 0 ? '0.75rem' : '0'
                    }}>
                      {formatDateUTC(post.date)}
                      {post.readingTimeMinutes && (
                        <>
                          {' • '}
                          {post.readingTimeMinutes} min read
                        </>
                      )}
                    </div>
                    {post.description && (
                      <p style={{
                        fontSize: '0.95em',
                        ...textStyles.secondary,
                        margin: '0 0 0.75rem 0',
                        lineHeight: '1.5'
                      }}>
                        {post.description}
                      </p>
                    )}
                    {tags.length > 0 && (
                      <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        marginTop: '0.5rem'
                      }}>
                        {tags.map(tag => (
                          <span key={tag} style={tagStyles}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <p>No blog posts found.</p>
      )}
      </div>
    </>
  )
}