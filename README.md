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

## Domain

Update URLs in:
- `index.html` (canonical, og:url, og:image, JSON-LD)
- `public/sitemap.xml`
- `public/robots.txt`
- `public/llms.txt`

Recommended domain: `andrianantenaina.dev`

## Deploy

Works on Render, Vercel, Netlify, Cloudflare Pages, etc.
Set build command: `npm run build`
Set publish directory: `dist`
