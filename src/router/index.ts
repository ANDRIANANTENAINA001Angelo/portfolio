import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import type { Lang, PageKind } from '@/i18n'

declare module 'vue-router' {
  interface RouteMeta {
    lang?: Lang
    page?: PageKind
  }
}

const ServicesView = () => import('@/views/ServicesView.vue')
const ServiceDetailView = () => import('@/views/ServiceDetailView.vue')
const ProjectDetailView = () => import('@/views/ProjectDetailView.vue')

// French at the root, English under /en (one indexable URL per language).
export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home-fr', component: HomeView, meta: { lang: 'fr', page: 'home' } },
  { path: '/en', name: 'home-en', component: HomeView, meta: { lang: 'en', page: 'home' } },
  { path: '/services', name: 'services-fr', component: ServicesView, meta: { lang: 'fr', page: 'services' } },
  { path: '/en/services', name: 'services-en', component: ServicesView, meta: { lang: 'en', page: 'services' } },
  {
    path: '/services/:slug',
    name: 'service-fr',
    component: ServiceDetailView,
    props: true,
    meta: { lang: 'fr', page: 'service' }
  },
  {
    path: '/en/services/:slug',
    name: 'service-en',
    component: ServiceDetailView,
    props: true,
    meta: { lang: 'en', page: 'service' }
  },
  {
    path: '/projets/:slug/:techSlug?',
    name: 'project-fr',
    component: ProjectDetailView,
    props: true,
    meta: { lang: 'fr', page: 'project' }
  },
  {
    path: '/en/projects/:slug/:techSlug?',
    name: 'project-en',
    component: ProjectDetailView,
    props: true,
    meta: { lang: 'en', page: 'project' }
  },
  { path: '/en/:pathMatch(.*)*', redirect: '/en' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const scrollBehavior: RouterScrollBehavior = (to, _from, saved) => {
  if (saved) return saved
  if (to.hash) {
    return { el: to.hash, behavior: 'smooth', top: 80 }
  }
  return { top: 0, behavior: 'smooth' }
}
