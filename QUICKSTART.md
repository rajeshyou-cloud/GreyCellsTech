# QUICKSTART: Deploy GreyCells (Current Repo)

Last Updated: February 9, 2026 | Status: Ready for deployment

This guide matches the current repo layout. The full site is already in `src/`.

---

## Phase 1: Backend Setup (Google Sheets + Apps Script)

1. Create a Google Sheet named `GreyCells Leads`.
2. Open `Extensions > Apps Script`.
3. Replace the default script with the backend code from `PROJECT_FILES.md`.
4. Deploy as Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the Web App URL.
6. Test the URL in a browser. It should return a simple success message.

---

## Phase 2: Configure the Frontend

1. Open `src/components/ContactForm.jsx`.
2. Replace `APPS_SCRIPT_URL` with your deployed Web App URL (from Phase 1).

---

## Phase 3: Local Development

```bash
git clone https://github.com/rajeshyou-cloud/greycells.git
cd greycells

npm install
npm run dev
```

Open: `http://localhost:5173/`

---

## Phase 4: Deploy to GitHub Pages

```bash
git add .
git commit -m "Deploy GreyCells"
git push origin main
```

Then in GitHub:
1. Go to `Settings > Pages`.
2. Set Source to `Deploy from a branch`.
3. Select `gh-pages` and `/ (root)`.

Your site will publish to:
`https://rajeshyou-cloud.github.io/GreyCellsTech/`

---

## Validate

1. Visit the live site.
2. Open the Contact page.
3. Submit the form.
4. Confirm a new row appears in your Google Sheet.

---

## Notes

- Vite base is `/GreyCellsTech/` in production and `/` in dev via `import.meta.env.BASE_URL`.
- Home includes the landing section and a hero banner.
- Resources downloads are served from `public/downloads/`.
- No `.env` file is required.
