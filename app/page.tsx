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
          border: '2px solid #333',
          borderRadius: '8px',
          backgroundColor: '#fafafa',
        }}>
          <div style={{
            fontSize: '0.85em',
            fontWeight: 'bold',
            color: '#666',
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
                color: '#333',
              }}
            >
              {featuredPost.title}
            </Link>
          </h2>
          <div style={{
            color: '#888',
            fontSize: '0.9em',
            marginBottom: '1rem'
          }}>
            {formatDateUTC(featuredPost.date)}
          </div>
          {featuredPost.description && (
            <p style={{
              fontSize: '1.1em',
              color: '#555',
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
              backgroundColor: '#333',
              color: '#fff',
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
          {recentPosts.map(post => (
            <article key={post.slug} style={{
              padding: '1.5rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#fafafa',
            }}>
              <h3 style={{ fontSize: '1.3em', marginBottom: '0.5rem' }}>
                <Link
                  href={`/posts/${post.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                  }}
                >
                  {post.title}
                </Link>
              </h3>
              <div style={{
                color: '#888',
                fontSize: '0.85em',
                marginBottom: '0.75rem'
              }}>
                {formatDateUTC(post.date)}
              </div>
              {post.description && (
                <p style={{
                  color: '#555',
                  fontSize: '0.95em',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {post.description}
                </p>
              )}
            </article>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              border: '2px solid #333',
              color: '#333',
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
        borderTop: '2px solid #ddd'
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
              border: '1px solid #333',
              color: '#333',
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