<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useLang } from '@/composables/useLang'
import { useSeo } from '@/composables/useSeo'
import { services } from '@/data/services'
import { PROFILES, SOCIAL, SITE_NAME, GOALPAY } from '@/config'
import { aboutPath, homePath, servicePath } from '@/i18n'
import { breadcrumbSchema, goalpaySchema, profilePageSchema } from '@/seo/schema'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

const { t, lang, lp } = useLang()
const l = lang.value
const page = t.value.aboutPage

const crumbs = [
  { name: t.value.services.breadcrumbHome, path: homePath(l) },
  { name: t.value.nav.about, path: aboutPath(l) }
]

useSeo({
  lang: l,
  title: page.metaTitle,
  description: page.metaDescription,
  path: aboutPath(l),
  alternates: { fr: aboutPath('fr'), en: aboutPath('en') },
  type: 'website',
  jsonLd: [profilePageSchema(l), goalpaySchema(), breadcrumbSchema(crumbs)]
})

// rel="me": declares that these profiles belong to the owner of this site
useHead({
  link: PROFILES.map(p => ({ rel: 'me', href: p.url }))
})
</script>

<template>
  <article class="section about-page">
    <div class="container">
      <BreadcrumbNav :items="crumbs" />

      <header class="ap-header">
        <picture>
          <source srcset="/images/profile.webp" type="image/webp" />
          <img
            src="/images/profile.jpg"
            :alt="`${SITE_NAME}, ${page.role}`"
            class="ap-photo"
            width="160"
            height="160"
            loading="eager"
          />
        </picture>
        <div>
          <h1 class="ap-name">{{ SITE_NAME }}</h1>
          <p class="ap-role">{{ page.role }}</p>
        </div>
      </header>

      <section class="ap-answer card">
        <h2 class="ap-answer-label">{{ page.answerLabel }}</h2>
        <p>{{ page.answer }}</p>
        <p class="ap-disambiguation">{{ page.disambiguation }}</p>
      </section>

      <div class="ap-grid">
        <section class="ap-block">
          <h2>{{ page.factsTitle }}</h2>
          <dl class="ap-facts">
            <template v-for="fact in page.facts" :key="fact.label">
              <dt>{{ fact.label }}</dt>
              <dd>
                <a v-if="fact.value.includes('GoalPay')" :href="GOALPAY.url" target="_blank" rel="noopener">{{ fact.value }}</a>
                <template v-else>{{ fact.value }}</template>
              </dd>
            </template>
          </dl>
        </section>

        <section class="ap-block">
          <h2>{{ page.profilesTitle }}</h2>
          <p class="ap-muted">{{ page.profilesIntro }}</p>
          <ul class="ap-profiles">
            <li v-for="profile in PROFILES" :key="profile.url">
              <a :href="profile.url" rel="me noopener" target="_blank">{{ profile.label }}</a>
              <span>{{ profile.role[lang] }}</span>
            </li>
          </ul>
        </section>
      </div>

      <section class="ap-block">
        <h2>{{ page.storyTitle }}</h2>
        <p v-for="(p, i) in t.about.body" :key="i" class="ap-story">{{ p }}</p>
      </section>

      <section class="ap-block">
        <h2>{{ page.timelineTitle }}</h2>
        <ol class="ap-timeline">
          <li v-for="item in t.experience.items" :key="item.role + item.company">
            <p class="ap-tl-period">{{ item.period }} · {{ item.location }}</p>
            <h3>{{ item.role }} — {{ item.company }}</h3>
            <p>{{ item.description }}</p>
          </li>
        </ol>
      </section>

      <section class="ap-block">
        <h2>{{ page.servicesTitle }}</h2>
        <ul class="ap-services">
          <li v-for="s in services" :key="s.id">
            <router-link :to="servicePath(s, lang)">{{ s.title[lang] }}</router-link>
            <span> — {{ s.tagline[lang] }}</span>
          </li>
        </ul>
      </section>

      <section class="ap-cta card">
        <h2>{{ page.contactTitle }}</h2>
        <p>{{ page.contactText }}</p>
        <div class="ap-cta-actions">
          <a :href="SOCIAL.booking" class="btn btn-primary" target="_blank" rel="noopener">{{ t.services.ctaBooking }}</a>
          <a :href="`mailto:${SOCIAL.email}`" class="btn btn-secondary">{{ SOCIAL.email }}</a>
          <a :href="lp('/#contact')" class="btn btn-ghost">{{ t.nav.contact }}</a>
        </div>
      </section>
    </div>
  </article>
</template>

<style scoped>
.about-page {
  padding-top: 2.5rem;
}

.ap-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.ap-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-soft);
}

.ap-name {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--text);
}

.ap-role {
  margin-top: 0.35rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary);
}

.ap-answer {
  max-width: 860px;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid var(--primary);
  margin-bottom: 2.75rem;
  line-height: 1.65;
  color: var(--text);
}

.ap-answer-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--primary);
  margin-bottom: 0.4rem;
}

.ap-disambiguation {
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.ap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: 0 3rem;
}

.ap-block {
  margin-bottom: 2.75rem;
}

.ap-block h2,
.ap-cta h2 {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text);
}

.ap-facts {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.6rem 1.25rem;
  font-size: 0.95rem;
}

.ap-facts dt {
  font-weight: 600;
  color: var(--text);
}

.ap-facts dd {
  margin: 0;
  color: var(--text-secondary);
}

.ap-facts a,
.ap-profiles a,
.ap-services a {
  font-weight: 600;
  color: var(--primary);
}

.ap-muted {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.ap-profiles,
.ap-services {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.ap-profiles li {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
  align-items: baseline;
}

.ap-profiles span {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.ap-story {
  max-width: 820px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 0.9rem;
}

.ap-timeline {
  list-style: none;
  padding: 0 0 0 1.25rem;
  border-left: 2px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 820px;
}

.ap-timeline li {
  position: relative;
}

.ap-timeline li::before {
  content: '';
  position: absolute;
  left: calc(-1.25rem - 7px);
  top: 0.35rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
}

.ap-tl-period {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
}

.ap-timeline h3 {
  font-size: 1.05rem;
  font-weight: 650;
  color: var(--text);
  margin: 0.2rem 0 0.35rem;
}

.ap-timeline p:not(.ap-tl-period) {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.ap-cta {
  padding: 2rem;
  margin-bottom: 2.75rem;
  text-align: center;
}

.ap-cta p {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 1.25rem;
}

.ap-cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

@media (max-width: 520px) {
  .ap-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .ap-facts {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
  .ap-facts dd {
    margin-bottom: 0.6rem;
  }
}
</style>
