<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const servicesRef = ref<HTMLElement>()
const isVisible = ref(false)

const emit = defineEmits(['contact-request'])


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
    icon: '🧠',
    title: 'Conception & Architecture logicielle',
    description: 'Transformez vos idées en projets bien cadrés, prêts à être développés sans imprévus.',
    features: [
      'Audit fonctionnel & recueil des besoins',
      'Cahier des charges clair (fonctionnel & technique)',
      'Architecture technique, diagrammes & API REST',
      'Livrables PDF compréhensibles, prêts à être transmis'
    ]
  },
  {
    id: 2,
    icon: '💻',
    title: 'Développement d’applications web & mobile',
    description: 'Conception d’applications sur mesure, performantes et prêtes à évoluer avec votre activité.',
    features: [
      'Interfaces modernes, fluides et intuitives',
      'Fonctionnalités backend puissantes et sécurisées',
      'API REST robustes et base de données adaptée',
      'Code propre, testé, maintenable et bien documenté'
    ]
  },
  {
    id: 3,
    icon: '📊',
    title: 'Analyse de données & tableaux de bord',
    description: 'Faites parler vos données pour mieux comprendre, décider et agir.',
    features: [
      'Nettoyage et structuration des données',
      'Tableaux de bord clairs, interactifs & visuellement engageants',
      'Analyses statistiques et exploration métier (approche Business)',
      'Rapports visuels & présentations synthétiques'
    ]
  },
  {
    id: 4,
    icon: '🤖',
    title: 'Intelligence Artificielle & Prédiction',
    description: 'Des modèles prédictifs et intelligents pour gagner du temps et anticiper vos résultats.',
    features: [
      'Machine Learning & Deep Learning sur mesure',
      'Modèles supervisés / non supervisés adaptés à vos données',
      'Exemples : prédiction des ventes, scoring client, analyse de texte (NLP)',
      'Déploiement via API, interface web ou notebook interactif'
    ]
  },
  {
    id: 5,
    icon: '🚀',
    title: 'Déploiement & Automatisation',
    description: 'Mettez vos apps en ligne et automatisations en place, de façon fiable, scalable et sécurisée.',
    features: [
      'Conteneurisation avec Docker',
      'Déploiement sur VPS / Render / Railway',
      'Scripts de CI/CD simples et efficaces',
      'Sécurisation et surveillance basique'
    ]
  },
  {
    id: 6,
    icon: '🔌',
    title: 'Intégration API & services tiers',
    description: 'Connectez vos outils entre eux pour automatiser et enrichir vos process.',
    features: [
      'APIs REST / GraphQL / Webhooks',
      'Scraping & collecte automatique',
      'Connexion Airtable, Stripe, ...',
      'Extraction vers Excel / PDF / CSV'
    ]
  }
]


const scrollToSection = (sectionId: string, serviceTitle: string) => {
  
  if (sectionId === "contact") {
    emit('contact-request', serviceTitle)
  }
  
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}


</script>

<template>
  <section id="services" ref="servicesRef" class="services section-padding">
    <div class="container">
      <div class="section-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title ">Mes Services</h2>
        <div class="section-divider"></div>
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
              <button class="btn-service" @click="scrollToSection('contact',service.title)" :title="`Contactez-moi pour ${service.title}`" :aria-label="`Contactez-moi pour ${service.title}`" >En savoir plus</button>
            </div>
          </div>
          <div class="service-hover-effect"></div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* Variables CSS pour cohérence avec les autres sections */
