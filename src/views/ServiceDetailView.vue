<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLang } from '@/composables/useLang'
import { useSeo } from '@/composables/useSeo'
import { getServiceBySlug, getServiceById, formatOfferPrice, type Service } from '@/data/services'
import { getProjectBySlug, type Project } from '@/data/projects'
import { homePath, servicePath, servicesPath, projectPath } from '@/i18n'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/seo/schema'
import { SOCIAL } from '@/config'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

const props = defineProps<{ slug: string }>()

const router = useRouter()
const { t, lang, lp } = useLang()
const l = lang.value

const found = getServiceBySlug(props.slug, l)
if (!found) router.replace(servicesPath(l))
const service = found as Service

const relatedProjects = (found?.relatedProjects ?? [])
  .map(getProjectBySlug)
  .filter((p): p is Project => Boolean(p))
const relatedServices = (found?.relatedServices ?? [])
  .map(getServiceById)
  .filter((s): s is Service => Boolean(s))

const crumbs = found
  ? [
      { name: t.value.services.breadcrumbHome, path: homePath(l) },
      { name: t.value.services.title, path: servicesPath(l) },
      { name: service.title[l], path: servicePath(service, l) }
    ]
  : []

if (found) {
  useSeo({
    lang: l,
    title: `${service.seoTitle[l]} | Angelo`,
    description: service.metaDescription[l],
    keywords: service.keywords[l],
    path: servicePath(service, l),
    alternates: { fr: servicePath(service, 'fr'), en: servicePath(service, 'en') },
    jsonLd: [
      serviceSchema(service, l),
      faqSchema(service.faq.map(f => ({ q: f.q[l], a: f.a[l] }))),
      breadcrumbSchema(crumbs)
    ]
  })
}
</script>

<template>
  <article v-if="found" class="section service-page">
    <div class="container">
      <BreadcrumbNav :items="crumbs" />

      <header class="sp-header">
        <h1 class="sp-title">{{ service.seoTitle[lang] }}</h1>
        <div class="sp-summary card">
          <p class="sp-summary-label">{{ t.services.summaryLabel }}</p>
          <p>{{ service.summary[lang] }}</p>
        </div>
      </header>

      <div class="sp-columns">
        <section class="sp-block">
          <h2>{{ t.services.forWhoTitle }}</h2>
          <ul class="sp-list">
            <li v-for="item in service.forWho[lang]" :key="item">{{ item }}</li>
          </ul>
        </section>
        <section class="sp-block">
          <h2>{{ t.services.problemsTitle }}</h2>
          <ul class="sp-list">
            <li v-for="item in service.problems[lang]" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>

      <section class="sp-block">
        <h2>{{ t.services.offersTitle }}</h2>
        <div class="sp-offers">
          <div v-for="offer in service.offers" :key="offer.name.fr" class="sp-offer card">
            <h3>{{ offer.name[lang] }}</h3>
            <p class="sp-offer-desc">{{ offer.description[lang] }}</p>
            <p class="sp-offer-meta">
              <strong>{{ formatOfferPrice(offer, lang) }}</strong>
              <span v-if="offer.timeline"> · {{ t.services.timelineLabel }} : {{ offer.timeline[lang] }}</span>
            </p>
          </div>
        </div>
        <p class="sp-note">{{ t.services.priceNote }}</p>
      </section>

      <section class="sp-block">
        <h2>{{ t.services.processTitle }}</h2>
        <ol class="sp-process">
          <li v-for="step in t.services.process" :key="step.title">
            <strong>{{ step.title }}</strong>
            <span>{{ step.text }}</span>
          </li>
        </ol>
      </section>

      <section v-if="relatedProjects.length" class="sp-block">
        <h2>{{ t.services.relatedProjectsTitle }}</h2>
        <ul class="sp-links">
          <li v-for="project in relatedProjects" :key="project.id">
            <router-link :to="projectPath(project, lang)">{{ project.title[lang] }}</router-link>
            <span> — {{ project.shortDescription[lang] }}</span>
          </li>
        </ul>
      </section>

      <section class="sp-block">
        <h2>{{ t.services.faqTitle }}</h2>
        <div class="sp-faq">
          <details v-for="item in service.faq" :key="item.q.fr">
            <summary>{{ item.q[lang] }}</summary>
            <p>{{ item.a[lang] }}</p>
          </details>
        </div>
      </section>

      <section class="sp-cta card">
        <h2>{{ t.services.ctaTitle }}</h2>
        <p>{{ t.services.ctaText }}</p>
        <div class="sp-cta-actions">
          <a :href="SOCIAL.booking" class="btn btn-primary" target="_blank" rel="noopener">{{ t.services.ctaBooking }}</a>
          <a :href="`mailto:${SOCIAL.email}`" class="btn btn-secondary">{{ t.services.ctaEmail }}</a>
          <a :href="lp('/#contact')" class="btn btn-ghost">{{ t.nav.contact }}</a>
        </div>
      </section>

      <section v-if="relatedServices.length" class="sp-block">
        <h2>{{ t.services.relatedServicesTitle }}</h2>
        <ul class="sp-links">
          <li v-for="s in relatedServices" :key="s.id">
            <router-link :to="servicePath(s, lang)">{{ s.title[lang] }}</router-link>
            <span> — {{ s.tagline[lang] }}</span>
          </li>
          <li>
            <router-link :to="servicesPath(lang)">{{ t.services.allServices }}</router-link>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<style scoped>
.service-page {
  padding-top: 2.5rem;
}

.sp-header {
  max-width: 820px;
  margin-bottom: 2.5rem;
}

.sp-title {
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  color: var(--text);
}

.sp-summary {
  padding: 1.25rem 1.5rem;
  border-left: 4px solid var(--primary);
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text);
}

.sp-summary-label {
  font-size: 0.9rem;
  font-weight: 700;
  font-stretch: var(--narrow);
  color: var(--primary);
  margin-bottom: 0.4rem;
}

.sp-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 0 2.5rem;
}

.sp-block {
  margin-bottom: 2.75rem;
}

.sp-block h2,
.sp-cta h2 {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text);
}

.sp-list {
  list-style: disc;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.sp-offers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1.25rem;
}

.sp-offer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;
}

.sp-offer h3 {
  font-size: 1.05rem;
  font-weight: 650;
  color: var(--text);
}

.sp-offer-desc {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.sp-offer-meta {
  margin-top: auto;
  padding-top: 0.6rem;
  border-top: 1px solid var(--border);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.sp-offer-meta strong {
  color: var(--primary);
}

.sp-note {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.sp-process {
  list-style: decimal;
  padding-left: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sp-process li {
  color: var(--text-secondary);
  line-height: 1.55;
}

.sp-process strong {
  color: var(--text);
  margin-right: 0.4rem;
}

.sp-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.sp-links a {
  font-weight: 600;
  color: var(--primary);
}

.sp-faq {
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--text);
  max-width: 820px;
}

.sp-faq details {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
}

.sp-faq summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--text);
}

.sp-faq details p {
  margin-top: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.sp-cta {
  padding: 2rem;
  margin-bottom: 2.75rem;
  text-align: center;
}

.sp-cta p {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 1.25rem;
}

.sp-cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
</style>
