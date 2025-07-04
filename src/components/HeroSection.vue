<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const heroRef = ref<HTMLElement>()
const isVisible = ref(false)



onMounted(() => {

  setTimeout(() => {
    isVisible.value = true
  }, 300)
  
})


useHead({
  title: 'Développeur Web & IA à Madagascar | Portfolio de ANDRIANANTENAINA Angelo',
  meta: [
    {
      name: 'description',
      content: 'ANDRIANANTENAINA Angelo, développeur Laravel & Intelligence Artificielle à Madagascar. Conception et création d’applications web, mobile, data et automatisées.'
    },
    {
      name: 'keywords',
      content: 'Développeur Laravel Madagascar, IA, Data, Web, API, Vue.js, freelance, Django, data anayste, data scientiste, python, node, express'
    },
    { name: 'author', content: 'ANDRIANANTENAINA Angelo' }
  ]
})


const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/CV-ANDRIANANTENAINA-Angelo.pdf'  
  link.setAttribute('download', 'CV-ANDRIANANTENAINA-Angelo.pdf')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

</script>

<template>
  <section id="home" ref="heroRef" class="hero">
    <div class="hero-background">
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-text" :class="{ 'visible': isVisible }">
          <h1 class="hero-title">
            <span class="name-highlight">ANDRIANANTENAINA Angelo</span>
          </h1>
          <h2 class="hero-subtitle">Développeur Logiciel & Intelligence Artificielle</h2>
          <p class="hero-description">
            Basé à Madagascar, je développe des solutions web, data et intelligentes. 
            Laravel, Python, IA, automatisation... tout ce qu’il faut pour transformer vos idées en applications concrètes.
          </p>

          <div class="hero-buttons">
            <button @click="scrollToSection('projects')" class="btn-primary">
              Voir mes projets
            </button>
            <button @click="downloadCV" class="btn-download">
              <span class="download-icon">📄</span>
              Télécharger mon CV
            </button>
            <button @click="scrollToSection('contact')" class="btn-secondary">
              Me contacter
            </button>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Satisfaction client & encadrants</span>
            </div>
            <div class="stat">
              <span class="stat-number">5+</span>
              <span class="stat-label">Années d'expérience en projet</span>
            </div>
          </div>
        </div>
        
        <div class="hero-image" :class="{ 'visible': isVisible }">
          <div class="image-container">
            <div class="image-glow"></div>
            <img 
              src="/ANDRINANATENIANA-Angelo-profile-1-updated.png" 
              alt="ANDRIANANTENAINA Angelo - Développeur Logiciel & IA à Madagascar"
              class="profile-image"
            />
            <div class="floating-elements">
              <div class="floating-element web">WEB</div>
              <div class="floating-element ia">IA</div>
              <div class="floating-element desktop">DESKTOP</div>
              <div class="floating-element data">DATA</div>
              <div class="floating-element mobile">MOBILE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator" @click="scrollToSection('services')">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  background: var(--gradient-dark);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
}

.hero-text {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}

.hero-text.visible {
  opacity: 1;
  transform: translateX(0);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.name-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--gradient-primary);
  animation: highlight-expand 1s ease-out 1.5s both;
}

@keyframes highlight-expand {
  from { width: 0; }
  to { width: 100%; }
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
}

.hero-description {
  margin-bottom: 1rem;

}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.btn-download {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.btn-download:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

.download-icon {
  font-size: 1.1rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.hero-image {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.hero-image.visible {
  opacity: 1;
  transform: translateX(0);
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(50px);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.profile-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-element {
  position: absolute;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  animation: float-element 4s ease-in-out infinite;
}

.floating-element.web {
  top: 10%;
  left: -10%;
  animation-delay: 0s;
  color: #E34F26;
}

.floating-element.data {
  top: 30%;
  right: -15%;
  animation-delay: 0.8s;
  color: #1572B6;
}

.floating-element.desktop {
  bottom: 5%;
  left: -15%;
  animation-delay: 1.6s;
  color: #F7DF1E;
}

.floating-element.ia {
  bottom: 10%;
  right: -10%;
  animation-delay: 2.4s;
  color: #4FC08D;
}

.floating-element.mobile {
  top: 50%;
  left: -20%;
  animation-delay: 3.2s;
  color: #8CC84B;
}

@keyframes float-element {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border: 2px solid var(--primary-color);
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: rotate(-45deg) translateY(0); }
  40% { transform: rotate(-45deg) translateY(-10px); }
  60% { transform: rotate(-45deg) translateY(-5px); }
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .image-glow {
    width: 300px;
    height: 300px;
  }
  
  .floating-element {
    display: none;
  }
}
</style>
