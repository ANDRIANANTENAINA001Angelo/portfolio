<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || "/developper-logiciel-ia"  

const sections = [
  { id: 'home', path: '/', label: 'Accueil' },
  { id: 'about', path: '/a-propos', label: 'À propos' },
  { id: 'services', path: '/services', label: 'Services' },
  { id: 'competences', path: '/competences', label: 'Compétences' },
  { id: 'projects', path: '/projets', label: 'Projets' },
  { id: 'contact', path: '/contact', label: 'Contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  const scrollPosition = window.scrollY + window.innerHeight / 3

  for (const section of sections) {
    const el = document.getElementById(section.id)
    if (el) {
      const top = el.offsetTop
      const bottom = top + el.offsetHeight

      if (scrollPosition >= top && scrollPosition < bottom) {
        if (activeSection.value !== section.id) {
          activeSection.value = section.id
          history.replaceState(null, '', `${basePath}${section.path}`)
        }
        break
      }
    }
  }
}

const scrollToSection = (id: string, path: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = id
    history.pushState(null, '', `${basePath}${path}`)
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() 
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="nav-content">
        <div class="logo" @click="scrollToSection('home', '/')">
          <span class="logo-text">Portfolio</span>
        </div>
        <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
          <li v-for="item in sections" :key="item.id" class="nav-item">
            <a
              class="nav-link"
              :class="{ active: activeSection === item.id }"
              href="javascript:void(0);"
              @click="scrollToSection(item.id, item.path)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div
          class="hamburger"
          :class="{ active: isMobileMenuOpen }"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  padding: 0.5rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: rgba(15, 15, 35, 0.98);
    backdrop-filter: blur(20px);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 2rem 0;
    border-top: 1px solid var(--border-color);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    margin: 1rem 0;
  }

  .hamburger {
    display: flex;
  }
}
</style>