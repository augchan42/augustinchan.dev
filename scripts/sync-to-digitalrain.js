#!/usr/bin/env node

/**
 * Sync content from augustinchan.dev to digitalrain-site
 *
 * This script copies:
 * - Blog posts (content/posts/*.mdx)
 * - Shared lib files (app/lib/posts.ts)
 * - Shared components (app/components/MDXContent.tsx)
 *
 * Usage:
 *   node scripts/sync-to-digitalrain.js [target-repo-path]
 *
 * If no target path provided, defaults to ../digitalrain-site
 */

const fs = require('fs');
const path = require('path');

const TARGET_REPO = process.argv[2] || path.join(__dirname, '../../digitalrain-site');
const SOURCE_REPO = path.join(__dirname, '..');

console.log('🔄 Syncing content from augustinchan.dev to digitalrain-site...\n');
console.log(`Source: ${SOURCE_REPO}`);
console.log(`Target: ${TARGET_REPO}\n`);

// Check if target repo exists
if (!fs.existsSync(TARGET_REPO)) {
  console.error(`❌ Target repository not found at: ${TARGET_REPO}`);
  process.exit(1);
}

/**
 * Copy directory recursively
 */
function copyDirectory(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Copy a single file
 */
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

/**
 * Copy file with content transformation
 */
function copyFileWithTransform(src, dest, transformFn) {
  const content = fs.readFileSync(src, 'utf8');
  const transformed = transformFn(content);

  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.writeFileSync(dest, transformed, 'utf8');
}

// 1. Sync blog posts
console.log('📝 Syncing blog posts...');
const postsSource = path.join(SOURCE_REPO, 'content/posts');
const postsTarget = path.join(TARGET_REPO, 'content/posts');

if (fs.existsSync(postsSource)) {
  copyDirectory(postsSource, postsTarget);
  const postCount = fs.readdirSync(postsSource).filter(f => f.endsWith('.mdx')).length;
  console.log(`✅ Copied ${postCount} blog posts\n`);
} else {
  console.log('⚠️  No posts directory found\n');
}

// 2. Sync lib/posts.ts with path adjustments
console.log('📚 Syncing lib/posts.ts...');
const postsLibSource = path.join(SOURCE_REPO, 'app/lib/posts.ts');
const postsLibTarget = path.join(TARGET_REPO, 'src/lib/posts.ts');

if (fs.existsSync(postsLibSource)) {
  copyFile(postsLibSource, postsLibTarget);
  console.log('✅ Copied lib/posts.ts\n');
} else {
  console.log('⚠️  lib/posts.ts not found\n');
}

// 3. Sync MDXContent component with Digital Rain styling
console.log('🎨 Syncing MDXContent component...');
const mdxComponentSource = path.join(SOURCE_REPO, 'app/components/MDXContent.tsx');
const mdxComponentTarget = path.join(TARGET_REPO, 'src/components/MDXContent.tsx');

if (fs.existsSync(mdxComponentSource)) {
  // Transform MDXContent to use Digital Rain theme colors
  copyFileWithTransform(mdxComponentSource, mdxComponentTarget, (content) => {
    return content
      // Keep the structure but preserve for Digital Rain theming
      .replace(/color: '#666'/g, "color: 'rgb(156, 163, 175)'") // text-gray-400
      .replace(/color: '#555'/g, "color: 'rgb(209, 213, 219)'") // text-gray-300
      .replace(/color: '#0066cc'/g, "color: 'rgb(250, 204, 21)'") // yellow-400 for links
      .replace(/backgroundColor: '#f5f5f5'/g, "backgroundColor: 'rgb(31, 41, 55)'") // gray-800
      .replace(/borderLeft: '4px solid #ddd'/g, "borderLeft: '4px solid rgb(75, 85, 99)'"); // gray-600
  });
  console.log('✅ Copied and styled MDXContent.tsx\n');
} else {
  console.log('⚠️  MDXContent.tsx not found\n');
}

console.log('✨ Sync complete!\n');
console.log('Next steps:');
console.log('1. Review synced files in digitalrain-site');
console.log('2. Commit changes to digitalrain-site repository');
console.log('3. Deploy to see changes live');
