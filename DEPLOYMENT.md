# Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## How It Works

1. When you push to the `main` branch
2. GitHub Actions builds your Next.js site as a static export
3. The built files are automatically pushed to `augchan42/augchan42.github.io`
4. GitHub Pages serves the site at your custom domain `augustinchan.dev`

## One-Time Setup Required

### 1. Create a GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a descriptive name like "Deploy to GitHub Pages"
4. Select the `repo` scope (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't be able to see it again)

### 2. Add the Token as a Repository Secret

1. Go to https://github.com/augchan42/augustinchan.dev/settings/secrets/actions
2. Click "New repository secret"
3. Name: `PAGES_DEPLOY_TOKEN`
4. Value: Paste the token you created
5. Click "Add secret"

### 3. Verify GitHub Pages is Enabled

1. Go to https://github.com/augchan42/augchan42.github.io/settings/pages
2. Ensure GitHub Pages is enabled
3. Source should be set to "Deploy from a branch"
4. Branch should be `main` / `(root)`

### 4. Configure Custom Domain (if not already done)

The CNAME file is already included in this repository (`public/CNAME`), so it will be automatically deployed with your site. You just need to:

1. Go to your domain registrar (where you bought augustinchan.dev)
2. Add an A record pointing to GitHub's IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. Or add a CNAME record pointing to `augchan42.github.io`

## Testing the Deployment

1. Make a commit and push to `main`
2. Go to https://github.com/augchan42/augustinchan.dev/actions
3. Watch the deployment workflow run
4. Once complete, your site should be live at https://augustinchan.dev

## Local Development

The site is still fully functional for local development:

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build static site (same as GitHub Actions does)
pnpm build

# The built site will be in the `out` directory
```

## Troubleshooting

- **Workflow fails**: Check the Actions tab for error messages
- **Site not updating**: Verify the workflow completed successfully
- **404 errors**: Make sure GitHub Pages is serving from the `main` branch
- **Custom domain not working**: Check DNS settings and wait for propagation (can take 24-48 hours)
