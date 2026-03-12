import type { Translations } from './types'

export const es: Translations = {
  nav: {
    home: 'Inicio', about: 'Sobre Mí', skills: 'Habilidades', experience: 'Experiencia',
    education: 'Educación', contact: 'Contacto', portfolio: 'Portafolio',
    toggleTheme: 'Cambiar tema', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
  },
  hero: {
    greeting: 'Hola, soy', name: 'Marcos Astudillo',
    title: 'Desarrollador Full-Stack', subtitle: 'Ingeniero de Software · Especialista Backend',
    intro: 'Construyo aplicaciones web escalables con TypeScript, Node.js y React. Enfocado en arquitectura limpia, diseño de APIs REST y sistemas de alto rendimiento en producción.',
    cta: { contact: 'Contáctame', resume: 'Descargar CV', portfolio: 'Ver Portafolio' },
    social: { github: 'Perfil de GitHub', linkedin: 'Perfil de LinkedIn' },
    location: 'Ottawa, Ontario, Canadá', available: 'Disponible para oportunidades',
  },
  about: {
    title: 'Sobre Mí', subtitle: 'Un poco sobre quién soy y lo que me motiva',
    bio: [
      'Soy un Desarrollador Full-Stack e Ingeniero de Software con un Diploma Avanzado (con Honores) en Tecnología de Ingeniería en Computación del Algonquin College, Canadá. Me especializo en construir aplicaciones escalables con Node.js, TypeScript, React y Python.',
      'Mi experiencia abarca plataformas de clientes, dashboards interactivos, soluciones de e-commerce y herramientas de visualización de datos — siempre enfocado en arquitectura limpia, APIs REST confiables y código mantenible.',
      'Disfruto resolver problemas técnicos complejos y construir sistemas que funcionan bien en producción. Mis intereses incluyen ingeniería backend, plataformas en la nube, arquitectura de microservicios y aplicaciones de alto rendimiento.',
    ],
    stats: { years: 'Años de Experiencia', projects: 'Proyectos Entregados', clients: 'Clientes Atendidos' },
    highlights: ['Defensor de arquitectura limpia', 'Experto en diseño de APIs REST', 'Practicante de Agile / SCRUM', 'Aprendizaje continuo'],
  },
  skills: {
    title: 'Stack Tecnológico', subtitle: 'Tecnologías y herramientas con las que trabajo',
    categories: { languages: 'Lenguajes de Programación', frameworks: 'Frameworks y Librerías', databases: 'Bases de Datos', cloud: 'Cloud y DevOps', web: 'Tecnologías Web', tools: 'Herramientas y Metodologías', ai: 'IA e Ingeniería de Datos', testing: 'Testing y QA' },
  },
  experience: { title: 'Experiencia Laboral', subtitle: 'Mi trayectoria profesional', present: 'Presente', keyAchievements: 'Logros Clave', remote: 'Remoto', onsite: 'Presencial' },
  education: { title: 'Educación y Certificaciones', subtitle: 'Formación académica y aprendizaje continuo', gpa: 'Promedio', honours: 'Con Honores', relevant: 'Cursos Relevantes', certifications: 'Certificaciones' },
  contact: {
    title: 'Contáctame', subtitle: 'Actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo. Ya sea que tengas un proyecto en mente o simplemente quieras conectar, mi bandeja de entrada siempre está abierta.',
    formTitle: 'Envíame un mensaje',
    form: { name: 'Tu Nombre', namePlaceholder: 'Juan González', email: 'Correo Electrónico', emailPlaceholder: 'juan@ejemplo.com', subject: 'Asunto', subjectPlaceholder: 'Hablemos sobre...', message: 'Mensaje', messagePlaceholder: 'Cuéntame sobre tu proyecto o cómo puedo ayudarte...', submit: 'Enviar Mensaje', submitting: 'Enviando...' },
    success: { title: '¡Mensaje Enviado!', message: 'Gracias por contactarme. Te responderé lo antes posible.' },
    error: { title: 'Algo salió mal', message: 'Por favor intenta de nuevo o escríbeme directamente a m.astudillo1986@gmail.com' },
    validation: { nameRequired: 'El nombre es requerido', emailRequired: 'El correo es requerido', emailInvalid: 'Por favor ingresa un correo válido', subjectRequired: 'El asunto es requerido', messageRequired: 'El mensaje es requerido', messageTooShort: 'El mensaje debe tener al menos 10 caracteres' },
    captcha: { label: 'Verifica que eres humano', placeholder: 'Tu respuesta', invalid: 'Respuesta incorrecta — intenta de nuevo' },
    info: { email: 'Correo', phone: 'Teléfono', location: 'Ubicación', availability: 'Disponibilidad', availabilityValue: 'Disponible para oportunidades', locationBadges: { remote: 'Trabajo remoto', relocation: 'Abierto a reubicación', onsite: 'Disponible presencial', hybrid: 'Híbrido' } },
  },
  portfolio: {
    title: 'Portafolio', subtitle: 'Proyectos y trabajos seleccionados',
    comingSoon: { title: 'Próximamente', message: 'Actualmente estoy seleccionando mis mejores trabajos para mostrarlos aquí. Vuelve pronto para ver proyectos, casos de estudio y demos.', cta: 'Mientras tanto, visita mi GitHub' },
    projects: { viewCode: 'Ver Código', viewDemo: 'Ver Demo', stack: 'Stack', status: { live: 'Activo', inProgress: 'En Progreso', archived: 'Archivado' } },
    backHome: 'Volver al Inicio',
  },
  footer: { madeWith: 'Hecho con', by: 'por', rights: 'Todos los derechos reservados.', links: { privacy: 'Privacidad', contact: 'Contacto' } },
  common: { downloadResume: 'Descargar CV', viewPortfolio: 'Ver Portafolio', learnMore: 'Saber Más', close: 'Cerrar', loading: 'Cargando...', seeAll: 'Ver Todo', backToTop: 'Volver Arriba' },
}
