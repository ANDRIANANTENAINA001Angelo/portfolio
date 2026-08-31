const img = (path: string) => `${import.meta.env.BASE_URL}images/projects/${path}`

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
      fr: 'GoalPay est une plateforme FinTech dédiée à l’automatisation et à la sécurisation des paiements numériques à Madagascar. En tant que co-fondateur et Software Engineer, j’ai conçu l’architecture complète, les modules de paiement, le portefeuille électronique, les webhooks et la communication temps réel.',
      en: 'GoalPay is a FinTech platform dedicated to automating and securing digital payments in Madagascar. As co-founder and Software Engineer, I designed the complete architecture, payment modules, e-wallet, webhooks and real-time communication.'
    },
    challenge: {
      fr: 'Construire un système de paiement fiable, sécurisé et scalable capable d’intégrer les opérateurs de mobile money malgaches tout en garantissant la traçabilité et la conformité.',
      en: 'Build a reliable, secure and scalable payment system capable of integrating Malagasy mobile money operators while ensuring traceability and compliance.'
    },
    solution: {
      fr: 'Architecture robuste, PostgreSQL, WebSockets, files d’attente, tâches planifiées, authentification & rôles, documentation OpenAPI, et mécanismes cryptographiques.',
      en: 'Robust architecture, PostgreSQL, WebSockets, queues, scheduled tasks, auth & roles, OpenAPI documentation, and cryptographic mechanisms.'
    },
    results: {
      fr: '4 500+ transactions traitées pour un volume de 100M+ Ariary. Système en production avec suivi temps réel et automatisation des flux entrants/sortants Mobile Money.',
      en: '4,500+ transactions processed for a volume of 100M+ Ariary. Production system with real-time tracking and automated Mobile Money incoming/outgoing flows.'
    },
    technologies: ['Laravel', 'PostgreSQL', 'WebSockets', 'REST APIs', 'Swagger/OpenAPI', 'PHPUnit', 'Redis', 'Queues'],
    tags: ['fintech', 'fullstack', 'saas'],
    images: [
      { src: img('goalpay/acceuil.png'), alt: 'GoalPay Accueil' },
      { src: img('goalpay/portal-payment.png'), alt: 'GoalPay Portal de Paiement' },
      { src: img('goalpay/donation.png'), alt: 'GoalPay Donation' }
    ],
    demo: 'https://goalpay.pro',
    featured: true,
    year: '2025 – Présent',
    status: 'live',
    metrics: [
      { label: { fr: 'Transactions', en: 'Transactions' }, value: '4 500+' },
      { label: { fr: 'Volume traité', en: 'Volume processed' }, value: '100M+ Ar' }
    ]
  },
  {
    id: 'predictor-bot',
    slug: 'predictor-bot',
    techSlug: 'fastapi-xgboost-mlflow',
    title: {
      fr: 'PredictorBot — Pipeline MLOps',
      en: 'PredictorBot — MLOps Pipeline'
    },
    shortDescription: {
      fr: 'Pipeline MLOps complet pour la prédiction des cours de devise en temps réel (mémoire de Master).',
      en: 'Full MLOps pipeline for real-time currency exchange rate prediction (Master thesis).'
    },
    longDescription: {
      fr: 'Conception et réalisation d’une plateforme MLOps de prédiction des taux de change intégrant l’ensemble du cycle de vie d’un modèle de Machine Learning : collecte, prétraitement, entraînement, versioning, déploiement et API d’inférence.',
      en: 'Design and implementation of an MLOps platform for exchange rate prediction covering the full machine learning lifecycle: collection, preprocessing, training, versioning, deployment and inference API.'
    },
    challenge: {
      fr: 'Industrialiser un modèle de prédiction de devise de bout en bout avec monitoring, reproductibilité et déploiement automatisé.',
      en: 'Industrialize an end-to-end currency prediction model with monitoring, reproducibility and automated deployment.'
    },
    solution: {
      fr: 'Pipeline automatisé avec FastAPI, MLflow, XGBoost, Docker et CI/CD. Suivi des métriques (RMSE, MAE, R², MAPE, précision directionnelle).',
      en: 'Automated pipeline with FastAPI, MLflow, XGBoost, Docker and CI/CD. Metrics tracking (RMSE, MAE, R², MAPE, directional accuracy).'
    },
    results: {
      fr: 'Modèle XGBoost atteignant 68,5 % de précision directionnelle (hausse/baisse) sur les données de test, avec suivi automatisé via MLflow.',
      en: 'XGBoost model reaching 68.5% directional accuracy (up/down) on test data, with automated tracking via MLflow.'
    },
    technologies: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'PostgreSQL', 'Docker', 'CI/CD', 'Jenkins'],
    tags: ['mlops', 'ai', 'backend'],
    images: [
      { src: img('predictor-bot/ui.png'), alt: 'PredictorBot UI' },
      { src: img('predictor-bot/mlflow-trained-model.png'), alt: 'PredictorBot MLFlow Trained Model' },
      { src: img('predictor-bot/stage-model.png'), alt: 'PredictorBot MLFlow Stage Model' },
      { src: img('predictor-bot/metabase-visualization.png'), alt: 'PredictorBot Visualisation avec Metabase' }
    ],
    featured: true,
    year: '2025 – 2026',
    status: 'completed',
    metrics: [
      { label: { fr: 'Précision directionnelle', en: 'Directional accuracy' }, value: '68,5 %' }
    ]
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
      fr: 'Stage Backend & IA chez Code & Scale. Développement et amélioration continue d’une plateforme interne d’IA basée sur Python, FastAPI et PostgreSQL avec composants RAG, OCR et embeddings.',
      en: 'Backend & AI internship at Code & Scale. Development and continuous improvement of an internal AI platform based on Python, FastAPI and PostgreSQL with RAG, OCR and embeddings components.'
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
      // { src: '/images/projects/code-scale-1.jpg', alt: 'Code & Scale AI platform' }
    ],
    featured: false,
    year: '2025',
    status: 'completed'
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
      { src: img('ai-photo-album/dashboard.png'), alt: 'Dashboard' },
      { src: img('ai-photo-album/groupement.png'), alt: 'Groupement' },
      { src: img('ai-photo-album/editeur.png'), alt: 'Editeur' }
    ],
    featured: true,
    year: '2025 – Présent',
    status: 'live'
  },
  {
    id: 'hebreu-whisper',
    slug: 'hebreu-whisper',
    techSlug: 'laravel-fastapi-speech-ocr',
    title: {
      fr: 'Hébreu Whisper — Transcription & Analyse',
      en: 'Hebrew Whisper — Transcription & Analysis'
    },
    shortDescription: {
      fr: 'Application d’IA pour la transcription et l’analyse de contenus en hébreu ancien (Speech-to-Text + OCR + correction linguistique).',
      en: 'AI application for transcription and analysis of ancient Hebrew content (Speech-to-Text + OCR + linguistic correction).'
    },
    longDescription: {
      fr: 'Application d’intelligence artificielle dédiée à la transcription et à l’analyse de contenus en hébreu ancien. Elle intègre Speech-to-Text, OCR et des traitements linguistiques pour automatiser l’extraction d’informations.',
      en: 'Artificial intelligence application dedicated to the transcription and analysis of ancient Hebrew content. It integrates Speech-to-Text, OCR and linguistic processing to automate information extraction.'
    },
    challenge: {
      fr: 'Obtenir une transcription fiable de l’hébreu ancien (audio + documents scannés) alors que les modèles standards ont un taux d’erreur très élevé.',
      en: 'Achieve reliable transcription of ancient Hebrew (audio + scanned documents) while standard models have a very high error rate.'
    },
    solution: {
      fr: 'Pipeline hybride : Google Cloud Speech-to-Text + OCR, puis rescoring linguistique custom (KenLM + lexique hébraïque) pour corriger les erreurs.',
      en: 'Hybrid pipeline: Google Cloud Speech-to-Text + OCR, followed by custom linguistic rescoring (KenLM + Hebrew lexicon) to correct errors.'
    },
    results: {
      fr: 'Réduction du WER de ~140 % à 10 % sur un corpus d’hébreu ancien grâce au pipeline de correction linguistique.',
      en: 'WER reduced from ~140% to 10% on an ancient Hebrew corpus thanks to the linguistic correction pipeline.'
    },
    technologies: ['Laravel', 'FastAPI', 'Google Cloud Speech-to-Text', 'OCR', 'PostgreSQL', 'KenLM'],
    tags: ['ai', 'speech', 'ocr', 'nlp'],
    images: [
      { src: img('hebreu-whisper/acceuil.png'), alt: 'Hebrew Whisper Acceuil' },
      { src: img('hebreu-whisper/connexion.png'), alt: 'Hebrew Whisper Connexion' },
      { src: img('hebreu-whisper/page-correction-ia.png'), alt: 'Hebrew Whisper Transcription et correction IA' },
      { src: img('hebreu-whisper/page-transcription-reference.png'), alt: 'Hebrew Whisper Transcription et référence bibliotheque' },
      { src: img('hebreu-whisper/page-transcription-reference-mobile.png'), alt: 'Hebrew Whisper Transcription et référence bibliotheque mobile' },

    ],
    featured: true,          // ou true si tu veux le mettre en avant
    year: '2025 – Présent',
    status: 'live',
    metrics: [
      { label: { fr: 'WER initial', en: 'Initial WER' }, value: '~140 %' },
      { label: { fr: 'WER final', en: 'Final WER' }, value: '10 %' }
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectUrl(project: Project): string {
  return `/projets/${project.slug}/${project.techSlug}`
}