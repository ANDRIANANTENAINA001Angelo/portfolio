import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { content, type Lang } from '@/data/content'

const currentLang = ref<Lang>('fr')

export function useLang() {
  const route = useRoute()
  const router = useRouter()

  const syncFromQuery = () => {
    const q = route.query.lang
    if (q === 'en' || q === 'fr') {
      currentLang.value = q
    } else {
      currentLang.value = 'fr'
    }
  }

  syncFromQuery()

  watch(
    () => route.query.lang,
    () => syncFromQuery()
  )

  const setLang = (lang: Lang) => {
    currentLang.value = lang
    const query = { ...route.query, lang }
    if (lang === 'fr') {
      const { lang: _, ...rest } = query
      router.replace({ query: rest })
    } else {
      router.replace({ query })
    }
    document.documentElement.lang = lang
  }

  // On enlève le type strict Content pour éviter le conflit fr/en
  const t = computed(() => content[currentLang.value])

  const lang = computed(() => currentLang.value)

  return {
    lang,
    t,
    setLang,
    isFr: computed(() => currentLang.value === 'fr'),
    isEn: computed(() => currentLang.value === 'en')
  }
}