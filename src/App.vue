<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import CookieConsent from '@/components/CookieConsent.vue'
import { alternatePath } from '@/i18n'
import { trackPageView } from '@/composables/useAnalytics'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  // Old links used ?lang=en: send them to the /en page
  if (route.query.lang === 'en' && route.meta.lang !== 'en') {
    router.replace(alternatePath(route, 'en'))
  }
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
