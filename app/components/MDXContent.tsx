'use client'

import { MDXProvider } from '@mdx-js/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { useEffect, useState } from 'react'

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
      borderLeft: '4px solid #ddd',
      paddingLeft: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      fontStyle: 'italic',
      color: '#666'
    }} {...props} />
  ),
  code: (props: any) => (
    <code style={{
      backgroundColor: '#f5f5f5',
      padding: '0.2rem 0.4rem',
      borderRadius: '3px',
      fontSize: '0.9em'
    }} {...props} />
  ),
  pre: (props: any) => (
    <pre style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderRadius: '5px',
      overflow: 'auto',
      marginBottom: '1rem'
    }} {...props} />
  ),
  a: (props: any) => (
    <a style={{ color: '#0066cc', textDecoration: 'underline' }} {...props} />
  ),
}

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null)

  useEffect(() => {
    async function compileMDX() {
      try {
        const mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
            format: 'mdx',
          },
        })
        setMdxSource(mdxSource)
      } catch (error) {
        console.error('Failed to compile MDX:', error)
      }
    }

    compileMDX()
  }, [content])

  if (!mdxSource) {
    return <div>Loading...</div>
  }

  return (
    <MDXProvider components={components}>
      <div style={{ maxWidth: '800px' }}>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </MDXProvider>
  )
}