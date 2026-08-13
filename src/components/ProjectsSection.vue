<script setup lang="ts">
import { computed } from 'vue'
import { useLang } from '@/composables/useLang'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const { t, lang } = useLang()

const featured = computed(() => projects.filter(p => p.featured))
const others = computed(() => projects.filter(p => !p.featured))
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.projects.title }}</h2>
        <p class="section-subtitle">{{ t.projects.subtitle }}</p>
      </div>

      <!-- Featured projects -->
      <div class="projects-grid">
        <ProjectCard
          v-for="project in featured"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Other projects (always visible if any) -->
      <div v-if="others.length" class="more-projects">
        <div class="more-header">
          <h3 class="more-title">
            {{ lang === 'fr' ? 'Autres réalisations' : 'Other work' }}
          </h3>
          <p class="more-sub">
            {{ lang === 'fr'
              ? 'Projets complémentaires et missions techniques.'
              : 'Additional projects and technical missions.' }}
          </p>
        </div>
        <div class="projects-grid compact">
          <ProjectCard
            v-for="project in others"
            :key="project.id"
            :project="project"
            compact
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.projects-grid.compact {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.more-projects {
  margin-top: 4rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border);
}

.more-header {
  margin-bottom: 1.5rem;
}

.more-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  color: var(--text);
  letter-spacing: -0.02em;
}

.more-sub {
  font-size: 0.9375rem;
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
