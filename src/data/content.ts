export type Lang = 'fr' | 'en'

export const content = {
  fr: {
    meta: {
      title: 'ANDRIANANTENAINA Angelo — Ingénieur IA & Backend | Co-fondateur GoalPay',
      description: 'Ingénieur IA & Backend Engineer. Je conçois des systèmes robustes qui intègrent l’intelligence artificielle dans des produits réels. Co-fondateur de GoalPay. Laravel, FastAPI, MLOps, LLM, RAG.',
      keywords: 'ANDRIANANTENAINA Angelo, Ingénieur IA, Backend Engineer, Laravel, FastAPI, GoalPay, MLOps, RAG, Madagascar, remote'
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact'
    },
    hero: {
      badge: 'Disponible pour missions remote & collaborations',
      title: 'J’aide les équipes à transformer des idées en systèmes backend + IA fiables et productifs.',
      subtitle: 'Ingénieur IA & Backend · Co-fondateur de GoalPay · Madagascar → International',
      ctaPrimary: 'Voir mes projets',
      ctaSecondary: 'Me contacter',
      stats: [
        { value: '40M+', label: 'Ariary traités via GoalPay' },
        { value: '2 500+', label: 'Transactions sécurisées' },
        { value: '68,5 %', label: 'Précision directionnelle (ML)' }
      ]
    },
    about: {
      title: 'À propos',
      subtitle: 'Un ingénieur qui construit, mesure et livre.',
      body: [
        'Je suis ANDRIANANTENAINA Angelo, ingénieur logiciel spécialisé en backend et intégration d’intelligence artificielle. Je travaille sur l’ensemble du cycle : conception d’API, architecture, industrialisation de modèles IA et mise en production.',
        'En tant que co-fondateur de GoalPay, j’ai conçu et développé une plateforme FinTech qui a traité plus de 40 millions d’Ariary en quelques mois. Cette expérience m’a appris à coder pour la production : sécurité, performance, observabilité et maintenabilité.',
        'Mon Master en Intelligence Artificielle (Gouvernance & Ingénierie des Données) m’a donné la double compétence : comprendre les modèles et les rendre utilisables dans des produits réels (RAG, STT, OCR, MLOps, LLM).',
        'Ce que j’apprécie le plus : concevoir des systèmes robustes, évolutifs et orientés produit pour des environnements internationaux.'
      ],
      values: [
        { title: 'Impact mesurable', text: 'Chaque fonctionnalité doit prouver sa valeur (métriques, temps, argent).' },
        { title: 'Clarté & documentation', text: 'Code et architecture lisibles, tests, OpenAPI, README utiles.' },
        { title: 'Autonomie & responsabilité', text: 'Je prends en charge un problème de bout en bout et je livre.' }
      ]
    },
    experience: {
      title: 'Expérience',
      subtitle: 'Des produits en production, pas seulement des démos.',
      items: [
        {
          role: 'Co-fondateur & Backend Engineer',
          company: 'GoalPay (FinTech SaaS)',
          period: '2025 – Présent',
          location: 'Madagascar',
          description: 'Conception et développement de l’architecture backend d’une plateforme de paiements numériques. Modules paiement, e-wallet, transactions, facturation, notifications, SMS, webhooks, WebSockets temps réel. Intégration mobile money malgache. 2 500+ transactions · 40M+ Ar.',
          tech: ['Laravel', 'PostgreSQL', 'WebSockets', 'OpenAPI', 'PHPUnit', 'Queues']
        },
        {
          role: 'Backend Developer Intern',
          company: 'Code & Scale',
          period: 'Sept. 2025 – Déc. 2025',
          location: 'Remote / Madagascar',
          description: 'Évolution d’une plateforme IA interne (Python, FastAPI, PostgreSQL). Intégration RAG, OCR, embeddings, pgvector. Optimisation des traitements de fichiers (parallèle + batch). Tests et revues techniques.',
          tech: ['FastAPI', 'pgvector', 'Docker', 'Poetry', 'RAG', 'OCR']
        },
        {
          role: 'AI Engineer — Mémoire de Master',
          company: 'PredictorBot',
          period: '2025 – 2026',
          location: 'ENI Fianarantsoa',
          description: 'Pipeline MLOps complète pour la prédiction des cours de devise. Collecte, prétraitement, entraînement, versioning, déploiement, API d’inférence. Modèle XGBoost à 68,5 % de précision directionnelle. MLflow + Docker + CI/CD.',
          tech: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'Docker', 'Jenkins']
        }
      ]
    },
    projects: {
      title: 'Projets sélectionnés',
      subtitle: 'Des systèmes qui tournent, avec des résultats concrets.',
      viewAll: 'Voir tous les projets',
      viewDetails: 'Voir le détail',
      challenge: 'Défi',
      solution: 'Solution',
      results: 'Résultats',
      tech: 'Technologies',
      status: {
        live: 'En production',
        completed: 'Terminé',
        'in-progress': 'En cours'
      },
      back: 'Retour aux projets'
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Une stack orientée production et intelligence artificielle.',
      categories: [
        {
          name: 'Backend',
          items: ['PHP / Laravel', 'Python / FastAPI', 'Node.js (Express)', 'REST APIs', 'WebSockets', 'OpenAPI / Swagger']
        },
        {
          name: 'Intelligence Artificielle',
          items: ['LLM & RAG', 'MLOps', 'Scikit-learn / XGBoost', 'OCR', 'Speech-to-Text', 'Embeddings / pgvector']
        },
        {
          name: 'Données & Infra',
          items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Docker', 'CI/CD (GitHub Actions, Jenkins)']
        },
        {
          name: 'Qualité & Méthodes',
          items: ['Clean Code', 'SOLID', 'Tests unitaires & intégration', 'Documentation technique', 'Design Patterns']
        }
      ]
    },
    contact: {
      title: 'Construisons quelque chose d’utile ensemble',
      subtitle: 'Que vous soyez recruteur, fondateur ou collègue technique, je serai ravi d’échanger.',
      email: 'a.angelo.mada@gmail.com',
      phone: '+261 34 59 92 047',
      location: 'Madagascar (GMT+3) · Remote-friendly',
      cta: 'Envoyer un message',
      available: 'Ouvert aux opportunités remote et aux collaborations produits.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email'
      }
    },
    footer: {
      rights: '© 2026 ANDRIANANTENAINA Angelo. Tous droits réservés.',
      built: 'Conçu avec intention · Vue 3 + Vite'
    },
    common: {
      light: 'Clair',
      dark: 'Sombre',
      lang: 'Langue'
    }
  },
  en: {
    meta: {
      title: 'ANDRIANANTENAINA Angelo — AI & Backend Engineer | Co-founder GoalPay',
      description: 'AI & Backend Engineer. I design robust systems that bring artificial intelligence into real products. Co-founder of GoalPay. Laravel, FastAPI, MLOps, LLM, RAG.',
      keywords: 'ANDRIANANTENAINA Angelo, AI Engineer, Backend Engineer, Laravel, FastAPI, GoalPay, MLOps, RAG, Madagascar, remote'
    },
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      badge: 'Open to remote missions & collaborations',
      title: 'I help teams turn ideas into reliable, productive backend + AI systems.',
      subtitle: 'AI & Backend Engineer · Co-founder of GoalPay · Madagascar → International',
      ctaPrimary: 'View my projects',
      ctaSecondary: 'Get in touch',
      stats: [
        { value: '40M+', label: 'Ariary processed via GoalPay' },
        { value: '2,500+', label: 'Secured transactions' },
        { value: '68.5%', label: 'Directional accuracy (ML)' }
      ]
    },
    about: {
      title: 'About',
      subtitle: 'An engineer who builds, measures and ships.',
      body: [
        'I am ANDRIANANTENAINA Angelo, a software engineer specialized in backend development and AI integration. I work across the full lifecycle: API design, architecture, industrializing AI models and shipping to production.',
        'As co-founder of GoalPay, I designed and built a FinTech platform that processed over 40 million Ariary in a few months. This experience taught me to code for production: security, performance, observability and maintainability.',
        'My Master’s in Artificial Intelligence (Data Governance & Engineering) gave me the dual skillset: understanding models and making them usable in real products (RAG, STT, OCR, MLOps, LLM).',
        'What I enjoy most: designing robust, scalable, product-oriented systems for international environments.'
      ],
      values: [
        { title: 'Measurable impact', text: 'Every feature must prove its value (metrics, time, money).' },
        { title: 'Clarity & documentation', text: 'Readable code and architecture, tests, OpenAPI, useful READMEs.' },
        { title: 'Ownership', text: 'I take a problem end-to-end and deliver.' }
      ]
    },
    experience: {
      title: 'Experience',
      subtitle: 'Products in production, not just demos.',
      items: [
        {
          role: 'Co-founder & Backend Engineer',
          company: 'GoalPay (FinTech SaaS)',
          period: '2025 – Present',
          location: 'Madagascar',
          description: 'Designed and developed the backend architecture of a digital payments platform. Payment modules, e-wallet, transactions, billing, notifications, SMS, webhooks, real-time WebSockets. Malagasy mobile money integration. 2,500+ transactions · 40M+ Ar.',
          tech: ['Laravel', 'PostgreSQL', 'WebSockets', 'OpenAPI', 'PHPUnit', 'Queues']
        },
        {
          role: 'Backend Developer Intern',
          company: 'Code & Scale',
          period: 'Sept. 2025 – Dec. 2025',
          location: 'Remote / Madagascar',
          description: 'Evolved an internal AI platform (Python, FastAPI, PostgreSQL). Integrated RAG, OCR, embeddings, pgvector. Optimized file processing (parallel + batch). Tests and technical reviews.',
          tech: ['FastAPI', 'pgvector', 'Docker', 'Poetry', 'RAG', 'OCR']
        },
        {
          role: 'AI Engineer — Master’s Thesis',
          company: 'PredictorBot',
          period: '2025 – 2026',
          location: 'ENI Fianarantsoa',
          description: 'Full MLOps pipeline for currency exchange rate prediction. Collection, preprocessing, training, versioning, deployment, inference API. XGBoost model at 68.5% directional accuracy. MLflow + Docker + CI/CD.',
          tech: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'Docker', 'Jenkins']
        }
      ]
    },
    projects: {
      title: 'Selected projects',
      subtitle: 'Systems that run, with concrete results.',
      viewAll: 'View all projects',
      viewDetails: 'View details',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      tech: 'Technologies',
      status: {
        live: 'Live',
        completed: 'Completed',
        'in-progress': 'In progress'
      },
      back: 'Back to projects'
    },
    skills: {
      title: 'Skills',
      subtitle: 'A stack oriented toward production and artificial intelligence.',
      categories: [
        {
          name: 'Backend',
          items: ['PHP / Laravel', 'Python / FastAPI', 'Node.js (Express)', 'REST APIs', 'WebSockets', 'OpenAPI / Swagger']
        },
        {
          name: 'Artificial Intelligence',
          items: ['LLM & RAG', 'MLOps', 'Scikit-learn / XGBoost', 'OCR', 'Speech-to-Text', 'Embeddings / pgvector']
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
      title: 'Let’s build something useful together',
      subtitle: 'Whether you are a recruiter, founder or technical peer, I’d be glad to talk.',
      email: 'a.angelo.mada@gmail.com',
      phone: '+261 34 59 92 047',
      location: 'Madagascar (GMT+3) · Remote-friendly',
      cta: 'Send a message',
      available: 'Open to remote opportunities and product collaborations.',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email'
      }
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

export type Content = typeof content.fr
