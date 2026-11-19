<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { useSeo, absoluteUrl } from '@/composables/useSeo'
import { articles } from '@/data/articles'
import { articlePath, homePath, resourcesPath } from '@/i18n'
import { breadcrumbSchema } from '@/seo/schema'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

const { t, lang } = useLang()
const l = lang.value

// Only articles available in this language
const list = articles
  .filter(a => a.translations[l])
  .map(a => ({ article: a, body: a.translations[l]!, path: articlePath(a, l)! }))
  .sort((a, b) => b.article.datePublished.localeCompare(a.article.datePublished))

const crumbs = [
  { name: t.value.services.breadcrumbHome, path: homePath(l) },
  { name: t.value.resources.title, path: resourcesPath(l) }
]

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(l === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

useSeo({
  lang: l,
  title: t.value.resources.hubMetaTitle,
  description: t.value.resources.hubIntro,
  path: resourcesPath(l),
  alternates: { fr: resourcesPath('fr'), en: resourcesPath('en') },
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: t.value.resources.hubTitle,
      description: t.value.resources.hubIntro,
      url: absoluteUrl(resourcesPath(l)),
      inLanguage: l,
      blogPost: list.map(i => ({
        '@type': 'BlogPosting',
        headline: i.body.title,
        url: absoluteUrl(i.path),
        datePublished: i.article.datePublished
      }))
    },
    breadcrumbSchema(crumbs)
  ]
})
</script>

<template>
  <div class="section resources-hub">
    <div class="container">
      <BreadcrumbNav :items="crumbs" />

      <header class="rh-header">
        <h1 class="rh-title">{{ t.resources.hubTitle }}</h1>
        <p class="rh-intro">{{ t.resources.hubIntro }}</p>
      </header>

      <div class="rh-list">
        <article v-for="item in list" :key="item.article.id" class="rh-item card">
          <p class="rh-date">
            <time :datetime="item.article.datePublished">{{ formatDate(item.article.datePublished) }}</time>
          </p>
          <h2 class="rh-item-title">
            <router-link :to="item.path">{{ item.body.title }}</router-link>
          </h2>
          <p class="rh-item-desc">{{ item.body.answer }}</p>
          <router-link :to="item.path" class="rh-link">{{ t.resources.readMore }}</router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resources-hub {
  padding-top: 2.5rem;
}

.rh-header {
  max-width: 760px;
  margin-bottom: 2.5rem;
}

.rh-title {
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text);
}

.rh-intro {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.rh-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  gap: 1.5rem;
}

.rh-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
}

.rh-date {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
}

.rh-item-title {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.35;
}

.rh-item-title a {
  color: var(--text);
}

.rh-item-title a:hover {
  color: var(--primary);
}

.rh-item-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.rh-link {
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
}
</style>
