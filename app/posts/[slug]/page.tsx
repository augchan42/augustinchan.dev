import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../../lib/posts'
import MDXContent from '../../components/MDXContent'
import { cardStyles, headingStyles, textStyles } from '../../lib/styles'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

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

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Augustin Chan',
      description: 'The requested blog post could not be found.',
    }
  }

  const postUrl = `https://augustinchan.dev/posts/${slug}`
  const postDescription = post.description || `Blog post: ${post.title}`
  const ogImageUrl = 'https://augustinchan.dev/img/Xrn0Id68_400x400.jpg'

  return {
    title: `${post.title} | Augustin Chan`,
    description: postDescription,
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
      type: 'article',
      locale: 'en_US',
      url: postUrl,
      title: post.title,
      description: postDescription,
      siteName: 'Augustin Chan',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Augustin Chan'],
      section: 'Technology',
      tags: ['AI', 'Machine Learning', 'Web3', 'Software Engineering'],
      images: [
        {
          url: ogImageUrl,
          width: 400,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: postDescription,
      images: [ogImageUrl],
      creator: '@augchan42',
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const postUrl = `https://augustinchan.dev/posts/${slug}`
  const postDescription = post.description || `Blog post: ${post.title}`
  const relatedPosts = getRelatedPosts(slug, 3)

  // Parse tags from comma-separated string
  const keywords = post.tag
    ? post.tag.split(',').map(t => t.trim()).filter(Boolean)
    : []

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: postDescription,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Augustin Chan',
      url: 'https://augustinchan.dev',
      sameAs: [
        'https://x.com/augchan42',
        'https://github.com/augchan42',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Augustin Chan',
      url: 'https://augustinchan.dev',
    },
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    image: 'https://augustinchan.dev/img/Xrn0Id68_400x400.jpg',
    ...(keywords.length > 0 && { keywords }),
    ...(post.readingTimeMinutes && { timeRequired: `PT${post.readingTimeMinutes}M` }),
  }

  // Breadcrumb navigation for SEO
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={headingStyles.primary}>
            {post.title}
          </h1>
          <div style={{
            ...textStyles.muted,
            fontSize: '1em',
            marginBottom: '1rem'
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
              fontSize: '1.1em',
              ...textStyles.secondary,
              fontStyle: 'italic',
              marginBottom: '2rem'
            }}>
              {post.description}
            </p>
          )}
        </header>

        <MDXContent content={post.content} />

        {relatedPosts.length > 0 && (
          <aside style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '2px solid var(--color-border-default, #ddd)',
          }}>
            <h2 style={headingStyles.tertiary}>
              Related Posts
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--card-gap, 1.5rem)',
            }}>
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.slug} style={{
                  ...cardStyles,
                  padding: '1.25rem',
                }}>
                  <Link
                    href={`/posts/${relatedPost.slug}`}
                    style={{
                      fontSize: '1.1em',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      ...textStyles.primary,
                    }}
                  >
                    {relatedPost.title}
                  </Link>
                  {relatedPost.description && (
                    <p style={{
                      fontSize: '0.95em',
                      ...textStyles.secondary,
                      margin: '0.5rem 0 0 0',
                      lineHeight: '1.5',
                    }}>
                      {relatedPost.description}
                    </p>
                  )}
                  <div style={{
                    ...textStyles.small,
                    marginTop: '0.5rem',
                  }}>
                    {formatDateUTC(relatedPost.date)}
                  </div>
                </article>
              ))}
            </div>
          </aside>
        )}
      </article>
    </>
  )
}