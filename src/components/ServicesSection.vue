<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { services, startingPrice, formatPrice } from '@/data/services'
import { servicePath, servicesPath } from '@/i18n'

const { t, lang, lp } = useLang()

const fromPrice = (s: (typeof services)[number]) => {
  const offer = startingPrice(s)
  const suffix = offer.unit === 'month' ? (lang.value === 'fr' ? ' / mois' : ' / month') : ''
  return `${formatPrice(offer.priceMin, lang.value)}${suffix}`
}
</script>

<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.services.title }}</h2>
        <p class="section-subtitle">{{ t.services.subtitle }}</p>
      </div>

      <div class="services-grid">
        <article v-for="service in services" :key="service.id" class="service-card">
          <h3 class="service-title">
            <router-link :to="servicePath(service, lang)">{{ service.title[lang] }}</router-link>
          </h3>
          <p class="service-tagline">{{ service.tagline[lang] }}</p>
          <ul class="service-offers">
            <li v-for="offer in service.offers" :key="offer.name.fr">{{ offer.name[lang] }}</li>
          </ul>

          <div class="service-footer">
            <span class="service-price">{{ t.services.from }} {{ fromPrice(service) }}</span>
            <router-link :to="servicePath(service, lang)" class="service-cta">
              {{ t.services.viewService }}
            </router-link>
          </div>
        </article>
      </div>

      <div class="services-links">
        <router-link :to="servicesPath(lang)" class="services-all">{{ t.services.allServices }}</router-link>
        <a :href="lp('/#faq')" class="services-faq-link">
          {{ lang === 'fr' ? 'Des questions ? Voir la FAQ' : 'Questions? See the FAQ' }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 2px solid var(--text);
}

/* Columns separated by rules: a catalogue, not a stack of floating cards */
.service-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 1.75rem;
  gap: 0.75rem;
  border-left: 1px solid var(--border);
}

.service-card:first-child {
  border-left: none;
  padding-left: 0;
}

@media (max-width: 1000px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .service-card:nth-child(odd) {
    border-left: none;
    padding-left: 0;
  }
  .service-card:nth-child(n + 3) {
    border-top: 1px solid var(--border);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card {
    border-left: none;
    padding-left: 0;
    padding-right: 0;
  }
  .service-card + .service-card {
    border-top: 1px solid var(--border);
  }
}

.service-title {
  font-size: 1.3rem;
  font-weight: 760;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.service-title a {
  color: var(--text);
}

.service-title a:hover {
  color: var(--primary);
}

.service-tagline {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.service-offers {
  list-style: none;
  padding: 0.5rem 0 0;
  margin: 0;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.service-offers li {
  font-size: 0.9rem;
  color: var(--text);
  padding-left: 1rem;
  position: relative;
}

.service-offers li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: var(--primary);
}

.service-footer {
  margin-top: auto;
  padding-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.service-price {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.service-cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  white-space: nowrap;
}

.service-cta:hover {
  color: var(--primary-hover);
}

.services-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.75rem 2rem;
  margin-top: 2.5rem;
}

.services-all {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--primary);
}

.services-faq-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.services-faq-link:hover,
.services-all:hover {
  color: var(--primary-hover);
}
</style>
