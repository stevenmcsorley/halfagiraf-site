# Quick Setup Guide for GitHub Pages

## Current Status
✅ Vite configured with base path `/halfagiraf-site/`
✅ GitHub Actions workflow created locally
✅ Changes committed locally
⚠️ Workflow needs to be pushed to GitHub

## Option 1: Manual File Upload (Easiest)

### Step 1: Upload the Workflow File
1. Go to: https://github.com/stevenmcsorley/halfagiraf-site
2. Click on: **Add file** → **Create new file**
3. In the filename box, type: `.github/workflows/deploy.yml`
4. Copy and paste this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Click **Commit changes**

### Step 2: Enable GitHub Pages
1. Go to: https://github.com/stevenmcsorley/halfagiraf-site/settings/pages
2. Under **Source**, select: **GitHub Actions**
3. Click **Save**

### Step 3: Wait for Deployment
- Go to: https://github.com/stevenmcsorley/halfagiraf-site/actions
- Watch the deployment workflow run
- Your site will be live in 2-3 minutes!

## Your Live URL
**https://stevenmcsorley.github.io/halfagiraf-site/**

## Option 2: Push with Personal Access Token

If you prefer to use git push:
1. Create a Personal Access Token at: https://github.com/settings/tokens
2. Select scopes: `repo` and `workflow`
3. Use it when pushing:
```bash
git push https://YOUR_TOKEN@github.com/stevenmcsorley/halfagiraf-site.git main
```

---

**Note:** The vite.config.ts file has already been updated locally and committed.
