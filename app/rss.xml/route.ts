import { getAllPosts } from '../lib/posts'

export const dynamic = 'force-static'

export async function GET() {
  const posts = getAllPosts()
  const siteUrl = 'https://augustinchan.dev'
  const buildDate = new Date().toUTCString()

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Augustin Chan</title>
    <link>${siteUrl}</link>
    <description>Building systems that reason. Writing about AI, Web3, and software engineering.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>Next.js</generator>
    <webMaster>aug@digitalrain.studio (Augustin Chan)</webMaster>
    <managingEditor>aug@digitalrain.studio (Augustin Chan)</managingEditor>
    <copyright>Copyright ${new Date().getFullYear()} Augustin Chan</copyright>
    <image>
      <url>${siteUrl}/img/Xrn0Id68_400x400.jpg</url>
      <title>Augustin Chan</title>
      <link>${siteUrl}</link>
    </image>
${posts.map(post => {
  const postUrl = `${siteUrl}/posts/${post.slug}`
  const pubDate = new Date(post.date).toUTCString()
  const description = post.description || `Blog post: ${post.title}`
  const categories = post.tag
    ? post.tag.split(',').map(t => t.trim()).filter(Boolean)
    : []

  return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <author>aug@digitalrain.studio (Augustin Chan)</author>
${categories.map(cat => `      <category><![CDATA[${cat}]]></category>`).join('\n')}
    </item>`
}).join('\n')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
