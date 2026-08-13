<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t } = useLang()
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content animate-fade-up">
        <span class="badge">{{ t.hero.badge }}</span>

        <h1 class="hero-title">
          {{ t.hero.title }}
        </h1>

        <p class="hero-subtitle">
          {{ t.hero.subtitle }}
        </p>

        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary">{{ t.hero.ctaPrimary }}</a>
          <a href="#contact" class="btn btn-secondary">{{ t.hero.ctaSecondary }}</a>
        </div>

        <div class="hero-stats">
          <div v-for="(stat, i) in t.hero.stats" :key="i" class="stat">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual animate-fade-up">
        <div class="photo-wrap">
          <img
            src="/images/profile.jpg"
            alt="ANDRIANANTENAINA Angelo"
            class="photo"
            width="320"
            height="320"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 4rem 0 5rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -15%;
  right: -5%;
  width: 45%;
  height: 70%;
  background: radial-gradient(ellipse, var(--primary-soft) 0%, transparent 70%);
  opacity: 0.55;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  max-width: 640px;
}

.badge {
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(1.85rem, 4.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--text);
  margin-bottom: 1.15rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1.75rem;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.35;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-wrap {
  position: relative;
  width: min(300px, 100%);
  aspect-ratio: 1;
}

.photo-wrap::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 28px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 0.35;
  z-index: 0;
}

.photo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  border: 3px solid var(--bg-elevated);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-visual {
    order: -1;
  }

  .photo-wrap {
    width: min(220px, 70vw);
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2.5rem 0 3.5rem;
  }
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
