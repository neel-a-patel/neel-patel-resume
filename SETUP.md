# ⚙️ Project Setup & Running Guide

## System Requirements

### Minimum Requirements
- **Node.js**: v16 or higher
- **npm**: v7 or higher (comes with Node.js)
- **RAM**: 4GB minimum
- **Disk Space**: 500MB free space
- **Internet**: Required for downloading dependencies

### Check Your System

```bash
# Check Node.js version
node --version
# Should be v16 or higher (e.g., v18.17.0)

# Check npm version
npm --version
# Should be v7 or higher (e.g., v9.8.1)

# Check npm cache (optional)
npm cache verify
```

## Installation Steps

### Step 1: Extract/Clone the Project

**Option A: If you downloaded as ZIP**
```bash
# Extract the zip file to your desired location
# Navigate to the project folder
cd neel-patel-resume
```

**Option B: If you cloned from GitHub**
```bash
git clone https://github.com/YOUR_USERNAME/neel-patel-resume.git
cd neel-patel-resume
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# This may take 2-5 minutes depending on your internet speed
# You'll see a list of installed packages at the end
```

**Troubleshooting:**
```bash
# If installation fails, try:
npm cache clean --force
npm install

# Or use yarn as alternative:
npm install -g yarn
yarn install
```

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed correctly
npm list --depth=0

# You should see:
# ├── framer-motion@10.16.4
# ├── lucide-react@0.263.1
# ├── react@18.2.0
# ├── react-dom@18.2.0
# └── ...
```

## Running Locally

### Start Development Server

```bash
# Start the development server
npm run dev

# Output should show:
# ➜  Local:   http://localhost:3000/
# ➜  Press q to quit
```

The website will automatically open in your default browser at `http://localhost:3000`

### Using the Development Server

- **Hot Reload**: Any changes you make to files are instantly reflected
- **Auto-Refresh**: Browser automatically refreshes when you save files
- **Error Display**: Compilation errors appear in the terminal and browser

### Stop the Server

```bash
# Press Ctrl+C in the terminal
# Or press Q if you see "Press q to quit"
```

## Building for Production

### Create Optimized Build

```bash
# Build for production
npm run build

# This creates an optimized 'dist/' folder
# Build usually takes 10-30 seconds
```

**What happens during build:**
- ✅ Minifies JavaScript
- ✅ Optimizes CSS
- ✅ Compresses images
- ✅ Creates production-ready files
- ✅ Generates source maps (optional)

### Preview Production Build

```bash
# Preview the production build locally
npm run preview

# Visit http://localhost:4173 (or the URL shown)
# Use this to test before deploying
```

**Why preview before deploying?**
- Verify build was successful
- Check for production-only errors
- Test performance
- Ensure all features work

## Project Structure Walkthrough

```
neel-patel-resume/
│
├── src/                          # Main source code
│   ├── components/               # All React components
│   │   ├── Navigation.jsx        # Sticky navigation bar
│   │   ├── Hero.jsx              # Hero/banner section
│   │   ├── About.jsx             # About section
│   │   ├── Skills.jsx            # Technical skills
│   │   ├── Certifications.jsx    # Certifications timeline
│   │   ├── Experience.jsx        # Work experience
│   │   ├── Projects.jsx          # Portfolio/projects
│   │   ├── Achievements.jsx      # Key achievements
│   │   ├── Contact.jsx           # Contact form
│   │   ├── BackgroundElements.jsx # Animated background
│   │   └── LoadingScreen.jsx     # Loading animation
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
│
├── public/                       # Static assets
│   └── favicon.svg              # Website icon
│
├── dist/                         # Production build (created after npm run build)
│   ├── index.html               # Built HTML
│   ├── assets/                  # Built CSS and JS
│   └── ...
│
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── package-lock.json            # Dependency lock file
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.js            # PostCSS configuration
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
├── DEPLOYMENT.md                # Deployment guide
├── CUSTOMIZATION.md             # Customization guide
└── node_modules/                # Installed dependencies (not in repo)
```

## Available Scripts

### Development
```bash
npm run dev
# Starts development server at http://localhost:3000
# Hot reload enabled, errors shown in browser
```

### Build
```bash
npm run build
# Creates optimized production build in dist/ folder
# Minified and compressed files
```

### Preview
```bash
npm run preview
# Serves the production build locally
# Shows what will be deployed
```

### Deploy to GitHub Pages
```bash
npm run deploy
# Builds and deploys to gh-pages branch automatically
# Requires GitHub repository setup
```

