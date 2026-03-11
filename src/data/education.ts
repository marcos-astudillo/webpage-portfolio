// ─────────────────────────────────────────────────────────────
// Education & Certifications Data
// Source: Marcos Astudillo Resume + LinkedIn CV
// ─────────────────────────────────────────────────────────────

export interface EducationItem {
  id: string
  institution: string
  degree: { en: string; es: string }
  field: { en: string; es: string }
  period: { en: string; es: string }
  startDate: string
  endDate: string
  location: string
  gpa?: string
  honours?: boolean
  coursework?: { en: string[]; es: string[] }
  logoColor: string
}

export interface CertificationItem {
  id: string
  name: { en: string; es: string }
  issuer: string
  year?: string
  url?: string
  badge?: string
}

export const education: EducationItem[] = [
  {
    id: 'algonquin',
    institution: 'Algonquin College',
    degree: {
      en: 'Advanced Diploma',
      es: 'Diploma Avanzado',
    },
    field: {
      en: 'Computer Engineering Technology – Computing Science',
      es: 'Tecnología en Ingeniería en Computación – Ciencias de la Computación',
    },
    period: {
      en: 'Sep 2022 – Aug 2024',
      es: 'Sep 2022 – Ago 2024',
    },
    startDate: '2022-09',
    endDate: '2024-08',
    location: 'Ottawa, Ontario, Canada',
    gpa: '3.64 / 4.0',
    honours: true,
    coursework: {
      en: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development', 'Operating Systems', 'Cloud Computing'],
      es: ['Estructuras de Datos', 'Algoritmos', 'Sistemas de Bases de Datos', 'Ingeniería de Software', 'Desarrollo Web', 'Sistemas Operativos', 'Computación en la Nube'],
    },
    logoColor: '#1a472a',
  },
  {
    id: 'duoc-uc',
    institution: 'DUOC UC',
    degree: {
      en: 'Technical Diploma',
      es: 'Diploma Técnico',
    },
    field: {
      en: 'Computer Programming Analysis',
      es: 'Análisis de Programación Computacional',
    },
    period: {
      en: 'Mar 2018 – Jun 2020',
      es: 'Mar 2018 – Jun 2020',
    },
    startDate: '2018-03',
    endDate: '2020-06',
    location: 'Santiago, Chile',
    logoColor: '#003087',
  },
  {
    id: 'inacap',
    institution: 'INACAP',
    degree: {
      en: "Bachelor's Degree",
      es: 'Licenciatura',
    },
    field: {
      en: 'Surveying Engineering',
      es: 'Ingeniería en Topografía',
    },
    period: {
      en: 'Mar 2007 – Dec 2011',
      es: 'Mar 2007 – Dic 2011',
    },
    startDate: '2007-03',
    endDate: '2011-12',
    location: 'Santiago, Chile',
    logoColor: '#8b0000',
  },
]

export const certifications: CertificationItem[] = [
  {
    id: 'sql-advanced',
    name: {
      en: 'SQL (Advanced)',
      es: 'SQL (Avanzado)',
    },
    issuer: 'HackerRank',
    year: '2023',
  },
  {
    id: 'docker-udemy',
    name: {
      en: 'Docker: From Basics to Advanced',
      es: 'Docker: De lo Básico a lo Avanzado',
    },
    issuer: 'Udemy',
    year: '2023',
  },
  {
    id: 'cybersecurity-cloud',
    name: {
      en: 'Cybersecurity with Cloud Computing',
      es: 'Ciberseguridad con Computación en la Nube',
    },
    issuer: 'LinkedIn Learning',
    year: '2023',
  },
  {
    id: 'python-master',
    name: {
      en: 'Master Python Programming',
      es: 'Domina la Programación Python',
    },
    issuer: 'Udemy',
    year: '2022',
  },
]
