<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { SOCIAL } from '@/config'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { projectPath, servicePath, servicesPath } from '@/i18n'

const { t, lang } = useLang()

const links = [
  { label: 'GitHub', href: SOCIAL.github },
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'Facebook', href: SOCIAL.facebook },
  { label: 'Codeur', href: SOCIAL.codeur }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-sitemap">
      <nav :aria-label="t.footer.servicesTitle">
        <p class="footer-heading">
          <router-link :to="servicesPath(lang)">{{ t.footer.servicesTitle }}</router-link>
        </p>
        <ul>
          <li v-for="s in services" :key="s.id">
            <router-link :to="servicePath(s, lang)">{{ s.title[lang] }}</router-link>
          </li>
        </ul>
      </nav>
      <nav :aria-label="t.footer.projectsTitle">
        <p class="footer-heading">{{ t.footer.projectsTitle }}</p>
        <ul>
          <li v-for="p in projects" :key="p.id">
            <router-link :to="projectPath(p, lang)">{{ p.title[lang] }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
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

.footer-sitemap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem 3rem;
  padding-bottom: 1.75rem;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid var(--border);
}

.footer-heading {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.footer-heading a {
  color: inherit;
}

.footer-sitemap ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-size: 0.875rem;
}

.footer-sitemap a {
  color: var(--text-muted);
}

.footer-sitemap a:hover {
  color: var(--primary);
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
