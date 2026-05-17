# Portfolio Customization Guide

Your beautiful portfolio website is now ready! Here's everything you need to know to make it your own.

## 🎯 Quick Start

The development server is running at **http://localhost:5173**

To stop it: Press `Ctrl+C` in the terminal
To restart it: Run `npm run dev`

## 📝 Customization Checklist

### 1. Personal Information

**Edit these files to add your details:**

#### [src/components/Navbar.jsx](src/components/Navbar.jsx) (Line 8)

```jsx
// Change this:
<span className="logo-text">Her Name</span>
// To:
<span className="logo-text">Your Name</span>
```

#### [src/pages/Home.jsx](src/pages/Home.jsx)

- Line 31: Update the introduction text with your name and background
- Update the badge text with your actual role

#### [src/pages/About.jsx](src/pages/About.jsx)

- Update the quote (Line 21)
- Rewrite the journey paragraphs (Lines 41-65) with your story
- Update highlights (Line 68-75) to reflect your strengths

#### [src/pages/Contact.jsx](src/pages/Contact.jsx)

- Line 62: Change "her@email.com" to your email
- Line 65: Update LinkedIn URL
- Line 70: Update GitHub URL
- Line 73: Update resume path if different

#### [src/components/Footer.jsx](src/components/Footer.jsx)

- Line 14: Change "Her Name · Developer" to your name

### 2. Add Your Photo

1. **Prepare your photo**
   - Recommended size: 240 × 310 pixels
   - Format: JPG or PNG
   - Quality: High resolution, professional headshot

2. **Save it**
   - Place the file in: `public/her-photo.jpg`
   - Or save as: `public/your-photo.jpg`

3. **Update the reference** in [src/pages/Home.jsx](src/pages/Home.jsx) (Line 50)
   ```jsx
   <PhotoCard
     photoUrl="/your-photo.jpg" // Change this path
     name="Your Name"
     role="Your Role"
     badges={badges}
   />
   ```

### 3. Add Your Resume

1. **Prepare your resume**
   - Format: PDF
   - Size: Preferably under 2MB
   - Content: 1-2 pages

2. **Save it**
   - Place in: `public/resume.pdf`

3. **The links will automatically work** (no code changes needed)

### 4. Update Your Skills

**Edit [src/pages/Skills.jsx](src/pages/Skills.jsx) (Lines 12-41)**

The `skills` array defines your skill cards. Example:

```jsx
const skills = [
  {
    icon: "ti ti-brand-react",
    title: "Frontend Development",
    skills: ["React", "Tailwind", "HTML", "CSS", "JavaScript"],
  },
  // Add or remove cards as needed
];
```

**Available Icons**: Use Tabler Icons class names from https://tabler-icons.io/

- `ti ti-brand-react` - React
- `ti ti-server` - Server
- `ti ti-code` - Code
- `ti ti-database` - Database
- `ti ti-brain` - Brain (for AI/ML)

### 5. Update Your Projects

**Edit [src/pages/Portfolio.jsx](src/pages/Portfolio.jsx) (Lines 16-69)**

Each project object has:

```jsx
{
  id: 1,
  title: 'Your Project Name',
  description: 'Brief project description...',
  tech: ['React', 'Tailwind'],
  type: 'frontend',  // or 'full-stack' or 'ai-ml'
  gradient: 'linear-gradient(135deg, #C4607A, #F0CCDA)',
  isLive: true,      // Show green "Live" badge
  isLearning: false, // Show as learning project
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com'
}
```

**Color gradients by type:**

- Frontend: Pink gradients
- Full Stack: Purple gradients
- AI/ML: Amber gradients
- Live: Green gradients

### 6. Update Your Experience

**Edit [src/pages/Experience.jsx](src/pages/Experience.jsx) (Lines 13-41)**

Add internships/work experience to the `experiences` array:

```jsx
{
  company: 'Company Name',
  role: 'Your Role',
  duration: 'Month Year - Month Year',
  description: [
    'Achievement or responsibility 1',
    'Achievement or responsibility 2'
  ],
  tech: ['React', 'Node.js', 'etc']
}
```

### 7. Update Certifications

**Edit [src/pages/Skills.jsx](src/pages/Skills.jsx) (Lines 78-135)**

Update the certification cards with your real certs:

```jsx
<div className="cert-card">
  <div className="cert-icon">
    <i className="ti ti-cloud"></i>
  </div>
  <h4>Your Certification Name</h4>
  <p className="cert-issuer">Issuing Organization</p>
  <p className="cert-year">2024</p>
</div>
```

### 8. Update About Section

**Edit [src/pages/About.jsx](src/pages/About.jsx)**

- Customize the stats (Lines 31-33)
- Rewrite your journey story (Lines 41-65)
- Update the highlights (Lines 68-75)

