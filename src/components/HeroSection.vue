<script setup lang="ts">
import { ref, onMounted } from 'vue'
import imgProfile from '@/assets/ANDRINANATENIANA-Angelo-profile.jpg'
import { useSeo } from '../composables/seo'
import cvPath from "@/assets/CV-ANDRIANANTENAINA-Angelo.pdf"

const heroRef = ref<HTMLElement>()
const isVisible = ref(false)



onMounted(() => {

  setTimeout(() => {
    isVisible.value = true
  }, 300)
  
})

useSeo({
  title: `ANDRIANANTENAINA Angelo | Développeur Web & IA à Madagascar`,
  description: "ANDRIANANTENAINA Angelo, développeur logiciel & Intelligence Artificielle à Madagascar. Conception et création d’applications, analyse data et automatisation.",
})




const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = cvPath  
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
            Basé à Madagascar, je développe des solutions web, mobile et intelligentes. 
            Laravel, Python, IA, automatisation... tout ce qu'il faut pour transformer vos idées en applications concrètes.
          </p>
          <div class="hero-buttons">
            <button @click="scrollToSection('projets')" class="btn-primary">
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
              :src="imgProfile"
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
  background: var(--gradient-dark, linear-gradient(135deg, #1a1a2e 0%, #16213e 100%));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
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
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-primary, #ffffff);
  /* word-wrap: break-word; */
  /* hyphens: auto; */
}

.name-highlight {
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  animation: highlight-expand 1s ease-out 1.5s both;
}

@keyframes highlight-expand {
  from { width: 0; }
  to { width: 100%; }
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--text-secondary, #b0b0b0);
  margin-bottom: 1.2rem;
  line-height: 1.4;
}

.hero-description {
  margin-bottom: 2rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  color: var(--text-primary, #ffffff);
  max-width: 100%;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
}

.btn-primary, .btn-secondary, .btn-download {
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: clamp(0.85rem, 2vw, 1rem);
  white-space: nowrap;
  min-width: fit-content;
}

.btn-primary {
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-light, 0 10px 25px rgba(255, 107, 53, 0.3));
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color, #ff6b35);
  border: 1px solid var(--primary-color, #ff6b35);
}

.btn-secondary:hover {
  background: var(--primary-color, #ff6b35);
  color: white;
  transform: translateY(-2px);
}

.btn-download {
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-color, #ff6b35);
  border: 1px solid var(--primary-color, #ff6b35);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-download:hover {
  background: var(--primary-color, #ff6b35);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-light, 0 10px 25px rgba(255, 107, 53, 0.3));
}

.download-icon {
  font-size: 1.1rem;
}

.hero-stats {
  display: flex;
  gap: clamp(1rem, 4vw, 2rem);
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  min-width: 120px;
}

.stat-number {
  display: block;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: var(--primary-color, #ff6b35);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: var(--text-muted, #888);
  line-height: 1.3;
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
  max-width: 100%;
}

.image-glow {
  position: absolute;
  width: min(400px, 80vw);
  height: min(400px, 80vw);
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
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
  width: min(350px, 70vw);
  height: min(350px, 70vw);
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color, #ff6b35);
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
  pointer-events: none;
}

.floating-element {
  position: absolute;
  background: var(--bg-card, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.2));
  border-radius: 15px;
  padding: 0.4rem 0.8rem;
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  font-weight: 600;
  color: var(--text-primary, #ffffff);
  animation: float-element 4s ease-in-out infinite;
  white-space: nowrap;
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
  border: 2px solid var(--primary-color, #ff6b35);
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

@media (max-width: 1024px) and (min-width: 769px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-content {
    gap: 3rem;
  }
  
  .profile-image {
    width: min(300px, 60vw);
    height: min(300px, 60vw);
  }
  
  .image-glow {
    width: min(350px, 70vw);
    height: min(350px, 70vw);
  }
  
  .floating-element {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
  
  .hero-buttons {
    gap: 0.8rem;
  }
  
  .btn-primary, .btn-secondary, .btn-download {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

/* Tablettes en mode portrait */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
    min-height: auto;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    min-height: auto;
  }
  
  .hero-text {
    order: 2;
  }
  
  .hero-image {
    order: 1;
  }
  
  .hero-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    margin-bottom: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.3rem);
    margin-bottom: 1rem;
  }
  
  .hero-description {
    margin-bottom: 1.5rem;
    font-size: clamp(0.85rem, 3vw, 1rem);
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2rem;
  }

  .hero-buttons button{
    justify-content: center;
    justify-items: center;
    
  }
  
  .btn-primary, .btn-secondary, .btn-download {
    width: 100%;
    max-width: 280px;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .hero-stats {
    justify-content: center;
    gap: 1.5rem;
  }
  
  .stat {
    min-width: 100px;
  }
  
  .profile-image {
    width: min(280px, 70vw);
    height: min(280px, 70vw);
  }
  
  .image-glow {
    width: min(320px, 80vw);
    height: min(320px, 80vw);
  }
  
  .floating-element {
    display: none;
  }
  
  .shape-1, .shape-2, .shape-3 {
    opacity: 0.05;
  }
}

/* Petits mobiles */
@media (max-width: 480px) {
  .hero {
    padding: 1.5rem 0;
  }
  
  .container {
    padding: 0 0.8rem;
  }
  
  .hero-content {
    gap: 1.5rem;
  }
  
  .hero-title {
    font-size: clamp(1.5rem, 7vw, 2rem);
    line-height: 1.1;
  }
  
  .hero-subtitle {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
  }
  
  .hero-description {
    font-size: clamp(0.8rem, 3.5vw, 0.9rem);
    margin-bottom: 1.2rem;
  }
  
  .hero-buttons {
    margin-bottom: 1.5rem;
  }
  
  .btn-primary, .btn-secondary, .btn-download {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
    max-width: 250px;
  }
  
  .hero-stats {
    gap: 1rem;
    flex-direction: column;
  }
  
  .stat {
    min-width: auto;
  }
  
  .stat-number {
    font-size: clamp(1.3rem, 5vw, 1.8rem);
  }
  
  .stat-label {
    font-size: clamp(0.75rem, 3vw, 0.85rem);
  }
  
  .profile-image {
    width: min(220px, 60vw);
    height: min(220px, 60vw);
  }
  
  .image-glow {
    width: min(260px, 70vw);
    height: min(260px, 70vw);
  }
  
  .scroll-indicator {
    bottom: 1rem;
  }
  
  .scroll-arrow {
    width: 25px;
    height: 25px;
  }
}

/* Très petits écrans */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.4rem;
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
  }
  
  .hero-description {
    font-size: 0.8rem;
  }
  
  .profile-image {
    width: min(180px, 55vw);
    height: min(180px, 55vw);
  }
  
  .image-glow {
    width: min(220px, 65vw);
    height: min(220px, 65vw);
  }
}
</style>