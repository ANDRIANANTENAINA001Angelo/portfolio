import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import CompetencesSection from '../components/CompetencesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ProjectsDetaisSection from '../components/ProjectsDetaisSection.vue'

const router = createRouter({
  history: createWebHistory('/developper-logiciel-ia'),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', name: 'acceuil', component: HeroSection },
        { path: 'a-propos', name: 'apropos', component: AboutSection },
        { path: 'services', name: 'services', component: ServicesSection },
        { path: 'competences', name: 'competences', component: CompetencesSection },
        { path: 'projets', name: 'projects', component: ProjectsSection },
        {
          path: 'projets/:slug',
          name: 'project-detail',
          component: ProjectsDetaisSection,
          props: true
        },
      ]
    },
    { path: '/:catchAll(.*)', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
