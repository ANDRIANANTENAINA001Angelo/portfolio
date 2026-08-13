export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  id: string
  slug: string
  /** Used in URL: /projets/{slug}/{tech-slug} */
  techSlug: string
  title: { fr: string; en: string }
  shortDescription: { fr: string; en: string }
  longDescription: { fr: string; en: string }
  challenge: { fr: string; en: string }
  solution: { fr: string; en: string }
  results: { fr: string; en: string }
  technologies: string[]
  tags: string[]
  images: ProjectImage[]
  github?: string
  demo?: string
  featured: boolean
  year: string
  status: 'completed' | 'in-progress' | 'live'
  metrics?: { label: { fr: string; en: string }; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'goalpay',
    slug: 'goalpay',
    techSlug: 'laravel-postgresql-websockets',
    title: {
      fr: 'GoalPay — Plateforme FinTech',
      en: 'GoalPay — FinTech Platform'
    },
    shortDescription: {
      fr: 'SaaS de paiements numériques automatisés et sécurisés. Co-fondé et développé de A à Z.',
      en: 'Automated & secure digital payments SaaS. Co-founded and built from the ground up.'
    },
    longDescription: {
      fr: 'GoalPay est une plateforme FinTech dédiée à l’automatisation et à la sécurisation des paiements numériques à Madagascar. En tant que co-fondateur et Backend Engineer, j’ai conçu l’architecture complète, les modules de paiement, le portefeuille électronique, les webhooks et la communication temps réel.',
      en: 'GoalPay is a FinTech platform dedicated to automating and securing digital payments in Madagascar. As co-founder and Backend Engineer, I designed the complete architecture, payment modules, e-wallet, webhooks and real-time communication.'
    },
    challenge: {
      fr: 'Construire un système de paiement fiable, sécurisé et scalable capable d’intégrer les opérateurs de mobile money malgaches tout en garantissant la traçabilité et la conformité.',
      en: 'Build a reliable, secure and scalable payment system capable of integrating Malagasy mobile money operators while ensuring traceability and compliance.'
    },
    solution: {
      fr: 'Architecture Laravel robuste, PostgreSQL, WebSockets (Laravel Reverb), files d’attente, tâches planifiées, authentification & rôles, documentation OpenAPI, et mécanismes cryptographiques.',
      en: 'Robust Laravel architecture, PostgreSQL, WebSockets (Laravel Reverb), queues, scheduled tasks, auth & roles, OpenAPI documentation, and cryptographic mechanisms.'
    },
    results: {
      fr: '2 500+ transactions traitées pour un volume de 40M+ Ariary en 4,5 mois. Système en production avec suivi temps réel et automatisation des flux entrants/sortants.',
      en: '2,500+ transactions processed for a volume of 40M+ Ariary in 4.5 months. Production system with real-time tracking and automated incoming/outgoing flows.'
    },
    technologies: ['Laravel', 'PostgreSQL', 'WebSockets', 'REST APIs', 'Swagger/OpenAPI', 'PHPUnit', 'Redis', 'Queues'],
    tags: ['fintech', 'backend', 'saas'],
    images: [
      { src: '/images/projects/goalpay-1.jpg', alt: 'GoalPay dashboard' },
      { src: '/images/projects/goalpay-2.jpg', alt: 'GoalPay transactions' }
    ],
    github: undefined,
    demo: undefined,
    featured: true,
    year: '2025 – Present',
    status: 'live',
    metrics: [
      { label: { fr: 'Transactions', en: 'Transactions' }, value: '2 500+' },
      { label: { fr: 'Volume traité', en: 'Volume processed' }, value: '40M+ Ar' },
      { label: { fr: 'Temps de lancement', en: 'Time to launch' }, value: '4,5 mois' }
    ]
  },
  {
    id: 'predictorbot',
    slug: 'predictorbot',
    techSlug: 'fastapi-mlflow-xgboost-mlops',
    title: {
      fr: 'PredictorBot — Pipeline MLOps',
      en: 'PredictorBot — MLOps Pipeline'
    },
    shortDescription: {
      fr: 'Plateforme MLOps complète pour la prédiction des cours de devise (mémoire de Master).',
      en: 'Full MLOps platform for currency exchange rate prediction (Master’s thesis).'
    },
    longDescription: {
      fr: 'Conception et réalisation d’une pipeline MLOps de bout en bout pour la prédiction des taux de change. De la collecte de données à l’inférence en production, en passant par le versioning des modèles et le monitoring.',
      en: 'End-to-end MLOps pipeline for exchange rate prediction. From data collection to production inference, including model versioning and monitoring.'
    },
    challenge: {
      fr: 'Industrialiser un modèle de Machine Learning de prédiction de devises avec reproductibilité, traçabilité et déploiement automatisé.',
      en: 'Industrialize a currency prediction Machine Learning model with reproducibility, traceability and automated deployment.'
    },
    solution: {
      fr: 'FastAPI + Scikit-learn / XGBoost + MLflow + PostgreSQL + Docker + CI/CD (Jenkins). Collecte automatisée, entraînement, versioning, API d’inférence et visualisation des métriques.',
      en: 'FastAPI + Scikit-learn / XGBoost + MLflow + PostgreSQL + Docker + CI/CD (Jenkins). Automated collection, training, versioning, inference API and metric visualization.'
    },
    results: {
      fr: 'Modèle XGBoost atteignant 68,5 % de précision directionnelle (hausse/baisse) sur les données de test. Pipeline entièrement reproductible et monitorée via MLflow.',
      en: 'XGBoost model achieving 68.5% directional accuracy (up/down) on test data. Fully reproducible and monitored pipeline via MLflow.'
    },
    technologies: ['Python', 'FastAPI', 'XGBoost', 'Scikit-learn', 'MLflow', 'PostgreSQL', 'Docker', 'Jenkins', 'CI/CD'],
    tags: ['mlops', 'ai', 'backend'],
    images: [
      { src: '/images/projects/predictorbot-1.jpg', alt: 'PredictorBot pipeline' },
      { src: '/images/projects/predictorbot-2.jpg', alt: 'MLflow tracking' }
    ],
    github: undefined,
    demo: undefined,
    featured: true,
    year: '2025 – 2026',
    status: 'completed',
    metrics: [
      { label: { fr: 'Précision directionnelle', en: 'Directional accuracy' }, value: '68,5 %' },
      { label: { fr: 'Métriques suivies', en: 'Tracked metrics' }, value: 'RMSE, MAE, R², MAPE' }
    ]
  },
  {
    id: 'hebrew-whisper',
    slug: 'hebrew-whisper',
    techSlug: 'laravel-fastapi-google-stt-ocr',
    title: {
      fr: 'Hebrew Whisper',
      en: 'Hebrew Whisper'
    },
    shortDescription: {
      fr: 'Transcription et analyse de contenus en hébreu ancien (Speech-to-Text + OCR + correction linguistique).',
      en: 'Transcription and analysis of ancient Hebrew content (Speech-to-Text + OCR + linguistic correction).'
    },
    longDescription: {
      fr: 'Application d’intelligence artificielle dédiée à la transcription et à l’analyse de contenus en hébreu ancien. Intégration de Google Cloud Speech-to-Text, OCR et d’un pipeline de correction linguistique custom.',
      en: 'AI application dedicated to transcribing and analyzing ancient Hebrew content. Integration of Google Cloud Speech-to-Text, OCR and a custom linguistic correction pipeline.'
    },
    challenge: {
      fr: 'Obtenir une transcription fiable sur un corpus d’hébreu ancien où les modèles standards échouent (WER extrêmement élevé).',
      en: 'Achieve reliable transcription on an ancient Hebrew corpus where standard models fail (extremely high WER).'
    },
    solution: {
      fr: 'Architecture hybride Laravel + FastAPI. Pipeline de correction linguistique (KenLM rescoring + lexique hébraïque) pour post-traiter les sorties STT/OCR.',
      en: 'Hybrid Laravel + FastAPI architecture. Linguistic correction pipeline (KenLM rescoring + Hebrew lexicon) to post-process STT/OCR outputs.'
    },
    results: {
      fr: 'Réduction du WER de ~140 % à 55 % sur le corpus d’hébreu ancien.',
      en: 'WER reduced from ~140% to 55% on the ancient Hebrew corpus.'
    },
    technologies: ['Laravel', 'FastAPI', 'Google Cloud Speech-to-Text', 'OCR', 'PostgreSQL', 'KenLM'],
    tags: ['ai', 'stt', 'ocr', 'nlp'],
    images: [
      { src: '/images/projects/hebrew-whisper-1.jpg', alt: 'Hebrew Whisper interface' }
    ],
    github: undefined,
    demo: undefined,
    featured: true,
    year: '2025 – Present',
    status: 'in-progress',
    metrics: [
      { label: { fr: 'WER initial', en: 'Initial WER' }, value: '~140 %' },
      { label: { fr: 'WER final', en: 'Final WER' }, value: '55 %' }
    ]
  },
  {
    id: 'ai-photo-album',
    slug: 'ai-photo-album',
    techSlug: 'laravel-fastapi-opencv-llm',
    title: {
      fr: 'AI Photo Album',
      en: 'AI Photo Album'
    },
    shortDescription: {
      fr: 'Organisation intelligente d’albums photo par reconnaissance d’images, recherche sémantique et tri automatisé.',
      en: 'Intelligent photo album organization via image recognition, semantic search and automated sorting.'
    },
    longDescription: {
      fr: 'Application web permettant l’organisation intelligente d’albums photo. Architecture hybride coût-optimisée combinant vision classique et LLM pour le groupement contextuel.',
      en: 'Web application for intelligent photo album organization. Cost-optimized hybrid architecture combining classical vision and LLM for contextual grouping.'
    },
    challenge: {
      fr: 'Offrir une expérience d’organisation photo intelligente tout en maîtrisant les coûts d’appels LLM.',
      en: 'Deliver an intelligent photo organization experience while keeping LLM call costs under control.'
    },
    solution: {
      fr: 'Reconnaissance faciale via OpenCV/dlib (sans appel LLM) + GPT-4.1 Nano pour le groupement contextuel et suggestions de mise en page. Prompts ultra-compacts (~15 tokens/photo) sur une taxonomie de 15 catégories de scènes.',
      en: 'Facial recognition via OpenCV/dlib (no LLM calls) + GPT-4.1 Nano for contextual grouping and layout suggestions. Ultra-compact prompts (~15 tokens/photo) across a taxonomy of 15 scene categories.'
    },
    results: {
      fr: 'Architecture hybride qui réduit drastiquement le coût par photo tout en conservant une qualité de regroupement et de suggestion élevée.',
      en: 'Hybrid architecture that drastically reduces cost per photo while maintaining high grouping and suggestion quality.'
    },
    technologies: ['Laravel', 'FastAPI', 'Python', 'OpenCV', 'dlib', 'OpenAI', 'PostgreSQL', 'REST APIs'],
    tags: ['ai', 'computer-vision', 'llm'],
    images: [
      { src: '/images/projects/ai-photo-album-dashboard.png', alt: 'Dashboard' },
      { src: '/images/projects/ai-photo-album-groupement.png', alt: 'Groupement' },
      { src: '/images/projects/ai-photo-album-editeur.png', alt: 'Editeur' },
      
    ],
    github: undefined,
    demo: undefined,
    featured: true,
    year: '2025 – Present',
    status: 'in-progress'
  },
  {
    id: 'code-scale-ai-platform',
    slug: 'code-scale-ai-platform',
    techSlug: 'fastapi-pgvector-rag-ocr',
    title: {
      fr: 'Plateforme IA interne — Code & Scale',
      en: 'Internal AI Platform — Code & Scale'
    },
    shortDescription: {
      fr: 'Évolution d’une plateforme IA interne (RAG, OCR, embeddings, pgvector) chez Code & Scale.',
      en: 'Evolution of an internal AI platform (RAG, OCR, embeddings, pgvector) at Code & Scale.'
    },
    longDescription: {
      fr: 'Stage Backend Developer chez Code & Scale. Développement et amélioration continue d’une plateforme interne d’IA basée sur Python, FastAPI et PostgreSQL avec composants RAG, OCR et embeddings.',
      en: 'Backend Developer internship at Code & Scale. Development and continuous improvement of an internal AI platform based on Python, FastAPI and PostgreSQL with RAG, OCR and embeddings components.'
    },
    challenge: {
      fr: 'Améliorer les performances de traitement de documents et la fiabilité des services de la plateforme IA.',
      en: 'Improve document processing performance and service reliability of the AI platform.'
    },
    solution: {
      fr: 'Intégration de RAG, OCR, embeddings et pgvector. Optimisation via traitement parallèle et batch. Tests et revues techniques.',
      en: 'Integration of RAG, OCR, embeddings and pgvector. Optimization via parallel and batch processing. Tests and technical reviews.'
    },
    results: {
      fr: 'Nouvelles fonctionnalités livrées, bugs corrigés, performances de traitement de fichiers améliorées et fiabilité accrue.',
      en: 'New features delivered, bugs fixed, file processing performance improved and reliability increased.'
    },
    technologies: ['FastAPI', 'pgvector', 'Docker', 'Poetry', 'RAG', 'OCR', 'Embeddings', 'PostgreSQL'],
    tags: ['ai', 'rag', 'backend'],
    images: [
      { src: '/images/projects/code-scale-1.jpg', alt: 'Code & Scale AI platform' }
    ],
    featured: false,
    year: '2025',
    status: 'completed'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectUrl(project: Project): string {
  return `/projets/${project.slug}/${project.techSlug}`
}
