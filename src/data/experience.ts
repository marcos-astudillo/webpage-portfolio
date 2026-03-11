// ─────────────────────────────────────────────────────────────
// Work Experience Data
// Source: Marcos Astudillo Resume + LinkedIn CV
// ─────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string
  company: string
  companyUrl?: string
  role: { en: string; es: string }
  type: { en: string; es: string }
  period: { en: string; es: string }
  startDate: string
  endDate: string | null
  location: { en: string; es: string }
  remote: boolean
  description: { en: string; es: string }
  achievements: {
    en: string[]
    es: string[]
  }
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'coningenio-consultant',
    company: 'ConIngenio',
    role: {
      en: 'Full-Stack Developer (Consultant)',
      es: 'Desarrollador Full-Stack (Consultor)',
    },
    type: {
      en: 'Contract · Full-time',
      es: 'Contrato · Tiempo completo',
    },
    period: {
      en: 'Sep 2024 – Oct 2025',
      es: 'Sep 2024 – Oct 2025',
    },
    startDate: '2024-09',
    endDate: '2025-10',
    location: {
      en: 'San Bernardo, Chile',
      es: 'San Bernardo, Chile',
    },
    remote: true,
    description: {
      en: 'Delivered e-commerce solutions using PrestaShop, TypeScript, and MySQL. Focused on improving platform performance, optimizing checkout workflows, and integrating scalable APIs to support reliable client-facing applications in Agile development environments.',
      es: 'Desarrollé soluciones de e-commerce utilizando PrestaShop, TypeScript y MySQL. Enfocado en mejorar el rendimiento de la plataforma, optimizar flujos de pago e integrar APIs escalables para soportar aplicaciones confiables en entornos de desarrollo Agile.',
    },
    achievements: {
      en: [
        'Increased conversion rates by 18% through custom PrestaShop theme improvements and UX optimization.',
        'Improved platform performance and uptime by 30% integrating Redis caching and cloud storage services.',
        'Reduced user checkout errors by 25% through optimized payment workflow redesign.',
        'Reduced support issues by 40% by implementing automated QA testing processes.',
      ],
      es: [
        'Aumenté las tasas de conversión un 18% mediante mejoras personalizadas en temas de PrestaShop y optimización UX.',
        'Mejoré el rendimiento de la plataforma un 30% integrando Redis caching y servicios de almacenamiento en la nube.',
        'Reduje los errores en el checkout un 25% mediante el rediseño optimizado del flujo de pago.',
        'Reduje los problemas de soporte un 40% implementando procesos automatizados de control de calidad.',
      ],
    },
    tech: ['TypeScript', 'PrestaShop', 'MySQL', 'Redis', 'CSS', 'REST APIs', 'CI/CD'],
  },
  {
    id: 'coningenio-fullstack',
    company: 'ConIngenio',
    role: {
      en: 'Full-Stack Developer',
      es: 'Desarrollador Full-Stack',
    },
    type: {
      en: 'Full-time',
      es: 'Tiempo completo',
    },
    period: {
      en: 'Dec 2021 – Sep 2024',
      es: 'Dic 2021 – Sep 2024',
    },
    startDate: '2021-12',
    endDate: '2024-09',
    location: {
      en: 'San Bernardo, Chile',
      es: 'San Bernardo, Chile',
    },
    remote: true,
    description: {
      en: 'Core full-stack developer in a product-driven environment, designing robust SaaS applications from concept through deployment. Focused on scalable backend systems, interactive frontend interfaces, and seamless DevOps collaboration across Agile sprint cycles.',
      es: 'Desarrollador full-stack principal en un entorno orientado a productos, diseñando aplicaciones SaaS robustas desde el concepto hasta el despliegue. Enfocado en sistemas backend escalables, interfaces frontend interactivas y colaboración DevOps en ciclos de sprint Agile.',
    },
    achievements: {
      en: [
        'Reduced application load time by 28% developing scalable full-stack features using React and Node.js.',
        'Improved database performance by 35% optimizing PostgreSQL queries and indexing strategies.',
        'Reduced production issues by 40% through improved debugging, testing, and deployment workflows.',
        'Led Agile ceremonies and mentored junior developers, increasing team velocity and onboarding efficiency by 50%.',
        'Designed and implemented REST APIs supporting scalable microservices architecture across production systems.',
        'Led development of a customer management platform integrated with real-time feedback tools, deployed on AWS.',
      ],
      es: [
        'Reduje el tiempo de carga de la aplicación un 28% desarrollando funcionalidades escalables con React y Node.js.',
        'Mejoré el rendimiento de la base de datos un 35% optimizando consultas e índices en PostgreSQL.',
        'Reduje problemas en producción un 40% mejorando flujos de depuración, pruebas y despliegue.',
        'Lideré ceremonias Agile y mentoricé a desarrolladores junior, aumentando la velocidad del equipo un 50%.',
        'Diseñé e implementé APIs REST que soportan arquitectura de microservicios escalable en sistemas de producción.',
        'Lideré el desarrollo de una plataforma de gestión de clientes integrada con herramientas de feedback en tiempo real, desplegada en AWS.',
      ],
    },
    tech: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'MySQL', 'MongoDB', 'Python', 'Django', 'AWS', 'Docker', 'REST APIs', 'Agile/SCRUM'],
  },
  {
    id: 'object-profile',
    company: 'Object Profile',
    role: {
      en: 'Junior Programmer',
      es: 'Programador Junior',
    },
    type: {
      en: 'Full-time',
      es: 'Tiempo completo',
    },
    period: {
      en: 'Sep 2020 – Feb 2021',
      es: 'Sep 2020 – Feb 2021',
    },
    startDate: '2020-09',
    endDate: '2021-02',
    location: {
      en: 'San Bernardo, Chile',
      es: 'San Bernardo, Chile',
    },
    remote: true,
    description: {
      en: 'Junior Programmer contributing to R&D projects developing augmented reality visualization tools. Focused on debugging, performance optimization, and integrating web technologies to support interactive dashboards and cross-platform data visualization.',
      es: 'Programador Junior contribuyendo a proyectos de I+D desarrollando herramientas de visualización en realidad aumentada. Enfocado en depuración, optimización de rendimiento e integración de tecnologías web para dashboards interactivos.',
    },
    achievements: {
      en: [
        'Developed dynamic dashboards using JavaScript and CSS, improving data visualization and user interaction by 30%.',
        'Reduced application crash rates by 45% identifying and resolving performance bottlenecks.',
        'Improved QA validation accuracy by 50% building automated testing workflows.',
        'Enhanced cross-platform compatibility integrating HTML, JSON, and JavaScript with AR visualization tools.',
      ],
      es: [
        'Desarrollé dashboards dinámicos con JavaScript y CSS, mejorando la visualización de datos un 30%.',
        'Reduje las caídas de la aplicación un 45% identificando y resolviendo cuellos de botella de rendimiento.',
        'Mejoré la precisión de validación QA un 50% construyendo flujos de pruebas automatizadas.',
        'Mejoré la compatibilidad multiplataforma integrando HTML, JSON y JavaScript con herramientas AR.',
      ],
    },
    tech: ['JavaScript', 'CSS', 'HTML', 'Smalltalk', 'Roassal', 'JSON', 'AR Visualization'],
  },
]
