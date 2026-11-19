<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { articles } from '@/data/articles'
import { articlePath, resourcesPath } from '@/i18n'

const { t, lang } = useLang()

// Latest articles available in the current language
const latest = articles
  .filter(a => a.translations[lang.value])
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
  .slice(0, 3)
  .map(a => ({ id: a.id, body: a.translations[lang.value]!, path: articlePath(a, lang.value)! }))
</script>

<template>
  <section id="resources" class="section resources-teaser">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.resources.title }}</h2>
        <p class="section-subtitle">{{ t.resources.hubIntro }}</p>
      </div>

      <ul class="rt-list">
        <li v-for="item in latest" :key="item.id" class="rt-item">
          <h3 class="rt-title">
            <router-link :to="item.path">{{ item.body.title }}</router-link>
          </h3>
          <p class="rt-answer">{{ item.body.answer }}</p>
        </li>
      </ul>

      <router-link :to="resourcesPath(lang)" class="btn btn-secondary">{{ t.resources.allArticles }}</router-link>
    </div>
  </section>
</template>

<style scoped>
.rt-list {
  margin-bottom: 2rem;
  border-top: 1px solid var(--border);
}

.rt-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  max-width: 820px;
}

.rt-title {
  font-size: 1.35rem;
  font-weight: 740;
  letter-spacing: -0.015em;
  line-height: 1.25;
  margin-bottom: 0.5rem;
}

.rt-title a {
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: var(--border-strong);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

.rt-title a:hover {
  text-decoration-color: var(--primary);
}

.rt-answer {
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 72ch;
}
</style>
