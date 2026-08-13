<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.about.title }}</h2>
        <p class="section-subtitle">{{ t.about.subtitle }}</p>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p v-for="(p, i) in t.about.body" :key="i" class="about-p">
            {{ p }}
          </p>
        </div>

        <div class="about-values">
          <div v-for="(v, i) in t.about.values" :key="i" class="value-card card">
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-text">{{ v.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-p {
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.7;
}

.about-p:last-child {
  margin-bottom: 0;
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-card {
  padding: 1.25rem 1.5rem;
}

.value-title {
  font-size: 1rem;
  font-weight: 650;
  margin-bottom: 0.4rem;
  color: var(--text);
}

.value-text {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

@media (max-width: 800px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