:root {
  --primary-color: #ff6b35;
  --secondary-color: #f7931e;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-muted: #888;
  --bg-dark: #1a1a2e;
  --bg-card: rgba(255, 255, 255, 0.05);
  --border-color: rgba(255, 255, 255, 0.1);
  --gradient-primary: linear-gradient(45deg, #ff6b35, #f7931e);
}

.services {
  background: var(--bg-dark);
  color: var(--text-primary);
  contain: layout style paint;
}

.section-padding {
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header optimisé mais cohérent */
.section-header {
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.section-header.visible {
  opacity: 1;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: var(--gradient-primary);
  margin: 0 auto;
  border-radius: 2px;
}

/* Grid cohérent avec les autres sections */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

/* Cards avec style cohérent */
.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  contain: layout style paint;
}

.service-card.visible {
  opacity: 1;
}

/* Effet glass cohérent mais simplifié */
.glass {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
}

/* Icon avec couleurs cohérentes */
.service-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Content optimisé */
.service-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.service-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 0.9rem;
}

/* Features avec couleurs cohérentes */
.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 auto 0;
  flex-grow: 1;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.4;
}

.feature-check {
  color: var(--primary-color);
  font-weight: bold;
  margin-right: 0.5rem;
  width: 16px;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

/* Footer cohérent */
.service-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.btn-service {
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  width: 100%;
  transition: transform 0.2s ease;
}

.btn-service:active {
  transform: scale(0.98);
}

/* Suppression de l'effet hover sur mobile */
.service-hover-effect {
  display: none;
}

/* Desktop - effets cohérents avec les autres sections */
@media (min-width: 769px) {
  .section-padding {
    padding: 5rem 0;
  }
  
  .container {
    padding: 0 2rem;
  }
  
  .section-header {
    margin-bottom: 4rem;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .section-header.visible {
    transform: translateY(0);
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    padding: 2rem;
    border-radius: 20px;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(20px);
  }
  
  .service-card.visible {
    transform: translateY(0);
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    border-radius: 20px;
  }
  
  .service-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .service-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .service-features li {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  .service-footer {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
  
  .btn-service {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 25px;
  }
  
  .btn-service:hover {
    transform: translateY(-2px);
  }
  
  /* Effet hover cohérent avec les autres sections */
  .service-hover-effect {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    border-radius: 20px;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  .service-card:hover .service-hover-effect {
    opacity: 0.05;
  }
  
  .service-card {
    will-change: transform, opacity;
  }
  
  .service-card.visible {
    will-change: auto;
  }
}

/* Tablettes */
@media (max-width: 768px) and (min-width: 481px) {
  .section-padding {
    padding: 2.5rem 0;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.25rem;
  }
  
  .service-card {
    padding: 1.25rem;
  }
  
  .service-icon {
    width: 55px;
    height: 55px;
    font-size: 1.3rem;
  }
  
  .service-title {
    font-size: 1.15rem;
  }
}

/* Mobile optimisé */
@media (max-width: 480px) {
  .section-padding {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 0.75rem;
  }
  
  .section-header {
    margin-bottom: 1.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .service-card {
    padding: 1.25rem;
    border-radius: 12px;
    /* Suppression du backdrop-filter sur mobile */
    backdrop-filter: none;
    background: rgba(255, 255, 255, 0.08);
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    border-radius: 12px;
    margin-bottom: 0.75rem;
  }
  
  .service-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .service-description {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  
  .service-features li {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
  
  .service-footer {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
  }
  
  .btn-service {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    border-radius: 15px;
  }
}

/* Très petits mobiles */
@media (max-width: 360px) {
  .section-padding {
    padding: 1.5rem 0;
  }
  
  .container {
    padding: 0 0.5rem;
  }
  
  .services-grid {
    gap: 0.75rem;
  }
  
  .service-card {
    padding: 1rem;
    border-radius: 10px;
  }
  
  .service-icon {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    border-radius: 10px;
  }
  
  .service-title {
    font-size: 1rem;
  }
  
  .service-description {
    font-size: 0.8rem;
  }
  
  .service-features li {
    font-size: 0.75rem;
  }
  
  .btn-service {
    padding: 0.45rem 0.8rem;
    font-size: 0.75rem;
  }
}

/* Rendu immédiat sur mobile pour performance */
@media (max-width: 768px) {
  .service-card {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  
  .section-header {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* Suppression des animations sur connexion lente */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .section-header,
  .btn-service {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>


