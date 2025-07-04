# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js site to GitHub Pages with a custom domain.

## Prerequisites

1. Your repository is named `socolowwebsitebuilders`
2. You have GitHub Pages enabled in your repository settings
3. The repository is public (required for free GitHub Pages)
4. You own the domain `socolowsitebuilders.com` and have CNAME configured

## Configuration

The following files have been configured for GitHub Pages deployment:

### 1. `next.config.ts`
- Set to export static files (`output: 'export'`)
- Configured for custom domain (no base path needed)
- Images are set to unoptimized for static export
- Trailing slash enabled for better compatibility

### 2. `.github/workflows/nextjs.yml`
- GitHub Actions workflow for automated deployment
- Builds from the `socolow-nextjs` directory
- Deploys to GitHub Pages on push to main branch

### 3. `package.json`
- Updated homepage URL to match your repository
- Added build script for GitHub Pages testing

## Deployment Steps

### Automatic Deployment (Recommended)
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: `https://socolowsitebuilders.com`

### Manual Deployment
If you prefer to deploy manually:

1. Build the site locally:
   ```bash
   cd socolow-nextjs
   npm run build:gh-pages
   ```

2. The static files will be generated in the `out` directory

3. Deploy using the gh-pages package:
   ```bash
   npm run deploy
   ```

## Testing Locally

To test the GitHub Pages build locally:

1. Build the site:
   ```bash
   cd socolow-nextjs
   npm run build:gh-pages
   ```

2. Serve the static files:
   ```bash
   npx serve out
   ```

3. Visit `http://localhost:3000` to see your site

## Troubleshooting

### Images not loading
- Make sure all images are in the `public` directory
- Image paths should be relative to the public directory (e.g., `/image.png`)

### 404 errors
- Ensure `trailingSlash: true` is set in `next.config.ts`
- Check that your CNAME is properly configured to point to GitHub Pages

### Build failures
- Check the GitHub Actions logs for specific error messages
- Ensure all dependencies are properly installed
- Verify that the working directory is set to `socolow-nextjs`

## Repository Settings

Make sure your GitHub repository has the following settings:

1. **Pages Source**: Set to "GitHub Actions" in Settings > Pages
2. **Repository Visibility**: Public (required for free GitHub Pages)
3. **Branch**: Main branch should be the default

## Custom Domain Configuration

Your site is configured to use the custom domain `socolowsitebuilders.com`:

1. The `CNAME` file in your repository root should contain: `socolowsitebuilders.com`
2. Your domain's DNS settings should point to GitHub Pages
3. The `homepage` field in `package.json` is set to your custom domain

## Support

If you encounter issues:
1. Check the GitHub Actions logs for build errors
2. Verify all configuration files are correct
3. Test the build locally before pushing 