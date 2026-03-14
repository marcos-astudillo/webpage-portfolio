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
    id: "hotel-booker-fullstack",
    title: "Hotel Booker — Full-Stack",
    description: {
      en: "Complete hotel reservation management system with Django REST API backend and Angular frontend. Features JWT authentication, full CRUD reservations, PostgreSQL persistence, and cloud deployment.",
      es: "Sistema completo de gestión de reservas de hotel con backend Django REST API y frontend Angular. Incluye autenticación JWT, operaciones CRUD completas y despliegue en la nube.",
    },
    stack: [
      "Django",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Bootstrap",
      "Render",
    ],
    image: "/assets/images/projects/hotel-booker.svg",
    links: {
      github: "https://github.com/marcos-astudillo/hotel-booker-fullstack",
      demo: "https://hotel-booker-fullstack.onrender.com/",
    },
    status: "live",
    featured: true,
    year: "2024",
  },
  {
    id: "flashlink-service",
    title: "Flashlink — URL Shortener API",
    description: {
      en: "Production-ready URL shortener backend built with Fastify, PostgreSQL, Redis cache-aside strategy, and BullMQ for async analytics. Includes rate limiting, optional expiration, and health checks.",
      es: "Backend de acortador de URLs listo para producción con Fastify, PostgreSQL, estrategia Redis cache-aside y BullMQ para analíticas asíncronas. Incluye rate limiting, expiración opcional y health checks.",
    },
    stack: [
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "OpenAPI",
    ],
    image: "/assets/images/projects/flashlink-service.svg",
    links: {
      github: "https://github.com/marcos-astudillo/flashlink-service",
      demo: "https://flashlink-service-production.up.railway.app/docs",
    },
    status: "live",
    featured: true,
    year: "2025",
  },
  {
    id: "daily-update-app",
    title: "Daily Update App",
    description: {
      en: "Full-stack productivity dashboard that lets teams log daily updates, track word frequency trends, and visualize output over time via an interactive calendar and charts.",
      es: "Dashboard de productividad full-stack para que los equipos registren actualizaciones diarias, analicen tendencias de palabras y visualicen el rendimiento con calendario interactivo y gráficos.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "tRPC",
    ],
    image: "/assets/images/projects/daily-update-app.svg",
    links: {
      github: "https://github.com/marcos-astudillo/Daily-Update-App",
      demo: "https://daily-update-app.vercel.app/",
    },
    status: "live",
    featured: true,
    year: "2024",
  },
  {
    id: "sociolingo",
    title: "SocioLingo",
    description: {
      en: "Social language-learning chat app built with Flutter and Firebase. Enables real-time multilingual messaging with AI-powered translation supporting English, Spanish, and French.",
      es: "App de chat para aprendizaje de idiomas construida con Flutter y Firebase. Mensajería multilingüe en tiempo real con traducción por IA en inglés, español y francés.",
    },
    stack: ["Flutter", "Dart", "Firebase", "AI Translation"],
    image: "/assets/images/projects/sociolingo.svg",
    links: {
      github: "https://github.com/marcos-astudillo/Sociolingo",
      demo: "https://sociolingo-project.web.app",
    },
    status: "live",
    featured: true,
    year: "2024",
  },
  {
    id: "ca-gf-tm",
    title: "JAP Simulation Suite",
    description: {
      en: "Desktop simulation suite implementing Cellular Automata, Conway's Game of Life, and a Turing Machine using JavaFX and Swing. MVC architecture, client-server networking, and full i18n.",
      es: "Suite de simulación de escritorio con Autómatas Celulares, Juego de la Vida de Conway y Máquina de Turing en JavaFX y Swing. Arquitectura MVC, red cliente-servidor e i18n completa.",
    },
    stack: ["Java", "JavaFX", "Swing", "MVC", "Client-Server", "i18n"],
    image: "/assets/images/projects/jap-suite.svg",
    links: {
      github: "https://github.com/marcos-astudillo/CA_GF_TM",
    },
    status: "archived",
    featured: false,
    year: "2023",
  },
  {
    id: "system-design-notes",
    title: "System Design Notes",
    description: {
      en: "Curated collection of system design documents covering distributed systems, scalability, REST APIs, and backend architecture patterns — structured as interview-ready references.",
      es: "Colección curada de documentos de diseño de sistemas sobre sistemas distribuidos, escalabilidad, APIs REST y arquitectura backend — estructurado como referencia para entrevistas.",
    },
    stack: [
      "System Design",
      "Distributed Systems",
      "Backend",
      "Architecture",
      "Markdown",
    ],
    image: "/assets/images/projects/system-design-notes.svg",
    links: {
      github: "https://github.com/marcos-astudillo/system-design-notes",
    },
    status: "live",
    featured: false,
    year: "2024",
  },
];

export const archivedProjects: Project[] = [
  {
    id: 'daily-update-app-archived',
    title: 'Daily Update App (archive)',
    description: {
      en: 'Full-stack internal productivity tool built with the T3 Stack.',
      es: 'Herramienta interna de productividad full-stack construida con el T3 Stack.',
    },
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'tRPC'],
    links: {
      github: 'https://github.com/marcos-astudillo',
    },
    status: 'archived',
    featured: false,
    year: '2024',
  },
]
