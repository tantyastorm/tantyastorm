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

Vite automatically uses `/tantyastorm/` as the production base path inside GitHub Actions, so assets work at `https://tantyastorm.github.io/tantyastorm/`.

## Project Data

Projects live in `src/data/projects.ts`. To add another project, add one object to the exported `projects` array and add a matching image under `public/assets/projects/`.

Current documented image filenames:

- `public/assets/projects/kreacher.png`
- `public/assets/projects/dobby.png`
- `public/assets/projects/email-archive-utility.png`
- `public/assets/projects/excel-to-json-cli.png`
- `public/assets/projects/books-data-scraper.png`
- `public/assets/projects/desktop-data-extraction-tool.png`

If an image is missing, the site shows a polished branded fallback instead of a broken image.

## Brand Assets

Supplied Tantyastorm assets are stored in `public/assets/brand/` and used for navigation, hero branding, favicon, social preview images, and footer branding.

## Notes

- No backend or environment variables are required.
- No contact form is included because there is no backend.
- Project links are optional and render only when URLs exist in the project data.
