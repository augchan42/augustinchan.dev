# augustinchan.dev

Augustin Chan's personal website and portfolio built with Next.js 15 and MDX.

**Live Site:** [augustinchan.dev](https://augustinchan.dev)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Inline styles with custom design system
- **Content:** MDX files with gray-matter frontmatter
- **Package Manager:** pnpm
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics
- **SEO:** JSON-LD structured data, dynamic OG images

## Features

- 📝 Blog with 42+ technical posts on AI, Web3, and software development
- 🎨 Custom minimalist design aesthetic
- 🔍 SEO-optimized with structured data and dynamic Open Graph images
- 📊 Related posts for improved content discovery
- 🚀 Edge-optimized image generation
- 📱 Responsive design
- ⚡ Optimized caching strategy

## Local Development

Install dependencies:
```bash
pnpm i
```

Start development server:
```bash
pnpm dev
```

Visit the site at `localhost:3000`

Build for production:
```bash
pnpm build
```

Start production server:
```bash
pnpm start
```

## Project Structure

```
app/
├── api/og/          # Dynamic OG image generation
├── blog/            # Blog listing page
├── components/      # React components (MDXContent, GoogleAnalytics)
├── lib/             # Utility functions (posts.ts)
├── posts/[slug]/    # Dynamic blog post pages
├── layout.tsx       # Root layout with metadata
└── page.tsx         # Homepage

content/
└── posts/           # Blog post MDX files (YYYY-MM-DD-title.mdx)

docs/                # Project documentation
└── SEO_IMPROVEMENTS.md

public/
├── img/             # Images
└── _assets/         # Static files (CV, etc.)
```

## Adding Blog Posts

1. Create an MDX file in `content/posts/` following the naming convention: `YYYY-MM-DD-title.mdx`

2. Add frontmatter:
```yaml
---
title: Your Post Title
date: 2025/10/16
description: A brief description of your post
tag: ai, web3, react
author: Aug
---
```

3. Write your content in MDX (markdown + React components)

4. The post will automatically appear in:
   - Blog listing page (sorted by date)
   - XML sitemap
   - Related posts on other articles
   - Dynamic OG image generation

## SEO Features

See [docs/SEO_IMPROVEMENTS.md](./docs/SEO_IMPROVEMENTS.md) for detailed documentation.

- ✅ JSON-LD structured data (BlogPosting, Person schemas)
- ✅ Dynamic Open Graph images (1200x630)
- ✅ Optimized Cache-Control headers
- ✅ XML sitemap with all posts
- ✅ Robots.txt configuration
- ✅ Related posts for internal linking
- ✅ Proper meta tags and social sharing

## Performance

- Static site generation for all pages
- Edge-optimized OG image generation
- Smart caching strategy:
  - Static assets: 1 year cache
  - Blog posts: 1 hour cache with 1-day stale-while-revalidate
  - Default pages: 5 minutes cache

## License

MIT License
