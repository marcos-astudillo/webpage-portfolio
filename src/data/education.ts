// Education & Certifications Data - Updated from all resumes
export interface EducationItem {
  id: string; institution: string
  degree: { en: string; es: string }; field: { en: string; es: string }
  period: { en: string; es: string }; startDate: string; endDate: string
  location: string; gpa?: string; honours?: boolean
  coursework?: { en: string[]; es: string[] }; logoColor: string
}
export interface CertificationItem {
  id: string; name: { en: string; es: string }; issuer: string; year?: string
}

export const education: EducationItem[] = [
  {
    id: 'algonquin', institution: 'Algonquin College',
    degree: { en: 'Advanced Diploma', es: 'Diploma Avanzado' },
    field: { en: 'Computer Engineering Technology – Computing Science', es: 'Tecnología en Ingeniería en Computación – Ciencias de la Computación' },
    period: { en: 'Sep 2022 – Aug 2024', es: 'Sep 2022 – Ago 2024' },
    startDate: '2022-09', endDate: '2024-08',
    location: 'Ottawa, Ontario, Canada', gpa: '3.64 / 4.0', honours: true,
    coursework: {
      en: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development', 'Operating Systems', 'Cloud Computing'],
      es: ['Estructuras de Datos', 'Algoritmos', 'Sistemas de Bases de Datos', 'Ingeniería de Software', 'Desarrollo Web', 'Sistemas Operativos', 'Computación en la Nube'],
    },
    logoColor: '#1a472a',
  },
  {
    id: 'duoc-uc', institution: 'DUOC UC',
    degree: { en: 'Technical Diploma', es: 'Diploma Técnico' },
    field: { en: 'Computer Programming Analysis', es: 'Análisis de Programación Computacional' },
    period: { en: 'Mar 2018 – Jun 2020', es: 'Mar 2018 – Jun 2020' },
    startDate: '2018-03', endDate: '2020-06', location: 'Santiago, Chile', logoColor: '#003087',
  },
  {
    id: 'inacap', institution: 'INACAP',
    degree: { en: "Bachelor's Degree", es: 'Licenciatura' },
    field: { en: 'Surveying Engineering', es: 'Ingeniería en Topografía' },
    period: { en: 'Mar 2007 – Dec 2011', es: 'Mar 2007 – Dic 2011' },
    startDate: '2007-03', endDate: '2011-12', location: 'Santiago, Chile', logoColor: '#8b0000',
  },
]

export const certifications: CertificationItem[] = [
  // HackerRank — Dec 2024
  { id: 'hr-problem-solving', name: { en: 'Problem Solving (Basic)', es: 'Resolución de Problemas (Básico)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  { id: 'hr-swe-intern', name: { en: 'Software Engineer Intern', es: 'Ingeniería de Software (Intern)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  { id: 'hr-css-basic', name: { en: 'CSS (Basic)', es: 'CSS (Básico)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  { id: 'hr-sql-advanced', name: { en: 'SQL (Advanced)', es: 'SQL (Avanzado)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  { id: 'hr-sql-intermediate', name: { en: 'SQL (Intermediate)', es: 'SQL (Intermedio)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  { id: 'hr-sql-basic', name: { en: 'SQL (Basic)', es: 'SQL (Básico)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  { id: 'hr-java-basic', name: { en: 'Java (Basic)', es: 'Java (Básico)' }, issuer: 'HackerRank', year: 'Dec 2024' },
  // Udemy — 2024
  { id: 'udemy-docker', name: { en: 'Docker: From Basics to Advanced', es: 'Docker: De Básico a Avanzado' }, issuer: 'Udemy', year: 'Dec 2024' },
  { id: 'udemy-django-covid', name: { en: 'Develop A Live Web App With Python Django', es: 'Desarrollar una App Web con Python Django' }, issuer: 'Udemy', year: 'Dec 2024' },
  { id: 'udemy-sql-concepts', name: { en: 'Learn SQL Concepts', es: 'Conceptos de SQL' }, issuer: 'Udemy', year: 'Dec 2024' },
  { id: 'udemy-git-github', name: { en: 'Learn Git and GitHub From Beginners', es: 'Git y GitHub para Principiantes' }, issuer: 'Udemy', year: 'Nov 2024' },
  { id: 'udemy-cybersec', name: { en: 'Seguridad Informática desde Cero', es: 'Seguridad Informática desde Cero' }, issuer: 'Udemy', year: 'Sep 2024' },
  { id: 'udemy-deepweb', name: { en: 'Anonymity on the Web: Privacy & Deep Web', es: 'Anonimato en la Red: Privacidad y Deep Web' }, issuer: 'Udemy', year: 'Sep 2024' },
  // LinkedIn Learning — 2024
  { id: 'li-cybersecurity-cloud', name: { en: 'Cybersecurity with Cloud Computing', es: 'Ciberseguridad con Computación en la Nube' }, issuer: 'LinkedIn Learning', year: 'Dec 2024' },
  { id: 'li-github-actions', name: { en: 'Practical GitHub Actions', es: 'GitHub Actions en Práctica' }, issuer: 'LinkedIn Learning', year: 'Dec 2024' },
  { id: 'li-agile', name: { en: 'Agile Software Development', es: 'Desarrollo de Software Ágil' }, issuer: 'LinkedIn Learning', year: 'Aug 2024' },
]
