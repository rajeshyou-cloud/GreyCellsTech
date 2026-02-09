# GreyCells Technologies - Project Files Reference

This document is a reference for the current repo. Use it to verify configuration and the backend script. The actual files already exist in this repository.

---

## Table of Contents
1. Backend (Google Apps Script)
2. Root Configuration Files
3. GitHub Actions
4. Public Assets
5. Source Files and Structure

---

## 1) Backend (Google Apps Script)

### File: `Code.gs` (Google Apps Script Editor)

```javascript
// === GREYCELLS CONTACT FORM BACKEND ===
// Deploy: Web App | Execute as: Me | Access: Anyone

function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);
    var data = JSON.parse(e.postData.contents);

    // SPAM PROTECTION: Honeypot
    if (data.website_hp && data.website_hp.trim().length > 0) {
      return ContentService
        .createTextOutput(JSON.stringify({"result": "success", "msg": "Honeypot triggered"}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Leads");

    if (!sheet) {
      sheet = ss.insertSheet("Leads");
      sheet.appendRow([
        "Timestamp", "Name", "Email", "Phone", "Company",
        "ServiceInterest", "Budget", "Message", "SourcePage",
        "Referrer", "UTM_Source", "UTM_Medium", "UTM_Campaign"
      ]);
      sheet.getRange(1, 1, 1, 13).setFontWeight("bold");
    }

    var timestamp = new Date();
    sheet.appendRow([
      timestamp, data.name || '', data.email || '', data.phone || '',
      data.company || '', data.service || '', data.budget || '',
      data.message || '', data.sourcePage || '', data.referrer || '',
      data.utm_source || '', data.utm_medium || '', data.utm_campaign || ''
    ]);

    // Send email notification
    try {
      MailApp.sendEmail({
        to: "rajeshyou@gmail.com",
        subject: "New Lead: " + (data.service || 'General'),
        htmlBody: `
          <h2>New Lead from GreyCells Website</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Name</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.name}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Email</td><td style="padding:10px;border:1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Phone</td><td style="padding:10px;border:1px solid #e2e8f0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Company</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.company}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Service</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.service}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Budget</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.budget}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Message</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.message}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;border:1px solid #e2e8f0;">Source</td><td style="padding:10px;border:1px solid #e2e8f0;">${data.sourcePage}</td></tr>
          </table>
          <p style="margin-top:20px;color:#64748b;"><small>Submitted: ${timestamp.toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}</small></p>
        `,
        noReply: true
      });
    } catch (mailError) {
      Logger.log("Email error: " + mailError.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput("GreyCells Form Handler is running!");
}
```

Deployment steps:
1. Create Google Sheet: `GreyCells Leads`
2. Extensions > Apps Script
3. Paste code above
4. Deploy > New deployment > Web App
5. Execute as: `Me` | Access: `Anyone`
6. Copy Web App URL
7. Add URL to `src/components/ContactForm.jsx`

---

## 2) Root Configuration Files

### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/greycells/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#14b8a6",
        accent: "#f97316",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `.gitignore`
```
node_modules
dist
.DS_Store
*.log
.env
.env.local
```

### `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/greycells/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <title>GreyCells Technologies | Product Development, Digital Marketing & AI Automations</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 3) GitHub Actions

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Use npm 9
        run: npm i -g npm@9

      - name: Install dependencies
        run: npm install

      - name: Build
        run: node ./node_modules/vite/bin/vite.js build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

---

## 4) Public Assets

### `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://rajeshyou-cloud.github.io/greycells/sitemap.xml
```

### `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://rajeshyou-cloud.github.io/greycells/</loc><priority>1.0</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/services</loc><priority>0.9</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/industries</loc><priority>0.8</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/casestudies</loc><priority>0.8</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/process</loc><priority>0.7</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/about</loc><priority>0.7</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/blog</loc><priority>0.7</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/careers</loc><priority>0.6</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/contact</loc><priority>0.8</priority></url>
  <url><loc>https://rajeshyou-cloud.github.io/greycells/landing</loc><priority>0.9</priority></url>
</urlset>
```

---

## 5) Source Files and Structure

```
greycells/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.ico
│   └── logo*.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
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
├── package-lock.json
└── PROJECT_FILES.md (this file)
```

Notes:
- Routing uses `/greycells` as the base path in `vite.config.js`.
- The `CaseStudies` route is `/casestudies` (no dash), and the sitemap reflects that.
- The code in this repo is already complete; you do not need to create folders or copy files from this document.

