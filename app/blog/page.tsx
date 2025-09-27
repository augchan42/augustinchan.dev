import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export const metadata = {
  title: 'Blog | Augustin Chan',
  description: 'Technical posts about AI, Machine Learning, Web3, and software development.',
  keywords: ['AI', 'Machine Learning', 'Web3', 'Software Engineering', 'React', 'Next.js', 'TypeScript', 'Blog'],
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
    description: 'Technical posts about AI, Machine Learning, Web3, and software development.',
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
    description: 'Technical posts about AI, Machine Learning, Web3, and software development.',
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

  return (
    <div>
      <h1>Blog</h1>
      <p>Technical posts about AI, Web3, and software development.</p>

      <div style={{ maxWidth: '800px', marginTop: '2rem' }}>
        {years.map(year => (
          <div key={year} style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              borderBottom: '2px solid #333',
              paddingBottom: '0.5rem',
              marginBottom: '1.5rem',
              fontSize: '1.4em',
              fontWeight: 'bold'
            }}>
              {year}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {postsByYear[year].map(post => (
                <article key={post.slug} style={{
                  padding: '1.25rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#fafafa',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <Link
                      href={`/posts/${post.slug}`}
                      style={{
                        fontSize: '1.1em',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#333'
                      }}
                    >
                      {post.title}
                    </Link>
                  </div>
                  <div style={{
                    fontSize: '0.9em',
                    color: '#666',
                    marginBottom: post.description ? '0.75rem' : '0'
                  }}>
                    {formatDateUTC(post.date)}
                  </div>
                  {post.description && (
                    <p style={{
                      fontSize: '0.95em',
                      color: '#555',
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

      {posts.length === 0 && (
        <p>No blog posts found.</p>
      )}
    </div>
  )
}