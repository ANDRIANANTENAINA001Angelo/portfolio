/**
 * Resources (articles). Written answer-first for AEO: `answer` is the 2–3 sentence reply
 * engines can quote, then sections, then a FAQ (FAQPage JSON-LD).
 * An article may exist in one language only; hreflang is emitted only for existing translations.
 */
type ArticleLang = 'fr' | 'en'

export interface ArticleSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface ArticleBody {
  slug: string
  title: string
  description: string
  /** Direct answer to the title's question (AEO) */
  answer: string
  sections: ArticleSection[]
  faq: { q: string; a: string }[]
}

export interface Article {
  id: string
  datePublished: string
  dateModified: string
  /** Service ids (see services.ts) linked from the article */
  relatedServices: string[]
  translations: Partial<Record<ArticleLang, ArticleBody>>
}

export const articles: Article[] = [
  {
    id: 'n8n-automation-cost',
    datePublished: '2026-11-19',
    dateModified: '2026-11-19',
    relatedServices: ['automation-ai-agents'],
    translations: {
      fr: {
        slug: 'cout-automatisation-n8n-pme',
        title: 'Combien coûte une automatisation n8n pour une PME ?',
        description:
          'Prix d’une automatisation n8n en 2026 : fourchettes par type de projet, coûts mensuels à prévoir (hébergement, IA), calcul du retour sur investissement et déroulé d’un projet.',
        answer:
          'Une automatisation n8n pour une PME coûte en général entre 800 et 2 500 € à la mise en place, selon le nombre d’outils connectés et la complexité du processus. Un système avec agents IA se situe plutôt entre 1 500 et 4 000 €. Il faut ensuite prévoir quelques euros à quelques dizaines d’euros par mois pour l’hébergement et les appels aux modèles IA.',
        sections: [
          {
            heading: 'Les fourchettes de prix par type de projet',
            paragraphs: [
              'Ce sont les fourchettes que je pratique, hors taxes. Elles servent de repère : le prix final dépend du périmètre fixé lors du premier échange.'
            ],
            list: [
              'Automatisation d’un processus simple (2 ou 3 outils, par exemple formulaire → CRM → email de confirmation) : autour de 800 €, livrée en 1 semaine environ.',
              'Processus métier complet (devis, facturation, relances, reporting, gestion des erreurs) : 1 500 à 2 500 €, en 2 à 3 semaines.',
              'Système avec agents IA (qualification de prospects, prise de rendez-vous, réponses clients, validation humaine) : 1 500 à 4 000 €, en 2 à 5 semaines.',
              'Maintenance et évolutions : 150 à 400 € par mois, optionnelle.'
            ]
          },
          {
            heading: 'Ce qui fait varier le prix',
            paragraphs: ['Deux automatisations qui se ressemblent sur le papier peuvent avoir des coûts très différents. Les facteurs principaux :'],
            list: [
              'Le nombre d’outils à connecter, et la qualité de leurs API : certaines sont simples, d’autres demandent des contournements.',
              'Le niveau de fiabilité attendu : reprise sur erreur, alertes, journalisation, traitement de gros volumes.',
              'La présence d’IA dans la boucle : rédaction des prompts, tests sur de vrais cas, garde-fous et validation humaine.',
              'Les données sensibles : données personnelles (RGPD), droits d’accès, hébergement des données.',
              'La documentation et la formation de votre équipe pour qu’elle reste autonome.'
            ]
          },
          {
            heading: 'Les coûts mensuels à prévoir',
            paragraphs: [
              'Une fois l’automatisation livrée, les coûts récurrents restent généralement modestes pour une PME :'
            ],
            list: [
              'Hébergement de n8n : la version auto-hébergée tourne sur un petit serveur (VPS) qui coûte en général 5 à 20 € par mois ; n8n Cloud est un abonnement mensuel qui dépend du volume d’exécutions.',
              'Modèles IA (si l’automatisation en utilise) : facturés à l’usage, souvent quelques centimes par traitement, soit quelques euros à quelques dizaines d’euros par mois.',
              'Vos outils existants (CRM, emailing, agenda) : inchangés, l’automatisation les relie sans les remplacer.'
            ]
          },
          {
            heading: 'Calculer le retour sur investissement',
            paragraphs: [
              'La bonne question n’est pas « combien ça coûte ? », mais « en combien de temps c’est rentabilisé ? ». Exemple : une tâche manuelle qui prend 5 heures par semaine, valorisée à 20 € de l’heure, représente environ 430 € par mois. Une automatisation à 1 500 € est alors rentabilisée en 4 mois environ, sans compter les prospects qui ne sont plus oubliés.',
              'Avant de démarrer, je chiffre ce calcul avec vous lors de l’appel découverte. Si le gain ne justifie pas l’investissement, je vous le dis.'
            ]
          },
          {
            heading: 'Comment se déroule un projet',
            paragraphs: [
              'Un appel gratuit de 30 minutes pour comprendre le processus, un devis écrit avec périmètre et délai, puis une démo chaque semaine jusqu’à la mise en production. À la fin, les accès et la documentation sont remis à votre nom.'
            ]
          }
        ],
        faq: [
          {
            q: 'n8n est-il gratuit ?',
            a: 'La version auto-hébergée de n8n (Community) est gratuite pour un usage interne : vous ne payez que le serveur. n8n Cloud, hébergé par l’éditeur, est payant au mois.'
          },
          {
            q: 'Peut-on commencer par une petite automatisation ?',
            a: 'Oui, c’est même recommandé : on automatise d’abord le processus qui fait perdre le plus de temps ou de clients, on mesure le gain, puis on étend.'
          },
          {
            q: 'Combien de temps faut-il pour mettre en place une automatisation n8n ?',
            a: 'Entre 1 et 3 semaines pour la plupart des processus, et 2 à 5 semaines lorsqu’elle inclut des agents IA.'
          }
        ]
      },
      en: {
        slug: 'n8n-automation-cost-for-smes',
        title: 'How much does an n8n automation cost for an SME?',
        description:
          'n8n automation pricing in 2026: ranges by project type, monthly costs to plan for (hosting, AI), return on investment and how a project runs.',
        answer:
          'An n8n automation for an SME usually costs between €800 and €2,500 to set up, depending on how many tools are connected and how complex the process is. A system with AI agents is more in the €1,500 to €4,000 range. After that, expect a few euros to a few dozen euros per month for hosting and AI model calls.',
        sections: [
          {
            heading: 'Price ranges by project type',
            paragraphs: [
              'These are the ranges I charge, excluding taxes. They are a benchmark: the final price depends on the scope agreed during the first call.'
            ],
            list: [
              'Simple process automation (2 or 3 tools, e.g. form → CRM → confirmation email): around €800, delivered in about 1 week.',
              'Complete business process (quotes, invoicing, follow-ups, reporting, error handling): €1,500 to €2,500, in 2 to 3 weeks.',
              'System with AI agents (lead qualification, meeting booking, customer replies, human approval): €1,500 to €4,000, in 2 to 5 weeks.',
              'Maintenance and improvements: €150 to €400 per month, optional.'
            ]
          },
          {
            heading: 'What drives the price',
            paragraphs: ['Two automations that look alike on paper can cost very different amounts. The main factors:'],
            list: [
              'How many tools need connecting, and how good their APIs are: some are simple, others need workarounds.',
              'The reliability you need: error recovery, alerts, logging, high volumes.',
              'Whether AI is in the loop: prompt writing, testing on real cases, guardrails and human approval.',
              'Sensitive data: personal data (GDPR), access rights, where data is hosted.',
              'Documentation and training so your team stays autonomous.'
            ]
          },
          {
            heading: 'Monthly costs to plan for',
            paragraphs: ['Once the automation is delivered, recurring costs are usually modest for an SME:'],
            list: [
              'n8n hosting: the self-hosted version runs on a small server (VPS) that typically costs €5 to €20 per month; n8n Cloud is a monthly subscription based on execution volume.',
              'AI models (if used): billed per use, often a few cents per task, so a few euros to a few dozen euros per month.',
              'Your existing tools (CRM, email, calendar): unchanged, the automation connects them without replacing them.'
            ]
          },
          {
            heading: 'Working out the return on investment',
            paragraphs: [
              'The right question is not "how much does it cost?" but "how fast does it pay for itself?". Example: a manual task taking 5 hours a week, valued at €20 an hour, is worth about €430 a month. A €1,500 automation then pays for itself in about 4 months, not counting the leads that no longer slip through.',
              'Before we start, I run this calculation with you during the discovery call. If the gain does not justify the investment, I will tell you.'
            ]
          },
          {
            heading: 'How a project runs',
            paragraphs: [
              'A free 30-minute call to understand the process, a written quote with scope and timeline, then a demo every week until go-live. At the end, access and documentation are handed over in your name.'
            ]
          }
        ],
        faq: [
          {
            q: 'Is n8n free?',
            a: 'The self-hosted version of n8n (Community) is free for internal use: you only pay for the server. n8n Cloud, hosted by the vendor, is a paid monthly plan.'
          },
          {
            q: 'Can we start with a small automation?',
            a: 'Yes, and it is recommended: automate first the process that costs you the most time or customers, measure the gain, then expand.'
          },
          {
            q: 'How long does it take to set up an n8n automation?',
            a: 'Between 1 and 3 weeks for most processes, and 2 to 5 weeks when AI agents are involved.'
          }
        ]
      }
    }
  }
]

export function getArticleBySlug(slug: string, lang: ArticleLang): Article | undefined {
  return articles.find(a => a.translations[lang]?.slug === slug)
}
