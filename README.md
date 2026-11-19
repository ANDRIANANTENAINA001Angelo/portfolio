# Portfolio — ANDRIANANTENAINA Angelo

Modern personal portfolio (Vue 3 + Vite + TypeScript).

## Features

- Light theme first + dark mode toggle
- FR / EN via `?lang=fr` or `?lang=en` (FR default)
- Content centralized in `src/data/` (easy to edit)
- Project detail pages with SEO-friendly URLs (`/projets/{slug}/{tech-slug}`)
- Open Graph + Twitter cards for WhatsApp / Facebook / LinkedIn shares
- JSON-LD Person schema + `llms.txt` for AEO
- Responsive, accessible, modern design

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Edit content

| What              | File                          |
|-------------------|-------------------------------|
| Texts FR/EN       | `src/data/content.ts`         |
| Projects          | `src/data/projects.ts`        |
| Open Graph image  | `public/preview-opengraph.jpg`|
| Favicon           | `public/favicon.ico`          |

## SEO / AEO

- Every route is pre-rendered to static HTML at build time (`vite-ssg`), so search engines
  and AI crawlers read the full content without running JavaScript.
- French at `/`, English under `/en` (hreflang on every page).
- Per-page title, description, canonical, Open Graph and JSON-LD: `src/composables/useSeo.ts`
  and `src/seo/schema.ts`.
- `sitemap.xml`, `robots.txt` and `llms.txt` are generated at build from the data
  (`src/seo/static-files.ts`): never edit them by hand.

| What                     | File                         |
|--------------------------|------------------------------|
| Services, offers, prices | `src/data/services.ts`       |
| Articles (Resources)     | `src/data/articles.ts`       |
| Online profiles (sameAs) | `src/config.ts` (`PROFILES`) |
| Canonical domain         | `src/config.ts` (`PROD_URL`) |

## Deploy

Works on Render, Vercel, Netlify, Cloudflare Pages, etc.
Set build command: `npm run build`
Set publish directory: `dist`
