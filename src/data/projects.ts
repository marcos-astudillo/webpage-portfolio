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
    image: "/assets/images/projects/hotel-booker.webp",
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
    image: "/assets/images/projects/flashlink-service.webp",
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
    image: "/assets/images/projects/daily-update-app.webp",
    links: {
      github: "https://github.com/marcos-astudillo/Daily-Update-App",
      demo: "https://daily-update-app.vercel.app/",
    },
    status: "live",
    featured: true,
    year: "2024",
  },
  {
    id: "ts-api-gateway",
    title: "TS API Gateway",
    description: {
      en: "Scalable API Gateway for microservices built with Fastify and TypeScript. Implements JWT authentication with Auth0, Redis-based distributed rate limiting, circuit breaker resilience, and configurable routing to upstream services.",
      es: "API Gateway diseñado para arquitecturas de microservicios, desarrollado con Fastify y TypeScript. Incluye autenticación JWT con Auth0, rate limiting distribuido con Redis, resiliencia mediante circuit breaker y enrutamiento dinámico hacia servicios backend.",
    },
    stack: [
      "Fastify",
      "TypeScript",
      "Node.js",
      "Redis",
      "Auth0",
      "Docker",
      "Vitest",
      "GitHub Actions",
    ],
    image: "/assets/images/projects/ts-api-gateway.webp",
    links: {
      github: "https://github.com/marcos-astudillo/ts-api-gateway",
      demo: "https://ts-api-gateway-production.up.railway.app/docs",
    },
    status: "live",
    featured: true,
    year: "2026",
  },
  {
    id: "redis-rate-limiter",
    title: "Redis Rate Limiter — Distributed Rate Limiting Service",
    description: {
      en: "Production-grade distributed rate limiter built with Node.js, TypeScript, Redis Lua scripts, and PostgreSQL. Implements the Token Bucket algorithm with atomic Redis operations to enforce API request limits across multiple services. Supports dynamic rate limit policies, reusable Express middleware, standalone microservice usage, and interactive OpenAPI documentation.",
      es: "Servicio de rate limiting distribuido listo para producción construido con Node.js, TypeScript, Redis y PostgreSQL. Implementa el algoritmo Token Bucket utilizando scripts Lua en Redis para garantizar operaciones atómicas y evitar condiciones de carrera en entornos concurrentes. Permite definir políticas dinámicas de límites por plan, integrarse como middleware en aplicaciones Express o funcionar como microservicio independiente con documentación interactiva OpenAPI.",
    },
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Redis",
      "PostgreSQL",
      "Lua Scripts",
      "Docker",
      "OpenAPI",
    ],
    image: "/assets/images/projects/redis-rate-limiter-api.webp",
    links: {
      github: "https://github.com/marcos-astudillo/redis-rate-limiter",
      demo: "https://redis-rate-limiter-production.up.railway.app/api-docs/",
    },
    status: "live",
    featured: true,
    year: "2026",
  },
  {
    id: "analytics-pipeline",
    title: "Analytics Pipeline Service",
    description: {
      en: "Event analytics pipeline built with Node.js and TypeScript that ingests, queues, and processes events using Redis and PostgreSQL. It uses Prisma for database access and schema migrations, Express for API routing, Zod for validation, and Vitest for testing. The project supports event ingestion, durable queue handling, and metrics endpoints with comprehensive automated tests.",
      es: "Pipeline de analítica de eventos desarrollado con Node.js y TypeScript que ingiere, encola y procesa eventos utilizando Redis y PostgreSQL. Usa Prisma para acceso a datos y migraciones de esquema, Express para las rutas de la API, Zod para validación y Vitest para pruebas. El proyecto soporta ingestión de eventos, manejo duradero de colas y endpoints de métricas con pruebas automatizadas completas.",
    },
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Swagger",
      "CI/CD",
    ],
    image: "/assets/images/projects/analytics-pipeline.webp",
    links: {
      github: "https://github.com/marcos-astudillo/analytics-pipeline",
      demo: "https://analytics-pipeline-production-189b.up.railway.app/docs",
    },
    status: "live",
    featured: true,
    year: "2026",
  },
  {
    id: "sociolingo",
    title: "SocioLingo",
    description: {
      en: "Social language-learning chat app built with Flutter and Firebase. Enables real-time multilingual messaging with AI-powered translation supporting English, Spanish, and French.",
      es: "App de chat para aprendizaje de idiomas construida con Flutter y Firebase. Mensajería multilingüe en tiempo real con traducción por IA en inglés, español y francés.",
    },
    stack: ["Flutter", "Dart", "Firebase", "AI Translation"],
    image: "/assets/images/projects/sociolingo.webp",
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
    image: "/assets/images/projects/jap-suite.webp",
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
    image: "/assets/images/projects/system-design-notes.webp",
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
