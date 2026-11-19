/**
 * Service catalogue — single source for the services section, the service pages,
 * JSON-LD (Service / Offer), the sitemap and llms.txt.
 * Prices are indicative ranges in EUR; the final quote follows the discovery call.
 */
export type L<T = string> = { fr: T; en: T }

export interface ServiceOffer {
  name: L
  description: L
  priceMin: number
  priceMax: number
  /** 'project' = one-off price, 'month' = monthly retainer */
  unit: 'project' | 'month'
  timeline?: L
}

export interface ServiceFaq {
  q: L
  a: L
}

export interface Service {
  id: string
  slug: L
  /** Short name used in cards, nav and breadcrumbs */
  title: L
  /** <title> and H1 of the service page, carries the target query */
  seoTitle: L
  metaDescription: L
  /** Answer-first summary (AEO): who, what, where, how much, how long */
  summary: L
  /** One-line hook for cards */
  tagline: L
  forWho: L<string[]>
  problems: L<string[]>
  offers: ServiceOffer[]
  faq: ServiceFaq[]
  relatedProjects: string[]
  relatedServices: string[]
  keywords: L
}

export const services: Service[] = [
  {
    id: 'automation-ai-agents',
    slug: { fr: 'automatisation-n8n-agents-ia', en: 'n8n-automation-ai-agents' },
    title: { fr: 'Automatisation & agents IA', en: 'Automation & AI agents' },
    seoTitle: {
      fr: 'Freelance automatisation n8n et agents IA',
      en: 'Freelance n8n automation and AI agents'
    },
    metaDescription: {
      fr: 'Développeur IA freelance à Madagascar : automatisation de vos processus avec n8n et agents IA métier (support, prospection, assistant interne). À partir de 800 €, livré en 1 à 5 semaines.',
      en: 'Freelance AI developer based in Madagascar: business process automation with n8n and custom AI agents (support, sales, internal assistant). From €800, delivered in 1 to 5 weeks.'
    },
    summary: {
      fr: 'J’automatise les tâches répétitives de votre entreprise avec n8n et je conçois des agents IA qui travaillent dans vos outils : qualification de prospects, prise de rendez-vous, relances, support client, reporting. Basé à Madagascar (UTC+3), je travaille à distance pour des PME et startups francophones. Comptez 800 à 2 500 € pour une automatisation et 1 500 à 4 000 € pour un agent IA, livrés en 1 à 5 semaines.',
      en: 'I automate your company’s repetitive tasks with n8n and build AI agents that work inside your tools: lead qualification, meeting booking, follow-ups, customer support, reporting. Based in Madagascar (UTC+3), I work remotely with SMEs and startups. Expect €800 to €2,500 for an automation and €1,500 to €4,000 for an AI agent, delivered in 1 to 5 weeks.'
    },
    tagline: {
      fr: 'Vos processus tournent seuls, vos agents IA traitent leads, rendez-vous et support.',
      en: 'Your processes run on their own, your AI agents handle leads, meetings and support.'
    },
    forWho: {
      fr: [
        'PME et indépendants qui copient-collent des données entre leurs outils',
        'Équipes commerciales qui perdent des leads faute de suivi',
        'Services support qui répondent toujours aux mêmes questions'
      ],
      en: [
        'SMEs and freelancers copy-pasting data between their tools',
        'Sales teams losing leads for lack of follow-up',
        'Support teams answering the same questions over and over'
      ]
    },
    problems: {
      fr: [
        'Les demandes entrantes ne sont ni triées ni qualifiées, les bons prospects attendent.',
        'Les relances se font à la main, quand quelqu’un y pense.',
        'Vos outils (formulaire, CRM, agenda, email, facturation) ne se parlent pas.'
      ],
      en: [
        'Incoming requests are neither sorted nor qualified, good prospects wait.',
        'Follow-ups are done by hand, whenever someone remembers.',
        'Your tools (forms, CRM, calendar, email, invoicing) don’t talk to each other.'
      ]
    },
    offers: [
      {
        name: { fr: 'Automatisation de processus avec n8n', en: 'Process automation with n8n' },
        description: {
          fr: 'Workflows n8n qui relient vos outils : leads vers CRM, devis et facturation, relances, synchronisation de données, reporting automatique. Gestion des erreurs et documentation incluses.',
          en: 'n8n workflows connecting your tools: leads to CRM, quotes and invoicing, follow-ups, data sync, automated reporting. Error handling and documentation included.'
        },
        priceMin: 800,
        priceMax: 2500,
        unit: 'project',
        timeline: { fr: '1 à 3 semaines', en: '1 to 3 weeks' }
      },
      {
        name: { fr: 'Agent IA métier', en: 'Custom AI agent' },
        description: {
          fr: 'Agent IA branché sur vos documents et vos outils : support client, qualification de prospects, assistant interne. Réponses sourcées, actions tracées, validation humaine sur les actions sensibles.',
          en: 'AI agent connected to your documents and tools: customer support, lead qualification, internal assistant. Sourced answers, logged actions, human approval for sensitive actions.'
        },
        priceMin: 1500,
        priceMax: 4000,
        unit: 'project',
        timeline: { fr: '2 à 5 semaines', en: '2 to 5 weeks' }
      },
      {
        name: { fr: 'Maintenance et évolution', en: 'Maintenance and improvements' },
        description: {
          fr: 'Surveillance de vos workflows et agents, corrections, ajustement des prompts et petites évolutions chaque mois.',
          en: 'Monitoring of your workflows and agents, fixes, prompt tuning and small improvements every month.'
        },
        priceMin: 150,
        priceMax: 400,
        unit: 'month'
      }
    ],
    faq: [
      {
        q: { fr: 'Pourquoi n8n plutôt que Zapier ou Make ?', en: 'Why n8n rather than Zapier or Make?' },
        a: {
          fr: 'n8n peut être auto-hébergé : vos données restent chez vous et le coût ne grimpe pas avec le nombre d’exécutions. Il permet aussi d’intégrer du code et des agents IA quand un outil no-code atteint ses limites. Si vous êtes déjà sur Zapier ou Make, je peux travailler dessus.',
          en: 'n8n can be self-hosted: your data stays with you and costs don’t grow with the number of executions. It also lets me add code and AI agents where no-code tools hit their limits. If you already use Zapier or Make, I can work with them.'
        }
      },
      {
        q: { fr: 'Un agent IA peut-il faire des erreurs ?', en: 'Can an AI agent make mistakes?' },
        a: {
          fr: 'Oui, c’est pourquoi l’agent décide et rédige, mais les actions sont exécutées par des workflows contrôlés. Chaque action est journalisée, et les envois sensibles peuvent passer par une validation humaine.',
          en: 'Yes, which is why the agent decides and drafts while actions are executed by controlled workflows. Every action is logged, and sensitive sends can require human approval.'
        }
      },
      {
        q: { fr: 'Qui paie les coûts des modèles IA et de l’hébergement ?', en: 'Who pays for AI model and hosting costs?' },
        a: {
          fr: 'Les abonnements (hébergement, API des modèles IA) sont à votre nom pour que vous gardiez la main. Je vous indique le coût mensuel estimé avant de démarrer, souvent quelques dizaines d’euros.',
          en: 'Subscriptions (hosting, AI model APIs) are in your name so you stay in control. I give you the estimated monthly cost before we start, often a few dozen euros.'
        }
      }
    ],
    relatedProjects: ['ai-photo-album', 'goalpay'],
    relatedServices: ['data-dashboards', 'ai-content-marketing'],
    keywords: {
      fr: 'freelance n8n, expert automatisation n8n, agent IA, automatisation IA, développeur IA freelance Madagascar',
      en: 'freelance n8n developer, n8n automation expert, AI agent developer, AI automation, freelance AI developer Madagascar'
    }
  },
  {
    id: 'web-saas-development',
    slug: { fr: 'developpement-web-saas', en: 'web-saas-development' },
    title: { fr: 'Développement web & SaaS', en: 'Web & SaaS development' },
    seoTitle: {
      fr: 'Développeur web freelance : site, MVP SaaS et intégrations API',
      en: 'Freelance web developer: websites, SaaS MVPs and API integrations'
    },
    metaDescription: {
      fr: 'Développeur freelance à Madagascar : site vitrine optimisé SEO, MVP SaaS prêt pour vos premiers clients, intégration d’API et de paiements (Mobile Money). De 500 à 8 000 €.',
      en: 'Freelance developer based in Madagascar: SEO-optimised websites, SaaS MVPs ready for your first customers, API and payment integrations (Mobile Money). From €500 to €8,000.'
    },
    summary: {
      fr: 'Je conçois et mets en ligne des sites et des produits web qui tiennent en production : site vitrine optimisé pour Google, MVP SaaS pour tester votre marché avec de vrais clients, intégrations d’API et de paiements. Co-fondateur de GoalPay (plus de 100 millions d’Ariary traités), je travaille à distance depuis Madagascar. Comptez 500 à 1 500 € pour un site, 3 000 à 8 000 € pour un MVP.',
      en: 'I design and ship websites and web products that hold up in production: Google-optimised websites, SaaS MVPs to test your market with real customers, API and payment integrations. Co-founder of GoalPay (over 100 million Ariary processed), I work remotely from Madagascar. Expect €500 to €1,500 for a website and €3,000 to €8,000 for an MVP.'
    },
    tagline: {
      fr: 'Du site qui se trouve sur Google au MVP SaaS utilisé par vos premiers clients.',
      en: 'From a website people find on Google to a SaaS MVP your first customers use.'
    },
    forWho: {
      fr: [
        'Fondateurs qui veulent valider une idée avec un vrai produit',
        'PME dont le site n’apporte aucun contact',
        'Entreprises qui doivent connecter un paiement ou une API tierce'
      ],
      en: [
        'Founders who want to validate an idea with a real product',
        'SMEs whose website brings no leads',
        'Companies that need to connect a payment provider or a third-party API'
      ]
    },
    problems: {
      fr: [
        'Votre site est joli mais invisible sur Google et ne génère aucune demande.',
        'Votre idée de SaaS reste au stade de maquette faute d’équipe technique.',
        'Les paiements et les échanges avec vos partenaires se font encore à la main.'
      ],
      en: [
        'Your website looks nice but is invisible on Google and brings no requests.',
        'Your SaaS idea is stuck at mockup stage for lack of a technical team.',
        'Payments and exchanges with partners are still handled by hand.'
      ]
    },
    offers: [
      {
        name: { fr: 'Site vitrine ou landing page optimisée SEO', en: 'SEO-optimised website or landing page' },
        description: {
          fr: 'Site rapide, lisible par Google et par les moteurs IA, avec formulaire de contact relié à votre email ou CRM et suivi d’audience.',
          en: 'Fast website readable by Google and AI engines, with a contact form wired to your email or CRM and audience tracking.'
        },
        priceMin: 500,
        priceMax: 1500,
        unit: 'project',
        timeline: { fr: '1 à 3 semaines', en: '1 to 3 weeks' }
      },
      {
        name: { fr: 'MVP SaaS', en: 'SaaS MVP' },
        description: {
          fr: 'De l’idée à un produit utilisable par vos premiers clients : comptes utilisateurs, fonctionnalité cœur, paiement, espace d’administration et mise en ligne. Livraisons chaque semaine pour ajuster en route.',
          en: 'From idea to a product your first customers can use: user accounts, core feature, payment, admin area and launch. Weekly deliveries so we can adjust along the way.'
        },
        priceMin: 3000,
        priceMax: 8000,
        unit: 'project',
        timeline: { fr: '4 à 10 semaines', en: '4 to 10 weeks' }
      },
      {
        name: { fr: 'Intégration d’API et de paiements', en: 'API and payment integration' },
        description: {
          fr: 'Connexion de votre application à un moyen de paiement (Mobile Money, carte bancaire) ou à une API tierce, avec webhooks, journalisation et reprise sur erreur.',
          en: 'Connecting your application to a payment method (Mobile Money, cards) or a third-party API, with webhooks, logging and error recovery.'
        },
        priceMin: 600,
        priceMax: 2000,
        unit: 'project',
        timeline: { fr: '1 à 3 semaines', en: '1 to 3 weeks' }
      }
    ],
    faq: [
      {
        q: { fr: 'Le code m’appartient-il ?', en: 'Do I own the code?' },
        a: {
          fr: 'Oui. Le code, les accès et la documentation vous sont remis à la fin du projet, sur votre propre dépôt et votre propre hébergement.',
          en: 'Yes. Code, access and documentation are handed over at the end of the project, on your own repository and hosting.'
        }
      },
      {
        q: { fr: 'Combien de temps pour lancer un MVP ?', en: 'How long does it take to launch an MVP?' },
        a: {
          fr: 'Entre 4 et 10 semaines selon le périmètre. On commence par la fonctionnalité qui prouve la valeur de votre produit, le reste vient ensuite.',
          en: 'Between 4 and 10 weeks depending on scope. We start with the feature that proves your product’s value; the rest comes later.'
        }
      }
    ],
    relatedProjects: ['goalpay'],
    relatedServices: ['automation-ai-agents', 'data-dashboards'],
    keywords: {
      fr: 'développeur freelance Madagascar, développeur web freelance, création MVP SaaS, intégration API paiement, Mobile Money',
      en: 'freelance developer Madagascar, freelance web developer, SaaS MVP development, payment API integration, Mobile Money'
    }
  },
  {
    id: 'data-dashboards',
    slug: { fr: 'data-tableaux-de-bord-modeles-predictifs', en: 'data-dashboards-predictive-models' },
    title: { fr: 'Data & modèles prédictifs', en: 'Data & predictive models' },
    seoTitle: {
      fr: 'Freelance data : tableaux de bord, collecte de données et modèles prédictifs',
      en: 'Freelance data services: dashboards, data collection and predictive models'
    },
    metaDescription: {
      fr: 'Data scientist et ingénieur IA freelance à Madagascar : tableaux de bord KPI, collecte et enrichissement de données, modèles prédictifs mis en production (MLOps). De 500 à 4 000 €.',
      en: 'Freelance data scientist and AI engineer based in Madagascar: KPI dashboards, data collection and enrichment, predictive models in production (MLOps). From €500 to €4,000.'
    },
    summary: {
      fr: 'Je transforme vos données dispersées en décisions : tableaux de bord de suivi mis à jour automatiquement, collecte et enrichissement de données (leads, prix, avis), et modèles prédictifs déployés pour anticiper ventes, stock ou demande. Titulaire d’un Master en IA, je travaille à distance depuis Madagascar. Comptez 500 à 1 800 € pour un tableau de bord ou une collecte, 1 500 à 4 000 € pour un modèle prédictif en production.',
      en: 'I turn scattered data into decisions: automatically refreshed KPI dashboards, data collection and enrichment (leads, prices, reviews), and predictive models deployed to anticipate sales, stock or demand. With a Master’s degree in AI, I work remotely from Madagascar. Expect €500 to €1,800 for a dashboard or a data collection job, €1,500 to €4,000 for a predictive model in production.'
    },
    tagline: {
      fr: 'Des indicateurs fiables à jour, et des prévisions qui tournent en production.',
      en: 'Reliable, up-to-date metrics, and forecasts running in production.'
    },
    forWho: {
      fr: [
        'Dirigeants qui pilotent encore avec des exports Excel',
        'Équipes commerciales qui ont besoin de listes de prospects qualifiées',
        'Entreprises qui veulent anticiper ventes, stock ou demande'
      ],
      en: [
        'Managers still steering with Excel exports',
        'Sales teams that need qualified prospect lists',
        'Companies that want to anticipate sales, stock or demand'
      ]
    },
    problems: {
      fr: [
        'Vos chiffres sont éparpillés entre plusieurs outils et jamais à jour.',
        'Construire une liste de prospects prend des heures de copier-coller.',
        'Votre modèle de prévision vit dans un notebook que personne n’utilise.'
      ],
      en: [
        'Your numbers are scattered across tools and never up to date.',
        'Building a prospect list takes hours of copy-pasting.',
        'Your forecasting model lives in a notebook nobody uses.'
      ]
    },
    offers: [
      {
        name: { fr: 'Tableau de bord KPI', en: 'KPI dashboard' },
        description: {
          fr: 'Vos indicateurs clés réunis dans un tableau de bord mis à jour automatiquement depuis vos outils (ventes, marketing, finance, opérations).',
          en: 'Your key metrics in one dashboard, refreshed automatically from your tools (sales, marketing, finance, operations).'
        },
        priceMin: 600,
        priceMax: 1800,
        unit: 'project',
        timeline: { fr: '1 à 3 semaines', en: '1 to 3 weeks' }
      },
      {
        name: { fr: 'Collecte et enrichissement de données', en: 'Data collection and enrichment' },
        description: {
          fr: 'Collecte automatisée et nettoyage de données publiques (annuaires, avis, prix) et enrichissement de vos listes de prospects, dans le respect des conditions d’utilisation et du RGPD.',
          en: 'Automated collection and cleaning of public data (directories, reviews, prices) and enrichment of your prospect lists, respecting terms of use and GDPR.'
        },
        priceMin: 500,
        priceMax: 1500,
        unit: 'project',
        timeline: { fr: '1 à 2 semaines', en: '1 to 2 weeks' }
      },
      {
        name: { fr: 'Modèle prédictif en production (MLOps)', en: 'Predictive model in production (MLOps)' },
        description: {
          fr: 'Prévision de ventes, de stock ou de demande, servie par une API, avec suivi des expériences, réentraînement automatique et surveillance des performances.',
          en: 'Sales, stock or demand forecasting served by an API, with experiment tracking, automated retraining and performance monitoring.'
        },
        priceMin: 1500,
        priceMax: 4000,
        unit: 'project',
        timeline: { fr: '3 à 6 semaines', en: '3 to 6 weeks' }
      }
    ],
    faq: [
      {
        q: { fr: 'Faut-il beaucoup de données pour un modèle prédictif ?', en: 'Do I need a lot of data for a predictive model?' },
        a: {
          fr: 'Pas forcément. Un historique d’un an de ventes suffit souvent pour une première prévision utile. J’évalue la qualité de vos données lors du premier échange avant de proposer quoi que ce soit.',
          en: 'Not necessarily. One year of sales history is often enough for a useful first forecast. I assess your data quality during the first call before proposing anything.'
        }
      },
      {
        q: { fr: 'Mes données restent-elles confidentielles ?', en: 'Does my data stay confidential?' },
        a: {
          fr: 'Oui. Je travaille sur vos environnements ou sur des accès dédiés, avec un accord de confidentialité si besoin, et je supprime mes copies en fin de mission.',
          en: 'Yes. I work on your environments or dedicated access, under an NDA if needed, and delete my copies at the end of the engagement.'
        }
      }
    ],
    relatedProjects: ['predictor-bot', 'goalpay'],
    relatedServices: ['automation-ai-agents', 'web-saas-development'],
    keywords: {
      fr: 'data scientist freelance Madagascar, tableau de bord KPI, scraping enrichissement leads, modèle prédictif, MLOps freelance',
      en: 'freelance data scientist Madagascar, KPI dashboard, lead scraping and enrichment, predictive model, freelance MLOps'
    }
  },
  {
    id: 'ai-content-marketing',
    slug: { fr: 'creation-contenu-marketing-ia', en: 'ai-content-marketing' },
    title: { fr: 'Contenu marketing avec l’IA', en: 'AI-powered content marketing' },
    seoTitle: {
      fr: 'Création de contenu marketing avec l’IA : articles SEO et réseaux sociaux',
      en: 'AI content marketing: SEO articles and social media'
    },
    metaDescription: {
      fr: 'Création de contenu marketing assistée par IA : articles SEO relus, posts LinkedIn et Facebook, et système automatisé de la veille à la publication. À partir de 300 € par mois.',
      en: 'AI-assisted content marketing: reviewed SEO articles, LinkedIn and Facebook posts, and an automated system from research to publishing. From €300 per month.'
    },
    summary: {
      fr: 'Je produis du contenu marketing avec l’IA, relu par un humain : articles optimisés pour Google et les moteurs IA, posts pour LinkedIn et Facebook. Je peux aussi installer chez vous un système automatisé qui va de la veille à la publication, avec votre validation avant chaque post. Comptez 300 à 900 € par mois pour un pack de contenus, 800 à 2 000 € pour le système automatisé.',
      en: 'I produce AI-assisted, human-reviewed marketing content: articles optimised for Google and AI engines, posts for LinkedIn and Facebook. I can also set up an automated system that goes from research to publishing, with your approval before each post. Expect €300 to €900 per month for a content pack and €800 to €2,000 for the automated system.'
    },
    tagline: {
      fr: 'Une présence régulière sur Google et les réseaux, sans y passer vos soirées.',
      en: 'A steady presence on Google and social media, without spending your evenings on it.'
    },
    forWho: {
      fr: [
        'Indépendants et PME qui publient de façon irrégulière',
        'Entreprises dont le site n’a pas de contenu à indexer',
        'Équipes marketing qui veulent industrialiser leur production'
      ],
      en: [
        'Freelancers and SMEs who publish irregularly',
        'Companies whose website has no content to index',
        'Marketing teams that want to scale their production'
      ]
    },
    problems: {
      fr: [
        'Vous savez qu’il faut publier, mais vous n’avez ni le temps ni la régularité.',
        'Vos concurrents apparaissent dans Google et ChatGPT, pas vous.',
        'Le contenu généré par IA sans relecture sonne faux et abîme votre image.'
      ],
      en: [
        'You know you should publish, but lack the time and consistency.',
        'Your competitors show up on Google and ChatGPT, you don’t.',
        'Unreviewed AI content sounds fake and hurts your brand.'
      ]
    },
    offers: [
      {
        name: { fr: 'Pack de contenus SEO et réseaux sociaux', en: 'SEO and social media content pack' },
        description: {
          fr: 'Chaque mois : articles de blog optimisés SEO et AEO, posts LinkedIn ou Facebook, calendrier éditorial. Rédigés avec l’IA à partir de vos sujets, relus et ajustés à votre ton.',
          en: 'Every month: SEO and AEO-optimised blog articles, LinkedIn or Facebook posts, editorial calendar. Written with AI from your topics, reviewed and adjusted to your voice.'
        },
        priceMin: 300,
        priceMax: 900,
        unit: 'month'
      },
      {
        name: { fr: 'Système automatisé de création de contenu', en: 'Automated content creation system' },
        description: {
          fr: 'Workflow installé chez vous : veille sur vos sujets, proposition d’idées, rédaction des brouillons, validation en un clic, publication programmée sur vos réseaux.',
          en: 'Workflow set up on your side: topic monitoring, idea suggestions, draft writing, one-click approval, scheduled publishing on your social channels.'
        },
        priceMin: 800,
        priceMax: 2000,
        unit: 'project',
        timeline: { fr: '2 à 3 semaines', en: '2 to 3 weeks' }
      }
    ],
    faq: [
      {
        q: { fr: 'Google pénalise-t-il le contenu écrit avec l’IA ?', en: 'Does Google penalise AI-written content?' },
        a: {
          fr: 'Google pénalise le contenu sans valeur, pas l’outil utilisé. Chaque contenu est relu, enrichi de votre expertise et de vos exemples réels avant publication.',
          en: 'Google penalises low-value content, not the tool used. Every piece is reviewed and enriched with your expertise and real examples before publishing.'
        }
      },
      {
        q: { fr: 'Qu’est-ce que l’AEO ?', en: 'What is AEO?' },
        a: {
          fr: 'L’Answer Engine Optimization consiste à structurer vos contenus pour qu’ils soient repris par les moteurs de réponse (ChatGPT, Perplexity, Google AI Overviews) : réponses directes, données structurées, sources claires.',
          en: 'Answer Engine Optimization means structuring your content so answer engines (ChatGPT, Perplexity, Google AI Overviews) reuse it: direct answers, structured data, clear sources.'
        }
      }
    ],
    relatedProjects: [],
    relatedServices: ['automation-ai-agents', 'web-saas-development'],
    keywords: {
      fr: 'création contenu IA, rédaction SEO IA, marketing digital IA, posts LinkedIn automatisés, AEO',
      en: 'AI content creation, AI SEO writing, AI digital marketing, automated LinkedIn posts, AEO'
    }
  }
]

export function getServiceBySlug(slug: string, lang: keyof L): Service | undefined {
  return services.find(s => s.slug[lang] === slug)
}

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id)
}

/** Offers are listed by importance: the first one is the service's main entry price. */
export function startingPrice(service: Service): ServiceOffer {
  return service.offers[0]
}

export function formatPrice(value: number, lang: keyof L): string {
  return lang === 'fr'
    ? `${value.toLocaleString('fr-FR').replace(/ | /g, ' ')} €`
    : `€${value.toLocaleString('en-US')}`
}

export function formatOfferPrice(offer: ServiceOffer, lang: keyof L): string {
  const range = `${formatPrice(offer.priceMin, lang)} – ${formatPrice(offer.priceMax, lang)}`
  if (offer.unit === 'month') return lang === 'fr' ? `${range} / mois` : `${range} / month`
  return range
}
