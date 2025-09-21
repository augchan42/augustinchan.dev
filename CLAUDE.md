# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Augustin Chan's personal website/portfolio built with **Nextra** (Next.js documentation framework). The site serves as both a portfolio showcasing projects and a blog with technical posts about AI, Web3, and software development.

## Tech Stack

- **Framework**: Next.js 13+ with Nextra docs theme
- **Language**: TypeScript
- **Styling**: Built-in Nextra theme styling
- **Package Manager**: pnpm (as indicated in README)
- **Content**: MDX files for all pages and blog posts

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

### Core Configuration
- `next.config.js` - Basic Nextra configuration with docs theme
- `theme.config.tsx` - Nextra theme customization (logo, navbar, footer, project links)
- `package.json` - Dependencies and scripts

### Content Organization
- `pages/index.mdx` - Portfolio homepage with comprehensive project listings and bio
- `pages/blog.mdx` - Blog listing page
- `pages/posts/` - All blog posts as MDX files with date-prefixed naming
- `pages/_meta.json` - Top-level navigation configuration

### Navigation Structure
The site uses Nextra's file-based routing with `_meta.json` files defining navigation:
- **Portfolio** (index) - Main landing page
- **Blog** - Blog post listings
- **Posts** - Hidden directory containing individual blog posts
- **Contact** - External mailto link

### Content Patterns
- Blog posts follow naming convention: `YYYY-MM-DD-title.mdx`
- Posts cover technical topics: AI/ML, Web3, React development, architecture decisions
- All content is in MDX format supporting both markdown and React components

## Key Features
- Responsive Nextra docs theme
- External project link in navbar (8-Bit Oracle)
- GitHub integration for documentation repository
- Contact via email link in navigation
- Extensive blog archive with technical content

## Content Management
- Add new blog posts as MDX files in `pages/posts/` with date prefix
- Update navigation by modifying `pages/_meta.json`
- Theme customization happens in `theme.config.tsx`
- All pages support full MDX capabilities (markdown + React components)

## Screenshots
To check the latest screenshot from browser tools:
```bash
ls -la ~/Downloads/mcp-screenshots/*.png | tail -1
```
Then read the file with the Read tool using the full path.