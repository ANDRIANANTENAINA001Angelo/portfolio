<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLang } from '@/composables/useLang'
import { useSeo } from '@/composables/useSeo'
import { getArticleBySlug, type Article, type ArticleBody } from '@/data/articles'
import { getServiceById, type Service } from '@/data/services'
import { SITE_NAME } from '@/config'
import { aboutPath, articlePath, homePath, resourcesPath, servicePath } from '@/i18n'
import { articleSchema, breadcrumbSchema, faqSchema } from '@/seo/schema'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

const props = defineProps<{ slug: string }>()

const router = useRouter()
const { t, lang } = useLang()
const l = lang.value

const found = getArticleBySlug(props.slug, l)
if (!found) router.replace(resourcesPath(l))
const article = found as Article
const body = found?.translations[l] as ArticleBody
const path = found ? articlePath(found, l)! : resourcesPath(l)

const relatedServices = (found?.relatedServices ?? [])
  .map(getServiceById)
  .filter((s): s is Service => Boolean(s))

const crumbs = found
  ? [
      { name: t.value.services.breadcrumbHome, path: homePath(l) },
      { name: t.value.resources.title, path: resourcesPath(l) },
      { name: body.title, path }
    ]
  : []

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(l === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

if (found) {
  useSeo({
    lang: l,
    title: `${body.title} | Angelo`,
    description: body.description,
    path,
    alternates: {
      ...(articlePath(article, 'fr') ? { fr: articlePath(article, 'fr') } : {}),
      ...(articlePath(article, 'en') ? { en: articlePath(article, 'en') } : {})
    },
    type: 'article',
    article: { published: article.datePublished, modified: article.dateModified },
    jsonLd: [articleSchema(article, body, l, path), faqSchema(body.faq), breadcrumbSchema(crumbs)]
  })
}
</script>

<template>
  <article v-if="found" class="section article-page">
    <div class="container article-container">
      <BreadcrumbNav :items="crumbs" />

      <header class="ar-header">
        <h1 class="ar-title">{{ body.title }}</h1>
        <p class="ar-meta">
          {{ t.resources.byline }}
          <router-link :to="aboutPath(lang)" rel="author">{{ SITE_NAME }}</router-link>
          · {{ t.resources.published }} <time :datetime="article.datePublished">{{ formatDate(article.datePublished) }}</time>
          <template v-if="article.dateModified !== article.datePublished">
            · {{ t.resources.updated }} <time :datetime="article.dateModified">{{ formatDate(article.dateModified) }}</time>
          </template>
        </p>
      </header>

      <section class="ar-answer card">
        <h2 class="ar-answer-label">{{ t.resources.answerLabel }}</h2>
        <p>{{ body.answer }}</p>
      </section>

      <section v-for="section in body.sections" :key="section.heading" class="ar-section">
        <h2>{{ section.heading }}</h2>
        <p v-for="(p, i) in section.paragraphs" :key="i">{{ p }}</p>
        <ul v-if="section.list">
          <li v-for="item in section.list" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="ar-section">
        <h2>{{ t.resources.faqTitle }}</h2>
        <div class="ar-faq">
          <details v-for="item in body.faq" :key="item.q" class="card">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </section>

      <aside v-if="relatedServices.length" class="ar-related card">
        <p class="ar-related-label">{{ t.resources.relatedService }}</p>
        <div v-for="s in relatedServices" :key="s.id">
          <router-link :to="servicePath(s, lang)" class="ar-related-link">{{ s.title[lang] }} →</router-link>
          <p>{{ s.tagline[lang] }}</p>
        </div>
      </aside>
    </div>
  </article>
</template>

<style scoped>
.article-page {
  padding-top: 2.5rem;
}

.article-container {
  max-width: 820px;
}

.ar-title {
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--text);
}

.ar-meta {
  margin: 0.75rem 0 1.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.ar-meta a {
  font-weight: 600;
  color: var(--primary);
}

.ar-answer {
  padding: 1.25rem 1.5rem;
  border-left: 4px solid var(--primary);
  margin-bottom: 2.5rem;
  line-height: 1.65;
  color: var(--text);
}

.ar-answer-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--primary);
  margin-bottom: 0.4rem;
}

.ar-section {
  margin-bottom: 2.25rem;
}

.ar-section h2 {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
  color: var(--text);
}

.ar-section p {
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 0.85rem;
}

.ar-section ul {
  list-style: disc;
  padding-left: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.ar-faq {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ar-faq details {
  padding: 1rem 1.25rem;
}

.ar-faq summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--text);
}

.ar-faq details p {
  margin: 0.75rem 0 0;
}

.ar-related {
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.ar-related-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.ar-related-link {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--primary);
}

.ar-related p {
  margin-top: 0.35rem;
  color: var(--text-secondary);
}
</style>
