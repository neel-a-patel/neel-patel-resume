# 🎨 Customization Guide

## Quick Updates

### 1. Update Your Name and Info
**File: `src/components/Hero.jsx`**
```javascript
// Change the name
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
  Your Name Here  {/* Update this */}
</h1>

// Change the typing animation text
const fullText = 'Your Title | Your Speciality | Your Focus'
```

**File: `index.html`**
```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your professional summary here">
```

### 2. Update Social Links
Update these files with your actual profiles:

**Navigation.jsx - Download Resume**
```javascript
link.href = '/Your_Resume_Name.pdf'
link.download = 'Your_Resume_Name.pdf'
```

**Hero.jsx - Social Links**
```javascript
<motion.a href="https://linkedin.com/in/YOUR_LINKEDIN_ID" ... />
<motion.a href="https://github.com/YOUR_USERNAME" ... />
<motion.a href="mailto:your.email@domain.com" ... />
```

**Contact.jsx - Contact Info**
```javascript
<motion.a href="mailto:your.email@domain.com" ... />
<motion.a href="tel:+1234567890" ... />
// Update location
```

### 3. Update Skills
**File: `src/components/Skills.jsx`**
```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    icon: <YourIcon className="w-5 h-5" />,
  },
  // Add more categories...
]
```

### 4. Update Certifications
**File: `src/components/Certifications.jsx`**
```javascript
const certifications = [
  {
    title: 'Your Certification',
    issuer: 'Issuing Organization',
    date: '2024',
    credentialId: 'YOUR-ID-123456',
    url: 'https://certification-url.com',
    icon: '🏆',
  },
  // Add more...
]
```

### 5. Update Experience
**File: `src/components/Experience.jsx`**
```javascript
const experiences = [
  {
    company: 'Your Company',
    position: 'Your Position',
    location: 'City, Country',
    duration: 'Month Year - Present',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more companies...
]
```

### 6. Update Projects
**File: `src/components/Projects.jsx`**
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'What the project does...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
    ],
    github: 'https://github.com/your-repo',
    demo: 'https://project-demo.com',
    status: 'Production', // or 'Active', 'Development'
    color: 'from-red-500 to-pink-600', // Tailwind gradient
  },
  // Add more projects...
]
```

### 7. Update Achievements
**File: `src/components/Achievements.jsx`**
```javascript
const achievements = [
  {
    icon: <YourIcon className="w-8 h-8" />,
    title: 'Achievement Title',
    metric: '50%',
    description: 'What was achieved...',
    color: 'from-green-500 to-emerald-600',
  },
  // Add more achievements...
]
```

---

## 🎨 Styling Customization

### Change Color Scheme
**File: `tailwind.config.js`**

```javascript
colors: {
  primary: {
    400: '#YOUR_LIGHT_COLOR',
    500: '#YOUR_MAIN_COLOR',
    600: '#YOUR_DARK_COLOR',
  },
  accent: {
    400: '#YOUR_ACCENT_LIGHT',
    500: '#YOUR_ACCENT_DARK',
  }
}
```

**Common Color Suggestions:**
- **Tech Blue**: `#0066ff`
- **AWS Orange**: `#ff9900`
- **Cloud Cyan**: `#00d4ff`
- **DevOps Purple**: `#9d4edd`

### Change Fonts
In `index.html`, add your Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

### Adjust Dark Theme
**File: `tailwind.config.js`**
```javascript
colors: {
  dark: {
    900: '#your_darkest',
    800: '#your_dark',
    700: '#your_medium_dark',
    600: '#your_lighter',
  }
}
```

---

## 📝 Content Changes

### Add New Section
1. Create component file in `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to main component

**Template:**
```javascript
import { motion } from 'framer-motion'

function NewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="new-section" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Your content here */}
      </motion.div>
    </section>
  )
}

