import Link from 'next/link'
import { getAllPosts, getPostBySlug } from './lib/posts'

function formatDateUTC(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d))
  return dt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export default function HomePage() {
  // Structured data for Person schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Augustin Chan',
    url: 'https://augustinchan.dev',
    image: 'https://augustinchan.dev/img/Xrn0Id68_400x400.jpg',
    jobTitle: 'Software Engineer & Founder',
    description: 'Building systems that reason. Founder of Digital Rain Studios, creator of 8-Bit Oracle.',
    sameAs: [
      'https://x.com/aug_digitalrain',
      'https://x.com/augchan42',
      'https://github.com/augchan42',
      'https://8bitoracle.ai',
    ],
    knowsAbout: ['AI', 'Machine Learning', 'Web3', 'Software Engineering', 'React', 'Next.js', 'TypeScript'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'UC San Diego',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Digital Rain Studios',
      url: 'https://digitalrain.studio',
    },
  }

  // Get featured post
  const featuredPost = getPostBySlug('2025-09-02-dspy-voice-evolution-authenticity')

  // Get recent posts (excluding featured)
  const allPosts = getAllPosts()
  const recentPosts = allPosts.filter(p => p.slug !== '2025-09-02-dspy-voice-evolution-authenticity').slice(0, 5)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div>
      <p style={{ fontSize: '1.1em', marginBottom: '3rem' }}>
        Building systems that reason. Writing about AI, Web3, and software engineering.
      </p>

      {/* Featured Post */}
      {featuredPost && (
        <article style={{
          marginBottom: '4rem',
          padding: '2rem',
          border: '2px solid var(--border-strong)',
          borderRadius: '8px',
          backgroundColor: 'var(--bg-surface)',
        }}>
          <div style={{
            fontSize: '0.85em',
            fontWeight: 'bold',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Featured Post
          </div>
          <h2 style={{ fontSize: '2em', marginBottom: '0.5rem' }}>
            <Link
              href={`/posts/${featuredPost.slug}`}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
              }}
            >
              {featuredPost.title}
            </Link>
          </h2>
          <div style={{
            color: 'var(--text-subtle)',
            fontSize: '0.9em',
            marginBottom: '1rem'
          }}>
            {formatDateUTC(featuredPost.date)}
            {featuredPost.readingTimeMinutes && (
              <>
                {' • '}
                {featuredPost.readingTimeMinutes} min read
              </>
            )}
          </div>
          {featuredPost.description && (
            <p style={{
              fontSize: '1.1em',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              {featuredPost.description}
            </p>
          )}
          <Link
            href={`/posts/${featuredPost.slug}`}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--button-bg)',
              color: 'var(--button-text)',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.95em',
              fontWeight: 'bold'
            }}
          >
            Read Full Post →
          </Link>
        </article>
      )}

      {/* Recent Posts */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '2rem' }}>Recent Posts</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {recentPosts.map(post => {
            const tags = post.tag
              ? post.tag.split(',').map(t => t.trim()).filter(Boolean).slice(0, 4)
              : []

            return (
              <article key={post.slug} style={{
                padding: '1.5rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface)',
              }}>
                <h3 style={{ fontSize: '1.3em', marginBottom: '0.5rem' }}>
                  <Link
                    href={`/posts/${post.slug}`}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {post.title}
                  </Link>
                </h3>
                <div style={{
                  color: 'var(--text-subtle)',
                  fontSize: '0.85em',
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
                    color: 'var(--text-secondary)',
                    fontSize: '0.95em',
                    lineHeight: '1.5',
                    margin: tags.length > 0 ? '0 0 0.75rem 0' : '0'
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
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75em',
                          padding: '0.25rem 0.5rem',
                          backgroundColor: 'var(--tag-bg)',
                          color: 'var(--tag-text)',
                          borderRadius: '4px',
                          textTransform: 'lowercase'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              border: '2px solid var(--border-strong)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.95em',
              fontWeight: 'bold'
            }}
          >
            View All Posts →
          </Link>
        </div>
      </section>

      {/* Condensed About */}
      <section style={{
        marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '2px solid var(--border-subtle)'
      }}>
        <h2 style={{ fontSize: '1.5em', marginBottom: '1.5rem' }}>About</h2>
        <p>
          I'm a builder specializing in AI-powered experiences and Web3 through <a href="https://digitalrain.studio/" target="_blank" rel="noopener noreferrer">Digital Rain Studios</a>.
          Currently working on <a href="https://8bitoracle.ai" target="_blank" rel="noopener noreferrer">8-Bit Oracle</a> (tech-noir I-Ching) and the <a href="https://qdayanon.com" target="_blank" rel="noopener noreferrer">QDayAnon Content Engine</a> (AI research platform).
        </p>
        <p>
          I build everything AI-assisted and write about the technical challenges along the way.
          Find me on <a href="https://x.com/aug_digitalrain" target="_blank" rel="noopener noreferrer">X</a> or <a href="https://github.com/augchan42/" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link
            href="/about"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.95em'
            }}
          >
            More About Me →
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}
