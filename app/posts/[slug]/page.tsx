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
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Augustin Chan`,
    description: post.description || `Blog post: ${post.title}`,
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