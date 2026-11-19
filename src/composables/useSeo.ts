import { useHead } from '@unhead/vue'
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/config'
import type { Lang } from '@/i18n'

export interface SeoInput {
  lang: Lang
  title: string
  description: string
  /** Path of this page (no domain) */
  path: string
  /** Same page in each language, for hreflang */
  alternates: Record<Lang, string>
  type?: 'website' | 'article'
  keywords?: string
  jsonLd?: Record<string, unknown>[]
}

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

/** Per-page head: title, description, canonical, hreflang, Open Graph, Twitter and JSON-LD. */
export function useSeo(input: SeoInput) {
  const url = absoluteUrl(input.path)

  useHead({
    title: input.title,
    htmlAttrs: { lang: input.lang },
    meta: [
      { name: 'description', content: input.description },
      ...(input.keywords ? [{ name: 'keywords', content: input.keywords }] : []),
      { name: 'author', content: SITE_NAME },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },

      { property: 'og:type', content: input.type ?? 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: input.title },
      { property: 'og:description', content: input.description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_NAME} — ${input.lang === 'fr' ? 'Développeur IA freelance' : 'Freelance AI developer'}` },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: input.lang === 'fr' ? 'fr_FR' : 'en_US' },
      { property: 'og:locale:alternate', content: input.lang === 'fr' ? 'en_US' : 'fr_FR' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: input.title },
      { name: 'twitter:description', content: input.description },
      { name: 'twitter:image', content: OG_IMAGE }
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: 'fr', href: absoluteUrl(input.alternates.fr) },
      { rel: 'alternate', hreflang: 'en', href: absoluteUrl(input.alternates.en) },
      { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(input.alternates.fr) }
    ],
    script: (input.jsonLd ?? []).map((data, i) => ({
      key: `ld-${i}`,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data)
    }))
  })
}
