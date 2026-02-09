# GreyCells Technologies - Complete Deployment Guide

Live Site: https://rajeshyou-cloud.github.io/greycells/
Repository: https://github.com/rajeshyou-cloud/greycells

---

## Table of Contents
1. Google Apps Script Backend Setup
2. Project Structure
3. Local Development
4. Configuration Files
5. Core Components
6. Pages
7. GitHub Pages Deployment
8. Operations and Maintenance

---

## 1. Google Apps Script Backend

### A. Create Google Sheet
1. Go to https://sheets.google.com
2. Create new spreadsheet: `GreyCells Leads`
3. Copy Spreadsheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
   ```

### B. Apps Script Code
1. Go to Extensions > Apps Script
2. Paste the complete code (see PROJECT_FILES.md in repo)
3. Deploy:
   - Deploy > New deployment
   - Type: Web app
   - Execute as: `Me`
   - Access: `Anyone`
4. Copy Web App URL: `https://script.google.com/macros/s/YOUR_ID/exec`

### C. Update Frontend
Replace `APPS_SCRIPT_URL` in:
- `src/components/ContactForm.jsx`

---

## 2. Project Structure

```
greycells/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.ico
│   └── logo*.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   └── Logo.jsx
│   ├── data/
│   │   └── content.js           # All copy + constants
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Landing.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Process.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   ├── FAQ.jsx
│   │   └── Resources.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
└── DEPLOYMENT_GUIDE.md (this file)
```

---

## 3. Local Development

### Quick Start
```bash
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells
npm install
npm run dev
```

Site runs at: `http://localhost:5173/greycells/`

### Build Production
```bash
npm run build
npm run preview  # Test production build locally
```

---

## 4. Configuration Files

See individual code blocks in PROJECT_FILES.md for complete file contents.

---

## 5. Core Components

Key components:
- ContactForm.jsx: Handles Google Sheets submission
- Navbar.jsx: Primary navigation
- Footer.jsx: Company info + CTAs
- Logo.jsx: Brand logo rendering

---

## 6. Pages

All 13+ pages implemented:
- Home
- Landing (dedicated conversion page)
- Services
- Industries
- Case Studies
- Process
- About
- Blog
- Careers
- Contact
- Privacy Policy
- Terms of Service
- FAQ
- Resources

---

## 7. Deployment

### GitHub Pages Setup
1. Go to repo Settings > Pages
2. Source: `Deploy from a branch`
3. Branch: `gh-pages` / (root)
4. Save

### GitHub Actions Workflow
The workflow file `.github/workflows/deploy.yml`:
1. Builds the project on every push to `main`
2. Deploys to `gh-pages` branch
3. Site goes live at: https://rajeshyou-cloud.github.io/greycells/

First deployment:
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

Wait 2-3 minutes, then visit your site.

---

## 8. Operations

### Update Content
Edit `src/data/content.js` for:
- Company info
- Services
- Testimonials
- CTAs

### View Leads
Open your Google Sheet to see all form submissions in real-time.

### Email Notifications
All submissions trigger an email to: rajeshyou@gmail.com

---

## Success Checklist

- [ ] Google Apps Script deployed and tested
- [ ] Web App URL added to ContactForm.jsx
- [ ] All dependencies installed (`npm install`)
- [ ] Local dev server runs (`npm run dev`)
- [ ] Production build successful (`npm run build`)
- [ ] GitHub Actions workflow added
- [ ] First push triggers deployment
- [ ] Site live at GitHub Pages URL
- [ ] Contact form submits to Google Sheets
- [ ] Email notifications working
- [ ] All 13+ pages accessible
- [ ] Mobile responsive (test on phone)
- [ ] SEO tags present (inspect source)
- [ ] Performance > 90 (test with Lighthouse)

---

## Support

Company: GreyCells Technologies, Bangalore  
Email: hello@greycellstech.com  
Phone: +91 98807 74315  
Book a Call: https://calendar.app.google/31YgUYzPYVRUB5yR6

---

Last Updated: February 9, 2026
