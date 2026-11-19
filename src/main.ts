import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './styles/main.css'

// Pre-rendered at build time (vite-ssg): every route ships as static HTML
// readable by search engines and AI crawlers, then hydrates as a Vue app.
export const createApp = ViteSSG(App, { routes, scrollBehavior, base: import.meta.env.BASE_URL })
