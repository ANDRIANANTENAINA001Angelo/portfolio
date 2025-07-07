<script setup lang="ts">
import { useRouter } from 'vue-router'
import linkedinlogo from "@/assets/in-logo.svg"
import fblogo from "@/assets/fb-logo.svg"
import whatsapplogo from "@/assets/whatsapp-logo.svg"

const router = useRouter()

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', `/#${sectionId}`)
  } else {
    router.push({ path: '/', hash: `#${sectionId}` })
  }
}

const footerLinks = {
  navigation: [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projets', id: 'projects' },
    // { label: 'Contact', id: 'contact' }
  ],
  services: [
    { label: 'Développement Web Laravel', id: 'services' },
    { label: 'Backend & API RESTful', id: 'services' },
    { label: 'Data Science & ML', id: 'services' },
    { label: 'Automatisation & Scripts IA', id: 'services' }
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrianantenaina-angelo/', icon: linkedinlogo },
    { label: 'Facebook', href: 'https://www.facebook.com/andrianantenaina.angelo.ia', icon: fblogo },
    { label: 'Whatsapp', href: 'https://wa.me/261345992047', icon: whatsapplogo },
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
                  <button class="footer-link" @click="goToSection(link.id)">
                    {{ link.label }}
                  </button>
                </li>
              </ul>
            </div>
            
            <div class="link-column">
              <h4 class="column-title">Services</h4>
              <ul class="link-list">
                <li v-for="service in footerLinks.services" :key="service.label">
                  <button class="footer-link" @click="goToSection(service.id)">
                    {{ service.label }}
                  </button>
                </li>
              </ul>
            </div>
            
            <div class="link-column">
              <h4 class="column-title">Contact</h4>
              <ul class="link-list">
                <li>
                  <a href="mailto:a.angelo.mada@gmail.com" class="footer-link">
                    a.angelo.mada@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+261345992047" class="footer-link">
                    +261 34 59 920 47
                  </a>
                </li>
                <li>
                  <span class="footer-link">
                    Fianarantsoa, Madagascar
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
  background: var(--bg-darker, #0f0f23);
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
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  opacity: 0.3;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  color: var(--text-secondary, #b0b0b0);
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
  background: var(--bg-card, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.social-link:hover {
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
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
  color: var(--text-primary, #ffffff);
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
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
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
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: var(--text-secondary, #b0b0b0);
  font: inherit;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color, #ff6b35);
  transform: translateX(5px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  margin-top: 2rem;
}

.footer-copyright {
  color: var(--text-muted, #888);
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
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
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
  background: var(--gradient-primary, linear-gradient(45deg, #ff6b35, #f7931e));
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
  background: var(--primary-color, #ff6b35);
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

/* Tablettes */
@media (max-width: 1024px) {
  .footer-main {
    gap: 3rem;
    padding: 3rem 0 2rem;
  }
  
  .footer-links {
    gap: 1.5rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
}

/* Mobile - Texte centré */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 0 2rem;
    text-align: center;
  }
  
  .footer-brand {
    max-width: none;
    text-align: center;
  }
  
  .brand-logo {
    margin-bottom: 1rem;
  }
  
  .logo-text {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
  
  .brand-description {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .brand-social {
    justify-content: center;
    gap: 0.75rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
  
  .social-icon-img {
    width: 18px;
    height: 18px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .column-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .column-title::after {
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
  }
  
  .link-list {
    text-align: center;
  }
  
  .footer-link {
    text-align: center;
    display: block;
    width: 100%;
    font-size: 0.9rem;
  }
  
  .footer-link:hover {
    transform: none;
    text-decoration: underline;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 1.5rem 0;
  }
  
  .footer-copyright {
    text-align: center;
  }
  
  .scroll-top-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  
  /* Suppression des animations coûteuses sur mobile */
  .social-link:hover {
    transform: none;
    box-shadow: none;
  }
  
  .scroll-top-btn:hover {
    transform: none;
    box-shadow: none;
  }
}

/* Petits mobiles */
@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .footer-main {
    gap: 2rem;
    padding: 2rem 0 1.5rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .brand-description {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .brand-social {
    gap: 0.5rem;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
  }
  
  .social-icon-img {
    width: 16px;
    height: 16px;
  }
  
  .footer-links {
    gap: 1.5rem;
  }
  
  .column-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .column-title::after {
    width: 20px;
    height: 1.5px;
  }
  
  .link-list li {
    margin-bottom: 0.5rem;
  }
  
  .footer-link {
    font-size: 0.85rem;
  }
  
  .footer-bottom {
    gap: 1rem;
    padding: 1rem 0;
  }
  
  .footer-copyright {
    font-size: 0.8rem;
  }
  
  .made-with {
    font-size: 0.75rem;
  }
  
  .scroll-top-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Suppression des animations sur petits mobiles */
  .dot {
    animation: none;
    opacity: 0.6;
  }
}

/* Très petits écrans */
@media (max-width: 360px) {
  .container {
    padding: 0 0.5rem;
  }
  
  .footer-main {
    padding: 1.5rem 0 1rem;
  }
  
  .brand-description {
    font-size: 0.85rem;
  }
  
  .footer-links {
    gap: 1rem;
  }
  
  .column-title {
    font-size: 0.95rem;
  }
  
  .footer-link {
    font-size: 0.8rem;
  }
  
  .footer-copyright {
    font-size: 0.75rem;
  }
}

/* Suppression des animations sur connexion lente */
@media (prefers-reduced-motion: reduce) {
  .social-link,
  .footer-link,
  .scroll-top-btn,
  .dot {
    transition: none !important;
    animation: none !important;
  }
}
</style>