export default NewSection
```

### Add Custom SVG Icons
1. Create SVG component in `src/components/Icons/`
2. Import and use in components

---

## 🖼️ Add Images/Logo

1. **Add to public folder**
   ```bash
   public/
   ├── favicon.svg
   ├── logo.png
   ├── profile.jpg
   └── ...
   ```

2. **Use in components**
   ```javascript
   <img src="/image-name.png" alt="Description" />
   ```

3. **Optimize images**
   - Resize to appropriate dimensions
   - Compress using TinyPNG or similar
   - Use WebP format when possible

---

## 🔗 Add External Links

### Update GitHub Links
Replace in all components:
```javascript
// Before
href="https://github.com"

// After
href="https://github.com/YOUR_USERNAME"
```

### Update LinkedIn
```javascript
// Before
href="https://linkedin.com/in/neelpatel89"

// After
href="https://linkedin.com/in/YOUR_PROFILE"
```

### Add Portfolio Website
```javascript
<motion.a
  href="https://yourwebsite.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg"
>
  Visit Portfolio
</motion.a>
```

---

## 📱 Mobile Optimization

### Test Responsive Design
```bash
# In browser, press F12 and toggle device toolbar
# Test on various screen sizes
```

### Adjust Spacing for Mobile
**Example in component:**
```javascript
<div className="px-4 sm:px-6 lg:px-8 py-4 md:py-8 lg:py-12">
  {/* Content scales based on screen size */}
</div>
```

### Mobile Menu
Navigation already has mobile menu, but you can customize in `Navigation.jsx`

---

## ⚡ Performance Optimization

### Remove Unused CSS
```bash
npm run build
# Check dist/assets for CSS size
```

### Optimize Images
```bash
# Use this tool to compress images
# https://tinypng.com
```

### Code Splitting
Already implemented with Vite, but for large components:
```javascript
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./components/Heavy'))

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

---

## 🔐 Security Best Practices

### Hide Sensitive Information
- Never commit API keys or tokens
- Use environment variables for sensitive data
- Review `.gitignore` before pushing

### Validate Form Inputs
Already done in Contact.jsx, but remember to:
- Validate email format
- Check required fields
- Sanitize user input

---

## 📊 Add Analytics (Optional)

### Google Analytics
1. Create account at analytics.google.com
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics (if deployed on Vercel)
- Automatically enabled
- View metrics in Vercel dashboard

---

## 🎯 SEO Improvements

### Update Meta Tags
**File: `index.html`**
```html
<meta name="description" content="Your professional summary">
<meta name="keywords" content="AWS, Cloud, DevOps, Cloud Engineering">
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your summary">
<meta property="og:image" content="/og-image.png">
```

### Add Structured Data
Add JSON-LD schema in a new component:
```javascript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Your Title",
  "url": "https://yoursite.com",
  "sameAs": ["https://linkedin.com/in/you"]
}
</script>
```

---

## 🚀 Before Deployment Checklist

- [ ] All personal info updated
- [ ] Links tested and working
- [ ] Mobile responsive tested
- [ ] Spelling and grammar checked
- [ ] Images optimized
- [ ] Meta tags updated
- [ ] Social links verified
- [ ] Resume PDF added
- [ ] Homepage URL set correctly
- [ ] All animations smooth
- [ ] Contact form tested
- [ ] No console errors

---

## 💡 Tips & Tricks

### Quick Preview Changes
```bash
npm run dev
# Make changes - hot reload automatically
```

### Test Build Output
```bash
npm run build && npm run preview
# Tests production build locally
```

### Debug Animations
```javascript
// Slow down animations for testing
<motion.div
  animate={{ ... }}
  transition={{ duration: 5 }} // Make it slower
>
```

### Add Debug Info
```javascript
console.log('Section rendered', props)
```

---

## 🆘 Common Issues

### "Cannot find module"
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### CSS not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind config

### Animation stuttering
- Reduce animation complexity
- Check browser performance (F12 → Performance)
- Use `will-change` property

### Mobile menu not closing
- Check Navigation.jsx onClick handlers
- Verify state management

---

## 📚 Further Customization

For advanced customization:
- Read React documentation
- Check Tailwind CSS docs
- Review Framer Motion guides
- Explore Vite configuration

---

**Ready to share your amazing resume website? 🎉**

Deploy it and start getting those recruiter messages! 💼
