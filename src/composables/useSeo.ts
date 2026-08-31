import { useHead } from '@vueuse/head'
import { computed, type Ref } from 'vue'
import type { Project } from '@/data/projects'
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/config'

export function usePageSeo(t: Ref<any>, extra?: { title?: string; description?: string }) {
  const title = computed(() => extra?.title || t.value.meta.title)
  const description = computed(() => extra?.description || t.value.meta.description)

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: () => t.value.meta.keywords },
      { name: 'author', content: SITE_NAME },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL + '/' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:secure_url', content: OG_IMAGE },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_NAME} — AI & Backend Engineer` },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: () => (document.documentElement.lang === 'en' ? 'en_US' : 'fr_FR') },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: SITE_URL + '/' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE },
      { name: 'twitter:image:alt', content: `${SITE_NAME} — AI & Backend Engineer` }
    ],
    link: [
      { rel: 'canonical', href: SITE_URL + '/' }
    ]
  })
}

export function useProjectSeo(project: Project, lang: Ref<'fr' | 'en'>) {
  const title = computed(() => `${project.title[lang.value]} — ${SITE_NAME}`)
  const description = computed(() => project.shortDescription[lang.value])
  const url = computed(() => `${SITE_URL}/projets/${project.slug}/${project.techSlug}`)

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE }
    ],
    link: [
      { rel: 'canonical', href: url }
    ]
  })
}
