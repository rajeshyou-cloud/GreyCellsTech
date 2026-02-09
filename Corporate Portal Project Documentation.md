# Corporate Portal Project Documentation

Single source of truth for the GreyCells Corporate Portal. Use this to restore the project after a loss or to onboard new developers.

---

## 1) Project Overview

The GreyCells Corporate Portal is a React + Vite website deployed to GitHub Pages. It includes:
- Multi-page routing
- Hero + Landing section on Home
- Working contact form that writes to Google Sheets
- Downloadable resources

---

## 2) Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Helmet Async
- Lucide React
- Google Apps Script + Google Sheets
- GitHub Actions + GitHub Pages

---

## 3) Project Structure

```
greycells/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── downloads/
│   │   ├── ai-automation-guide.txt
│   │   ├── product-development-checklist.txt
│   │   └── digital-marketing-strategy-template.txt
│   └── logo*.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── content.js
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
└── package-lock.json
```

---

## 4) Routing

Routes are defined in `src/App.jsx`. Router base uses:
`basename={import.meta.env.BASE_URL}`

This allows:
- Dev: `/`
- Production (GitHub Pages): `/GreyCellsTech/`

---

## 5) Key Components

### Navbar
`src/components/Navbar.jsx`
- Top-level links + dropdown groups (Services, Company, Resources, Legal)

### Hero
`src/components/Hero.jsx`
- Main headline and CTA on Home
- “Book a Call” scrolls to `#landing`

### Landing Section
`src/pages/Landing.jsx`
- Includes `LandingSection` for Home
- Includes `ContactForm` in compact mode

### Contact Form
`src/components/ContactForm.jsx`
- Posts data to Apps Script URL
- Honeypot field for spam
- Compact mode for Landing section

---

## 6) Configuration Files

### Vite
`vite.config.js` sets:
- `base: '/greycells/'`
- output directory: `dist`

### Tailwind
`tailwind.config.js` includes:
- content paths for `index.html` and `src/**/*`
- custom colors and font family

### PostCSS
`postcss.config.js`:
- tailwindcss
- autoprefixer

---

## 7) Deployment

### GitHub Actions
Workflow: `.github/workflows/deploy.yml`

Behavior:
- On push to `main`
- Install dependencies
- Build with Vite
- Deploy `dist` to `gh-pages`

### GitHub Pages
Settings > Pages:
- Source: Deploy from a branch
- Branch: `gh-pages` / `(root)`

---

## 8) Backend (Google Apps Script)

1. Create a Google Sheet named `GreyCells Leads`
2. Extensions > Apps Script
3. Paste code from `PROJECT_FILES.md`
4. Deploy as Web App (Execute as Me, Access Anyone)
5. Copy Web App URL
6. Paste URL into `src/components/ContactForm.jsx`

---

## 9) Restoring the Project

1. Clone repo
2. Install dependencies
3. Verify `vite.config.js` base path
4. Confirm ContactForm `APPS_SCRIPT_URL`
5. Run dev server
6. Build and deploy

---

## 10) Operational Checks

- Contact form writes to Google Sheet
- Resources downloads open correctly
- Routes render in dev and production
- GitHub Actions run is green

---

Last Updated: February 9, 2026
