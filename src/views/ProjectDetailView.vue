<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLang } from '@/composables/useLang'
import { useProjectSeo } from '@/composables/useSeo'
import { getProjectBySlug, type Project } from '@/data/projects'

const props = defineProps<{
  slug: string
  techSlug?: string
}>()

const router = useRouter()
const { t, lang } = useLang()

const project = computed(() => getProjectBySlug(props.slug))

if (!project.value) {
  router.replace('/')
}

if (project.value) {
  useProjectSeo(project.value as Project, lang)
}

const images = computed(() => project.value?.images ?? [])
const hasImages = computed(() => images.value.length > 0)
const currentSlide = ref(0)
let slideTimer: ReturnType<typeof setInterval> | null = null

const startSlider = () => {
  stopSlider()
  if (images.value.length > 1) {
    slideTimer = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % images.value.length
    }, 4500)
  }
}

const stopSlider = () => {
  if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }
}

const goToSlide = (i: number) => {
  currentSlide.value = i
  startSlider()
}

onMounted(startSlider)
onUnmounted(stopSlider)
watch(images, () => {
  currentSlide.value = 0
  startSlider()
})

const statusLabel = computed(() =>
  project.value ? t.value.projects.status[project.value.status] : ''
)

const onImgError = (e: Event) => {
  const el = e.target as HTMLImageElement
  el.style.display = 'none'
}
</script>

<template>
  <div v-if="project" class="project-detail">
    <div class="container">
      <router-link to="/#projects" class="back-link">
        ← {{ t.projects.back }}
      </router-link>

      <header class="detail-header">
        <div class="header-meta">
          <span class="status-badge" :class="project.status">{{ statusLabel }}</span>
          <span class="year">{{ project.year }}</span>
        </div>
        <h1 class="detail-title">{{ project.title[lang] }}</h1>
        <p class="detail-lead">{{ project.shortDescription[lang] }}</p>

        <div v-if="project.metrics?.length" class="detail-metrics">
          <div v-for="(m, i) in project.metrics" :key="i" class="metric">
            <span class="metric-value">{{ m.value }}</span>
            <span class="metric-label">{{ m.label[lang] }}</span>
          </div>
        </div>
      </header>

      <!-- Gallery with real images -->
      <div
        class="detail-gallery card"
        @mouseenter="stopSlider"
        @mouseleave="startSlider"
      >
        <template v-if="hasImages">
          <img
            v-for="(img, i) in images"
            :key="i"
            :src="img.src"
            :alt="img.alt"
            class="gallery-img"
            :class="{ active: currentSlide === i }"
            loading="eager"
            @error="onImgError"
          />
          <div v-if="images.length > 1" class="gallery-dots">
            <button
              v-for="(_, i) in images"
              :key="i"
              type="button"
              class="dot"
              :class="{ active: currentSlide === i }"
              :aria-label="`Image ${i + 1}`"
              @click="goToSlide(i)"
            />
          </div>
          <button
            v-if="images.length > 1"
            type="button"
            class="nav-btn prev"
            aria-label="Previous"
            @click="goToSlide((currentSlide - 1 + images.length) % images.length)"
          >
            ‹
          </button>
          <button
            v-if="images.length > 1"
            type="button"
            class="nav-btn next"
            aria-label="Next"
            @click="goToSlide((currentSlide + 1) % images.length)"
          >
            ›
          </button>
        </template>

        <div v-else class="gallery-placeholder">
          <span class="gallery-icon">{{ project.technologies[0]?.slice(0, 2) }}</span>
          <p class="gallery-techs">{{ project.technologies.join(' · ') }}</p>
          <p class="gallery-hint">
            {{ lang === 'fr'
              ? 'Ajoutez vos captures dans public/images/projects/'
              : 'Add screenshots in public/images/projects/' }}
          </p>
        </div>
      </div>

      <div class="detail-body">
        <section class="detail-block">
          <h2>{{ t.projects.challenge }}</h2>
          <p>{{ project.challenge[lang] }}</p>
        </section>

        <section class="detail-block">
          <h2>{{ t.projects.solution }}</h2>
          <p>{{ project.solution[lang] }}</p>
        </section>

        <section class="detail-block">
          <h2>{{ t.projects.results }}</h2>
          <p>{{ project.results[lang] }}</p>
        </section>

        <section class="detail-block">
          <h2>{{ t.projects.tech }}</h2>
          <div class="tech-list">
            <span v-for="tech in project.technologies" :key="tech" class="tag tag-primary">
              {{ tech }}
            </span>
          </div>
        </section>

        <div v-if="project.github || project.demo" class="detail-links">
          <a
            v-if="project.demo"
            :href="project.demo"
            class="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Live demo
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            class="btn btn-secondary"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-detail {
  padding: 2.5rem 0 5rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  transition: color 0.15s;
}

.back-link:hover {
  color: var(--primary);
}

.detail-header {
  margin-bottom: 2.5rem;
  max-width: 720px;
}

.header-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  background: var(--bg-muted);
  color: var(--text-secondary);
}

.status-badge.live {
  background: var(--primary-soft);
  color: var(--primary);
}

.status-badge.in-progress {
  background: var(--accent-soft);
  color: var(--accent);
}

.year {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.detail-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.85rem;
}

.detail-lead {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.detail-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.metric-value {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--primary);
}

.metric-label {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

/* Gallery */
.detail-gallery {
  position: relative;
  margin-bottom: 3rem;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  max-height: 480px;
  background: var(--bg-muted);
}

.gallery-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.gallery-img.active {
  opacity: 1;
}

.gallery-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 3;
}

.gallery-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.gallery-dots .dot.active {
  background: white;
  transform: scale(1.15);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, background 0.2s;
}

.detail-gallery:hover .nav-btn {
  opacity: 1;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.65);
}

.nav-btn.prev {
  left: 0.75rem;
}

.nav-btn.next {
  right: 0.75rem;
}

.gallery-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, var(--primary-soft), var(--accent-soft));
  padding: 2rem;
  text-align: center;
}

.gallery-icon {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  font-family: var(--font-mono);
  opacity: 0.9;
}

.gallery-techs {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.gallery-hint {
  font-size: 0.8125rem;
  color: var(--text-muted);
  max-width: 320px;
}

.detail-body {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-block h2 {
  font-size: 1.125rem;
  font-weight: 650;
  margin-bottom: 0.6rem;
  color: var(--text);
}

.detail-block p {
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.detail-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.5rem;
}
</style>
