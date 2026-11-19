import { useHead } from '@unhead/vue'
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/config'
import type { Lang } from '@/i18n'

export interface SeoInput {
  lang: Lang
  title: string
  description: string
  /** Path of this page (no domain) */
  path: string
  /** Same page in each language, for hreflang (omit a language the page is not translated into) */
  alternates: Partial<Record<Lang, string>>
  type?: 'website' | 'article'
  keywords?: string
  jsonLd?: Record<string, unknown>[]
  article?: { published: string; modified: string }
}

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

function hreflangLinks(alternates: Partial<Record<Lang, string>>) {
  const entries = Object.entries(alternates) as [Lang, string][]
  if (entries.length < 2) return []
  const fallback = alternates.fr ?? entries[0][1]
  return [
    ...entries.map(([lang, path]) => ({ rel: 'alternate', hreflang: lang, href: absoluteUrl(path) })),
    { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(fallback) }
  ]
}

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
      ...(input.article
        ? [
            { property: 'article:published_time', content: input.article.published },
            { property: 'article:modified_time', content: input.article.modified },
            { property: 'article:author', content: SITE_NAME }
          ]
        : []),

      { property: 'og:type', content: input.type ?? 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: input.title },
      { property: 'og:description', content: input.description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_NAME} — ${input.lang === 'fr' ? 'Entrepreneur & Ingénieur IA' : 'Entrepreneur & AI Engineer'}` },
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
      ...hreflangLinks(input.alternates)
    ],
    script: (input.jsonLd ?? []).map((data, i) => ({
      key: `ld-${i}`,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(data)
    }))
  })
}
