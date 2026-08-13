import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { content, type Lang, type Content } from '@/data/content'

const currentLang = ref<Lang>('fr')

export function useLang() {
  const route = useRoute()
  const router = useRouter()

  // Sync from query on first load / navigation
  const syncFromQuery = () => {
    const q = route.query.lang
    if (q === 'en' || q === 'fr') {
      currentLang.value = q
    } else {
      currentLang.value = 'fr'
    }
  }

  // Call once
  syncFromQuery()

  watch(
    () => route.query.lang,
    () => syncFromQuery()
  )

  const setLang = (lang: Lang) => {
    currentLang.value = lang
    const query = { ...route.query, lang }
    if (lang === 'fr') {
      // keep URL clean for default
      const { lang: _, ...rest } = query
      router.replace({ query: rest })
    } else {
      router.replace({ query })
    }
    // Update html lang attribute
    document.documentElement.lang = lang
  }

  const t = computed<Content>(() => content[currentLang.value])

  const lang = computed(() => currentLang.value)

  return {
    lang,
    t,
    setLang,
    isFr: computed(() => currentLang.value === 'fr'),
    isEn: computed(() => currentLang.value === 'en')
  }
}