## 🎨 Theming & Colors

The entire color scheme uses CSS variables in [src/styles/globals.css](src/styles/globals.css)

**Current Color Palette:**

- Primary Pink: `#C4607A`
- Primary Dark: `#8B3A5A`
- Purple: `#9B4F8A`
- Amber: `#8B5A00`
- Green: `#166534`

**To change colors:**
Edit `:root` in `src/styles/globals.css`:

```css
:root {
  --color-primary: #c4607a; /* Change this for main color */
  --color-primary-dark: #8b3a5a; /* Hover/dark states */
  --color-purple: #9b4f8a; /* Secondary color */
  /* ... other colors ... */
}
```

All components will automatically update!

## 📱 Social Links

Currently using placeholder URLs. Update in [src/pages/Contact.jsx](src/pages/Contact.jsx):

```jsx
<a href="https://linkedin.com/in/YOUR-USERNAME" target="_blank" rel="noopener noreferrer">
  {/* LinkedIn link */}
</a>

<a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer">
  {/* GitHub link */}
</a>
```

## 🚀 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

**Deployment options:**

- Netlify (free, very easy)
- Vercel (free, very easy)
- GitHub Pages (free)
- Traditional hosting (any provider)

## 📂 File Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PhotoCard.jsx
│   ├── SectionHeader.jsx
│   ├── Badge.jsx
│   ├── ProjectCard.jsx
│   ├── SkillCard.jsx
│   ├── StatPill.jsx
│   └── TimelineItem.jsx
│
├── pages/               # Full page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Portfolio.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
│
├── styles/
│   └── globals.css      # Design system & CSS variables
│
├── App.jsx              # Router setup
└── main.jsx             # Entry point

public/
├── her-photo.jpg        # ← Your profile photo
└── resume.pdf           # ← Your resume
```

## ✨ Key Features to Explore

1. **Photo Card Floating Effect** - [src/components/PhotoCard.jsx](src/components/PhotoCard.jsx)
   - Has asymmetric border radius and floating animation
   - Floating badges are customizable

2. **Animated Stats** - [src/components/StatPill.jsx](src/components/StatPill.jsx)
   - Numbers count up when page loads
   - Smooth animations with CSS

3. **Timeline for Experience** - [src/components/TimelineItem.jsx](src/components/TimelineItem.jsx)
   - Beautiful vertical timeline
   - Dots and connecting lines

4. **Project Filtering** - [src/pages/Portfolio.jsx](src/pages/Portfolio.jsx)
   - Filter projects by type (Frontend, Full Stack, AI/ML)
   - Smooth transitions

5. **Smooth Navigation** - Uses React Router
   - Fast page transitions
   - Sticky navbar with active states
   - Smooth scrolling

## 🐛 Troubleshooting

**Photo not showing?**

- Make sure the file is in `public/` folder
- Check the file name matches in the code
- Try clearing browser cache

**Styles not updating?**

- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Links not working?**

- Make sure external URLs start with `https://`
- Use `target="_blank" rel="noopener noreferrer"` for external links

## 📧 Contact Form

The contact form uses a simple `mailto:` fallback. For a fully functional form:

**Option 1: Formspree (Easy)**

1. Go to https://formspree.io/
2. Create an account and form
3. Update form action in [src/pages/Contact.jsx](src/pages/Contact.jsx)

**Option 2: Custom Backend (Advanced)**

- Create a Node.js/Express API
- Send form data to your backend
- Setup email sending service (SendGrid, etc.)

## 🎓 Learning Resources

- **React**: https://react.dev/
- **React Router**: https://reactrouter.com/
- **Vite**: https://vitejs.dev/
- **Tabler Icons**: https://tabler-icons.io/
- **Google Fonts**: https://fonts.google.com/

## 💡 Tips & Best Practices

1. **Keep projects description short** (1-2 sentences)
2. **Use real project URLs** for "View Live" buttons
3. **Update GitHub links** to your actual repositories
4. **Add keywords** to skills for better searchability
5. **Write a compelling "About" section** - tell your story!
6. **Keep certifications current** - remove old ones if needed
7. **Test on mobile** - use browser dev tools (F12)
8. **Optimize photo size** - compress before uploading

## 🚀 Next Steps

1. ✅ Update personal information
2. ✅ Add your photo and resume
3. ✅ Update skills and projects
4. ✅ Test all pages and links
5. ✅ Build for production: `npm run build`
6. ✅ Deploy to Netlify/Vercel
7. ✅ Share your portfolio!

## 📞 Need Help?

- Check the component file comments
- Review the existing examples
- Test changes live at http://localhost:5173/
- Use browser dev tools for debugging

---

**You've got this! Make it uniquely yours.** ✦
