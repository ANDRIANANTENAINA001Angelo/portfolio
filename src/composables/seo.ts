import { useHead } from '@vueuse/head'

interface SeoOptions {
  title: string
  description: string
  image?: string
  url?: string
  author?: string
}

export function useSeo({
  title,
  description,
  image = 'https://www.andrianantenaina-angelo.site/preview-opengraph.jpg',
  url = 'https://www.andrianantenaina-angelo.site',
  author = 'ANDRIANANTENAINA Angelo'
}: SeoOptions) {
  useHead({
    title,
    meta: [
      // SEO de base
      { name: 'description', content: description },
      { name: 'keywords', content: 'ANDRIANANTENAINA Angelo, Développeur, Laravel, IA, Vue.js, Madagascar, Portfolio, Backend, Python, Freelance' },
      { name: 'author', content: author },

      // Open Graph (Facebook, LinkedIn, WhatsApp…)
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [
      // Canonical URL pour éviter le contenu dupliqué
      { rel: 'canonical', href: url }
    ]
  })
}