## Environment Setup

### Windows Users

**Option 1: Using Command Prompt**
```bash
cd path\to\neel-patel-resume
npm install
npm run dev
```

**Option 2: Using PowerShell (Recommended)**
```powershell
cd path/to/neel-patel-resume
npm install
npm run dev
```

**Option 3: Using Git Bash**
```bash
cd path/to/neel-patel-resume
npm install
npm run dev
```

### Mac/Linux Users

```bash
cd path/to/neel-patel-resume
npm install
npm run dev
```

## IDE Setup (Recommended)

### Visual Studio Code (Free)

1. **Download**: [code.visualstudio.com](https://code.visualstudio.com)
2. **Install Extensions**:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier - Code formatter
   - ESLint

3. **Open Project**:
   ```bash
   code .
   ```

### JetBrains WebStorm

1. Open the project folder
2. Install recommended plugins
3. Configure Node.js interpreter
4. Extensions auto-detected

### Other IDEs
- Sublime Text
- Atom
- Nova
- VIM/NeoVIM

## Troubleshooting

### Problem: "command not found: npm"

**Solution**: Node.js not installed
```bash
# Download Node.js from nodejs.org
# Or use package manager:

# macOS (with Homebrew):
brew install node

# Windows (with Chocolatey):
choco install nodejs

# Linux (Ubuntu/Debian):
sudo apt-get install nodejs npm
```

### Problem: "Port 3000 already in use"

**Solution**: Use a different port
```bash
npm run dev -- --port 3001
# Visit http://localhost:3001
```

Or kill the process using port 3000:
```bash
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows (PowerShell):
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Problem: Dependencies failing to install

**Solution**: Clear cache and retry
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: Build fails with "out of memory"

**Solution**: Increase Node memory
```bash
# macOS/Linux:
NODE_OPTIONS=--max_old_space_size=4096 npm run build

# Windows (Command Prompt):
set NODE_OPTIONS=--max_old_space_size=4096
npm run build

# Windows (PowerShell):
$env:NODE_OPTIONS = '--max_old_space_size=4096'
npm run build
```

### Problem: "Module not found" error

**Solution**: Reinstall dependencies
```bash
npm install
# Make sure all imports in components match the filenames
```

### Problem: Hot reload not working

**Solution**: Restart dev server
```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

## Performance Tips

### Development
- Use `npm run dev` for live reloading
- Keep browser DevTools closed when not needed
- Use Chrome/Edge for better performance

### Building
- Run `npm run build` when you need production files
- Check build size: `npm run build` shows final size
- Use `npm run preview` to test before deployment

### General
- Keep dependencies updated: `npm update`
- Clean cache occasionally: `npm cache clean --force`
- Monitor disk space
- Close unnecessary browser tabs

## Git Workflow (If Using GitHub)

### Initial Setup
```bash
# Initialize git (if not cloned)
git init

# Set up your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/neel-patel-resume.git

# Create initial commit
git add .
git commit -m "Initial commit: Resume website"
git branch -M main
git push -u origin main
```

### Regular Updates
```bash
# Check status
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "Update: Describe what changed"

# Push to GitHub
git push

# Deploy (if using GitHub Pages)
npm run deploy
```

## Browser DevTools

### Access DevTools
```bash
# Windows/Linux: F12 or Ctrl+Shift+I
# macOS: Cmd+Option+I
```

### Useful Features
- **Console Tab**: Check for JavaScript errors
- **Elements/Inspector**: Inspect HTML and CSS
- **Network Tab**: Check loading performance
- **Performance Tab**: Profile animations and interactions
- **Lighthouse Tab**: Run performance audit

## Next Steps

1. ✅ Install Node.js and npm
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Open browser to http://localhost:3000
5. ✅ Update your personal info in components
6. ✅ Test all features locally
7. ✅ Run `npm run build` to create production build
8. ✅ Deploy to GitHub Pages / Vercel / Netlify

## Quick Commands Summary

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Stop development server
# Press Ctrl+C in terminal

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Clear cache and reinstall
npm cache clean --force && rm -rf node_modules && npm install
```

## Getting Help

**If you encounter issues:**

1. Check the **Troubleshooting** section above
2. Read error messages carefully in terminal
3. Check browser console (F12 → Console)
4. Review component files
5. Check GitHub Issues for similar problems

**Resources:**
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**You're ready to start! 🚀**

Run `npm install` and then `npm run dev` to see your website in action!
