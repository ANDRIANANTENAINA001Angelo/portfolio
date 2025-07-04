
export interface Project {
    id: number
    slug: string
    title: string
    tags: string[]
    description: string
    longDescription: string
    image: string
    technologies: string[]
    link: string
    github: string
    featured: boolean
  }
  
  export const projects: Project[] = [
    {
        id: 1,
        slug: "prediction-salaire-api",
        title: 'Prédiction Salaire API',
        tags: ['data', 'api',"ia"],
        description: "API ML de prédiction de salaire basée sur du web scraping.",
        longDescription: "Scraping, entraînement de modèle ML, déploiement API REST avec Swagger.",
        image: new URL('@/assets/projects-img.jpg', import.meta.url).href,
        technologies: ['Python', 'Flask', 'Sklearn', 'Swagger'],
        link: 'https://github.com/ANDRIANANTENAINA001Angelo/data-to-model-pipeline',
        github: 'https://github.com/ANDRIANANTENAINA001Angelo/data-to-model-pipeline',
        featured: true
    },
    {
        id: 2,
        slug: 'ticket-place',
        title: 'Ticket Place',
        tags: ['software', 'api'],
        description: "Système de billetterie Laravel avec API REST et gestion des tickets.",
        longDescription: "Plateforme de réservation de places pour événements, documentation Swagger, auth avec Sanctum.",
        image: new URL('@/assets/projects-img.jpg', import.meta.url).href,
        technologies: ['Laravel', 'API REST', 'Sanctum', 'Swagger'],
        link: 'https://github.com/ANDRIANANTENAINA001Angelo/ticket-place',
        github: 'https://github.com/ANDRIANANTENAINA001Angelo/ticket-place',
        featured: true
    },
    {
        id: 3,
        title: 'Face Detector',
        slug: "face-detector",
        tags: ['data',"api","ai"],
        description: 'Détection de visages avec OpenCV.',
        longDescription: 'Détection basique de visage, démo dans notebook, API Flask.',
        image: new URL('@/assets/projects-img.jpg', import.meta.url).href,
        technologies: ['Python', 'OpenCV', 'Flask'],
        link: 'https://github.com/ANDRIANANTENAINA001Angelo/face_detector',
        github: 'https://github.com/ANDRIANANTENAINA001Angelo/face_detector',
        featured: false
    },  
    {
        id: 4,
        slug: 'paiement-pension',
        title: 'Paiement Pension',
        tags: ['software'],
        description: "Application Laravel de gestion de pension et paiements.",
        longDescription: "Gestion des pensionnaires, suivi des paiements, architecture propre, Laravel Filament.",
        image: new URL('@/assets/projects-img.jpg', import.meta.url).href,
        technologies: ['Laravel', 'Filament', 'MVC', 'Blade'],
        link: 'https://github.com/ANDRIANANTENAINA001Angelo/payement-pension',
        github: 'https://github.com/ANDRIANANTENAINA001Angelo/payement-pension',
        featured: false
    },      
    {
        id: 5,
        slug: "chatterbot",
        title: 'ChatterBot',
        tags: ['data',"api","ai"],
        description: 'Assistant conversationnel simple via API Flask.',
        longDescription: 'Bot basé sur ChatterBot, API REST pour intégration facile, organisation propre du code.',
        image: new URL('@/assets/projects-img.jpg', import.meta.url).href,
        technologies: ['Python', 'Flask', 'ChatterBot', 'JSON'],
        link: 'https://github.com/ANDRIANANTENAINA001Angelo/ChatterBot',
        github: 'https://github.com/ANDRIANANTENAINA001Angelo/ChatterBot',
        featured: false
    },
    {
      id: 6,
      slug: 'api-dynamique-php',
      title: 'API Dynamique PHP',
      tags: ['software', 'api'],
      description: "API REST full générique pour base de données.",
      longDescription: "Génération dynamique d'API CRUD pour toutes tables d'une base de données.",
      image: new URL('@/assets/projects-img.jpg', import.meta.url).href,
      technologies: ['PHP', 'REST', 'MySQL'],
      link: 'https://github.com/ANDRIANANTENAINA001Angelo/API-Dynamique',
      github: 'https://github.com/ANDRIANANTENAINA001Angelo/API-Dynamique',
      featured: true
    },
    
    
  ]
  