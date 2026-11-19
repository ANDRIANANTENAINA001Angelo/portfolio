/**
 * Locale-aware URLs. French lives at the root, English under /en.
 * Kept free of browser and Vite-only APIs: it is also imported by vite.config.ts
 * to generate the sitemap and llms.txt at build time.
 */
import { services, getServiceBySlug, type Service } from './data/services'
import { projects, getProjectUrl, type Project } from './data/projects'

export type Lang = 'fr' | 'en'
export const LANGS: Lang[] = ['fr', 'en']

export type PageKind = 'home' | 'services' | 'service' | 'project'

/**
 * Public URLs end with "/": pages are pre-rendered as x/index.html, and the host
 * (Render) serves that file for "/x/" but rewrites "/x" to the SPA shell.
 */
export const trailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`)

/** Prefix an FR path (optionally with #hash) for the given language. */
export function withLang(path: string, lang: Lang): string {
  const [rawPath, hash] = path.split('#')
  const p = rawPath || '/'
  const out = trailingSlash(lang === 'en' ? (p === '/' ? '/en' : `/en${p}`) : p)
  return hash ? `${out}#${hash}` : out
}

export const homePath = (lang: Lang) => withLang('/', lang)
export const servicesPath = (lang: Lang) => withLang('/services', lang)
export const servicePath = (service: Service, lang: Lang) =>
  withLang(`/services/${service.slug[lang]}`, lang)
export const projectPath = (project: Project, lang: Lang) => getProjectUrl(project, lang)

interface RouteLike {
  meta: Record<string, unknown>
  params: Record<string, string | string[] | undefined>
}

/** Same page in another language (used by the language switch and hreflang). */
export function alternatePath(route: RouteLike, target: Lang): string {
  const page = route.meta.page as PageKind | undefined
  const lang = (route.meta.lang as Lang | undefined) ?? 'fr'
  const slug = String(route.params.slug ?? '')
  if (page === 'services') return servicesPath(target)
  if (page === 'service') {
    const service = getServiceBySlug(slug, lang)
    return service ? servicePath(service, target) : servicesPath(target)
  }
  if (page === 'project') {
    const project = projects.find(p => p.slug === slug)
    return project ? projectPath(project, target) : homePath(target)
  }
  return homePath(target)
}

/** Every pre-rendered page, with its FR/EN alternates. */
export function allPages(): { kind: PageKind; paths: Record<Lang, string> }[] {
  const both = (fn: (l: Lang) => string) => ({ fr: fn('fr'), en: fn('en') })
  return [
    { kind: 'home', paths: both(homePath) },
    { kind: 'services', paths: both(servicesPath) },
    ...services.map(s => ({ kind: 'service' as const, paths: both(l => servicePath(s, l)) })),
    ...projects.map(p => ({ kind: 'project' as const, paths: both(l => projectPath(p, l)) }))
  ]
}
