/**
 * Site configuration — change ONLY here.
 * Used for SEO, Open Graph, canonical URLs, sitemap and llms.txt.
 *
 * Production builds always use PROD_URL (it is baked into the pre-rendered HTML).
 * VITE_SITE_URL only overrides it in dev (`npm run dev`).
 * Must stay loadable from vite.config.ts (Node), hence the optional `import.meta.env`.
 */
export const PROD_URL = 'https://www.andrianantenaina-angelo.site'

const env = import.meta.env as Record<string, string | boolean | undefined> | undefined
const devUrl = env?.DEV ? (env.VITE_SITE_URL as string | undefined) : undefined

export const SITE_URL = (devUrl || PROD_URL).replace(/\/$/, '')

export const SITE_NAME = 'ANDRIANANTENAINA Angelo'
export const OG_IMAGE = `${SITE_URL}/preview-opengraph.jpg`
export const PROFILE_IMAGE = `${SITE_URL}/images/profile.jpg`

export const SOCIAL = {
  email: 'contact@andrianantenaina-angelo.site',
  phone: '+261345992047',
  whatsapp: 'https://wa.me/261345992047',
  github: 'https://github.com/ANDRIANANTENAINA001Angelo',
  linkedin: 'https://www.linkedin.com/in/andrianantenaina-angelo',
  facebook: 'https://web.facebook.com/andrianantenaina.angelo.ia/',
  codeur: 'https://www.codeur.com/-angeloa25og',
  booking: 'https://calendly.com/a-angelo-mada/30min'
} as const
