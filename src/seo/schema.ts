/**
 * schema.org builders (JSON-LD). One Person + one ProfessionalService entity,
 * referenced by @id from every page so search and answer engines link them together.
 */
import { SITE_URL, SITE_NAME, ALT_NAME, OG_IMAGE, PROFILE_IMAGE, SOCIAL, PROFILES, GOALPAY } from '@/config'
import { services, type Service } from '@/data/services'
import type { Project } from '@/data/projects'
import type { Article, ArticleBody } from '@/data/articles'
import { aboutPath, servicePath, type Lang } from '@/i18n'
import { absoluteUrl } from '@/composables/useSeo'

export const PERSON_ID = `${SITE_URL}/#person`
export const BUSINESS_ID = `${SITE_URL}/#business`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const GOALPAY_ID = `${SITE_URL}/#goalpay`

const SAME_AS = PROFILES.map(p => p.url)

const AREA_SERVED = ['Madagascar', 'France', 'Belgique', 'Suisse', 'Canada', 'Worldwide']

export function personSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    givenName: 'Angelo',
    familyName: 'ANDRIANANTENAINA',
    alternateName: ALT_NAME,
    url: `${SITE_URL}/`,
    mainEntityOfPage: absoluteUrl(aboutPath(lang)),
    image: PROFILE_IMAGE,
    jobTitle: lang === 'fr' ? 'Entrepreneur & Ingénieur IA' : 'Entrepreneur & AI Engineer',
    description:
      lang === 'fr'
        ? 'Entrepreneur et ingénieur IA basé à Fianarantsoa, Madagascar : automatisation n8n, agents IA, data et développement SaaS, en freelance ou en équipe. Co-fondateur de GoalPay.'
        : 'Entrepreneur and AI engineer based in Fianarantsoa, Madagascar: n8n automation, AI agents, data and SaaS development, freelance or embedded in teams. Co-founder of GoalPay.',
    // Homonyms exist (notably a Malagasy footballer): spell out who this entity is
    disambiguatingDescription:
      lang === 'fr'
        ? 'Ingénieur IA et co-fondateur de la FinTech GoalPay, diplômé de l’ENI Fianarantsoa. À ne pas confondre avec le footballeur homonyme.'
        : 'AI engineer and co-founder of the FinTech GoalPay, graduate of ENI Fianarantsoa. Not to be confused with the footballer of the same name.',
    email: SOCIAL.email,
    telephone: SOCIAL.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Fianarantsoa', addressCountry: 'MG' },
    homeLocation: { '@type': 'Place', name: 'Fianarantsoa, Madagascar' },
    nationality: { '@type': 'Country', name: 'Madagascar' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'École Nationale d’Informatique (ENI) Fianarantsoa' },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: lang === 'fr' ? 'Master en Intelligence Artificielle' : 'Master’s degree in Artificial Intelligence',
      credentialCategory: 'degree'
    },
    knowsLanguage: ['fr', 'en', 'mg'],
    knowsAbout: [
      'n8n', 'Automatisation', 'AI agents', 'LLM', 'RAG', 'MLOps', 'Machine Learning',
      'Data science', 'SaaS', 'Laravel', 'FastAPI', 'Python', 'Vue.js', 'PostgreSQL', 'SEO', 'AEO'
    ],
    worksFor: [{ '@id': BUSINESS_ID }, { '@id': GOALPAY_ID }],
    sameAs: SAME_AS
  }
}

export function goalpaySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': GOALPAY_ID,
    name: GOALPAY.name,
    url: GOALPAY.url,
    founder: { '@id': PERSON_ID },
    address: { '@type': 'PostalAddress', addressCountry: 'MG' }
  }
}

/** About page: tells engines this page is the reference description of the person */
export function profilePageSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(aboutPath(lang)),
    inLanguage: lang,
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: personSchema(lang)
  }
}

export function articleSchema(article: Article, body: ArticleBody, lang: Lang, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(path)}#article`,
    headline: body.title,
    description: body.description,
    abstract: body.answer,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: lang,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: OG_IMAGE,
    author: { '@id': PERSON_ID, '@type': 'Person', name: SITE_NAME, url: absoluteUrl(aboutPath(lang)) },
    publisher: { '@id': PERSON_ID }
  }
}

export function businessSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: lang === 'fr' ? `${SITE_NAME} — Entrepreneur & Ingénieur IA` : `${SITE_NAME} — Entrepreneur & AI Engineer`,
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
    sameAs: SAME_AS,
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
