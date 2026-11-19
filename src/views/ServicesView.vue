<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { useSeo, absoluteUrl } from '@/composables/useSeo'
import { services, formatOfferPrice } from '@/data/services'
import { homePath, servicePath, servicesPath } from '@/i18n'
import { breadcrumbSchema, businessSchema } from '@/seo/schema'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

const { t, lang } = useLang()
const l = lang.value

const crumbs = [
  { name: t.value.services.breadcrumbHome, path: homePath(l) },
  { name: t.value.services.title, path: servicesPath(l) }
]

useSeo({
  lang: l,
  title: l === 'fr'
    ? 'Services et tarifs — Développeur IA freelance à Madagascar | Angelo'
    : 'Services and pricing — Freelance AI developer in Madagascar | Angelo',
  description: t.value.services.hubIntro,
  path: servicesPath(l),
  alternates: { fr: servicesPath('fr'), en: servicesPath('en') },
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t.value.services.hubTitle,
      description: t.value.services.hubIntro,
      url: absoluteUrl(servicesPath(l)),
      inLanguage: l,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.title[l],
          url: absoluteUrl(servicePath(s, l))
        }))
      }
    },
    businessSchema(l),
    breadcrumbSchema(crumbs)
  ]
})
</script>

<template>
  <div class="section services-hub">
    <div class="container">
      <BreadcrumbNav :items="crumbs" />

      <header class="hub-header">
        <h1 class="hub-title">{{ t.services.hubTitle }}</h1>
        <p class="hub-intro">{{ t.services.hubIntro }}</p>
      </header>

      <div class="hub-list">
        <article v-for="service in services" :key="service.id" class="hub-item card">
          <h2 class="hub-item-title">
            <router-link :to="servicePath(service, lang)">{{ service.title[lang] }}</router-link>
          </h2>
          <p class="hub-item-summary">{{ service.summary[lang] }}</p>
          <table class="hub-offers">
            <tbody>
              <tr v-for="offer in service.offers" :key="offer.name.fr">
                <th scope="row">{{ offer.name[lang] }}</th>
                <td>{{ formatOfferPrice(offer, lang) }}</td>
              </tr>
            </tbody>
          </table>
          <router-link :to="servicePath(service, lang)" class="hub-item-link">
            {{ t.services.viewService }} : {{ service.title[lang] }} →
          </router-link>
        </article>
      </div>

      <p class="hub-note">{{ t.services.priceNote }}</p>
    </div>
  </div>
</template>

<style scoped>
.services-hub {
  padding-top: 2.5rem;
}

.hub-header {
  max-width: 760px;
  margin-bottom: 2.5rem;
}

.hub-title {
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text);
}

.hub-intro {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.hub-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  gap: 1.5rem;
}

.hub-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
}

.hub-item-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.hub-item-title a {
  color: var(--text);
}

.hub-item-title a:hover {
  color: var(--primary);
}

.hub-item-summary {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.hub-offers {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.hub-offers th,
.hub-offers td {
  padding: 0.55rem 0;
  border-top: 1px solid var(--border);
  vertical-align: top;
}

.hub-offers th {
  text-align: left;
  font-weight: 500;
  color: var(--text);
  padding-right: 1rem;
}

.hub-offers td {
  text-align: right;
  white-space: nowrap;
  font-weight: 600;
  color: var(--text-secondary);
}

.hub-item-link {
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
}

.hub-note {
  margin-top: 2rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}
</style>
