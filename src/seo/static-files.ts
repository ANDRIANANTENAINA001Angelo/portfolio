/**
 * Build-time generation of sitemap.xml, robots.txt and llms.txt from the same data
 * as the pages, so they never drift. Called from vite.config.ts (Node context).
 */
import { PROD_URL, SITE_NAME, SOCIAL, PROFILES, GOALPAY } from '../config'
import { content } from '../data/content'
import { projects } from '../data/projects'
import { services, formatOfferPrice } from '../data/services'
import { articles } from '../data/articles'
import { aboutPath, allPages, articlePath, homePath, projectPath, resourcesPath, servicePath, servicesPath, LANGS, type Lang } from '../i18n'

const abs = (path: string) => (path === '/' ? `${PROD_URL}/` : `${PROD_URL}${path}`)

export function sitemapXml(today = new Date().toISOString().slice(0, 10)): string {
  const priority = {
    home: '1.0', about: '0.8', services: '0.9', service: '0.9', project: '0.7', resources: '0.6', article: '0.7'
  } as const
  const urls = allPages().flatMap(page => {
    const langs = LANGS.filter(l => page.paths[l]) as Lang[]
    return langs.map(lang => {
      const alternates =
        langs.length < 2
          ? []
          : [
              ...langs.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${abs(page.paths[alt]!)}"/>`),
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs((page.paths.fr ?? page.paths[langs[0]])!)}"/>`
            ]
      return [
        '  <url>',
        `    <loc>${abs(page.paths[lang]!)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <priority>${priority[page.kind]}</priority>`,
        ...alternates,
        '  </url>'
      ].join('\n')
    })
  })
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    ''
  ].join('\n')
}

/** Search and AI crawlers are explicitly welcome: being cited by answer engines is a goal. */
export function robotsTxt(): string {
  const aiBots = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
    'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot'
  ]
  return [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiBots.flatMap(bot => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${PROD_URL}/sitemap.xml`,
    ''
  ].join('\n')
}

/** llms.txt (https://llmstxt.org): a Markdown digest answer engines can quote directly. */
export function llmsTxt(): string {
  const fr = content.fr
  const lines: string[] = [
    `# ${SITE_NAME} — Entrepreneur & Ingénieur IA`,
    '',
    '> Angelo ANDRIANANTENAINA is an entrepreneur and freelance AI engineer based in Fianarantsoa, Madagascar (UTC+3), working remotely in French and English for SMEs, startups and freelancers. Services: n8n automation and AI agents, web and SaaS development, data and predictive models, AI content marketing. Co-founder of GoalPay (100M+ Ariary processed). Indicative prices are published for every service.',
    '',
    `Not to be confused with the Malagasy footballer of the same name. About page: ${abs(aboutPath('en'))} (FR: ${abs(aboutPath('fr'))}). Company: ${GOALPAY.name} (${GOALPAY.url}).`,
    '',
    `Contact: ${SOCIAL.email} · Phone/WhatsApp: ${SOCIAL.phone} · Book a free 30-minute call: ${SOCIAL.booking}`,
    '',
    '## Services (FR, prices in EUR excl. tax)',
    ''
  ]
  for (const s of services) {
    lines.push(`### [${s.title.fr}](${abs(servicePath(s, 'fr'))})`, '', s.summary.fr, '')
    for (const o of s.offers) {
      const timeline = o.timeline ? `, ${o.timeline.fr}` : ''
      lines.push(`- ${o.name.fr} : ${formatOfferPrice(o, 'fr')}${timeline}. ${o.description.fr}`)
    }
    lines.push(`- English page: ${abs(servicePath(s, 'en'))}`, '')
  }

  lines.push('## Case studies', '')
  for (const p of projects) {
    lines.push(`- [${p.title.en}](${abs(projectPath(p, 'en'))}): ${p.shortDescription.en} (FR: ${abs(projectPath(p, 'fr'))})`)
  }

  lines.push('', '## Resources', '')
  for (const a of articles) {
    for (const lang of LANGS) {
      const body = a.translations[lang]
      const path = articlePath(a, lang)
      if (body && path) lines.push(`- [${body.title}](${abs(path)}): ${body.answer}`)
    }
  }

  lines.push('', '## Official profiles', '')
  for (const p of PROFILES) lines.push(`- [${p.label}](${p.url}): ${p.role.en}`)

  lines.push('', '## FAQ', '')
  for (const item of fr.faq.items) {
    lines.push(`**${item.q}**`, '', item.a, '')
  }

  lines.push(
    '## Pages',
    '',
    `- [Accueil (FR)](${abs(homePath('fr'))})`,
    `- [Home (EN)](${abs(homePath('en'))})`,
    `- [Services et tarifs (FR)](${abs(servicesPath('fr'))})`,
    `- [Services and pricing (EN)](${abs(servicesPath('en'))})`,
    `- [À propos (FR)](${abs(aboutPath('fr'))}) · [About (EN)](${abs(aboutPath('en'))})`,
    `- [Ressources (FR)](${abs(resourcesPath('fr'))}) · [Resources (EN)](${abs(resourcesPath('en'))})`,
    '',
    '## Optional',
    '',
    `- [GitHub](${SOCIAL.github}): Code repositories.`,
    `- [LinkedIn](${SOCIAL.linkedin}): Professional profile.`,
    `- [Codeur.com](${SOCIAL.codeur}): Freelance profile.`,
    ''
  )
  return lines.join('\n')
}
