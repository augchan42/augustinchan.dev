import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const siteUrl = 'https://augustinchan.dev'

// Read all posts
const postsDirectory = path.join(process.cwd(), 'content/posts')
const fileNames = fs.readdirSync(postsDirectory)

const posts = fileNames
  .filter(fileName => fileName.endsWith('.mdx'))
  .map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    // Extract date from filename if not in frontmatter
    let date = data.date
    if (!date) {
      const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/)
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
      tag: data.tag,
    }
  })
  .filter(post => post.date !== '1970-01-01')
  .sort((a, b) => b.date.localeCompare(a.date))

// Create feed
const feed = new Feed({
  title: 'Augustin Chan',
  description: 'Building systems that reason. Writing about AI, Web3, and software engineering.',
  id: siteUrl,
  link: siteUrl,
  language: 'en',
  image: `${siteUrl}/img/Xrn0Id68_400x400.jpg`,
  favicon: `${siteUrl}/favicon.ico`,
  copyright: `Copyright ${new Date().getFullYear()} Augustin Chan`,
  updated: new Date(),
  generator: 'Feed for Node.js',
  feedLinks: {
    rss2: `${siteUrl}/rss.xml`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: {
    name: 'Augustin Chan',
    email: 'aug@digitalrain.studio',
    link: siteUrl,
  },
})

// Add posts to feed
posts.forEach(post => {
  const postUrl = `${siteUrl}/posts/${post.slug}`
  const categories = post.tag
    ? post.tag.split(',').map(t => ({ name: t.trim() }))
    : []

  feed.addItem({
    title: post.title,
    id: postUrl,
    link: postUrl,
    description: post.description || `Blog post: ${post.title}`,
    date: new Date(post.date),
    category: categories,
    author: [{
      name: 'Augustin Chan',
      email: 'aug@digitalrain.studio',
      link: siteUrl,
    }],
  })
})

// Write RSS feed to public directory
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, 'rss.xml'), feed.rss2())
fs.writeFileSync(path.join(publicDir, 'atom.xml'), feed.atom1())

console.log('✓ Generated RSS and Atom feeds')
