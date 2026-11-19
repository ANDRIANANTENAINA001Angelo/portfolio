export type Lang = 'fr' | 'en'

export const content = {
  fr: {
    meta: {
      title: 'Développeur IA freelance à Madagascar — n8n, agents IA & data | Angelo',
      description: 'Développeur IA freelance basé à Madagascar : automatisation n8n, agents IA, développement web et SaaS, data et contenu marketing IA. Prix affichés, travail à distance en français. Co-fondateur de GoalPay.',
      keywords: 'développeur IA freelance Madagascar, ingénieur IA, entrepreneur IA, freelance n8n, expert automatisation, agent IA, développeur freelance Madagascar, Angelo ANDRIANANTENAINA'
    },
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Études de cas',
      skills: 'Compétences',
      resources: 'Ressources',
      contact: 'Contact'
    },
    hero: {
      badge: 'Entrepreneur & Ingénieur IA · Remote UTC+3',
      kicker: 'Développeur IA freelance à Madagascar',
      title: 'Je transforme vos données et l’IA en produits qui tournent en production.',
      subtitle: 'Automatisation n8n et agents IA, développement web et SaaS, data et modèles prédictifs, contenu marketing avec l’IA. Co-fondateur de GoalPay, je travaille à distance pour des PME et startups francophones.',
      ctaPrimary: 'Discuter d’un projet',
      ctaSecondary: 'Voir les études de cas',
      stats: [
        { value: '100M+', label: 'Ariary traités via GoalPay' },
        { value: '4 500+', label: 'Transactions sécurisées' },
        { value: '30+', label: 'Projets réalisés' }
      ]
    },
    services: {
      title: 'Services',
      subtitle: 'Quatre domaines où je livre des résultats concrets, avec des prix indicatifs affichés.',
      cta: 'En discuter',
      from: 'À partir de',
      viewService: 'Voir le service',
      allServices: 'Voir tous les services et les tarifs',
      hubTitle: 'Services de développement IA, automatisation et data',
      hubIntro: 'Développeur IA freelance basé à Madagascar, j’accompagne à distance les PME, startups et indépendants francophones : automatisation n8n et agents IA, développement web et SaaS, data et modèles prédictifs, contenu marketing avec l’IA. Les prix sont indicatifs ; le devis final suit un premier échange gratuit de 30 minutes.',
      summaryLabel: 'En bref',
      forWhoTitle: 'Pour qui ?',
      problemsTitle: 'Les problèmes que je règle',
      offersTitle: 'Offres et tarifs indicatifs',
      timelineLabel: 'Délai',
      priceNote: 'Prix indicatifs hors taxes. Le devis final dépend du périmètre, fixé ensemble lors de l’appel découverte.',
      processTitle: 'Comment on travaille ensemble',
      process: [
        { title: 'Appel découverte (30 min, gratuit)', text: 'On clarifie votre besoin, vos outils et le résultat attendu.' },
        { title: 'Cadrage et devis', text: 'Périmètre, livrables, délai et prix fixés par écrit avant de commencer.' },
        { title: 'Livraisons itératives', text: 'Une démo chaque semaine pour valider et ajuster en route.' },
        { title: 'Mise en production et transmission', text: 'Mise en ligne, documentation, formation et accès remis à votre nom.' }
      ],
      faqTitle: 'Questions fréquentes sur ce service',
      relatedProjectsTitle: 'Études de cas liées',
      relatedServicesTitle: 'Services complémentaires',
      ctaTitle: 'Un projet en tête ?',
      ctaText: 'Réservez un appel de 30 minutes : vous repartez avec une estimation claire, même si on ne travaille pas ensemble.',
      ctaBooking: 'Réserver un appel gratuit',
      ctaEmail: 'Écrire un email',
      breadcrumbHome: 'Accueil'
    },
    about: {
      title: 'À propos',
      subtitle: 'Entrepreneur et ingénieur IA : je livre en production, et je raisonne en résultats.',
      body: [
        'Je suis Angelo ANDRIANANTENAINA, entrepreneur et ingénieur IA basé à Fianarantsoa, Madagascar (UTC+3, aligné avec l’Europe). Je conçois des produits qui combinent développement logiciel et intelligence artificielle, et je les mets réellement en production.',
        'En tant que co-fondateur de GoalPay, j’ai conçu et développé une plateforme FinTech qui a déjà traité plus de 100 millions d’Ariary sur 4 500+ transactions. Cette expérience m’a appris à coder pour le réel : sécurité, performance, observabilité et continuité de service.',
        'Mon Master en Intelligence Artificielle (Gouvernance et Ingénierie des Données, ENI Fianarantsoa) me donne une double compétence : comprendre les modèles de Machine Learning et les rendre utilisables dans de vrais produits (RAG, LLM, MLOps).',
        'Ma façon de travailler : communication claire et régulière (essentielle en remote et en asynchrone), livraisons fréquentes plutôt qu’un grand livrable final, et une documentation technique que vous pouvez relire sans moi.'
      ],
      values: [
        { title: 'Impact mesurable', text: 'Chaque fonctionnalité doit prouver sa valeur (métriques, temps, argent).' },
        { title: 'Clarté et documentation', text: 'Code et architecture compréhensibles, maintenables et documentés.' },
        { title: 'Production first', text: 'Sécurité, performance, observabilité et continuité de service dès le premier jour.' }
      ]
    },
    experience: {
      title: 'Expérience',
      subtitle: 'Des projets réels, livrés et mesurés.',
      items: [
        {
          role: 'Développeur Freelance (Web & IA)',
          company: 'Indépendant',
          period: '2024 – Présent',
          location: 'Remote / Madagascar',
          description: 'Missions freelance ponctuelles en développement web et intégration IA, en parallèle de mes projets principaux : applications sur mesure, automatisations et intégrations pour de petites structures.',
          tech: ['Laravel', 'FastAPI', 'Python', 'Vue.js']
        },
        {
          role: 'Co-fondateur & Software Engineer',
          company: 'GoalPay (FinTech SaaS)',
          period: '2025 – Présent',
          location: 'Madagascar',
          description: 'Conception, développement et maintenance de l’architecture d’une plateforme de paiements numériques. 4 500+ transactions, 100M+ Ariary traités. Modules paiement, wallet, webhooks, WebSockets, automatisation Mobile Money, files d’attente et sécurité.',
          tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'WebSockets', 'Redis', 'OpenAPI', 'Queues']
        },
        {
          role: 'Développeur Backend & IA stagiaire',
          company: 'Code & Scale',
          period: 'Sept. 2025 – Déc. 2025',
          location: 'Remote / Madagascar',
          description: 'Évolution d’une plateforme IA interne (FastAPI + PostgreSQL). Travail sur RAG, OCR, embeddings, pgvector. Optimisation batch/parallèle et amélioration de la fiabilité.',
          tech: ['FastAPI', 'pgvector', 'Docker', 'RAG', 'OCR', 'PostgreSQL']
        },
        {
          role: 'AI Engineer',
          company: 'PredictorBot (Mémoire Master, en partenariat avec Code & Scale)',
          period: '2025 – 2026',
          location: 'ENI Fianarantsoa',
          description: 'Pipeline MLOps quasi temps réel pour la prédiction des cours de devise : collecte toutes les 2 min (Twelve Data), 46 features (lags, rendements, volatilité, sessions de marché), réentraînement horaire XGBoost, 27 runs suivis et promotion automatique du meilleur modèle dans MLflow, API FastAPI, dashboard web temps réel.',
          tech: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'Docker', 'APScheduler']
        }
      ]
    },
    projects: {
      title: 'Études de cas',
      subtitle: 'Des systèmes qui tournent, avec un contexte, une architecture et des résultats concrets.',
      viewAll: 'Voir toutes les études de cas',
      viewDetails: 'Voir l’étude de cas',
      context: 'Contexte',
      challenge: 'Problème',
      solution: 'Solution',
      architecture: 'Architecture',
      results: 'Résultats',
      tech: 'Stack',
      links: 'Liens',
      demoUnavailable: 'Démo en ligne expirée — captures ci-dessous',
      status: {
        live: 'En production',
        completed: 'Terminé',
        'in-progress': 'En cours'
      },
      back: 'Retour aux études de cas',
      comingSoon: {
        title: 'Projet RAG/LLM dédié — Bientôt',
        text: 'Une étude de cas RAG pure (assistant documentaire) est en préparation. En attendant, l’étude de cas « AI Photo Album » illustre mon usage de LLM en production.'
      }
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Une stack orientée MLOps, LLM/RAG et développement logiciel.',
      categories: [
        {
          name: 'IA & MLOps',
          items: ['LLM & RAG', 'MLOps & mise en production', 'MLflow, XGBoost, scikit-learn', 'Databricks', 'OCR & Speech-to-Text', 'Embeddings / pgvector']
        },
        {
          name: 'Développement',
          items: ['Python / FastAPI', 'PHP / Laravel', 'JavaScript / Vue.js', 'WebSockets', 'OpenAPI / Swagger']
        },
        {
          name: 'Data & Infra',
          items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Docker', 'CI/CD (GitHub Actions, Jenkins)']
        },
        {
          name: 'Qualité & Méthodes',
          items: ['Clean Code', 'SOLID', 'Tests unitaires & intégration', 'Documentation technique', 'Design Patterns']
        }
      ]
    },
    contact: {
      title: 'Discutons de votre projet',
      subtitle: 'PME, startup ou pair technique — je suis ouvert à l’échange, en français ou en anglais.',
      email: 'contact@andrianantenaina-angelo.site',
      phone: '+261 34 59 92 047',
      location: 'Fianarantsoa, Madagascar (UTC+3) · Remote-friendly',
      cta: 'Envoyer un message',
      available: 'Disponible pour des missions freelance et des postes remote.',
      booking: 'Réserver un créneau de 30 min',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email'
      }
    },
    aboutPage: {
      metaTitle: 'À propos — Angelo ANDRIANANTENAINA, entrepreneur & ingénieur IA',
      metaDescription: 'Qui est Angelo ANDRIANANTENAINA ? Entrepreneur et ingénieur IA basé à Fianarantsoa, Madagascar, co-fondateur de GoalPay. Parcours, spécialités et liens vers tous ses profils.',
      role: 'Entrepreneur & Ingénieur IA · Fianarantsoa, Madagascar',
      answerLabel: 'Qui est Angelo ANDRIANANTENAINA ?',
      answer: 'Angelo ANDRIANANTENAINA est un entrepreneur et ingénieur en intelligence artificielle basé à Fianarantsoa, Madagascar. Co-fondateur de la FinTech GoalPay et titulaire d’un Master en Intelligence Artificielle de l’ENI Fianarantsoa, il conçoit des automatisations n8n, des agents IA, des produits data et des SaaS pour des PME, startups et agences, en freelance ou intégré à leurs équipes.',
      disambiguation: 'Cette page concerne l’ingénieur IA et co-fondateur de GoalPay, à ne pas confondre avec le footballeur malgache homonyme.',
      factsTitle: 'En résumé',
      facts: [
        { label: 'Rôle', value: 'Entrepreneur & Ingénieur IA' },
        { label: 'Entreprise', value: 'Co-fondateur de GoalPay (FinTech, Madagascar)' },
        { label: 'Spécialités', value: 'Automatisation n8n, agents IA, data et MLOps, développement SaaS' },
        { label: 'Formation', value: 'Master en Intelligence Artificielle, ENI Fianarantsoa' },
        { label: 'Basé à', value: 'Fianarantsoa, Madagascar (UTC+3), en remote' },
        { label: 'Langues', value: 'Français, anglais, malagasy' },
        { label: 'Collaboration', value: 'Freelance, mission longue ou intégration en équipe ou en agence' }
      ],
      storyTitle: 'Mon histoire',
      timelineTitle: 'Parcours',
      profilesTitle: 'Retrouvez-moi en ligne',
      profilesIntro: 'Mes profils officiels. Chacun renvoie vers ce site.',
      servicesTitle: 'Ce que je fais pour vous',
      contactTitle: 'Travailler ensemble',
      contactText: 'Un projet, une mission ou une collaboration en équipe ? Réservez un appel de 30 minutes ou écrivez-moi.'
    },
    resources: {
      title: 'Ressources',
      hubMetaTitle: 'Ressources : automatisation n8n, agents IA et data pour PME | Angelo',
      hubTitle: 'Ressources : automatisation, agents IA et data pour les PME',
      hubIntro: 'Des réponses concrètes aux questions que me posent les dirigeants avant un projet : prix, choix d’outils, retour sur investissement, méthode.',
      readMore: 'Lire l’article',
      allArticles: 'Lire mes articles',
      published: 'Publié le',
      updated: 'Mis à jour le',
      answerLabel: 'En bref',
      faqTitle: 'Questions fréquentes',
      relatedService: 'Le service lié',
      byline: 'Par'
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Ce qu’on me demande le plus souvent avant de démarrer une mission.',
      items: [
        {
          q: 'Comment se déroule une mission avec vous ?',
          a: 'Un premier échange gratuit de 30 minutes pour comprendre votre besoin, suivi d’un cadrage clair (périmètre, livrables, délai), puis des livraisons itératives avec points de suivi réguliers et documentation à la fin.'
        },
        {
          q: 'Quels sont vos délais habituels ?',
          a: 'De 1 à 10 semaines selon le service : 1 à 3 semaines pour une automatisation n8n ou un site vitrine, 2 à 5 semaines pour un agent IA, 3 à 6 semaines pour un modèle prédictif en production, 4 à 10 semaines pour un MVP SaaS.'
        },
        {
          q: 'Comment le prix est-il fixé ?',
          a: 'Chaque service affiche une fourchette indicative : par exemple 800 à 2 500 € pour une automatisation n8n, 1 500 à 4 000 € pour un agent IA, 3 000 à 8 000 € pour un MVP SaaS. Le devis final est fixé par écrit après le premier échange, selon le périmètre.'
        },
        {
          q: 'Travaillez-vous avec des clients à l’international, en remote ?',
          a: 'Oui. Je suis basé à Fianarantsoa, Madagascar (UTC+3, aligné avec l’Europe), et je travaille en remote en français et en anglais.'
        },
        {
          q: 'Quelles technologies utilisez-vous ?',
          a: 'n8n pour l’automatisation, Python, FastAPI, Laravel, Vue.js et PostgreSQL pour le développement, MLflow, XGBoost et scikit-learn pour la data, et les principaux modèles LLM (GPT, Claude, modèles open source) pour les agents IA.'
        },
        {
          q: 'Pourquoi choisir un développeur IA freelance basé à Madagascar ?',
          a: 'Vous travaillez en français avec un fuseau horaire proche de l’Europe (UTC+3, 1 à 2 heures d’écart), à des tarifs plus accessibles qu’en Europe, avec un niveau d’exigence de production : GoalPay, que j’ai co-fondé, a traité plus de 100 millions d’Ariary.'
        },
        {
          q: 'Proposez-vous des automatisations avec n8n et des agents IA ?',
          a: 'Oui, c’est mon cœur de métier : workflows n8n qui relient vos outils (formulaires, CRM, agenda, email, facturation) et agents IA qui qualifient vos prospects, prennent des rendez-vous, relancent et répondent à vos clients, avec validation humaine sur les actions sensibles.'
        },
        {
          q: 'Proposez-vous un premier échange gratuit ?',
          a: 'Oui, vous pouvez réserver un créneau de 30 minutes directement dans mon agenda (section Contact), sans engagement.'
        }
      ]
    },
    footer: {
      rights: '© 2026 Angelo ANDRIANANTENAINA. Tous droits réservés.',
      built: 'Construit avec intention · Vue 3 + Vite',
      servicesTitle: 'Services',
      projectsTitle: 'Études de cas',
      moreTitle: 'En savoir plus',
      profilesTitle: 'Profils'
    },
    common: {
      light: 'Clair',
      dark: 'Sombre',
      lang: 'Langue'
    }
  },

  en: {
    meta: {
      title: 'Freelance AI developer in Madagascar — n8n, AI agents & data | Angelo',
      description: 'Freelance AI developer based in Madagascar: n8n automation, AI agents, web and SaaS development, data and AI content marketing. Transparent pricing, remote work in English and French. Co-founder of GoalPay.',
      keywords: 'freelance AI developer Madagascar, AI engineer, AI entrepreneur, freelance n8n developer, automation expert, AI agent developer, Angelo ANDRIANANTENAINA'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      experience: 'Experience',
      projects: 'Case studies',
      skills: 'Skills',
      resources: 'Resources',
      contact: 'Contact'
    },
    hero: {
      badge: 'Entrepreneur & AI Engineer · Remote UTC+3',
      kicker: 'Freelance AI developer in Madagascar',
      title: 'I turn your data and AI into products that run in production.',
      subtitle: 'n8n automation and AI agents, web and SaaS development, data and predictive models, AI-powered content marketing. Co-founder of GoalPay, I work remotely with SMEs and startups.',
      ctaPrimary: 'Discuss a project',
      ctaSecondary: 'View case studies',
      stats: [
        { value: '100M+', label: 'Ariary processed via GoalPay' },
        { value: '4,500+', label: 'Secure transactions' },
        { value: '30+', label: 'Projects delivered' }
      ]
    },
    services: {
      title: 'Services',
      subtitle: 'Four areas where I deliver concrete results, with indicative prices shown upfront.',
      cta: 'Let’s talk',
      from: 'From',
      viewService: 'View service',
      allServices: 'See all services and pricing',
      hubTitle: 'AI development, automation and data services',
      hubIntro: 'Freelance AI developer based in Madagascar, I work remotely with SMEs, startups and freelancers: n8n automation and AI agents, web and SaaS development, data and predictive models, AI-powered content marketing. Prices are indicative; the final quote follows a free 30-minute call.',
      summaryLabel: 'In short',
      forWhoTitle: 'Who is it for?',
      problemsTitle: 'Problems I solve',
      offersTitle: 'Offers and indicative pricing',
      timelineLabel: 'Timeline',
      priceNote: 'Indicative prices, excluding taxes. The final quote depends on the scope we define together during the discovery call.',
      processTitle: 'How we work together',
      process: [
        { title: 'Discovery call (30 min, free)', text: 'We clarify your need, your tools and the expected outcome.' },
        { title: 'Scoping and quote', text: 'Scope, deliverables, timeline and price agreed in writing before we start.' },
        { title: 'Iterative delivery', text: 'A demo every week to validate and adjust along the way.' },
        { title: 'Launch and handover', text: 'Go-live, documentation, training and access handed over in your name.' }
      ],
      faqTitle: 'Frequently asked questions about this service',
      relatedProjectsTitle: 'Related case studies',
      relatedServicesTitle: 'Related services',
      ctaTitle: 'Got a project in mind?',
      ctaText: 'Book a 30-minute call: you leave with a clear estimate, even if we don’t end up working together.',
      ctaBooking: 'Book a free call',
      ctaEmail: 'Send an email',
      breadcrumbHome: 'Home'
    },
    about: {
      title: 'About',
      subtitle: 'Entrepreneur and AI engineer: I ship to production and think in business outcomes.',
      body: [
        'I am Angelo ANDRIANANTENAINA, an entrepreneur and AI engineer based in Fianarantsoa, Madagascar (UTC+3, aligned with Europe). I design products that combine software engineering and artificial intelligence, and I actually ship them to production.',
        'As co-founder of GoalPay, I designed and built a FinTech platform that has already processed more than 100 million Ariary across 4,500+ transactions. This experience taught me to code for the real world: security, performance, observability and service continuity.',
        'My Master’s degree in Artificial Intelligence (Data Governance & Engineering, ENI Fianarantsoa) gives me dual competence: understanding machine learning models and making them usable in real products (RAG, LLM, MLOps).',
        'How I work: clear, frequent communication (essential for remote and async teams), frequent deliveries rather than one big handoff, and documentation you can read without me in the room.'
      ],
      values: [
        { title: 'Measurable impact', text: 'Every feature must prove its value (metrics, time, money).' },
        { title: 'Clarity & documentation', text: 'Code and architecture that are understandable, maintainable and documented.' },
        { title: 'Production first', text: 'Security, performance, observability and service continuity from day one.' }
      ]
    },
    experience: {
      title: 'Experience',
      subtitle: 'Real projects, delivered and measured.',
      items: [
        {
          role: 'Freelance Developer (Web & AI)',
          company: 'Independent',
          period: '2024 – Present',
          location: 'Remote / Madagascar',
          description: 'Occasional freelance missions in web development and AI integration, alongside my main projects: custom applications, automation and integrations for small businesses.',
          tech: ['Laravel', 'FastAPI', 'Python', 'Vue.js']
        },
        {
          role: 'Co-founder & Software Engineer',
          company: 'GoalPay (FinTech SaaS)',
          period: '2025 – Present',
          location: 'Madagascar',
          description: 'Designed, developed and maintained the architecture of a digital payments platform. 4,500+ transactions, 100M+ Ariary processed. Payment modules, wallet, webhooks, WebSockets, Mobile Money automation, queues and security.',
          tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'WebSockets', 'Redis', 'OpenAPI', 'Queues']
        },
        {
          role: 'Backend & AI Developer Intern',
          company: 'Code & Scale',
          period: 'Sept. 2025 – Dec. 2025',
          location: 'Remote / Madagascar',
          description: 'Evolved an internal AI platform (FastAPI + PostgreSQL). Worked on RAG, OCR, embeddings, pgvector. Optimized batch/parallel processing and improved reliability.',
          tech: ['FastAPI', 'pgvector', 'Docker', 'RAG', 'OCR', 'PostgreSQL']
        },
        {
          role: 'AI Engineer',
          company: 'PredictorBot (Master Thesis, in partnership with Code & Scale)',
          period: '2025 – 2026',
          location: 'ENI Fianarantsoa',
          description: 'Near real-time MLOps pipeline for currency exchange rate prediction: collection every 2 min (Twelve Data), 46 features (lags, returns, volatility, market sessions), hourly XGBoost retraining, 27 runs tracked with automatic promotion of the best model in MLflow, FastAPI inference API, real-time web dashboard.',
          tech: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'Docker', 'APScheduler']
        }
      ]
    },
    projects: {
      title: 'Case studies',
      subtitle: 'Systems that run, with context, architecture and concrete results.',
      viewAll: 'View all case studies',
      viewDetails: 'View case study',
      context: 'Context',
      challenge: 'Problem',
      solution: 'Solution',
      architecture: 'Architecture',
      results: 'Results',
      tech: 'Stack',
      links: 'Links',
      demoUnavailable: 'Live demo expired — screenshots below',
      status: {
        live: 'Live',
        completed: 'Completed',
        'in-progress': 'In progress'
      },
      back: 'Back to case studies',
      comingSoon: {
        title: 'Dedicated RAG/LLM project — Coming soon',
        text: 'A pure RAG case study (document assistant) is in preparation. Meanwhile, the "AI Photo Album" case study shows my hands-on use of LLMs in production.'
      }
    },
    skills: {
      title: 'Skills',
      subtitle: 'A stack oriented toward MLOps, LLM/RAG and software development.',
      categories: [
        {
          name: 'AI & MLOps',
          items: ['LLM & RAG', 'MLOps & productionization', 'MLflow, XGBoost, scikit-learn', 'Databricks', 'OCR & Speech-to-Text', 'Embeddings / pgvector']
        },
        {
          name: 'Development',
          items: ['Python / FastAPI', 'PHP / Laravel', 'JavaScript / Vue.js', 'WebSockets', 'OpenAPI / Swagger']
        },
        {
          name: 'Data & Infra',
          items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Docker', 'CI/CD (GitHub Actions, Jenkins)']
        },
        {
          name: 'Quality & Methods',
          items: ['Clean Code', 'SOLID', 'Unit & integration tests', 'Technical documentation', 'Design Patterns']
        }
      ]
    },
    contact: {
      title: 'Let’s discuss your project',
      subtitle: 'SME, startup or technical peer — I’m glad to talk, in English or French.',
      email: 'contact@andrianantenaina-angelo.site',
      phone: '+261 34 59 92 047',
      location: 'Fianarantsoa, Madagascar (UTC+3) · Remote-friendly',
      cta: 'Send a message',
      available: 'Available for freelance missions and remote roles.',
      booking: 'Book a 30-min call',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email'
      }
    },
    aboutPage: {
      metaTitle: 'About — Angelo ANDRIANANTENAINA, entrepreneur & AI engineer',
      metaDescription: 'Who is Angelo ANDRIANANTENAINA? Entrepreneur and AI engineer based in Fianarantsoa, Madagascar, co-founder of GoalPay. Background, expertise and links to all his profiles.',
      role: 'Entrepreneur & AI Engineer · Fianarantsoa, Madagascar',
      answerLabel: 'Who is Angelo ANDRIANANTENAINA?',
      answer: 'Angelo ANDRIANANTENAINA is an entrepreneur and artificial intelligence engineer based in Fianarantsoa, Madagascar. Co-founder of the FinTech GoalPay and holder of a Master’s degree in Artificial Intelligence from ENI Fianarantsoa, he builds n8n automations, AI agents, data products and SaaS for SMEs, startups and agencies, as a freelancer or embedded in their teams.',
      disambiguation: 'This page is about the AI engineer and co-founder of GoalPay, not to be confused with the Malagasy footballer of the same name.',
      factsTitle: 'At a glance',
      facts: [
        { label: 'Role', value: 'Entrepreneur & AI Engineer' },
        { label: 'Company', value: 'Co-founder of GoalPay (FinTech, Madagascar)' },
        { label: 'Expertise', value: 'n8n automation, AI agents, data and MLOps, SaaS development' },
        { label: 'Education', value: 'Master’s degree in Artificial Intelligence, ENI Fianarantsoa' },
        { label: 'Based in', value: 'Fianarantsoa, Madagascar (UTC+3), remote' },
        { label: 'Languages', value: 'French, English, Malagasy' },
        { label: 'Engagement', value: 'Freelance, long-term contract, or embedded in a team or agency' }
      ],
      storyTitle: 'My story',
      timelineTitle: 'Background',
      profilesTitle: 'Find me online',
      profilesIntro: 'My official profiles. Each one links back to this site.',
      servicesTitle: 'What I do for you',
      contactTitle: 'Work together',
      contactText: 'A project, a contract or a team collaboration? Book a 30-minute call or send me an email.'
    },
    resources: {
      title: 'Resources',
      hubMetaTitle: 'Resources: n8n automation, AI agents and data for SMEs | Angelo',
      hubTitle: 'Resources: automation, AI agents and data for SMEs',
      hubIntro: 'Straight answers to the questions business owners ask me before a project: pricing, tool choices, return on investment, method.',
      readMore: 'Read the article',
      allArticles: 'Read my articles',
      published: 'Published on',
      updated: 'Updated on',
      answerLabel: 'In short',
      faqTitle: 'Frequently asked questions',
      relatedService: 'Related service',
      byline: 'By'
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'What people usually ask before starting a project.',
      items: [
        {
          q: 'How does a project typically run?',
          a: 'A free 30-minute initial call to understand your need, followed by clear scoping (scope, deliverables, timeline), then iterative delivery with regular check-ins and documentation at the end.'
        },
        {
          q: 'What are your typical timelines?',
          a: 'From 1 to 10 weeks depending on the service: 1 to 3 weeks for an n8n automation or a website, 2 to 5 weeks for an AI agent, 3 to 6 weeks for a predictive model in production, 4 to 10 weeks for a SaaS MVP.'
        },
        {
          q: 'How is pricing determined?',
          a: 'Each service shows an indicative range: for example €800 to €2,500 for an n8n automation, €1,500 to €4,000 for an AI agent, €3,000 to €8,000 for a SaaS MVP. The final quote is agreed in writing after the first call, based on scope.'
        },
        {
          q: 'Do you work remotely with international clients?',
          a: 'Yes. I’m based in Fianarantsoa, Madagascar (UTC+3, aligned with Europe), and I work remotely in English and French.'
        },
        {
          q: 'What technologies do you use?',
          a: 'n8n for automation, Python, FastAPI, Laravel, Vue.js and PostgreSQL for development, MLflow, XGBoost and scikit-learn for data, and the main LLMs (GPT, Claude, open-source models) for AI agents.'
        },
        {
          q: 'Why hire a freelance AI developer based in Madagascar?',
          a: 'You get a time zone close to Europe (UTC+3, 1 to 2 hours apart), rates below European ones, and production-grade standards: GoalPay, which I co-founded, has processed over 100 million Ariary.'
        },
        {
          q: 'Do you build n8n automations and AI agents?',
          a: 'Yes, it is my core work: n8n workflows connecting your tools (forms, CRM, calendar, email, invoicing) and AI agents that qualify leads, book meetings, follow up and answer customers, with human approval for sensitive actions.'
        },
        {
          q: 'Do you offer a free initial call?',
          a: 'Yes, you can book a 30-minute slot directly in my calendar (Contact section), no commitment required.'
        }
      ]
    },
    footer: {
      rights: '© 2026 Angelo ANDRIANANTENAINA. All rights reserved.',
      built: 'Built with intention · Vue 3 + Vite',
      servicesTitle: 'Services',
      projectsTitle: 'Case studies',
      moreTitle: 'Learn more',
      profilesTitle: 'Profiles'
    },
    common: {
      light: 'Light',
      dark: 'Dark',
      lang: 'Language'
    }
  }
} as const

export type Content = (typeof content)[Lang]
