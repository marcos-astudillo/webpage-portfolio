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
  // ─── Uncomment and fill in when ready ───────────────────────
  // {
  //   id: 'my-project',
  //   title: 'My Project',
  //   description: { en: '...', es: '...' },
  //   stack: ['React', 'TypeScript'],
  //   image: '/assets/images/projects/my-project.jpg',
  //   links: { github: 'https://github.com/...', demo: 'https://...' },
  //   status: 'live',
  //   featured: true,
  //   year: '2025',
  // },
  // ────────────────────────────────────────────────────────────
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
      github: 'https://github.com/ThisIsAntonio',
    },
    status: 'archived',
    featured: true,
    year: '2024',
  },
  {
    id: 'jap-simulation-suite',
    title: 'JAP Simulation Suite',
    description: {
      en: 'Java-based simulation suite implementing Cellular Automata, Conway\'s Game of Life, and a Turing Machine. Applied MVC architecture with GUI development using Swing and JavaFX.',
      es: 'Suite de simulación en Java implementando Autómatas Celulares, el Juego de la Vida de Conway y una Máquina de Turing. Arquitectura MVC con interfaces GUI usando Swing y JavaFX.',
    },
    stack: ['Java', 'JavaFX', 'Swing', 'MVC Architecture'],
    links: {
      github: 'https://github.com/ThisIsAntonio',
    },
    status: 'archived',
    featured: true,
    year: '2023',
  },
  // ─────────────────────────────────────────────────────────────
  // Add more projects here as they become available
  // Template:
  // {
  //   id: 'project-id',
  //   title: 'Project Title',
  //   description: { en: '...', es: '...' },
  //   stack: ['Tech1', 'Tech2'],
  //   image: '/assets/images/projects/project-id.jpg',
  //   links: { github: 'https://...', demo: 'https://...' },
  //   status: 'live',
  //   featured: true,
  //   year: '2025',
  // },
  // ─────────────────────────────────────────────────────────────
]
