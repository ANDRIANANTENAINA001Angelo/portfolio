import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
const basePath = '/developpeur-logiciel-ia'

const router = createRouter({
  history: createWebHistory(basePath),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projets/:slug/:techSlug?',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
