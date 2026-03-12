// ─────────────────────────────────────────────────────────────
// Portfolio Projects Data
// Add entries to `projects` to auto-enable the projects view.
// Leave it empty to show the Coming Soon page.
// ─────────────────────────────────────────────────────────────

export type ProjectStatus = 'live' | 'in-progress' | 'archived'

export interface Project {
  id: string
  title: string
  description: { en: string; es: string }
  longDescription?: { en: string; es: string }
  stack: string[]
  image?: string
  links: {
    github?: string
    demo?: string
  }
  status: ProjectStatus
  featured: boolean
  year: string
}

// Add projects here — portfolio auto-switches from Coming Soon to cards
// when this array has at least one entry.
export const projects: Project[] = [
  {
    id: 'hotel-booker-fullstack',
    title: 'Hotel Booker — Full-Stack',
    description: {
      en: 'Complete hotel reservation management system with Django REST API backend and Angular frontend. Features JWT authentication, full CRUD reservations, PostgreSQL persistence, and cloud deployment across Render and Railway.',
      es: 'Sistema completo de gestión de reservas de hotel con backend Django REST API y frontend Angular. Incluye autenticación JWT, operaciones CRUD completas, persistencia en PostgreSQL y despliegue en la nube.',
    },
    stack: ['Django', 'Angular', 'TypeScript', 'PostgreSQL', 'JWT', 'Bootstrap', 'Render', 'Railway'],
    links: {
      github: 'https://github.com/marcos-astudillo/hotel-booker-fullstack',
      demo: 'https://hotel-booker-fullstack.onrender.com/',
    },
    status: 'live',
    featured: true,
    year: '2024',
  },
  {
    id: 'sociolingo',
    title: 'Sociolingo',
    description: {
      en: 'Social language-learning chat app built with Flutter and Firebase. Enables real-time messaging between users of different languages with AI-powered translation supporting English, Spanish, and French.',
      es: 'App de chat para aprendizaje de idiomas construida con Flutter y Firebase. Permite mensajería en tiempo real entre usuarios de distintos idiomas con traducción impulsada por IA en inglés, español y francés.',
    },
    stack: ['Flutter', 'Dart', 'Firebase', 'AI Translation'],
    links: {
      github: 'https://github.com/marcos-astudillo/Sociolingo',
      demo: 'https://sociolingo-project.web.app',
    },
    status: 'live',
    featured: true,
    year: '2024',
  },
  {
    id: 'ca-gf-tm',
    title: 'JAP Simulation Suite',
    description: {
      en: 'Desktop simulation suite implementing Cellular Automata, Conway\'s Game of Life, and a Turing Machine using JavaFX and Swing. MVC architecture, client-server networking, and full internationalization.',
      es: 'Suite de simulación de escritorio con Autómatas Celulares, el Juego de la Vida de Conway y una Máquina de Turing en JavaFX y Swing. Arquitectura MVC, red cliente-servidor e internacionalización completa.',
    },
    stack: ['Java', 'JavaFX', 'Swing', 'MVC', 'Client-Server', 'i18n'],
    links: {
      github: 'https://github.com/marcos-astudillo/CA_GF_TM',
    },
    status: 'archived',
    featured: false,
    year: '2023',
  },
  {
    id: 'system-design-notes',
    title: 'System Design Notes',
    description: {
      en: 'Curated collection of system design documents covering distributed systems, scalability, REST APIs, and backend architecture patterns. Structured as interview-ready references with requirements, architecture, data model, and trade-offs.',
      es: 'Colección curada de documentos de diseño de sistemas sobre sistemas distribuidos, escalabilidad, APIs REST y patrones de arquitectura backend. Estructurado como referencias para entrevistas con requisitos, arquitectura y análisis de trade-offs.',
    },
    stack: ['System Design', 'Distributed Systems', 'Backend', 'Architecture', 'Markdown'],
    links: {
      github: 'https://github.com/marcos-astudillo/system-design-notes',
    },
    status: 'live',
    featured: false,
    year: '2024',
  },
]

export const archivedProjects: Project[] = [
  {
    id: 'daily-update-app',
    title: 'Daily Update App',
    description: {
      en: 'Full-stack internal productivity tool built with the T3 Stack. Enables teams to track daily progress, review historical updates, and analyze productivity insights through a responsive dashboard.',
      es: 'Herramienta interna de productividad full-stack construida con el T3 Stack. Permite a los equipos rastrear el progreso diario, revisar actualizaciones históricas y analizar insights de productividad.',
    },
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'tRPC'],
    links: {
      github: 'https://github.com/marcos-astudillo',
    },
    status: 'archived',
    featured: true,
    year: '2024',
  },
]
