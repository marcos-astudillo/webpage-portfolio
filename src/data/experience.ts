// Work Experience Data - Source: LinkedIn Profile CV (most current)
export interface ExperienceItem {
  id: string; company: string
  role: { en: string; es: string }
  type: { en: string; es: string }
  period: { en: string; es: string }
  startDate: string; endDate: string | null
  location: { en: string; es: string }; remote: boolean
  description: { en: string; es: string }
  achievements: { en: string[]; es: string[] }; tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'rse-exteriors', company: 'RSE Exteriors',
    role: { en: 'Technical Field Work', es: 'Trabajo Técnico en Campo' },
    type: { en: 'Contract', es: 'Contrato' },
    period: { en: 'Aug 2025 – Mar 2026', es: 'Ago 2025 – Mar 2026' },
    startDate: '2025-08', endDate: '2026-03',
    location: { en: 'Ottawa, ON', es: 'Ottawa, ON' }, remote: false,
    description: {
      en: 'Supported residential construction projects interpreting technical blueprints and ensuring compliance with building codes. Concurrently continued advancing software engineering expertise through certifications and backend development practice.',
      es: 'Apoyé proyectos de construcción residencial interpretando planos técnicos y garantizando cumplimiento con códigos de construcción. Paralelamente, continué desarrollando habilidades en ingeniería de software.',
    },
    achievements: {
      en: [
        'Interpreted blueprints and technical drawings to determine construction layouts.',
        'Performed precision measurements and material preparation for structural assembly.',
        'Ensured compliance with building codes and on-site safety regulations.',
        'Continued professional development in software engineering through certifications and backend development.',
      ],
      es: [
        'Interpreté planos y dibujos técnicos para determinar layouts de construcción.',
        'Realicé mediciones de precisión y preparación de materiales para ensamblaje estructural.',
        'Garanticé cumplimiento con códigos de construcción y normativas de seguridad en obra.',
        'Continué el desarrollo profesional en ingeniería de software mediante certificaciones y práctica backend.',
      ],
    },
    tech: ['Technical Planning', 'Blueprint Reading', 'Safety Compliance'],
  },
  {
    id: 'coningenio-consultant', company: 'ConIngenio.cl',
    role: { en: 'Full-Stack Developer (Consultant)', es: 'Desarrollador Full-Stack (Consultor)' },
    type: { en: 'Contract', es: 'Contrato' },
    period: { en: 'Oct 2024 – Oct 2025', es: 'Oct 2024 – Oct 2025' },
    startDate: '2024-10', endDate: '2025-10',
    location: { en: 'San Bernardo, Chile', es: 'San Bernardo, Chile' }, remote: true,
    description: {
      en: 'Delivered e-commerce solutions using PrestaShop, TypeScript, MySQL, Laravel, and PHP. Applied AWS cloud infrastructure, ETL workflows, and data-driven strategies to build scalable, secure online stores in Agile environments.',
      es: 'Desarrollé soluciones de e-commerce con PrestaShop, TypeScript, MySQL, Laravel y PHP. Apliqué conocimientos de AWS, flujos ETL y estrategias orientadas a datos para construir tiendas online escalables y seguras.',
    },
    achievements: {
      en: [
        'Increased conversion rates by 18% through custom PrestaShop/Laravel theme improvements.',
        'Improved platform performance and uptime by 30% integrating Redis caching and cloud storage (S3).',
        'Designed ETL workflows to process big data, reducing analytics query time by 35%.',
        'Integrated APIs for secure payment gateways, improving transaction reliability by 40%.',
        'Reduced support issues by 40% implementing automated QA testing processes.',
      ],
      es: [
        'Aumenté las tasas de conversión un 18% mediante mejoras personalizadas de temas en PrestaShop/Laravel.',
        'Mejoré el rendimiento de la plataforma un 30% integrando Redis caching y almacenamiento en la nube (S3).',
        'Diseñé flujos ETL para procesar big data, reduciendo el tiempo de consultas analytics un 35%.',
        'Integré APIs para pasarelas de pago seguras, mejorando la fiabilidad de transacciones un 40%.',
        'Reduje los problemas de soporte un 40% implementando procesos automatizados de control de calidad.',
      ],
    },
    tech: ['TypeScript', 'Laravel', 'PHP', 'PrestaShop', 'MySQL', 'Redis', 'AWS', 'ETL', 'Vue 3', 'Docker', 'Agile/SCRUM'],
  },
  {
    id: 'coningenio-fullstack', company: 'ConIngenio.cl',
    role: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
    type: { en: 'Full-time', es: 'Tiempo completo' },
    period: { en: 'Dec 2021 – Sep 2024', es: 'Dic 2021 – Sep 2024' },
    startDate: '2021-12', endDate: '2024-09',
    location: { en: 'San Bernardo, Chile', es: 'San Bernardo, Chile' }, remote: true,
    description: {
      en: 'Core full-stack developer building scalable SaaS applications with Laravel, PHP, Python, Node.js, and React. Designed data engineering pipelines, microservices, and cloud infrastructure to deliver secure supply chain platforms.',
      es: 'Desarrollador full-stack principal construyendo aplicaciones SaaS escalables con Laravel, PHP, Python, Node.js y React. Diseñé pipelines de ingeniería de datos, microservicios e infraestructura cloud para plataformas de cadena de suministro seguras.',
    },
    achievements: {
      en: [
        'Developed microservices for supply chain analytics, improving decision-making speed by 36%.',
        'Automated ETL workflows handling big data sets, reducing processing time by 42%.',
        'Reduced application load time by 28% with scalable full-stack features using React and Node.js.',
        'Optimized PostgreSQL queries and indexing strategies, improving database performance by 35%.',
        'Applied DevOps best practices to CI/CD pipelines, reducing deployment errors by 50%.',
        'Led Agile ceremonies and mentored junior developers, increasing team velocity by 50%.',
      ],
      es: [
        'Desarrollé microservicios para analytics de cadena de suministro, mejorando la velocidad de decisión un 36%.',
        'Automaticé flujos ETL para big data, reduciendo el tiempo de procesamiento un 42%.',
        'Reduje el tiempo de carga un 28% con funcionalidades escalables usando React y Node.js.',
        'Optimicé consultas e índices en PostgreSQL, mejorando el rendimiento de la base de datos un 35%.',
        'Apliqué mejores prácticas DevOps en CI/CD pipelines, reduciendo errores de despliegue un 50%.',
        'Lideré ceremonias Agile y mentoricé a desarrolladores junior, aumentando la velocidad del equipo un 50%.',
      ],
    },
    tech: ['Laravel', 'PHP', 'Python', 'Django', 'Node.js', 'Express.js', 'React', 'Angular', 'TypeScript', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'CI/CD', 'Agile/SCRUM'],
  },
  {
    id: 'object-profile', company: 'Object Profile',
    role: { en: 'Junior Programmer', es: 'Programador Junior' },
    type: { en: 'Full-time', es: 'Tiempo completo' },
    period: { en: 'Sep 2020 – Feb 2021', es: 'Sep 2020 – Feb 2021' },
    startDate: '2020-09', endDate: '2021-02',
    location: { en: 'San Bernardo, Chile', es: 'San Bernardo, Chile' }, remote: true,
    description: {
      en: 'Junior Programmer contributing to R&D projects developing augmented reality visualization tools using Smalltalk and Roassal. Focused on debugging, performance optimization, and integrating web technologies for interactive dashboards.',
      es: 'Programador Junior contribuyendo a proyectos de I+D desarrollando herramientas de visualización en realidad aumentada con Smalltalk y Roassal. Enfocado en depuración, optimización de rendimiento e integración de tecnologías web.',
    },
    achievements: {
      en: [
        'Developed AR dashboards with Roassal, improving data visualization interactivity by 30%.',
        'Reduced application crash rates by 45% identifying and resolving performance bottlenecks.',
        'Improved QA validation accuracy by 50% building automated testing workflows.',
        'Enhanced visualization modules for big data analytics, increasing insight clarity by 25%.',
        'Applied Vue concepts to prototype web integration for AR components.',
      ],
      es: [
        'Desarrollé dashboards AR con Roassal, mejorando la interactividad de visualización de datos un 30%.',
        'Reduje las caídas de la aplicación un 45% identificando y resolviendo cuellos de botella de rendimiento.',
        'Mejoré la precisión de validación QA un 50% construyendo flujos de pruebas automatizadas.',
        'Mejoré módulos de visualización para big data analytics, aumentando la claridad de insights un 25%.',
        'Apliqué conceptos de Vue para prototipar integración web en componentes AR.',
      ],
    },
    tech: ['JavaScript', 'Vue', 'CSS', 'HTML', 'Smalltalk', 'Roassal', 'JSON', 'AR Visualization'],
  },
]
