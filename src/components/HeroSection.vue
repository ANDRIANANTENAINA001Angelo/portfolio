<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { t, lp } = useLang()
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="badge">{{ t.hero.badge }}</span>

        <h1 class="hero-title">
          <span class="hero-kicker">{{ t.hero.kicker }}</span>
          {{ t.hero.title }}
        </h1>

        <p class="hero-subtitle">
          {{ t.hero.subtitle }}
        </p>

        <div class="hero-cta">
          <a :href="lp('/#contact')" class="btn btn-primary">{{ t.hero.ctaPrimary }}</a>
          <a :href="lp('/#projects')" class="btn btn-secondary">{{ t.hero.ctaSecondary }}</a>
        </div>

        <div class="hero-stats">
          <div v-for="(stat, i) in t.hero.stats" :key="i" class="stat">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="photo-wrap">
          <picture>
            <source srcset="/images/profile.webp" type="image/webp" />
            <img
              src="/images/profile.jpg"
              alt="Angelo ANDRIANANTENAINA, entrepreneur et ingénieur IA"
              class="photo"
              width="320"
              height="320"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 4.5rem 0 5rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.65fr);
  gap: 4rem;
  align-items: center;
}

.hero-content {
  max-width: 720px;
}

.badge {
  margin-bottom: 1.75rem;
}

/* The one bold move: a wide, heavy headline */
.hero-title {
  font-size: clamp(2.1rem, 4.2vw, 3.25rem);
  font-weight: 780;
  font-stretch: 118%;
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: var(--text);
  margin-bottom: 1.5rem;
}

.hero-kicker {
  display: block;
  margin-bottom: 1rem;
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  font-weight: 500;
  font-stretch: 100%;
  letter-spacing: 0;
  line-height: 1.3;
  color: var(--text-secondary);
}

.hero-subtitle {
  max-width: 60ch;
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

/* Key figures as a ledger: condensed numerals, aligned on a rule */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 0 3rem;
  padding-top: 1.25rem;
  border-top: 2px solid var(--text);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stat-value {
  font-size: 2.4rem;
  font-weight: 800;
  font-stretch: var(--condensed);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: var(--text);
}

.stat-label {
  font-size: 0.875rem;
  font-stretch: var(--narrow);
  color: var(--text-muted);
  line-height: 1.35;
  max-width: 22ch;
}

.hero-visual {
  display: flex;
  justify-content: flex-end;
}

/* Photo with an offset rizière block, like a print registration mark */
.photo-wrap {
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 4 / 5;
}

.photo-wrap::before {
  content: '';
  position: absolute;
  inset: 14px -14px -14px 14px;
  background: var(--primary);
  border-radius: var(--radius-lg);
}

.photo {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
  display: block;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-visual {
    order: -1;
    justify-content: flex-start;
  }

  .photo-wrap {
    max-width: 180px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2.5rem 0 3.5rem;
  }

  .hero-stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 1rem;
  }

  .stat-value {
    font-size: 1.85rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .photo-wrap {
    max-width: 140px;
  }

  .photo-wrap::before {
    inset: 10px -10px -10px 10px;
  }
}
</style>
