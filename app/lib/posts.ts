import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  description?: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'pages_backup/posts')

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { data, content } = matter(fileContents)

      // Extract date from filename if not in frontmatter
      let date = data.date
      if (!date) {
        const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/)
        if (dateMatch) {
          date = dateMatch[1]
        }
      } else if (typeof date === 'string') {
        // Normalize date format (handle 2025/09/27 -> 2025-09-27)
        date = date.slice(0, 10).replace(/[/.]/g, '-')
      }

      return {
        slug,
        title: data.title || slug,
        date: date || '1970-01-01',
        description: data.description,
        content,
      }
    })
    .filter(post => post.date !== '1970-01-01') // Filter out posts without valid dates
    .sort((a, b) => b.date.localeCompare(a.date))

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    // Extract date from filename if not in frontmatter
    let date = data.date
    if (!date) {
      const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/)
      if (dateMatch) {
        date = dateMatch[1]
      }
    } else if (typeof date === 'string') {
      // Normalize date format
      date = date.slice(0, 10).replace(/[/.]/g, '-')
    }

    return {
      slug,
      title: data.title || slug,
      date: date || '1970-01-01',
      description: data.description,
      content,
    }
  } catch (error) {
    return null
  }
}