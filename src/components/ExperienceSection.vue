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
          class="exp-card"
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
/* A real sequence: items hang on a rail with latérite nodes, like steps of a workflow */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-left: 2rem;
  max-width: 900px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: var(--border-strong);
}

.exp-card {
  position: relative;
}

.exp-card::before {
  content: '';
  position: absolute;
  left: calc(-2rem + 0px);
  top: 0.45rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg);
  border: 2.5px solid var(--accent);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 1.3rem;
  font-weight: 740;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.exp-company {
  font-size: 1rem;
  color: var(--primary);
  font-weight: 600;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.15rem;
  font-size: 0.875rem;
  font-stretch: var(--narrow);
  font-variant-numeric: tabular-nums;
  color: var(--text-muted);
  white-space: nowrap;
}

.exp-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: 0.9rem;
  max-width: 72ch;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 640px) {
  .timeline {
    padding-left: 1.5rem;
  }
  .exp-card::before {
    left: -1.5rem;
  }
  .exp-header {
    flex-direction: column;
    gap: 0.4rem;
  }
  .exp-meta {
    align-items: flex-start;
  }
}
</style>
