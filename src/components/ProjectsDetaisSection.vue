<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const slug = route.params.slug as string

const project = computed(() =>
  projects.find((p) => p.slug === slug)
)
</script>

<template>
  <section class="project-details" v-if="project">
    <div class="container">
      <h1 class="title">{{ project.title }}</h1>
      <img :src="project.image" :alt="project.title" class="project-image" />
      <p class="description">{{ project.longDescription }}</p>

      <h3>Technologies utilisées :</h3>
      <ul class="tech-list">
        <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
      </ul>

      <div class="links">
        <a :href="project.link" target="_blank" class="btn-primary">Voir le projet</a>
        <a :href="project.github" target="_blank" class="btn-secondary">Code source</a>
      </div>
    </div>
  </section>

  <section v-else>
    <p class="error">Projet introuvable. 😕</p>
  </section>
</template>

<style scoped>
.project-details {
  padding: 4rem 2rem;
  background: var(--bg-darker);
  color: var(--text-primary);
}
.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.project-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 2rem;
}
.description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.tech-list li {
  background: var(--bg-card);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
}
.links a {
  margin-right: 1rem;
}
</style>
