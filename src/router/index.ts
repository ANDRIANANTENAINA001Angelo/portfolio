import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import CompetencesSection from '../components/CompetencesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'

const basePath = import.meta.env.VITE_BASE_PATH ||'/developper-logiciel-ia/' 


const router = createRouter({
  history: createWebHistory(basePath),
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        { path: '', name: 'acceuil', component: HeroSection },
        { path: 'a-propos', name: 'apropos', component: AboutSection },
        { path: 'services', name: 'services', component: ServicesSection },
        { path: 'competences', name: 'competences', component: CompetencesSection },
        { path: 'projets', name: 'projets', component: ProjectsSection },
      ]
    },
    { path: '/:catchAll(.*)', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})





export default router
