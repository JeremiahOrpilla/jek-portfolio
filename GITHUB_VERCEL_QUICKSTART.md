# GitHub & Vercel Quick Start Guide

Get your Jek.dev portfolio live in 5 minutes!

## 📋 Checklist

- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Git installed on your computer
- [ ] Project files ready

## 🚀 Step-by-Step Instructions

### 1️⃣ Push to GitHub (2 minutes)

```bash
# Navigate to your project
cd /path/to/jek.dev

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Jek.dev portfolio"

# Create repository on GitHub at https://github.com/new
# Name it: jek.dev
# Choose: Public

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/jek.dev.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy to Vercel (3 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Click "Import Git Repository"
4. Select your `jek.dev` repository
5. Click "Deploy"

**Done!** Your site is live at `https://jek-dev.vercel.app`

## 🎯 What's Included

✅ **GitHub Ready**
- `.gitignore` - Excludes unnecessary files
- `.github/workflows/build.yml` - Automated CI/CD
- `CONTRIBUTING.md` - Contribution guidelines
- `LICENSE` - MIT License

✅ **Vercel Ready**
- `vercel.json` - Vercel configuration
- `package.json` - Optimized build scripts
- `DEPLOYMENT.md` - Detailed deployment guide
- `README.md` - Complete documentation

✅ **Production Optimized**
- ✓ Builds successfully
- ✓ TypeScript type-checked
- ✓ Formatted code
- ✓ Responsive design
- ✓ SEO optimized

## 📝 Next Steps

### Update Your Portfolio
Edit `client/src/pages/Home.tsx` to customize:
- Skills and proficiency levels
- Experience and job history
- Social media links
- Fun facts and jokes
- Colors and styling

### Configure Custom Domain (Optional)
1. Buy a domain (GoDaddy, Namecheap, etc.)
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS records

### Enable GitHub Actions (Optional)
GitHub Actions will automatically:
- Run type checks
- Format code
- Build the project
- Deploy to Vercel on push

No additional setup needed - it's already configured!

## 🔗 Important Links

- **GitHub Repository** - https://github.com/YOUR_USERNAME/jek.dev
- **Live Site** - https://jek-dev.vercel.app
- **Vercel Dashboard** - https://vercel.com/dashboard
- **GitHub Settings** - https://github.com/YOUR_USERNAME/jek.dev/settings

## 💡 Pro Tips

1. **Keep Dependencies Updated**
   ```bash
   pnpm update
   ```

2. **Monitor Build Status**
   - GitHub: Check Actions tab
   - Vercel: Check Deployments tab

3. **Share Your Portfolio**
   - Add to LinkedIn
   - Share on Twitter/X
   - Include in resume
   - Send to recruiters

4. **Continuous Updates**
   ```bash
   # Make changes locally
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   # Vercel automatically rebuilds and deploys!
   ```

## 🆘 Troubleshooting

**Build fails on Vercel?**
- Check the build logs in Vercel dashboard
- Run `pnpm build` locally to debug
- Ensure all dependencies are installed

**Changes not appearing?**
- Wait 1-2 minutes for build to complete
- Hard refresh browser (Ctrl+Shift+R)
- Check Vercel deployment status

**Need help?**
- See `DEPLOYMENT.md` for detailed guide
- Check `README.md` for documentation
- Review `CONTRIBUTING.md` for guidelines

## 🎉 You're All Set!

Your Jek.dev portfolio is now:
- ✅ On GitHub
- ✅ Live on Vercel
- ✅ Automatically deploying on push
- ✅ Ready to share with the world!

---

**Questions?** Check the full guides in `DEPLOYMENT.md` and `README.md`
