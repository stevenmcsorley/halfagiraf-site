# GitHub Pages Deployment Setup

Your site is configured for GitHub Pages deployment! The workflow file has been committed locally.

## What's Been Done

1. ✅ Added `base: '/halfagiraf-site/'` to `vite.config.ts`
2. ✅ Created GitHub Actions workflow at `.github/workflows/deploy.yml`
3. ✅ Committed changes locally

## Manual Steps Required

Due to GitHub authentication limitations, you need to manually push the workflow:

### Option 1: Push via GitHub CLI or Browser
```bash
# If you have GitHub personal access token with workflow scope
git push origin main
```

### Option 2: Upload Workflow File via GitHub Web UI
1. Go to https://github.com/stevenmcsorley/halfagiraf-site
2. Navigate to `.github/workflows/`
3. Click "Add file" → "Upload files"
4. Upload `deploy.yml` from your local `.github/workflows/` folder
5. Commit the changes

### After Pushing the Workflow

1. Go to your repository: https://github.com/stevenmcsorley/halfagiraf-site
2. Click **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions**
4. The workflow will automatically run and deploy your site

## Your Site URL

Once deployed, your site will be available at:
**https://stevenmcsorley.github.io/halfagiraf-site/**

## Local Testing

To test the GitHub Pages build locally:
```bash
npm run build
npm run preview
```

## How It Works

- Every push to `main` triggers automatic deployment
- The workflow builds your React app with Vite
- Uploads the `dist` folder to GitHub Pages
- Your site is live within 2-3 minutes
