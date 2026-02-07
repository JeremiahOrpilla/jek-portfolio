# Deployment Guide for Jek.dev

This guide will walk you through deploying your Jek.dev portfolio to GitHub and Vercel.

## 📌 Prerequisites

Before you start, make sure you have:

1. A GitHub account (free at [github.com](https://github.com))
2. A Vercel account (free at [vercel.com](https://vercel.com))
3. Git installed on your computer
4. The project files ready

## 🔧 Step 1: Initialize Git Repository

If you haven't already, initialize a Git repository in your project:

```bash
cd /path/to/jek.dev

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Jek.dev portfolio"
```

## 🐙 Step 2: Push to GitHub

### Option A: Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name your repository: `jek.dev` (or your preferred name)
3. Choose "Public" to make it visible to everyone
4. Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Option B: Use GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create jek.dev --public --source=. --remote=origin --push
```

### Push Your Code

After creating the repository on GitHub:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/jek.dev.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## ✅ Verify GitHub Setup

Visit `https://github.com/YOUR_USERNAME/jek.dev` to confirm your code is there.

## 🚀 Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Click "Import Git Repository"
4. Paste your GitHub repository URL or select it from the list
5. Vercel will auto-detect the configuration
6. Click "Deploy"

**That's it!** Your site will be live at `https://jek-dev.vercel.app` (or similar)

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts to link your account and deploy
```

## 🌐 Step 4: Configure Custom Domain (Optional)

If you have a custom domain (like `jek.dev`):

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., `jek.dev`)
5. Follow the DNS configuration instructions
6. Update your domain registrar's DNS records

**Common Registrars:**
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare

## 📝 Step 5: Update Social Links (Optional)

If you want to update your social links or content:

1. Edit `client/src/pages/Home.tsx`
2. Update the relevant arrays (skills, experience, socialLinks, etc.)
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. Vercel will automatically rebuild and deploy your changes!

## 🔄 Continuous Deployment

Once connected to Vercel, your site will automatically redeploy whenever you:

- Push to the `main` branch
- Create a pull request (preview deployment)
- Merge a pull request

## 🐛 Troubleshooting

### Build Fails on Vercel

**Problem:** Build command fails with TypeScript errors

**Solution:**
```bash
# Ensure dependencies are installed
pnpm install

# Run type check locally
pnpm check

# Fix any TypeScript errors, then push again
git add .
git commit -m "Fix TypeScript errors"
git push origin main
```

### Site Shows Old Content

**Problem:** Changes don't appear after pushing

**Solution:**
1. Wait 1-2 minutes for the build to complete
2. Check the Vercel deployment logs
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache if needed

### Custom Domain Not Working

**Problem:** Custom domain shows 404 or doesn't resolve

**Solution:**
1. Verify DNS records are correctly configured
2. Wait up to 24 hours for DNS propagation
3. Check Vercel dashboard for domain verification status
4. Contact your domain registrar's support if issues persist

## 📊 Monitoring Your Deployment

### View Deployment Logs

```bash
# Using Vercel CLI
vercel logs

# Or visit Vercel Dashboard → Your Project → Deployments
```

### Check Site Performance

- Vercel provides analytics in the dashboard
- Use [PageSpeed Insights](https://pagespeed.web.dev) for performance metrics
- Use [GTmetrix](https://gtmetrix.com) for detailed performance analysis

## 🔐 Security Best Practices

1. **Keep Dependencies Updated**
   ```bash
   pnpm update
   pnpm audit
   ```

2. **Review GitHub Security Settings**
   - Enable branch protection for `main`
   - Require pull request reviews
   - Enable status checks

3. **Monitor Vercel Security**
   - Enable HTTPS (automatic with Vercel)
   - Check security headers in Vercel settings
   - Review access logs regularly

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev/learn)

## 🎉 You're Done!

Your Jek.dev portfolio is now live on the internet! Share your deployment URL with:

- Recruiters and hiring managers
- Colleagues and friends
- Your professional network
- Social media profiles

---

**Questions?** Check the troubleshooting section or visit the documentation links above.
