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
  /** Simple text pipeline, e.g. "Source → step → step → output" */
  architecture?: { fr: string; en: string }
  results: { fr: string; en: string }
  technologies: string[]
  tags: string[]
  images: ProjectImage[]
  /** Fallback note shown when a live demo link has expired, instead of a dead link */
  demoNote?: { fr: string; en: string }
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
    architecture: {
      fr: 'Opérateurs Mobile Money → API Laravel (auth, wallet, règles métier) → PostgreSQL → files d’attente (jobs asynchrones) → webhooks sortants → notifications temps réel (WebSockets).',
      en: 'Mobile Money operators → Laravel API (auth, wallet, business rules) → PostgreSQL → queues (async jobs) → outgoing webhooks → real-time notifications (WebSockets).'
    },
    results: {
      fr: '4 500+ transactions traitées pour un volume de 100M+ Ariary. Système en production avec suivi temps réel et automatisation des flux entrants/sortants Mobile Money.',
      en: '4,500+ transactions processed for a volume of 100M+ Ariary. Production system with real-time tracking and automated Mobile Money incoming/outgoing flows.'
    },
    technologies: ['Laravel', 'PostgreSQL', 'WebSockets', 'REST APIs', 'Swagger/OpenAPI', 'PHPUnit', 'Redis', 'Queues'],
    tags: ['fintech', 'fullstack', 'saas'],
    images: [
      { src: img('goalpay/acceuil.webp'), alt: 'GoalPay Accueil' },
      { src: img('goalpay/portal-payment.webp'), alt: 'GoalPay Portal de Paiement' },
      { src: img('goalpay/donation.webp'), alt: 'GoalPay Donation' }
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
      fr: 'Conception et réalisation d’une plateforme MLOps de prédiction des taux de change (mémoire de Master, en partenariat avec Code & Scale) intégrant l’ensemble du cycle de vie d’un modèle de Machine Learning : collecte, feature engineering, entraînement, versioning, déploiement et API d’inférence.',
      en: 'Design and implementation of an MLOps platform for exchange rate prediction (Master thesis, in partnership with Code & Scale) covering the full machine learning lifecycle: collection, feature engineering, training, versioning, deployment and inference API.'
    },
    challenge: {
      fr: 'Industrialiser un modèle de prédiction de devise de bout en bout avec monitoring, reproductibilité et déploiement automatisé.',
      en: 'Industrialize an end-to-end currency prediction model with monitoring, reproducibility and automated deployment.'
    },
    solution: {
      fr: 'Collecte quasi temps réel via l’API Twelve Data (toutes les 2 minutes), feature engineering (46 features : lags, rendements, volatilité, sessions de marché), modèle XGBoost réentraîné automatiquement chaque heure, tracking et registre de modèles MLflow (27 runs suivis) avec promotion automatique du meilleur modèle en production, API d’inférence FastAPI et dashboard web de suivi temps réel.',
      en: 'Near real-time collection via the Twelve Data API (every 2 minutes), feature engineering (46 features: lags, returns, volatility, market sessions), XGBoost model automatically retrained every hour, MLflow experiment tracking and model registry (27 runs tracked) with automatic promotion of the best model to production, FastAPI inference API and a real-time monitoring web dashboard.'
    },
    architecture: {
      fr: 'Twelve Data (collecte toutes les 2 min) → feature engineering (46 features) → PostgreSQL → entraînement XGBoost (réentraînement horaire) → MLflow (27 runs suivis, registry, promotion auto) → API FastAPI (/predict) → dashboard web temps réel.',
      en: 'Twelve Data (collection every 2 min) → feature engineering (46 features) → PostgreSQL → XGBoost training (hourly retraining) → MLflow (27 runs tracked, registry, auto-promotion) → FastAPI API (/predict) → real-time web dashboard.'
    },
    results: {
      fr: 'Un pipeline qui tourne seul, sans intervention manuelle : collecte, feature engineering, réentraînement, évaluation et promotion du meilleur modèle s’enchaînent automatiquement toutes les heures, avec 27 runs tracés et reproductibles dans MLflow. L’enjeu du projet était l’industrialisation du cycle de vie ML (reproductibilité, monitoring, déploiement continu), pas la performance brute du modèle de prédiction de marché.',
      en: 'A pipeline that runs unattended: collection, feature engineering, retraining, evaluation and promotion of the best model chain automatically every hour, with 27 runs tracked and reproducible in MLflow. The focus of this project was industrializing the ML lifecycle (reproducibility, monitoring, continuous deployment), not raw market-prediction model performance.'
    },
    technologies: ['Python', 'FastAPI', 'XGBoost', 'MLflow', 'PostgreSQL', 'APScheduler', 'Docker', 'CI/CD'],
    tags: ['mlops', 'ai', 'backend'],
    images: [
      { src: img('predictor-bot/ui.webp'), alt: 'PredictorBot — dashboard temps réel (valeur réelle vs prédiction)' },
      { src: img('predictor-bot/mlflow-trained-model.webp'), alt: 'PredictorBot — suivi des runs MLflow' },
      { src: img('predictor-bot/stage-model.webp'), alt: 'PredictorBot — registre de modèles MLflow (staging/prod)' },
      { src: img('predictor-bot/dashboard.webp'), alt: 'PredictorBot — visualisation du dashboard' }
    ],
    demoNote: {
      fr: 'La démo en ligne a expiré — captures du dashboard et du suivi MLflow ci-dessous.',
      en: 'The live demo has expired — dashboard and MLflow tracking screenshots below.'
    },
    featured: true,
    year: '2025 – 2026',
    status: 'completed'
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
    architecture: {
      fr: 'Documents entrants → OCR → embeddings → pgvector (PostgreSQL) → recherche sémantique → API FastAPI.',
      en: 'Incoming documents → OCR → embeddings → pgvector (PostgreSQL) → semantic search → FastAPI API.'
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
    architecture: {
      fr: 'Photos → détection de visages (OpenCV/dlib, local) → clustering → taxonomie de scènes (15 catégories) → appel LLM compact (GPT-4.1 Nano) pour le groupement contextuel → API Laravel/FastAPI.',
      en: 'Photos → face detection (OpenCV/dlib, local) → clustering → scene taxonomy (15 categories) → compact LLM call (GPT-4.1 Nano) for contextual grouping → Laravel/FastAPI API.'
    },
    results: {
      fr: 'Architecture hybride qui réduit drastiquement le coût par photo tout en conservant une qualité de regroupement et de suggestion élevée.',
      en: 'Hybrid architecture that drastically reduces cost per photo while maintaining high grouping and suggestion quality.'
    },
    technologies: ['Laravel', 'FastAPI', 'Python', 'OpenCV', 'dlib', 'OpenAI', 'PostgreSQL', 'REST APIs'],
    tags: ['ai', 'computer-vision', 'llm'],
    images: [
      { src: img('ai-photo-album/dashboard.webp'), alt: 'Dashboard' },
      { src: img('ai-photo-album/groupement.webp'), alt: 'Groupement' },
      { src: img('ai-photo-album/editeur.webp'), alt: 'Editeur' }
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
    architecture: {
      fr: 'Audio / scans → Google Cloud Speech-to-Text + OCR → rescoring linguistique (KenLM + lexique hébraïque) → API Laravel/FastAPI → interface de correction.',
      en: 'Audio / scans → Google Cloud Speech-to-Text + OCR → linguistic rescoring (KenLM + Hebrew lexicon) → Laravel/FastAPI API → correction UI.'
    },
    results: {
      fr: 'Réduction du WER de ~140 % à 10 % sur un corpus d’hébreu ancien grâce au pipeline de correction linguistique.',
      en: 'WER reduced from ~140% to 10% on an ancient Hebrew corpus thanks to the linguistic correction pipeline.'
    },
    technologies: ['Laravel', 'FastAPI', 'Google Cloud Speech-to-Text', 'OCR', 'PostgreSQL', 'KenLM'],
    tags: ['ai', 'speech', 'ocr', 'nlp'],
    images: [
      { src: img('hebreu-whisper/acceuil.webp'), alt: 'Hebrew Whisper Acceuil' },
      { src: img('hebreu-whisper/connexion.webp'), alt: 'Hebrew Whisper Connexion' },
      { src: img('hebreu-whisper/page-correction-ia.webp'), alt: 'Hebrew Whisper Transcription et correction IA' },
      { src: img('hebreu-whisper/page-transcription-reference.webp'), alt: 'Hebrew Whisper Transcription et référence bibliotheque' },
      { src: img('hebreu-whisper/page-transcription-reference-mobile.webp'), alt: 'Hebrew Whisper Transcription et référence bibliotheque mobile' }
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