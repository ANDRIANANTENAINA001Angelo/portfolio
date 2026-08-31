export type Lang = 'fr' | 'en'

export const content = {
  fr: {
    meta: {
      title: 'ANDRIANANTENAINA Angelo — Software Engineer | Fullstack & AI | Co-fondateur GoalPay',
      description: 'Software Engineer (Fullstack & AI). Je conçois et développe des applications web robustes et des solutions d’intelligence artificielle en production. Co-fondateur de GoalPay (4 500+ transactions, 100M+ Ar). Laravel, Vue.js, FastAPI, MLOps, RAG.',
      keywords: 'ANDRIANANTENAINA Angelo, Software Engineer, Fullstack, AI Engineer, Laravel, Vue.js, FastAPI, GoalPay, MLOps, RAG, FinTech, Madagascar, remote'
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
      badge: 'Disponible pour postes et missions remote',
      title: 'J’aide les équipes à construire des applications web et des solutions IA fiables, mesurables et prêtes pour la production.',
      subtitle: 'Software Engineer · Fullstack & AI · Co-fondateur de GoalPay · Madagascar → Remote',
      ctaPrimary: 'Voir mes projets',
      ctaSecondary: 'Me contacter',
      stats: [
        { value: '100M+', label: 'Ariary traités via GoalPay' },
        { value: '4 500+', label: 'Transactions sécurisées' },
        { value: '30+', label: 'Projets réalisés' }
      ]
    },
    about: {
      title: 'À propos',
      subtitle: 'Un ingénieur logiciel qui livre en production.',
      body: [
        'Je suis ANDRIANANTENAINA Angelo, ingénieur en génie logiciel. Je conçois et développe des applications web (frontend + backend) et j’intègre des solutions d’intelligence artificielle dans des produits réels.',
        'En tant que co-fondateur de GoalPay, j’ai conçu et développé une plateforme FinTech qui a déjà traité plus de 100 millions d’Ariary et 4 500+ transactions. Cette expérience m’a appris à coder pour le réel : sécurité, performance, observabilité et continuité de service.',
        'Mon Master en Intelligence Artificielle (Gouvernance et Ingénierie des Données) me donne une double compétence : comprendre les modèles et les rendre utilisables dans des produits (RAG, OCR, STT, MLOps, LLM).',
        'Je me forme activement au frontend moderne (Vue.js, Tailwind) pour élargir mon périmètre Fullstack. Ce que je cherche actuellement : un poste stable (local ou remote) où je peux apporter rigueur technique, réactivité et impact mesurable.'
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
          role: 'Ingénieur IA',
          company: 'PredictorBot (Mémoire Master)',
          period: '2025 – 2026',
          location: 'ENI Fianarantsoa',
          description: 'Pipeline MLOps complet pour la prédiction des cours de devise. Collecte, prétraitement, entraînement, versioning, déploiement et API d’inférence. Modèle XGBoost à 68,5 % de précision directionnelle.',
          tech: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'Docker', 'Jenkins']
        }
      ]
    },
    projects: {
      title: 'Projets sélectionnés',
      subtitle: 'Des systèmes qui tournent, avec des résultats concrets.',
      viewAll: 'Voir tous les projets',
      viewDetails: 'Voir les détails',
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
      subtitle: 'Une stack orientée développement logiciel, production et intelligence artificielle.',
      categories: [
        {
          name: 'Développement',
          items: ['HTML / CSS / Tailwind', 'JavaScript / Vue.js', 'PHP / Laravel', 'Python / FastAPI', 'Node.js (Express)', 'WebSockets', 'OpenAPI / Swagger']
        },
        {
          name: 'Intelligence Artificielle',
          items: ['LLM & RAG', 'ML / DL & MLOps', 'Agent & Multi-Agent', 'Scikit-learn & TensorFlow', 'OCR & Speech-to-Text', 'Embeddings / pgvector']
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
      title: 'Construisons quelque chose d’utile ensemble',
      subtitle: 'Recruteur, fondateur ou pair technique — je suis ouvert à l’échange.',
      email: 'a.angelo.mada@gmail.com',
      phone: '+261 34 59 92 047',
      location: 'Madagascar (GMT+3) · Remote-friendly',
      cta: 'Envoyer un message',
      available: 'Ouvert aux opportunités Software Engineer / Fullstack / AI (CDI local ou remote).',
      links: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email'
      }
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
      title: 'ANDRIANANTENAINA Angelo — Software Engineer | Fullstack & AI | Co-founder of GoalPay',
      description: 'Software Engineer (Fullstack & AI). I design and build robust web applications and production AI solutions. Co-founder of GoalPay (4,500+ transactions, 100M+ Ar). Laravel, Vue.js, FastAPI, MLOps, RAG.',
      keywords: 'ANDRIANANTENAINA Angelo, Software Engineer, Fullstack, AI Engineer, Laravel, Vue.js, FastAPI, GoalPay, MLOps, RAG, FinTech, Madagascar, remote'
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
      badge: 'Open to roles and remote missions',
      title: 'I help teams build reliable, measurable web applications and AI solutions ready for production.',
      subtitle: 'Software Engineer · Fullstack & AI · Co-founder of GoalPay · Madagascar → Remote',
      ctaPrimary: 'View my projects',
      ctaSecondary: 'Contact me',
      stats: [
        { value: '100M+', label: 'Ariary processed via GoalPay' },
        { value: '4,500+', label: 'Secure transactions' },
        { value: '30+', label: 'Projects delivered' }
      ]
    },
    about: {
      title: 'About',
      subtitle: 'A software engineer who ships to production.',
      body: [
        'I am ANDRIANANTENAINA Angelo, a software engineer. I design and develop web applications (frontend + backend) and integrate artificial intelligence solutions into real products.',
        'As co-founder of GoalPay, I designed and built a FinTech platform that has already processed more than 100 million Ariary and 4,500+ transactions. This experience taught me to code for the real world: security, performance, observability and service continuity.',
        'My Master’s degree in Artificial Intelligence (Data Governance & Engineering) gives me dual competence: understanding models and making them usable in real products (RAG, OCR, STT, MLOps, LLM).',
        'I am actively improving my frontend skills (Vue.js, Tailwind) to expand my Fullstack scope. What I am currently looking for: a stable role (local or remote) where I can bring technical rigor, reactivity and measurable impact.'
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
          company: 'PredictorBot (Master Thesis)',
          period: '2025 – 2026',
          location: 'ENI Fianarantsoa',
          description: 'Full MLOps pipeline for real-time currency exchange rate prediction. Collection, preprocessing, training, versioning, deployment and inference API. XGBoost model at 68.5% directional accuracy.',
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
      subtitle: 'A stack oriented toward software development, production and artificial intelligence.',
      categories: [
        {
          name: 'Development',
          items: ['HTML / CSS / Tailwind', 'JavaScript / Vue.js', 'PHP / Laravel', 'Python / FastAPI', 'Node.js (Express)', 'WebSockets', 'OpenAPI / Swagger']
        },
        {
          name: 'Artificial Intelligence',
          items: ['LLM & RAG', 'ML / DL & MLOps', 'Agent & Multi-Agent', 'Scikit-learn & TensorFlow', 'OCR & Speech-to-Text', 'Embeddings / pgvector']
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
      available: 'Open to Software Engineer / Fullstack / AI opportunities (local permanent or remote).',
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