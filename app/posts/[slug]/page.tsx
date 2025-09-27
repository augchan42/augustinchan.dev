import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import MDXContent from '../../components/MDXContent'

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
  const ogImageUrl = `https://augustinchan.dev/img/Xrn0Id68_400x400.jpg`

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

  return (
    <article>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5rem' }}>
          {post.title}
        </h1>
        <div style={{
          color: '#666',
          fontSize: '1em',
          marginBottom: '1rem'
        }}>
          {formatDateUTC(post.date)}
        </div>
        {post.description && (
          <p style={{
            fontSize: '1.1em',
            color: '#555',
            fontStyle: 'italic',
            marginBottom: '2rem'
          }}>
            {post.description}
          </p>
        )}
      </header>

      <MDXContent content={post.content} />
    </article>
  )
}