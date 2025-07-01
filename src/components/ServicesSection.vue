<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const servicesRef = ref<HTMLElement>()
const isVisible = ref(false)

const { stop } = useIntersectionObserver(
  servicesRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { threshold: 0.2 }
)

const services = [
  {
    id: 1,
    icon: '🎨',
    title: 'Design UI/UX',
    description: 'Création d\'interfaces utilisateur modernes et intuitives avec une attention particulière à l\'expérience utilisateur.',
    features: ['Design System', 'Prototypage', 'Wireframing', 'Tests utilisateurs'],
    price: 'À partir de 2000€'
  },
  {
    id: 2,
    icon: '💻',
    title: 'Développement Web',
    description: 'Développement d\'applications web performantes et scalables avec les technologies les plus récentes.',
    features: ['Vue.js / React', 'Node.js', 'API REST', 'Base de données'],
    price: 'À partir de 3000€'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Applications Mobile',
    description: 'Création d\'applications mobiles natives et cross-platform pour iOS et Android.',
    features: ['React Native', 'Flutter', 'App Store', 'Play Store'],
    price: 'À partir de 4000€'
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Optimisation & SEO',
    description: 'Amélioration des performances et du référencement naturel de vos sites web existants.',
    features: ['Performance', 'SEO technique', 'Core Web Vitals', 'Analytics'],
    price: 'À partir de 1500€'
  },
  {
    id: 5,
    icon: '☁️',
    title: 'Déploiement Cloud',
    description: 'Mise en production et hébergement de vos applications sur des plateformes cloud sécurisées.',
    features: ['AWS / Azure', 'Docker', 'CI/CD', 'Monitoring'],
    price: 'À partir de 1000€'
  },
  {
    id: 6,
    icon: '🛠️',
    title: 'Maintenance & Support',
    description: 'Maintenance continue, mises à jour et support technique pour vos applications en production.',
    features: ['Support 24/7', 'Mises à jour', 'Sauvegardes', 'Sécurité'],
    price: 'À partir de 800€/mois'
  }
]
</script>

<template>
  <section id="services" ref="servicesRef" class="services section-padding">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title fade-in">Mes Services</h2>
        <p class="section-subtitle fade-in">
          Des solutions complètes pour tous vos besoins digitaux
        </p>
      </div>
      
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="service-card glass" 
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: (index * 0.1) + 's' }"
        >
          <div class="service-icon">
            <span>{{ service.icon }}</span>
          </div>
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                <span class="feature-check">✓</span>
                {{ feature }}
              </li>
            </ul>
            <div class="service-footer">
              <!-- <div class="service-price">{{ service.price }}</div> -->
              <button class="btn-service" @click="scrollToSection('contact')">En savoir plus</button>
            </div>
          </div>
          <div class="service-hover-effect"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}


</script>

<style scoped>
.services {
  background: var(--bg-dark);
  position: relative;
  padding-top: 1rem; /* Réduit l'espace avec la section précédente */
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.service-card {
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(50px);
  cursor: pointer;
}

.service-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
}

.service-card:hover .service-hover-effect {
  opacity: 1;
  transform: scale(1);
}

.service-hover-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.5s ease;
  pointer-events: none;
  z-index: -1;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}

.service-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.service-card:hover .service-icon::before {
  left: 100%;
}

.service-icon span {
  font-size: 2rem;
  filter: grayscale(100%) brightness(2);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.service-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.service-features li {
  display: flex;
  align-items: center;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.feature-check {
  color: var(--primary-color);
  font-weight: bold;
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.service-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
}

.btn-service {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-service:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .btn-service {
    width: 100%;
    text-align: center;
  }
}
</style>