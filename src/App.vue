<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import CookieConsent from '@/components/CookieConsent.vue'
import { useLang } from '@/composables/useLang'
import { usePageSeo } from '@/composables/useSeo'
import { trackPageView } from '@/composables/useAnalytics'

const route = useRoute()
const { t, lang } = useLang()

usePageSeo(t)

onMounted(() => {
  document.documentElement.lang = lang.value
})

watch(
  () => route.fullPath,
  (path) => trackPageView(path, document.title)
)
</script>

<template>
  <div class="app">
    <AppNav />
    <main>
      <router-view :key="route.fullPath" />
    </main>
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>
