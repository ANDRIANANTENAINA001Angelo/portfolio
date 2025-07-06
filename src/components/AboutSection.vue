<script setup lang="ts">
import { ref, onMounted } from 'vue'

const aboutRef = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.3 }
  )

  if (aboutRef.value) {
    observer.observe(aboutRef.value)
  }
})



</script>

<template>
  <section id="a-propos" ref="aboutRef" class="about-section">
    <div class="container">
      <div class="about-content" :class="{ 'visible': isVisible }">
        <div class="section-header">
          <h2 class="section-title">À propos de moi</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="about-card glass">
          <div class="about-text">
            <p class="about-description">
              Développeur logiciel & IA basé à Madagascar, je conçois des applications web, data et intelligentes sur mesure pour automatiser, prédire et transformer vos idées en solutions concrètes à forte valeur ajoutée.
            </p>
            
            <p class="about-description">
              Fort de plus de 5 ans d'expérience en développement fullstack et d'une spécialisation en intelligence artificielle et data science depuis plus d'un an, je m'appuie sur une expertise hybride pour créer des outils à la fois performants, fiables et pertinents.
            </p>
            
            <p class="about-description">
              Mon approche allie rigueur technique, esprit d'analyse et adaptation rapide aux besoins spécifiques, quelle que soit la technologie.
            </p>
          </div>

          <div class="about-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">🎯</span>
              <span>Solutions personnalisées adaptées à votre projet</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">⚡</span>
              <span>Développement robuste, rapide et maintenable</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">📊</span>
              <span>Automatisation, exploitation et valorisation de vos données</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 0;
  background: var(--bg-primary);
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(78, 84, 200, 0.05) 100%);
  z-index: -1;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-content.visible {
  opacity: 1;
  transform: translateY(0);
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

.about-card {
  padding: 3rem;
  border-radius: 20px;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);
}

.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.about-text {
  margin-bottom: 2.5rem;
}

.about-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  text-align: justify;
}

.about-description:last-child {
  margin-bottom: 0;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 1rem;
  padding: 1rem;
  background: rgba(255, 107, 53, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 107, 53, 0.1);
  transform: translateX(5px);
}

.highlight-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-card {
    padding: 2rem;
    margin: 0 1rem;
  }
  
  .about-description {
    font-size: 1rem;
    text-align: left;
  }
  
  .highlight-item {
    padding: 0.75rem;
    font-size: 0.95rem;
  }
  
  .highlight-icon {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .about-card {
    padding: 1.5rem;
  }
  
  .highlight-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
