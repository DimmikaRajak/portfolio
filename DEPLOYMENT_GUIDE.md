# Deployment Guide

Once you've customized your portfolio, follow this guide to deploy it online!

## 🌍 Deployment Platforms

### Option 1: Netlify (Recommended - Easiest)

1. **Build your project**

   ```bash
   npm run build
   ```

2. **Create account at https://netlify.com**
   - Sign up with GitHub, GitLab, or email

3. **Deploy**
   - Drag and drop the `dist/` folder onto Netlify
   - OR connect your GitHub repo for auto-deployment

4. **Custom domain (optional)**
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS instructions

✅ **Pros**: Fast, free, automatic deployments from GitHub
⚠️ **Cons**: None really!

---

### Option 2: Vercel (Very Easy)

1. **Create account at https://vercel.com**
   - Sign in with GitHub

2. **Deploy**
   - Click "New Project"
   - Import your GitHub repo
   - Vercel auto-detects Vite settings
   - Click Deploy!

3. **Your site is live instantly**
   - Get a free vercel.app domain
   - Add custom domain if you have one

✅ **Pros**: Super fast, optimized for React
⚠️ **Cons**: None!

---

### Option 3: GitHub Pages (Free)

1. **Update vite.config.js**

   ```javascript
   export default {
     base: "/your-repo-name/", // Add this line
     // ... rest of config
   };
   ```

2. **Build**

   ```bash
   npm run build
   ```

3. **Create GitHub repo**
   - Create repo named `your-username.github.io`
   - Push your code

4. **Enable Pages**
   - Go to Settings → Pages
   - Select `main` branch, `/dist` folder
   - Click Save

5. **Your site is at**
   ```
   https://your-username.github.io
   ```

✅ **Pros**: Free, uses GitHub
⚠️ **Cons**: Slower, requires more setup

---

### Option 4: Traditional Hosting

Works with any host (GoDaddy, Bluehost, etc.):

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload `dist/` folder**
   - Use FTP or File Manager
   - Upload contents to `public_html/`

3. **Configure domain**
   - Point DNS to hosting provider
   - Update nameservers

4. **Done!**

✅ **Pros**: Full control, traditional setup
⚠️ **Cons**: Requires hosting subscription

---

## 🔄 Auto-Deployment from GitHub

**For Netlify or Vercel with GitHub:**

1. **Push code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify/Vercel**
   - Select your GitHub repo
   - Auto-deploys on every push!

3. **Update your portfolio**
   - Make changes locally
   - Push to GitHub: `git push`
   - Live updates automatically!

---

## 📋 Pre-Deployment Checklist

Before going live, make sure:

- [ ] All personal info is correct
- [ ] Your photo is in `public/` folder
- [ ] Resume PDF is in `public/` folder
- [ ] All links work (test on your local site)
- [ ] Social media links are updated
- [ ] Projects have correct URLs and descriptions
- [ ] No console errors (check browser F12)
- [ ] Mobile view looks good
- [ ] Page load is fast (check Lighthouse)

**Test locally first:**

```bash
npm run dev
```

Visit http://localhost:5173 and click through all pages.

---

## 🚀 Performance Tips

### Before Deployment

1. **Optimize your photo**
   - Compress with TinyPNG or similar
   - Target: under 500KB
   - Size: 240×310 pixels

2. **Optimize resume PDF**
   - Keep under 2MB
   - Use PDF compression tool if needed

3. **Check build size**
   ```bash
   npm run build
   # Check the `dist/` folder size
   # Should be under 1MB
   ```

### Monitoring

- **Netlify Analytics** - Built-in (free tier)
- **Google Analytics** - Add if desired
- **Google Search Console** - List your site in Google

---

## 🔒 Custom Domain

### Using with Netlify

1. **Buy domain**
   - Namecheap, GoDaddy, Google Domains, etc.
   - $10-15/year typically

2. **In Netlify**
   - Domain settings → Add custom domain
   - Netlify provides DNS settings
   - Update nameservers at registrar

3. **Wait 24-48 hours**
   - DNS propagation time
   - Your site is now live!

### Email with Custom Domain

Some providers offer free email forwarding:

- Namecheap: Free email forwarding
- Google Domains: Works with Gmail

Set up forwarding so `your@yourdomain.com` redirects to your Gmail.

---

## 🔗 SSL Certificate

✅ **Good news**: Netlify and Vercel provide free SSL/HTTPS automatically!

Your site will:

- Load over HTTPS (secure connection)
- Show green lock icon in browser
- Be indexed by Google for SEO

---

## 📊 SEO Tips

### Update HTML Meta Tags

In `index.html`:

```html
<title>Your Name - Developer Portfolio</title>
<meta
  name="description"
  content="Full Stack & Frontend Developer from Indore. Building beautiful web experiences with React & Modern Tech."
/>
<meta name="keywords" content="developer, react, full-stack, portfolio" />
```

### Google Search Console

1. Go to https://search.google.com/search-console/
2. Add your domain
3. Submit sitemap (auto-generated)
4. Monitor search performance

---

## 🎯 What Happens After Deployment

1. **First 24 hours**
   - Your site is live! 🎉
   - Might not appear in Google yet

2. **First week**
   - Indexing: Google crawls your site
   - Search appears in results within days
   - Share on social media

3. **Ongoing**
   - Monitor analytics
   - Keep content updated
   - Fix broken links

---

## 💬 Subdomain Hosting

If you want portfolio at `portfolio.yourdomain.com`:

1. **In DNS settings**, add A record:
   - Name: `portfolio`
   - Points to: Netlify/Vercel IP address

2. **In Netlify/Vercel**
   - Add custom domain: `portfolio.yourdomain.com`

3. **Done!**

---

## 🆘 Troubleshooting Deployment

**Site not loading?**

- Check domain DNS is updated
- Verify `dist/` folder contents are correct
- Check browser cache (Ctrl+Shift+Del)

**Images not showing?**

- Verify files are in `public/` folder
- Check file paths are correct
- Ensure file names match exactly

**Links broken?**

- Test all links before deploying
- Check external URLs have `https://`
- Verify internal routes use React Router

**Slow performance?**

- Optimize images with TinyPNG
- Compress PDF resume
- Check Network tab in DevTools
- Use Lighthouse audit (DevTools → Audits)

---

## 🎓 Resources

- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Pages**: https://pages.github.com/
- **Google Search Console**: https://search.google.com/search-console/
- **DNS Management**: https://www.namecheap.com/

---

## 📈 Post-Launch Checklist

After going live:

- [ ] Share portfolio on LinkedIn
- [ ] Add link to GitHub profile
- [ ] Add link to Twitter/X bio
- [ ] Update email signature with portfolio URL
- [ ] Tell friends & family
- [ ] Apply to jobs with portfolio link
- [ ] Monitor analytics
- [ ] Keep portfolio updated

---

## 🎉 You're Live!

Congrats! Your beautiful portfolio is now online for the world to see.

**Next steps:**

1. Share with your network
2. Use in job applications
3. Keep it updated with new projects
4. Network and build connections!

---

**Your portfolio is your digital identity. Make it count!** ✦
