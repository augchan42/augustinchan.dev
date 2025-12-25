import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MDXContentProps {
  content: string
}

const components = {
  h1: (props: any) => <h1 style={{ fontSize: '2em', marginBottom: '1rem' }} {...props} />,
  h2: (props: any) => <h2 style={{ fontSize: '1.5em', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
  h3: (props: any) => <h3 style={{ fontSize: '1.25em', marginTop: '1.5rem', marginBottom: '0.75rem' }} {...props} />,
  p: (props: any) => <p style={{ marginBottom: '1rem', lineHeight: '1.6' }} {...props} />,
  ul: (props: any) => <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }} {...props} />,
  ol: (props: any) => <ol style={{ marginBottom: '1rem', paddingLeft: '2rem' }} {...props} />,
  blockquote: (props: any) => (
    <blockquote style={{
      borderLeft: '4px solid var(--color-border-default, #ddd)',
      paddingLeft: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      fontStyle: 'italic',
      color: 'var(--color-text-muted, #666)'
    }} {...props} />
  ),
  code: (props: any) => (
    <code style={{
      backgroundColor: 'var(--color-code-bg, #f5f5f5)',
      color: 'var(--color-code-text, #000)',
      padding: '0.2rem 0.4rem',
      borderRadius: 'var(--border-radius, 3px)',
      fontSize: '0.9em',
      fontFamily: 'var(--font-family-code, monospace)',
    }} {...props} />
  ),
  pre: (props: any) => (
    <pre style={{
      backgroundColor: 'var(--color-code-bg, #f5f5f5)',
      color: 'var(--color-code-text, #000)',
      padding: '1rem',
      borderRadius: 'var(--border-radius, 5px)',
      border: '1px solid var(--color-code-border, #ddd)',
      overflow: 'auto',
      marginBottom: '1rem',
      fontFamily: 'var(--font-family-code, monospace)',
    }} {...props} />
  ),
  a: (props: any) => (
    <a style={{
      color: 'var(--color-text-accent, #0066cc)',
      textDecoration: 'underline'
    }} {...props} />
  ),
}

export default async function MDXContent({ content }: MDXContentProps) {
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
    components,
  })

  return (
    <div style={{ maxWidth: '800px' }}>
      {mdxContent}
    </div>
  )
}
