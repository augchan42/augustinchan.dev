# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Augustin Chan's personal website/portfolio built with **Next.js 15 (App Router)** and **MDX**. The site serves as both a portfolio showcasing projects and a blog with 42+ technical posts about AI, Web3, and software development.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Inline styles with custom design system (no CSS framework)
- **Content Management**: MDX files with gray-matter frontmatter parsing
- **Package Manager**: pnpm
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics
- **SEO**: JSON-LD structured data, dynamic OG images via @vercel/og

## Development Commands

Install dependencies:
```bash
pnpm i
```

Start development server:
```bash
pnpm dev
# or
npm run dev
```

Build for production:
```bash
pnpm build
# or
npm run build
```

Start production server:
```bash
pnpm start
# or
npm run start
```

Visit the development site at `localhost:3000`.

## Project Structure

```
app/
├── api/og/route.tsx           # Dynamic OG image generation (edge function)
├── blog/page.tsx              # Blog listing page with year grouping
├── components/
│   ├── MDXContent.tsx         # MDX renderer with syntax highlighting
│   └── GoogleAnalytics.tsx    # GA4 integration
├── lib/posts.ts               # Post retrieval and related posts logic
├── posts/[slug]/page.tsx      # Dynamic blog post pages with structured data
├── layout.tsx                 # Root layout with metadata and navigation
├── page.tsx                   # Homepage with Person schema
├── robots.ts                  # Dynamic robots.txt generation
└── sitemap.ts                 # Dynamic XML sitemap generation

content/
└── posts/                     # Blog post MDX files (YYYY-MM-DD-title.mdx)

docs/
└── SEO_IMPROVEMENTS.md        # Complete SEO documentation

public/
├── img/                       # Images and assets
└── _assets/                   # Static files (CV, etc.)
```

### Core Configuration Files
- `next.config.js` - MDX support, cache headers, optimizations
- `package.json` - Dependencies (Next.js 15, @vercel/og, MDX packages)
- `app/layout.tsx` - Global metadata, Open Graph, Twitter Card config
- `app/globals.css` - Minimal global styles

### Navigation Structure
The site uses Next.js App Router with file-based routing:
- **/** - Homepage/Portfolio with projects and bio
- **/blog** - Blog listing with posts grouped by year
- **/posts/[slug]** - Individual blog posts (42+ posts)
- External link: **8-Bit Oracle** (https://8bitoracle.ai)

### Content Patterns
- Blog posts: `YYYY-MM-DD-title.mdx` in `content/posts/`
- Frontmatter: `title`, `date`, `description`, `tag`, `author`
- Posts cover: AI/ML, Web3, React, architecture, DSPy, LLMs
- All content is MDX (markdown + React components)

## Key Features
- **SEO-Optimized**: JSON-LD structured data, dynamic OG images (1200x630)
- **Related Posts**: Automatic related content suggestions
- **Performance**: Smart caching (1hr for posts, 1yr for assets)
- **Analytics**: Vercel Analytics + Google Analytics 4
- **Responsive**: Custom minimalist design
- **Fast**: Edge-optimized image generation, static generation

## Content Management

### Adding New Blog Posts
1. Create file: `content/posts/YYYY-MM-DD-your-title.mdx`
2. Add frontmatter:
   ```yaml
   ---
   title: Your Post Title
   date: 2025/10/16
   description: Brief description for SEO
   tag: ai, web3, react
   author: Aug
   ---
   ```
3. Write content in MDX
4. Automatic features:
   - Appears in blog listing (sorted by date)
   - Added to XML sitemap
   - Gets dynamic OG image
   - Included in related posts
   - Receives BlogPosting structured data

### Updating Homepage
- Edit `app/page.tsx` (React component, not MDX)
- Update Person schema if professional info changes
- Inline styles for consistent design

## Important Implementation Details

### SEO Features (October 2025)
See `docs/SEO_IMPROVEMENTS.md` for comprehensive documentation.

Key implementations:
- **Structured Data**: BlogPosting schema on all posts, Person schema on homepage
- **OG Images**: Dynamic generation via `/api/og` route using @vercel/og
- **Caching**: Optimized headers (1yr static, 1hr content, stale-while-revalidate)
- **Related Posts**: `getRelatedPosts()` function in `app/lib/posts.ts`
- **Sitemap/Robots**: Dynamic generation in `app/sitemap.ts` and `app/robots.ts`

### Styling Approach
- **No CSS Framework**: All styles are inline React styles
- **Design System**: Consistent colors (#333 dark, #666 gray, #ddd borders)
- **Typography**: MS Sans Serif font, 20px base, 1.5em name
- **Layout**: 1000px max-width, centered, 2rem padding
- **Theme**: Minimal, clean, professional aesthetic

### MDX Processing
- Uses `@mdx-js/react` and `next-mdx-remote` for rendering
- `gray-matter` for frontmatter parsing
- `rehype-highlight` for code syntax highlighting
- `remark-gfm` for GitHub Flavored Markdown

### Performance Optimizations
- Static Site Generation (SSG) for all pages
- Edge Functions for OG image generation
- Vercel deployment with automatic optimization
- Smart cache headers prevent unnecessary refetches

## Development Workflow

### Testing Changes
```bash
pnpm dev              # Start dev server
pnpm build            # Test production build
pnpm start            # Run production build locally
```

### Verifying SEO
- Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
- Check OG images: Visit `/api/og?title=Test&description=Testing`
- Validate sitemap: Visit `/sitemap.xml`
- Check robots: Visit `/robots.txt`

## Screenshots
To check the latest screenshot from browser tools:
```bash
ls -la ~/Downloads/mcp-screenshots/*.png | tail -1
```
Then read the file with the Read tool using the full path.

## Common Tasks

### Update Navigation
Edit `app/layout.tsx` (lines 73-103) - the header nav is hardcoded in the root layout.

### Modify Blog Listing
Edit `app/blog/page.tsx` - controls grouping by year, styling, metadata.

### Change Site Metadata
Edit `app/layout.tsx` (lines 6-51) - controls global Open Graph, Twitter Cards, meta tags.

### Add New Page
Create new file in `app/` directory following App Router conventions. Pages automatically get layout and navigation.