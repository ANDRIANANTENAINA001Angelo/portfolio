<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLang } from '@/composables/useLang'
import { loadAnalytics, getConsent, setConsent } from '@/composables/useAnalytics'

const { lang } = useLang()
const visible = ref(false)

onMounted(() => {
  const consent = getConsent()
  if (consent === 'accepted') {
    loadAnalytics()
  } else if (consent === null) {
    visible.value = true
  }
})

function accept() {
  setConsent('accepted')
  loadAnalytics()
  visible.value = false
}

function decline() {
  setConsent('declined')
  visible.value = false
}

const text = {
  fr: {
    message: 'Ce site utilise Google Analytics pour mesurer l’audience de façon anonymisée. Vous pouvez accepter ou refuser.',
    accept: 'Accepter',
    decline: 'Refuser'
  },
  en: {
    message: 'This site uses Google Analytics to measure audience, anonymized. You can accept or decline.',
    accept: 'Accept',
    decline: 'Decline'
  }
}
</script>

<template>
  <div v-if="visible" class="cookie-banner" role="dialog" aria-label="Cookie consent">
    <p class="cookie-text">{{ text[lang].message }}</p>
    <div class="cookie-actions">
      <button type="button" class="btn btn-secondary" @click="decline">{{ text[lang].decline }}</button>
      <button type="button" class="btn btn-primary" @click="accept">{{ text[lang].accept }}</button>
    </div>
  </div>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  z-index: 200;
  max-width: 440px;
  margin: 0 auto;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cookie-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.cookie-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

@media (max-width: 600px) {
  .cookie-actions {
    justify-content: stretch;
  }

  .cookie-actions .btn {
    flex: 1;
  }
}
</style>
