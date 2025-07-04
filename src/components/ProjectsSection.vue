<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { projects } from '../data/projects' 

const projectsRef = ref<HTMLElement>()
const isVisible = ref(false)
const selectedFilter = ref('all')

const { stop } = useIntersectionObserver(
  projectsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { threshold: 0.2 }
)

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'software', label: 'Software' },
  { id: 'data', label: 'Data Science' },
  { id: 'api', label: 'API' },
]

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return projects
  return projects.filter(project => project.tags.includes(selectedFilter.value))
})
</script>

<template>
  <section id="projets" ref="projectsRef" class="projects section-padding">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Mes Projets</h2>
        <div class="section-divider"></div>
      </div>

      <div class="filters" :class="{ 'visible': isVisible }">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="selectedFilter = filter.id"
          class="filter-btn"
          :class="{ 'active': selectedFilter === filter.id }"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="projects-grid">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="project-card"
          :class="{ 'visible': isVisible, 'featured': project.featured }"
          :style="{ transitionDelay: (index * 0.1) + 's' }"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="project-actions">
                <a :href="project.link" target="_blank" class="action-btn view-btn" rel="noopener noreferrer">
                  <span>👁</span>
                </a>
                <a :href="project.github" target="_blank" class="action-btn github-btn" rel="noopener noreferrer">
                  <span>⚡</span>
                </a>
              </div>
            </div>
          </div>

          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-category">{{ project.tags.join(', ') }}</div>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-technologies">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="project-featured-badge" v-if="project.featured">
            ⭐ Projet phare
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--gradient-dark, #1a1a2e);
  position: relative;
  overflow: hidden;
  contain: layout style paint;
}

/* Suppression de l'animation coûteuse sur mobile */
.projects::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--primary-color, #ff6b35) 0%, transparent 70%);
  opacity: 0.03;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary, #ffffff);
  margin-bottom: 1rem;
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-divider {
  width: 60px;
  height: 4px;
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  margin: 0 auto;
  border-radius: 2px;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  flex-wrap: wrap;
}

.filters.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-btn {
  background: transparent;
  color: var(--text-secondary, #b0b0b0);
  border: 2px solid var(--border-color, rgba(255, 255, 255, 0.1));
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  white-space: nowrap;
}

.filter-btn:hover {
  color: var(--primary-color, #ff6b35);
  border-color: var(--primary-color, #ff6b35);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  color: white;
  border-color: transparent;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.project-card {
  background: var(--bg-card, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(50px);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
}

a.project-card {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color, #ff6b35);
}

.project-card.featured {
  border: 2px solid var(--primary-color, #ff6b35);
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
}

.project-featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  flex-shrink: 0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.action-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary, #ffffff);
  margin: 0;
  flex: 1;
}

.project-category {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-color, #ff6b35);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
}

.project-description {
  color: var(--text-secondary, #b0b0b0);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  flex-grow: 1;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tech-tag {
  background: rgba(74, 144, 226, 0.1);
  color: var(--secondary-color, #4A90E2);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(74, 144, 226, 0.2);
}

/* Modal Styles */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.modal-content {
  background: var(--bg-dark, #1a1a2e);
  border-radius: 20px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 107, 53, 0.8);
}

.modal-image {
  height: 300px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 2rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary, #ffffff);
  margin-bottom: 1rem;
}

.modal-description {
  color: var(--text-secondary, #b0b0b0);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.modal-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
}

/* Media queries optimisées pour tablettes */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .project-image {
    height: 220px;
  }
  
  .project-content {
    padding: 1.25rem;
  }
}

/* Media queries pour mobile */
@media (max-width: 768px) {
  .projects {
    padding: 2rem 0;
  }
  
  /* Suppression de l'animation coûteuse sur mobile */
  .projects::before {
    display: none;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .filters {
    gap: 0.75rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 20px;
  }
  
  .filter-btn:hover {
    transform: none;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .project-card {
    margin: 0;
    border-radius: 15px;
    /* Suppression des effets coûteux sur mobile */
    backdrop-filter: none;
    background: rgba(255, 255, 255, 0.08);
  }
  
  .project-card:hover {
    transform: none;
    box-shadow: none;
  }
  
  .project-image {
    height: 200px;
  }
  
  .project-content {
    padding: 1.25rem;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .project-category {
    align-self: flex-start;
  }
  
  .project-title {
    font-size: 1.2rem;
  }
  
  .project-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
  
  .project-featured-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
  }
  
  /* Suppression des effets hover sur mobile */
  .project-overlay {
    display: none;
  }
  
  .action-btn {
    position: static;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  /* Modal optimisé pour mobile */
  .project-modal {
    padding: 1rem;
  }
  
  .modal-content {
    max-height: 95vh;
    border-radius: 15px;
  }
  
  .modal-image {
    height: 200px;
  }
  
  .modal-info {
    padding: 1.5rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-description {
    font-size: 1rem;
  }
  
  .modal-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .modal-close {
    top: 0.75rem;
    right: 0.75rem;
    width: 35px;
    height: 35px;
    font-size: 1.5rem;
  }
}

/* Media queries pour petits mobiles */
@media (max-width: 480px) {
  .projects {
    padding: 1.5rem 0;
  }
  
  .section-header {
    margin-bottom: 1.5rem;
  }
  
  .filters {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 18px;
  }
  
  .projects-grid {
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  .project-card {
    border-radius: 12px;
  }
  
  .project-image {
    height: 180px;
  }
  
  .project-content {
    padding: 1rem;
  }
  
  .project-title {
    font-size: 1.1rem;
  }
  
  .project-description {
    font-size: 0.85rem;
  }
  
  .project-category {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
  
  .tech-tag {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
  }
  
  .project-featured-badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    top: 0.75rem;
    right: 0.75rem;
  }
  
  .modal-info {
    padding: 1rem;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
  
  .modal-description {
    font-size: 0.9rem;
  }
}

/* Media queries pour très petits écrans */
@media (max-width: 360px) {
  .projects {
    padding: 1rem 0;
  }
  
  .filters {
    padding: 0 0.25rem;
  }
  
  .filter-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .projects-grid {
    padding: 0 0.25rem;
  }
  
  .project-image {
    height: 160px;
  }
  
  .project-content {
    padding: 0.75rem;
  }
  
  .project-title {
    font-size: 1rem;
  }
  
  .project-description {
    font-size: 0.8rem;
  }
}

/* Optimisations de performance pour mobile */
@media (max-width: 768px) {
  .project-card {
    will-change: auto;
    transition: opacity 0.3s ease;
  }
  
  .project-card.visible {
    opacity: 1;
    transform: none;
  }
  
  .section-header {
    transition: opacity 0.3s ease;
  }
  
  .filters {
    transition: opacity 0.3s ease;
  }
}

/* Suppression complète des animations sur connexion lente */
@media (max-width: 480px) and (prefers-reduced-motion: reduce) {
  .project-card,
  .section-header,
  .filters,
  .filter-btn {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
</style>

