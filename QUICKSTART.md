# ⚡ QUICKSTART: Deploy Grey Cells in 30 Minutes

**Last Updated**: February 6, 2026 | **Status**: Ready for deployment

---

## 🎯 Mission
Deploy a production-ready corporate website for GreyCells Technologies with:
- ✅ Working contact form → Google Sheets
- ✅ 13+ pages (Home, Services, Landing, etc.)
- ✅ GitHub Pages hosting
- ✅ Mobile responsive + SEO optimized

---

## 🔥 PHASE 1: Backend Setup (10 minutes)

### Step 1: Create Google Sheet
1. Open https://sheets.google.com
2. Create new: **"GreyCells Leads"**
3. Note the Spreadsheet ID from URL

### Step 2: Deploy Apps Script
1. In the sheet: **Extensions > Apps Script**
2. Delete default code
3. **Copy ENTIRE backend code from PROJECT_FILES.md**
4. Click **Deploy > New deployment**
   - Type: Web app
   - Execute as: **Me** (rajeshyou@gmail.com)
   - Who has access: **Anyone**
5. Click **Deploy**
6. **COPY THE WEB APP URL** (you'll need it!)
7. Test: Visit the URL in browser → Should see "GreyCells Form Handler is running!"

✅ **Backend complete!**

---

## 💻 PHASE 2: Local Development (15 minutes)

### Step 1: Clone & Setup
```bash
# Clone repo
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells

# Install dependencies (if not already)
npm install
npm install react-router-dom react-helmet-async lucide-react
```

### Step 2: Create Folder Structure
```bash
mkdir -p .github/workflows
mkdir -p public
mkdir -p src/components
mkdir -p src/data
mkdir -p src/pages
```

### Step 3: Copy Essential Configuration Files

**From PROJECT_FILES.md, copy these files:**
1. `vite.config.js` → Root
2. `tailwind.config.js` → Root
3. `postcss.config.js` → Root
4. `index.html` → Root
5. `.gitignore` → Root
6. `.github/workflows/deploy.yml` → GitHub Actions folder
7. `public/robots.txt` → public folder
8. `public/sitemap.xml` → public folder

### Step 4: Add Your Apps Script URL

Create `src/components/ContactForm.jsx` and **replace `https://script.google.com/macros/s/AKfycbxSntn34ihwM_64BusZGi_QWcHPapx5qvqo_CS5c09ro6LKaFwz417g46lq6aDZRjtubQ/exec`** with the URL you copied in Phase 1.

### Step 5: Create Minimal Starter Files

**File: `src/main.jsx`**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**File: `src/index.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**File: `src/App.jsx`** (Minimal version to start)
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">GreyCells Technologies</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/greycells">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
```

### Step 6: Test Locally
```bash
npm run dev
```

Open: `http://localhost:5173/greycells/`

You should see "GreyCells Technologies - Coming Soon"

✅ **Local dev working!**

---

## 🚀 PHASE 3: Deploy to GitHub Pages (5 minutes)

### Step 1: Commit & Push
```bash
git add .
git commit -m "Initial deployment with working backend"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to **repo Settings > Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / (root)
4. Click **Save**

### Step 3: Wait for Deployment
- Go to **Actions** tab
- Watch the workflow run
- Usually takes 2-3 minutes

### Step 4: Visit Your Site
**URL**: https://rajeshyou-cloud.github.io/greycells/

✅ **SITE IS LIVE!**

---

## 🛠️ PHASE 4: Add Full Pages (Ongoing)

Now that your infrastructure is working, you can incrementally add pages from the comprehensive code:

1. **Next Priority**: Create `src/components/ContactForm.jsx` with full form logic
2. **Then**: Create `src/data/content.js` with all company data
3. **Then**: Add `src/pages/Home.jsx`, `Landing.jsx`, etc.
4. **Finally**: Update `App.jsx` routing to include all 13+ pages

Refer to **PROJECT_FILES.md** for complete code.

---

## 📧 Test Contact Form

1. Navigate to your contact form page (once created)
2. Fill out all fields
3. Submit
4. Check your Google Sheet → New row should appear
5. Check rajeshyou@gmail.com → Email notification should arrive

---

## 📝 Next Steps

- [ ] Backend deployed and tested ✓
- [ ] Site deployed to GitHub Pages ✓
- [ ] Add ContactForm component
- [ ] Add data/content.js
- [ ] Add Navbar + Footer components
- [ ] Add Home page
- [ ] Add Landing page
- [ ] Add Services page
- [ ] Add remaining 10+ pages
- [ ] Test all CTAs
- [ ] Mobile responsive check
- [ ] SEO audit with Lighthouse

---

##  📞 Support

**Issues?** Check these files in your repo:
- `DEPLOYMENT_GUIDE.md` - Comprehensive guide
- `PROJECT_FILES.md` - All code reference

**Email**: hello@greycellstech.com  
**Phone**: +91 98807 74315  

---

*You're 30 minutes away from a live, production-ready website!* 🚀
