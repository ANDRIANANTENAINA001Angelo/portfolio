<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <p class="section-subtitle">{{ t.skills.subtitle }}</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="(cat, i) in t.skills.categories"
          :key="i"
          class="skill-card"
        >
          <h3 class="skill-cat">{{ cat.name }}</h3>
          <ul class="skill-list">
            <li v-for="item in cat.items" :key="item" class="skill-item">
              <span class="dot"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 2px solid var(--text);
}

.skill-card {
  padding: 1.25rem 1.5rem 0.5rem;
  border-left: 1px solid var(--border);
}

.skill-card:first-child {
  border-left: none;
  padding-left: 0;
}

.skill-cat {
  font-size: 1.1rem;
  font-weight: 740;
  color: var(--text);
  margin-bottom: 0.9rem;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-item {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background: var(--primary);
  flex-shrink: 0;
  transform: translateY(-2px);
}

@media (max-width: 1000px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .skill-card:nth-child(odd) {
    border-left: none;
    padding-left: 0;
  }
  .skill-card:nth-child(n + 3) {
    border-top: 1px solid var(--border);
  }
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .skill-card {
    border-left: none;
    padding: 1.25rem 0 0.75rem;
  }
  .skill-card + .skill-card {
    border-top: 1px solid var(--border);
  }
}
</style>
