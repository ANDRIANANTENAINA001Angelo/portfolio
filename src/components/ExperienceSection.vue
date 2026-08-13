<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.experience.title }}</h2>
        <p class="section-subtitle">{{ t.experience.subtitle }}</p>
      </div>

      <div class="timeline">
        <article
          v-for="(item, i) in t.experience.items"
          :key="i"
          class="exp-card card"
        >
          <div class="exp-header">
            <div>
              <h3 class="exp-role">{{ item.role }}</h3>
              <p class="exp-company">{{ item.company }}</p>
            </div>
            <div class="exp-meta">
              <span class="exp-period">{{ item.period }}</span>
              <span class="exp-location">{{ item.location }}</span>
            </div>
          </div>
          <p class="exp-desc">{{ item.description }}</p>
          <div class="exp-tech">
            <span v-for="tech in item.tech" :key="tech" class="tag">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.exp-card {
  padding: 1.5rem 1.75rem;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 0.85rem;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 1.125rem;
  font-weight: 650;
  color: var(--text);
  margin-bottom: 0.2rem;
}

.exp-company {
  font-size: 0.9375rem;
  color: var(--primary);
  font-weight: 500;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.15rem;
  font-size: 0.8125rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.exp-desc {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.65;
  margin-bottom: 1rem;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 640px) {
  .exp-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  .exp-meta {
    align-items: flex-start;
  }
}
</style>
