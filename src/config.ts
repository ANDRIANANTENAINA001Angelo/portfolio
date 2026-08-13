/**
 * Site configuration — change ONLY here.
 * Used for SEO, Open Graph, sitemap references, canonical URLs, etc.
 *
 * Local:    leave as '' or use http://localhost:5173
 * Staging:  your render/preview URL
 * Prod:     https://andrianantenaina.dev  (or your final domain)
 */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://andrianantenaina.dev'

export const SITE_NAME = 'ANDRIANANTENAINA Angelo'
export const OG_IMAGE = `${SITE_URL}/preview-opengraph.jpg`
export const PROFILE_IMAGE = `${SITE_URL}/images/profile.jpg`

export const SOCIAL = {
  email: 'a.angelo.mada@gmail.com',
  phone: '+261345992047',
  whatsapp: 'https://wa.me/261345992047',
  github: 'https://github.com/ANDRIANANTENAINA001Angelo',
  linkedin: 'https://www.linkedin.com/in/andrianantenaina-angelo'
} as const
