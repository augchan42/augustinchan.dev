# ADR 0001: Static RSS Feed Generation with Prebuild Script

## Status

Accepted (2025-12-25)

## Context

The blog needed an RSS feed to allow readers to subscribe and follow new posts. The site uses Next.js 16 with static export (`output: 'export'`) for deployment to static hosting platforms like Vercel.

### Initial Approach

Initially, we implemented RSS feed generation using a Next.js App Router route handler (`app/rss.xml/route.ts`) with `export const dynamic = 'force-static'`. This worked in Next.js 15 but failed in Next.js 16 with the following error:

```
Error [PageNotFoundError]: Cannot find module for page: /rss.xml
```

### Problem

Next.js 16 enforces stricter rules for static exports:
- Route handlers (API routes) require server-side runtime
- `output: 'export'` generates purely static HTML/CSS/JS with no server
- Route handlers are incompatible with static export mode in Next.js 16

### Requirements

1. Generate RSS and Atom feeds for all blog posts
2. Work with Next.js static export (`output: 'export'`)
3. Update automatically when new posts are added
4. Follow RSS 2.0 and Atom 1.0 standards
5. Include proper metadata (author, categories, dates)

### Alternatives Considered

#### Option 1: Remove Static Export
- **Pros**: Would allow route handlers to work
- **Cons**: Requires server deployment, increases hosting costs, loses static hosting benefits (CDN, edge caching)
- **Decision**: Rejected - static export is core to deployment strategy

#### Option 2: Manual RSS File Creation
- **Pros**: Simple, no build scripts needed
- **Cons**: Must manually update XML on every new post, error-prone, unsustainable
- **Decision**: Rejected - doesn't scale with 51+ blog posts

#### Option 3: Client-Side RSS Generation
- **Pros**: Could work with JavaScript
- **Cons**: RSS readers don't execute JavaScript, defeats purpose of RSS
- **Decision**: Rejected - incompatible with RSS reader expectations

#### Option 4: Prebuild Script with `feed` Package (CHOSEN)
- **Pros**:
  - Works perfectly with static export
  - Industry-standard `feed` npm package
  - Automatic generation on every build
  - Generates both RSS 2.0 and Atom 1.0
  - Separates concerns (feed logic separate from pages)
  - Well-documented approach in Next.js community
- **Cons**:
  - Adds build step
  - Requires maintaining separate script
- **Decision**: Accepted - best balance of functionality and maintainability

## Decision

We will generate RSS and Atom feeds using a **prebuild script** that runs before Next.js builds the site.

### Implementation

1. **Install `feed` package** as dev dependency
   ```bash
   pnpm add -D feed
   ```

2. **Create generation script** at `scripts/generate-rss.mjs`
   - Reads all posts from `content/posts/`
   - Uses `feed` package to create RSS 2.0 and Atom 1.0 feeds
   - Writes feeds to `public/rss.xml` and `public/atom.xml`

3. **Add prebuild hook** to `package.json`
   ```json
   {
     "scripts": {
       "prebuild": "node scripts/generate-rss.mjs",
       "build": "next build"
     }
   }
   ```

4. **Automatic inclusion** in build output
   - Next.js copies `public/` folder contents to `out/` during static export
   - RSS feeds automatically available at `/rss.xml` and `/atom.xml`

### Technical Details

- **Script location**: `scripts/generate-rss.mjs`
- **Output location**: `public/rss.xml`, `public/atom.xml`
- **Final location**: `out/rss.xml`, `out/atom.xml` (after build)
- **Package used**: `feed@5.1.0`
- **Feed format**: RSS 2.0 and Atom 1.0 (both generated)

## Consequences

### Positive

✅ **Compatible with Static Export**: Works perfectly with Next.js 16's `output: 'export'`

✅ **Automatic Updates**: Runs on every `pnpm build`, ensuring feeds always reflect latest posts

✅ **Standards Compliant**: Uses battle-tested `feed` package, generates valid RSS 2.0 and Atom 1.0

✅ **Zero Runtime Overhead**: Feeds are static files, no server-side processing needed

✅ **Dual Format Support**: Provides both RSS and Atom for maximum compatibility

✅ **Separation of Concerns**: Feed generation logic isolated from page components

✅ **Development Workflow**: Script can be run standalone for testing (`node scripts/generate-rss.mjs`)

### Negative

⚠️ **Build Time Dependency**: Must run script before deployment (handled by prebuild hook)

⚠️ **No Dynamic Updates**: Feeds only update on build, not on-demand (acceptable for static blog)

⚠️ **Script Maintenance**: Must maintain separate script file (minimal ongoing cost)

### Neutral

ℹ️ **Feed Size**: 61-62KB for 51 posts (reasonable, well within limits)

ℹ️ **Post Parsing**: Script duplicates post-reading logic from `app/lib/posts.ts` (could be DRY'd if needed)

## References

### Research Sources

- [Add an RSS Feed to a Next.js Blog · DiDoesDigital](https://didoesdigital.com/blog/nextjs-blog-09-rss/)
- [Next.js: RSS with Static Site Generation](https://jonathanmh.com/p/next-js-rss-with-static-site-generation/)
- [Creating an RSS Feed in your Next.js Project - DEV Community](https://dev.to/promathieuthiry/creating-an-rss-feed-in-your-nextjs-project-20em)
- [Adding RSS Feeds to a Next.js Static Blog](https://subaud.io/blog/adding-rss-feeds/)
- [How to generate RSS feed in Next.js | Kontent.ai](https://kontent.ai/blog/how-to-generate-rss-feed-in-next-js/)
- [Next.js: How to Build an RSS Feed | Dave Gray](https://www.davegray.codes/posts/nextjs-how-to-build-an-rss-feed)

### Related Files

- `scripts/generate-rss.mjs` - RSS generation script
- `package.json` - Prebuild hook configuration
- `public/rss.xml` - Generated RSS 2.0 feed
- `public/atom.xml` - Generated Atom 1.0 feed
- `app/lib/posts.ts` - Post reading utilities

### Related Decisions

- Next.js 16 upgrade (2025-12-25)
- Static export strategy for hosting
- MDX-based blog architecture

## Notes

This decision was made during the Next.js 15 → 16 upgrade when route handlers became incompatible with static export. The prebuild script approach is the recommended pattern in the Next.js community for static RSS generation and aligns with the site's static-first deployment strategy.

The implementation successfully generates feeds for 51+ blog posts covering AI/ML, Web3, React, and software architecture topics, providing readers with standard RSS/Atom subscription options.
