<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '@/composables/useLang'
import { getProjectUrl, type Project } from '@/data/projects'

const props = defineProps<{
  project: Project
  compact?: boolean
}>()

const { t, lang } = useLang()

const url = computed(() => getProjectUrl(props.project))
const title = computed(() => props.project.title[lang.value])
const description = computed(() => props.project.shortDescription[lang.value])
const statusLabel = computed(() => t.value.projects.status[props.project.status])

const images = computed(() => props.project.images || [])
const hasImages = computed(() => images.value.length > 0)
const currentImg = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (images.value.length > 1) {
    timer = setInterval(() => {
      currentImg.value = (currentImg.value + 1) % images.value.length
    }, 4000)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const onImgError = (e: Event) => {
  const el = e.target as HTMLImageElement
  el.style.display = 'none'
  const fallback = el.parentElement?.querySelector('.media-fallback') as HTMLElement | null
  if (fallback) fallback.style.display = 'flex'
}
</script>

<template>
  <article class="project-card card" :class="{ compact }">
    <router-link :to="url" class="card-link">
      <div class="card-media">
        <!-- Real images -->
        <template v-if="hasImages">
          <img
            v-for="(img, i) in images"
            :key="i"
            :src="img.src"
            :alt="img.alt"
            class="media-img"
            :class="{ active: currentImg === i }"
            loading="lazy"
            @error="onImgError"
          />
          <div class="media-fallback" style="display: none">
            <span class="media-icon">{{ project.technologies[0]?.slice(0, 2) || 'AI' }}</span>
            <span class="media-label">{{ project.technologies.slice(0, 3).join(' · ') }}</span>
          </div>
          <div v-if="images.length > 1" class="dots">
            <span
              v-for="(_, i) in images"
              :key="i"
              class="dot"
              :class="{ active: currentImg === i }"
            />
          </div>
        </template>

        <!-- Fallback when no images configured -->
        <div v-else class="media-fallback" style="display: flex">
          <span class="media-icon">{{ project.technologies[0]?.slice(0, 2) || 'AI' }}</span>
          <span class="media-label">{{ project.technologies.slice(0, 3).join(' · ') }}</span>
        </div>

        <span class="status-badge" :class="project.status">
          {{ statusLabel }}
        </span>
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span class="year">{{ project.year }}</span>
        </div>
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-desc">{{ description }}</p>

        <div v-if="project.metrics?.length && !compact" class="card-metrics">
          <div v-for="(m, i) in project.metrics.slice(0, 3)" :key="i" class="metric">
            <span class="metric-value">{{ m.value }}</span>
            <span class="metric-label">{{ m.label[lang] }}</span>
          </div>
        </div>

        <div class="card-tech">
          <span
            v-for="tech in project.technologies.slice(0, compact ? 4 : 6)"
            :key="tech"
            class="tag"
          >
            {{ tech }}
          </span>
        </div>

        <span class="card-cta">
          {{ t.projects.viewDetails }} →
        </span>
      </div>
    </router-link>
  </article>
</template>

<style scoped>
.project-card {
  overflow: hidden;
  height: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
}

.card-media {
  position: relative;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--primary-soft), var(--accent-soft));
  overflow: hidden;
}

.media-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.media-img.active {
  opacity: 1;
}

.media-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
}

.media-icon {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--primary);
  opacity: 0.85;
  font-family: var(--font-mono);
}

.media-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: center;
  font-weight: 500;
}

.dots {
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.35rem;
  z-index: 2;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.2s;
}

.dot.active {
  background: white;
}

.status-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-full);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  z-index: 2;
}

.status-badge.live {
  background: var(--primary-soft);
  color: var(--primary);
  border-color: transparent;
}

.status-badge.in-progress {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: transparent;
}

.card-body {
  padding: 1.25rem 1.35rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.6rem;
}

.card-meta {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.card-title {
  font-size: 1.0625rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: var(--text);
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-metrics {
  display: flex;
  gap: 1rem;
  padding: 0.6rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin: 0.25rem 0;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.metric-value {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--primary);
}

.metric-label {
  font-size: 0.6875rem;
  color: var(--text-muted);
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}

.card-cta {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: 0.35rem;
}

.compact .card-media {
  aspect-ratio: 16 / 8;
}

.compact .card-body {
  padding: 1rem 1.15rem 1.25rem;
}
</style>
