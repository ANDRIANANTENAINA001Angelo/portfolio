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
  { id: 'all', label: 'Tout' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ecommerce', label: 'E-commerce' }
]

const projects = [
  {
    id: 1,
    title: 'E-Commerce Moderne',
    category: 'ecommerce',
    description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    longDescription: 'Une plateforme e-commerce moderne développée avec Vue.js et Node.js, intégrant Stripe pour les paiements, un système de gestion des stocks en temps réel, et une interface d\'administration complète.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 2,
    title: 'App Mobile Fitness',
    category: 'mobile',
    description: 'Application mobile de fitness avec suivi des performances et programmes d\'entraînement.',
    longDescription: 'Application mobile cross-platform développée avec React Native, permettant le suivi des entraînements, la création de programmes personnalisés, et l\'intégration avec les wearables.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    category: 'web',
    description: 'Tableau de bord analytique avec visualisations interactives et rapports en temps réel.',
    longDescription: 'Dashboard moderne avec visualisations de données en temps réel, développé avec Vue.js et D3.js. Intègre plusieurs sources de données et permet l\'export de rapports personnalisés.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Site Corporate',
    category: 'web',
    description: 'Site vitrine corporate avec CMS intégré et optimisation SEO avancée.',
    longDescription: 'Site web corporate élégant avec système de gestion de contenu personnalisé, optimisé pour le SEO et les performances. Inclut un blog, une galerie et un système de contact avancé.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Nuxt.js', 'Strapi', 'TailwindCSS', 'Netlify'],
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Marketplace B2B',
    category: 'ecommerce',
    description: 'Plateforme marketplace B2B avec gestion multi-vendeurs et système de commissions.',
    longDescription: 'Marketplace complexe permettant à plusieurs vendeurs de proposer leurs produits, avec système de commissions automatique, gestion des livraisons et interface d\'administration avancée.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MySQL', 'AWS'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 6,
    title: 'App de Livraison',
    category: 'mobile',
    description: 'Application de livraison avec géolocalisation et suivi en temps réel.',
    longDescription: 'Application mobile complète pour service de livraison, incluant géolocalisation GPS, notifications push, paiement intégré et interface chauffeur séparée.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'PayPal'],
    link: '#',
    github: '#',
    featured: false
  }
]

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === selectedFilter.value)
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
        <h2 class="section-title fade-in">Mes Projets</h2>
        <p class="section-subtitle fade-in">
          Découvrez quelques-unes de mes réalisations récentes
        </p>
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