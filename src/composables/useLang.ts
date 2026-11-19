import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { content } from '@/data/content'
import { alternatePath, withLang, type Lang } from '@/i18n'

/** Language comes from the URL (/en prefix), so each language has its own indexable page. */
export function useLang() {
  const route = useRoute()
  const router = useRouter()

  const lang = computed<Lang>(() => route.meta.lang ?? (route.path.startsWith('/en') ? 'en' : 'fr'))
  const t = computed(() => content[lang.value])

  const setLang = (target: Lang) => {
    if (target !== lang.value) router.push(alternatePath(route, target))
  }

  /** Localised version of an FR path, e.g. lp('/#contact') → '/en#contact' in English. */
  const lp = (path: string) => withLang(path, lang.value)

  return {
    lang,
    t,
    setLang,
    lp,
    isFr: computed(() => lang.value === 'fr'),
    isEn: computed(() => lang.value === 'en')
  }
}
