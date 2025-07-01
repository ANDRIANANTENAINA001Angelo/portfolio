<script setup lang="ts">
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const footerLinks = {
  navigation: [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ],
  services: [
    { label: 'Développement Web Laravel', href: '#services' },
    { label: 'Backend & API RESTful', href: '#services' },
    { label: 'Data Science & ML', href: '#services' },
    { label: 'Automatisation & Scripts IA', href: '#services' }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrianantenaina-angelo/', icon: '../../public/in-logo.svg' },
    { label: 'Facebook', href: 'https://www.facebook.com/andrianantenaina.angelo.ia', icon: '../../public/fb-logo.svg' }
  ]
}

</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="logo-text">Portfolio</span>
            </div>
            <p class="brand-description">
              Développeur logiciel & IA basé à Madagascar, je conçois des applications web, 
              data et intelligentes sur mesure.
            </p>
            <div class="brand-social">
              <a 
                v-for="social in footerLinks.social"
                :key="social.label"
                :href="social.href"
                class="social-link"
                :title="social.label"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img :src="social.icon" :alt="social.label" class="social-icon-img" />
              </a>
            </div>

          </div>
          
          <div class="footer-links">
            <div class="link-column">
              <h4 class="column-title">Navigation</h4>
              <ul class="link-list">
                <li v-for="link in footerLinks.navigation" :key="link.label">
                  <a :href="link.href" class="footer-link">{{ link.label }}</a>
                </li>
              </ul>
            </div>
            
            <div class="link-column">
              <h4 class="column-title">Services</h4>
              <ul class="link-list">
                <li v-for="service in footerLinks.services" :key="service.label">
                  <a :href="service.href" class="footer-link">{{ service.label }}</a>
                </li>
              </ul>
            </div>
            
            <div class="link-column">
              <h4 class="column-title">Contact</h4>
              <ul class="link-list">
                <li>
                  <a href="mailto:a.angelo.mada@gmail.com" class="footer-link">
                    📧a.angelo.mada@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+261345992047" class="footer-link">
                    📱+261 345 992 047
                  </a>
                </li>
                <li>
                  <span class="footer-link">
                    📍Fianarantsoa, Madagascar
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; {{ currentYear }} Portfolio. Tous droits réservés.</p>
            <p class="made-with">
              Créé avec ❤️ et <span class="vue-logo">Vue.js</span>
            </p>
          </div>
          
          <div class="footer-actions">
            <button @click="scrollToTop" class="scroll-top-btn" title="Retour en haut">
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-decoration">
      <div class="decoration-line"></div>
      <div class="decoration-dots">
        <span v-for="n in 5" :key="n" class="dot"></span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-darker);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-primary);
  opacity: 0.3;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  padding: 4rem 0 2rem;
}

.footer-brand {
  max-width: 400px;
}

.brand-logo {
  margin-bottom: 1.5rem;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.brand-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  color: var(--text-secondary);
}

.social-link:hover {
  background: var(--gradient-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.column-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
}

.column-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 1px;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
  margin-top: 2rem;
}

.footer-copyright {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-copyright p {
  margin: 0;
  margin-bottom: 0.25rem;
}

.made-with {
  font-size: 0.85rem;
}

.vue-logo {
  color: #4FC08D;
  font-weight: 600;
}

.footer-actions {
  display: flex;
  align-items: center;
}

.scroll-top-btn {
  width: 45px;
  height: 45px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
}

.footer-decoration {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 1px;
  opacity: 0.5;
}

.decoration-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.6;
  animation: pulse-dot 2s ease-in-out infinite;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
.dot:nth-child(4) { animation-delay: 0.6s; }
.dot:nth-child(5) { animation-delay: 0.8s; }

@keyframes pulse-dot {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .brand-social {
    justify-content: center;
  }
  
  .footer-link:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .footer-links {
    text-align: left;
  }
  
  .column-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>