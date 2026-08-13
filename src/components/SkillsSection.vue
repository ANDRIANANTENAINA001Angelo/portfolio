<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-header center">
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <p class="section-subtitle">{{ t.skills.subtitle }}</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="(cat, i) in t.skills.categories"
          :key="i"
          class="skill-card card"
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.skill-card {
  padding: 1.5rem;
}

.skill-cat {
  font-size: 0.9375rem;
  font-weight: 650;
  color: var(--primary);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  flex-shrink: 0;
  opacity: 0.7;
}
</style>
