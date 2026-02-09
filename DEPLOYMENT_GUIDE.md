# GreyCells Technologies - Deployment Guide

Live Site: https://rajeshyou-cloud.github.io/GreyCellsTech/
Repository: https://github.com/rajeshyou-cloud/greycells

---

## 1) Backend: Google Apps Script

### Create Google Sheet
1. Go to https://sheets.google.com
2. Create spreadsheet: `GreyCells Leads`
3. Copy Spreadsheet ID from the URL

### Apps Script Code
1. Extensions > Apps Script
2. Paste backend code from `PROJECT_FILES.md`
3. Deploy as Web App
   - Execute as: `Me`
   - Access: `Anyone`
4. Copy Web App URL: `https://script.google.com/macros/s/YOUR_ID/exec`

### Update Frontend
Replace `APPS_SCRIPT_URL` in:
- `src/components/ContactForm.jsx`

---

## 2) Local Development

```bash
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells
npm install
npm run dev
```

Dev URL: `http://localhost:5173/`

---

## 3) Build and Preview

```bash
npm run build
npm run preview
```

---

## 4) GitHub Pages Deployment

1. Push to `main`
2. GitHub Actions builds and deploys to `gh-pages`
3. In GitHub: Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`

---

## 5) Notes

- Production base path is `/GreyCellsTech/` (Vite config)
- Router base uses `import.meta.env.BASE_URL` (dev `/`, prod `/GreyCellsTech/`)
- Resources downloads live in `public/downloads/`
- Home includes Hero + Landing section

---

Last Updated: February 9, 2026
