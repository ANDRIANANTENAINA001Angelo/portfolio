export type Lang = 'fr' | 'en'

export const content = {
  fr: {
    meta: {
      title: 'ANDRIANANTENAINA Angelo — AI Engineer · LLM, RAG & MLOps',
      description: 'Je transforme vos données et l’IA en produits qui tournent en production : assistants IA sur vos documents, modèles prédictifs déployés, pipelines de données automatisés. Co-fondateur de GoalPay.',
      keywords: 'ANDRIANANTENAINA Angelo, AI Engineer, LLM, RAG, MLOps, Laravel, FastAPI, GoalPay, FinTech, Madagascar, remote, freelance IA'
    },
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Études de cas',
      skills: 'Compétences',
      contact: 'Contact'
    },
    hero: {
      badge: 'Disponible en remote · UTC+3',
      title: 'Je transforme vos données et l’IA en produits qui tournent en production.',
      subtitle: 'Assistants IA sur vos documents, modèles prédictifs déployés, pipelines de données automatisés. AI Engineer · LLM, RAG & MLOps · Co-fondateur de GoalPay.',
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
      subtitle: 'Trois façons concrètes de mettre l’IA et vos données au travail.',
      cta: 'En discuter',
      items: [
        {
          title: 'Assistant IA sur vos documents (RAG)',
          problem: 'Votre équipe perd du temps à chercher l’information dans vos documents, votre support client répond toujours aux mêmes questions.',
          delivery: 'Un assistant IA branché sur votre base de connaissances (support client ou documentation interne), avec sources citées et supervision humaine.',
          timeline: '2 à 4 semaines selon le volume de documents',
          exampleId: 'ai-photo-album'
        },
        {
          title: 'Mise en production de modèles ML (MLOps)',
          problem: 'Votre modèle fonctionne dans un notebook mais personne ne peut l’utiliser, le mesurer dans le temps ni le réentraîner proprement.',
          delivery: 'Passage du notebook à une API surveillée : tracking des expériences, registre de modèles, réentraînement automatisé, monitoring des performances.',
          timeline: '3 à 6 semaines selon la complexité du pipeline',
          exampleId: 'predictor-bot'
        },
        {
          title: 'Automatisation et pipelines de données',
          problem: 'Vos données sont dispersées, collectées à la main, et personne n’a une vue fiable et à jour de votre activité.',
          delivery: 'Pipelines de collecte et nettoyage automatisés, tableaux de bord clairs pour suivre vos indicateurs clés sans effort manuel.',
          timeline: '1 à 3 semaines selon les sources de données',
          exampleId: 'goalpay'
        }
      ]
    },
    about: {
      title: 'À propos',
      subtitle: 'Un AI Engineer qui livre en production.',
      body: [
        'Je suis ANDRIANANTENAINA Angelo, AI Engineer basé à Fianarantsoa, Madagascar (UTC+3, aligné avec l’Europe). Je conçois des produits qui combinent développement logiciel et intelligence artificielle, et je les mets réellement en production.',
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
          a: 'Entre 1 et 6 semaines selon le service : 1 à 3 semaines pour l’automatisation de pipelines, 2 à 4 semaines pour un assistant IA (RAG), 3 à 6 semaines pour la mise en production d’un modèle (MLOps).'
        },
        {
          q: 'Comment le prix est-il fixé ?',
          a: 'Sur devis, après le premier échange, selon le périmètre et la complexité du projet. Pas de tarif générique affiché, car chaque mission est différente.'
        },
        {
          q: 'Travaillez-vous avec des clients à l’international, en remote ?',
          a: 'Oui. Je suis basé à Fianarantsoa, Madagascar (UTC+3, aligné avec l’Europe), et je travaille en remote en français et en anglais.'
        },
        {
          q: 'Quelles technologies utilisez-vous ?',
          a: 'Python, FastAPI, Laravel, PostgreSQL, MLflow, XGBoost, scikit-learn, Docker, et les outils LLM/RAG selon le projet.'
        },
        {
          q: 'Proposez-vous un premier échange gratuit ?',
          a: 'Oui, vous pouvez réserver un créneau de 30 minutes directement dans mon agenda (section Contact), sans engagement.'
        }
      ]
    },
    footer: {
      rights: '© 2026 ANDRIANANTENAINA Angelo. Tous droits réservés.',
      built: 'Construit avec intention · Vue 3 + Vite'
    },
    common: {
      light: 'Clair',
      dark: 'Sombre',
      lang: 'Langue'
    }
  },

  en: {
    meta: {
      title: 'ANDRIANANTENAINA Angelo — AI Engineer · LLM, RAG & MLOps',
      description: 'I turn your data and AI into products that run in production: document AI assistants, deployed predictive models, automated data pipelines. Co-founder of GoalPay.',
      keywords: 'ANDRIANANTENAINA Angelo, AI Engineer, LLM, RAG, MLOps, Laravel, FastAPI, GoalPay, FinTech, Madagascar, remote, freelance AI'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      experience: 'Experience',
      projects: 'Case studies',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      badge: 'Available remote · UTC+3',
      title: 'I turn your data and AI into products that run in production.',
      subtitle: 'Document AI assistants, deployed predictive models, automated data pipelines. AI Engineer · LLM, RAG & MLOps · Co-founder of GoalPay.',
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
      subtitle: 'Three concrete ways to put AI and your data to work.',
      cta: 'Let’s talk',
      items: [
        {
          title: 'Document AI assistant (RAG)',
          problem: 'Your team wastes time searching for information across your documents, and your support team keeps answering the same questions.',
          delivery: 'An AI assistant connected to your knowledge base (customer support or internal docs), with cited sources and human oversight.',
          timeline: '2 to 4 weeks depending on document volume',
          exampleId: 'ai-photo-album'
        },
        {
          title: 'ML model productionization (MLOps)',
          problem: 'Your model works in a notebook, but no one can use it, track it over time, or retrain it properly.',
          delivery: 'From notebook to a monitored API: experiment tracking, model registry, automated retraining, performance monitoring.',
          timeline: '3 to 6 weeks depending on pipeline complexity',
          exampleId: 'predictor-bot'
        },
        {
          title: 'Automation and data pipelines',
          problem: 'Your data is scattered, collected by hand, and no one has a reliable, up-to-date view of your business.',
          delivery: 'Automated collection and cleaning pipelines, clear dashboards to track your key metrics without manual effort.',
          timeline: '1 to 3 weeks depending on data sources',
          exampleId: 'goalpay'
        }
      ]
    },
    about: {
      title: 'About',
      subtitle: 'An AI Engineer who ships to production.',
      body: [
        'I am ANDRIANANTENAINA Angelo, an AI Engineer based in Fianarantsoa, Madagascar (UTC+3, aligned with Europe). I design products that combine software engineering and artificial intelligence, and I actually ship them to production.',
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
          a: 'Between 1 and 6 weeks depending on the service: 1 to 3 weeks for data pipeline automation, 2 to 4 weeks for an AI assistant (RAG), 3 to 6 weeks for ML model productionization (MLOps).'
        },
        {
          q: 'How is pricing determined?',
          a: 'On a quote basis, after the first call, depending on scope and project complexity. No generic rate card, since every project is different.'
        },
        {
          q: 'Do you work remotely with international clients?',
          a: 'Yes. I’m based in Fianarantsoa, Madagascar (UTC+3, aligned with Europe), and I work remotely in English and French.'
        },
        {
          q: 'What technologies do you use?',
          a: 'Python, FastAPI, Laravel, PostgreSQL, MLflow, XGBoost, scikit-learn, Docker, and LLM/RAG tooling depending on the project.'
        },
        {
          q: 'Do you offer a free initial call?',
          a: 'Yes, you can book a 30-minute slot directly in my calendar (Contact section), no commitment required.'
        }
      ]
    },
    footer: {
      rights: '© 2026 ANDRIANANTENAINA Angelo. All rights reserved.',
      built: 'Built with intention · Vue 3 + Vite'
    },
    common: {
      light: 'Light',
      dark: 'Dark',
      lang: 'Language'
    }
  }
} as const

export type Content = (typeof content)[Lang]
