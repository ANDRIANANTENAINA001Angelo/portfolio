/**
 * schema.org builders (JSON-LD). One Person + one ProfessionalService entity,
 * referenced by @id from every page so search and answer engines link them together.
 */
import { SITE_URL, SITE_NAME, OG_IMAGE, PROFILE_IMAGE, SOCIAL } from '@/config'
import { services, type Service } from '@/data/services'
import type { Project } from '@/data/projects'
import { servicePath, type Lang } from '@/i18n'
import { absoluteUrl } from '@/composables/useSeo'

export const PERSON_ID = `${SITE_URL}/#person`
export const BUSINESS_ID = `${SITE_URL}/#business`
export const WEBSITE_ID = `${SITE_URL}/#website`

const AREA_SERVED = ['Madagascar', 'France', 'Belgique', 'Suisse', 'Canada', 'Worldwide']

export function personSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    alternateName: 'Angelo ANDRIANANTENAINA',
    url: `${SITE_URL}/`,
    image: PROFILE_IMAGE,
    jobTitle: lang === 'fr' ? 'Développeur IA freelance' : 'Freelance AI developer',
    description:
      lang === 'fr'
        ? 'Développeur IA freelance basé à Fianarantsoa, Madagascar : automatisation n8n, agents IA, data et développement web. Co-fondateur de GoalPay.'
        : 'Freelance AI developer based in Fianarantsoa, Madagascar: n8n automation, AI agents, data and web development. Co-founder of GoalPay.',
    email: SOCIAL.email,
    telephone: SOCIAL.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Fianarantsoa', addressCountry: 'MG' },
    nationality: { '@type': 'Country', name: 'Madagascar' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'École Nationale d’Informatique (ENI) Fianarantsoa' },
    knowsLanguage: ['fr', 'en', 'mg'],
    knowsAbout: [
      'n8n', 'Automatisation', 'AI agents', 'LLM', 'RAG', 'MLOps', 'Machine Learning',
      'Data science', 'SaaS', 'Laravel', 'FastAPI', 'Python', 'Vue.js', 'PostgreSQL', 'SEO', 'AEO'
    ],
    worksFor: { '@id': BUSINESS_ID },
    sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.facebook, SOCIAL.codeur]
  }
}

export function businessSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: lang === 'fr' ? `${SITE_NAME} — Développeur IA freelance` : `${SITE_NAME} — Freelance AI developer`,
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: PROFILE_IMAGE,
    email: SOCIAL.email,
    telephone: SOCIAL.phone,
    founder: { '@id': PERSON_ID },
    address: { '@type': 'PostalAddress', addressLocality: 'Fianarantsoa', addressCountry: 'MG' },
    areaServed: AREA_SERVED,
    availableLanguage: ['fr', 'en'],
    priceRange: '€€',
    sameAs: [SOCIAL.linkedin, SOCIAL.github, SOCIAL.facebook, SOCIAL.codeur],
    potentialAction: {
      '@type': 'ReserveAction',
      name: lang === 'fr' ? 'Réserver un appel découverte de 30 minutes' : 'Book a 30-minute discovery call',
      target: { '@type': 'EntryPoint', urlTemplate: SOCIAL.booking }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title[lang], url: absoluteUrl(servicePath(s, lang)) }
      }))
    }
  }
}

export function websiteSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: lang,
    publisher: { '@id': PERSON_ID }
  }
}

export function serviceSchema(service: Service, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(servicePath(service, lang))}#service`,
    name: service.seoTitle[lang],
    serviceType: service.title[lang],
    description: service.summary[lang],
    url: absoluteUrl(servicePath(service, lang)),
    provider: { '@id': BUSINESS_ID },
    areaServed: AREA_SERVED,
    availableLanguage: ['fr', 'en'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title[lang],
      itemListElement: service.offers.map(o => ({
        '@type': 'Offer',
        name: o.name[lang],
        description: o.description[lang],
        priceSpecification: {
          '@type': o.unit === 'month' ? 'UnitPriceSpecification' : 'PriceSpecification',
          priceCurrency: 'EUR',
          minPrice: o.priceMin,
          maxPrice: o.priceMax,
          ...(o.unit === 'month' ? { unitCode: 'MON', unitText: lang === 'fr' ? 'mois' : 'month' } : {})
        }
      }))
    }
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a }
    }))
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  }
}

export function projectSchema(project: Project, lang: Lang, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${absoluteUrl(path)}#work`,
    name: project.title[lang],
    headline: project.title[lang],
    description: project.shortDescription[lang],
    abstract: project.challenge[lang],
    url: absoluteUrl(path),
    inLanguage: lang,
    image: project.images.map(img => absoluteUrl(img.src)),
    author: { '@id': PERSON_ID },
    keywords: project.technologies.join(', '),
    ...(project.demo ? { sameAs: project.demo } : {})
  }
}
