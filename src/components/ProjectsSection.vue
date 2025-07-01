<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const projectsRef = ref<HTMLElement>()
const isVisible = ref(false)
const selectedFilter = ref('all')
const selectedProject = ref(null)

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
  // { id: 'ia', label: 'IA' },
  { id: 'api', label: 'API' },
]

const projects = [
  {
    id: 4,
    title: 'Prédiction Salaire API',
    tags: ['data', 'api',"ia"],
    description: "API ML de prédiction de salaire basée sur du web scraping.",
    longDescription: "Scraping, entraînement de modèle ML, déploiement API REST avec Swagger.",
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Flask', 'Sklearn', 'Swagger'],
    link: 'https://github.com/ANDRIANANTENAINA001Angelo/data-to-model-pipeline',
    github: 'https://github.com/ANDRIANANTENAINA001Angelo/data-to-model-pipeline',
    featured: true
  },
  {
    id: 5,
    title: 'ChatterBot',
    tags: ['data',"api","ai"],
    description: 'Assistant conversationnel simple via API Flask.',
    longDescription: 'Bot basé sur ChatterBot, API REST pour intégration facile, organisation propre du code.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Flask', 'ChatterBot', 'JSON'],
    link: 'https://github.com/ANDRIANANTENAINA001Angelo/ChatterBot',
    github: 'https://github.com/ANDRIANANTENAINA001Angelo/ChatterBot',
    featured: false
  },
  {
    id: 6,
    title: 'Face Detector',
    tags: ['data',"api","ai"],
    description: 'Détection de visages avec OpenCV.',
    longDescription: 'Détection basique de visage, démo dans notebook, API Flask.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'OpenCV', 'Flask'],
    link: 'https://github.com/ANDRIANANTENAINA001Angelo/face_detector',
    github: 'https://github.com/ANDRIANANTENAINA001Angelo/face_detector',
    featured: false
  },  
{
    id: 1,
    title: 'Ticket Place',
    tags: ['software', 'api'],
    description: "Système de billetterie Laravel avec API REST et gestion des tickets.",
    longDescription: "Plateforme de réservation de places pour événements, documentation Swagger, auth avec Sanctum.",
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Laravel', 'API REST', 'Sanctum', 'Swagger'],
    link: 'https://github.com/ANDRIANANTENAINA001Angelo/ticket-place',
    github: 'https://github.com/ANDRIANANTENAINA001Angelo/ticket-place',
    featured: true
  },
  {
    id: 2,
    title: 'Paiement Pension',
    tags: ['software'],
    description: "Application Laravel de gestion de pension et paiements.",
    longDescription: "Gestion des pensionnaires, suivi des paiements, architecture propre, Laravel Filament.",
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Laravel', 'Filament', 'MVC', 'Blade'],
    link: 'https://github.com/ANDRIANANTENAINA001Angelo/payement-pension',
    github: 'https://github.com/ANDRIANANTENAINA001Angelo/payement-pension',
    featured: false
  },
  {
    id: 3,
    title: 'API Dynamique PHP',
    tags: ['software', 'api'],
    description: "API REST full générique pour base de données.",
    longDescription: "Génération dynamique d'API CRUD pour toutes tables d'une base de données.",
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['PHP', 'REST', 'MySQL'],
    link: 'https://github.com/ANDRIANANTENAINA001Angelo/API-Dynamique',
    github: 'https://github.com/ANDRIANANTENAINA001Angelo/API-Dynamique',
    featured: true
  }
]

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return projects
  return projects.filter(project => project.tags.includes(selectedFilter.value))
})

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" ref="projectsRef" class="projects section-padding">
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
          @click="openProjectModal(project)"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="project-actions">
                <button class="action-btn view-btn">
                  <span>👁</span>
                </button>
                <button class="action-btn github-btn">
                  <span>⚡</span>
                </button>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-category">{{ project.category }}</div>
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
    
    <!-- Modal Project -->
    <div v-if="selectedProject" class="project-modal" @click="closeProjectModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeProjectModal">×</button>
        <div class="modal-image">
          <img :src="selectedProject.image" :alt="selectedProject.title" />
        </div>
        <div class="modal-info">
          <h3 class="modal-title">{{ selectedProject.title }}</h3>
          <p class="modal-description">{{ selectedProject.longDescription }}</p>
          <div class="modal-technologies">
            <span 
              v-for="tech in selectedProject.technologies"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <div class="modal-actions">
            <a :href="selectedProject.link" class="btn-primary" target="_blank">
              Voir le projet
            </a>
            <a :href="selectedProject.github" class="btn-secondary" target="_blank">
              Code source
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--gradient-dark);
  position: relative;
  overflow: hidden;
}

.projects::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0.03;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.filters.visible {
  opacity: 1;
  transform: translateY(0);
}

.filter-btn {
  background: transparent;
  color: var(--text-secondary);
  border: 2px solid var(--border-color);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.filter-btn:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.project-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(50px);
  cursor: pointer;
  position: relative;
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-color);
}

.project-card.featured {
  border: 2px solid var(--primary-color);
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.2);
}

.project-featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-primary);
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
  background: var(--gradient-primary);
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
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-divider {
  width: 60px;
  height: 4px;
  background: var(--gradient-primary);
  margin: 0 auto;
  border-radius: 2px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.project-category {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(74, 144, 226, 0.1);
  color: var(--secondary-color);
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
  background: var(--bg-dark);
  border-radius: 20px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--border-color);
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
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.modal-description {
  color: var(--text-secondary);
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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .filters {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .project-card {
    margin: 0 0.5rem;
  }
  
  .modal-content {
    margin: 1rem;
    max-height: 95vh;
  }
  
  .modal-info {
    padding: 1.5rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>