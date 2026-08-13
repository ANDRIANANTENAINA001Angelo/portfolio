<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="rights">{{ t.footer.rights }}</p>
      <p class="built">{{ t.footer.built }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  background: var(--bg-elevated);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
