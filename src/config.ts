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

/** Brand name: always "Angelo ANDRIANANTENAINA" (see brand-perso/02-plateforme-de-marque.md) */
export const SITE_NAME = 'Angelo ANDRIANANTENAINA'
export const ALT_NAME = 'ANDRIANANTENAINA Angelo'
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

export interface OnlineProfile {
  label: string
  url: string
  /** What this profile is for, shown on the About page */
  role: { fr: string; en: string }
  group: 'pro' | 'freelance' | 'code' | 'community'
}

/**
 * Every official profile. Single source for the About page (rel="me" links),
 * JSON-LD `sameAs` and llms.txt: add a profile here and it appears everywhere.
 * Only list profiles confirmed to be mine (several homonyms exist).
 * TODO: Malt, ComeUp and the personal Facebook profile (URLs to confirm).
 */
export const PROFILES: OnlineProfile[] = [
  {
    label: 'LinkedIn',
    url: SOCIAL.linkedin,
    role: { fr: 'Parcours, recommandations et publications', en: 'Background, recommendations and posts' },
    group: 'pro'
  },
  {
    label: 'GitHub',
    url: SOCIAL.github,
    role: { fr: 'Code source et projets open source', en: 'Source code and open-source projects' },
    group: 'code'
  },
  {
    label: 'Google Developer Profile',
    url: 'https://g.dev/andrianantenaina-angelo-mada',
    role: { fr: 'Profil développeur Google', en: 'Google developer profile' },
    group: 'code'
  },
  {
    label: 'Codeur.com',
    url: SOCIAL.codeur,
    role: { fr: 'Profil freelance (missions en France)', en: 'Freelance profile (French market)' },
    group: 'freelance'
  },
  {
    label: 'Remote OK',
    url: 'https://remoteok.com/@andrianantenaina_angelo',
    role: { fr: 'Profil pour les missions remote internationales', en: 'Profile for international remote work' },
    group: 'freelance'
  },
  {
    label: 'Facebook (Page pro)',
    url: SOCIAL.facebook,
    role: { fr: 'Actualités et contact', en: 'News and contact' },
    group: 'community'
  }
]

/** GoalPay, the company I co-founded (Organization entity in JSON-LD) */
export const GOALPAY = { name: 'GoalPay', url: 'https://goalpay.pro' } as const
