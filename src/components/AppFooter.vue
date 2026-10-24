<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { SOCIAL } from '@/config'

const { t } = useLang()

const links = [
  { label: 'GitHub', href: SOCIAL.github },
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'Facebook', href: SOCIAL.facebook },
  { label: 'Codeur', href: SOCIAL.codeur }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="rights">{{ t.footer.rights }}</p>
      <nav class="footer-links" aria-label="Profils">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="footer-link"
        >
          {{ link.label }}
        </a>
      </nav>
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
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
}

.footer-link {
  color: var(--text-muted);
  font-weight: 500;
}

.footer-link:hover {
  color: var(--primary);
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
