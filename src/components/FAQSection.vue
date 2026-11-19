<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <section id="faq" class="section faq">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.faq.title }}</h2>
        <p class="section-subtitle">{{ t.faq.subtitle }}</p>
      </div>

      <div class="faq-list">
        <details v-for="(item, i) in t.faq.items" :key="i" class="faq-item">
          <summary class="faq-question">{{ item.q }}</summary>
          <p class="faq-answer">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  max-width: 860px;
  border-top: 2px solid var(--text);
}

.faq-item {
  padding: 1.15rem 0;
  border-bottom: 1px solid var(--border);
}

.faq-question {
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 680;
  font-stretch: 108%;
  color: var(--text);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question::after {
  content: '+';
  flex-shrink: 0;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--primary);
  transition: transform 0.2s ease;
}

.faq-item[open] .faq-question::after {
  transform: rotate(45deg);
}

.faq-answer {
  margin-top: 0.65rem;
  max-width: 72ch;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
