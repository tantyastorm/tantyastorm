# Tatiana Furtuna / Tantyastorm Portfolio

Production-ready personal portfolio website for Tatiana Furtuna, built with React, TypeScript, Vite, and static GitHub Pages deployment.

## Local Setup

```bash
npm install
npm run dev
npm run build
```

The development server prints a local URL after `npm run dev`.

## Deployment

This repository includes `.github/workflows/deploy.yml` for GitHub Pages.

1. Commit and push to the `main` branch.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push again or run the **Deploy to GitHub Pages** workflow manually.

Vite uses `/` as the production base path for the custom domain, so assets work at `https://tantyastorm.dev/`.

## Project Data

Projects live in `src/data/projects.ts`. To add another project, add one object to the exported `projects` array. Images, videos, and galleries are optional and should only be assigned when real public media exists under `public/assets/projects/`.

Current documented media filenames:

- `public/assets/projects/kreacher.png`
- `public/assets/projects/kreacher/kreacher_screen.png`
- `public/assets/projects/dobby.png`
- `public/assets/projects/dobby/dobby-demo.mp4`
- `public/assets/projects/email-archive-utility.png`
- `public/assets/projects/email-archive-utility-demo/email-archive-utility-demo.mp4`
- `public/assets/projects/excel-to-json-cli.png`
- `public/assets/projects/books-data-scraper.png`
- `public/assets/projects/desktop-data-extraction-tool.png`
- `public/assets/projects/bnbscraper/main.png`
- `public/assets/projects/bnbscraper/output_xlsx.png`
- `public/assets/projects/bnbscraper/progress.png`

Projects without media render as text-focused cards and omit screenshot/media sections.

## Brand Assets

Supplied Tantyastorm assets are stored in `public/assets/brand/` and used for navigation, hero branding, favicon, social preview images, and footer branding.

## Notes

- The contact form is configured for a static Formspree endpoint through `VITE_CONTACT_FORM_ENDPOINT`.
- No custom backend is required.
- Project links are optional and render only when URLs exist in the project data.
