<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { getProjectBySlug, getProjectUrl } from '@/data/projects'

const { t, lang } = useLang()

function exampleFor(exampleId?: string) {
  if (!exampleId) return null
  const project = getProjectBySlug(exampleId)
  if (!project) return null
  return { url: getProjectUrl(project), title: project.title[lang.value] }
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
        <article v-for="(service, i) in t.services.items" :key="i" class="service-card card">
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-problem">{{ service.problem }}</p>
          <p class="service-delivery">{{ service.delivery }}</p>
          <router-link
            v-if="exampleFor(service.exampleId)"
            :to="exampleFor(service.exampleId)!.url"
            class="service-example"
          >
            {{ lang === 'fr' ? 'Exemple' : 'Example' }} : {{ exampleFor(service.exampleId)!.title }} →
          </router-link>

          <div class="service-footer">
            <span class="service-timeline">{{ service.timeline }}</span>
            <a href="#contact" class="service-cta">{{ t.services.cta }} →</a>
          </div>
        </article>
      </div>

      <a href="#faq" class="services-faq-link">
        {{ lang === 'fr' ? 'Des questions sur mes services ?' : 'Questions about my services?' }}
        {{ lang === 'fr' ? 'Voir la FAQ' : 'See the FAQ' }} →
      </a>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  gap: 0.75rem;
}

.service-title {
  font-size: 1.125rem;
  font-weight: 650;
  color: var(--text);
  letter-spacing: -0.01em;
}

.service-problem {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

.service-delivery {
  font-size: 0.9375rem;
  color: var(--text);
  line-height: 1.55;
  padding-top: 0.5rem;
  border-top: 1px solid var(--border);
}

.service-example {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-muted);
}

.service-example:hover {
  color: var(--primary);
}

.service-footer {
  margin-top: auto;
  padding-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.service-timeline {
  font-size: 0.8125rem;
  color: var(--text-muted);
  font-weight: 500;
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

.services-faq-link {
  display: block;
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.services-faq-link:hover {
  color: var(--primary);
}
</style>
