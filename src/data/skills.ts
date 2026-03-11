// ─────────────────────────────────────────────────────────────
// Skills & Tech Stack Data
// Source: Marcos Astudillo Resume
// ─────────────────────────────────────────────────────────────

export interface SkillCategory {
  id: string
  icon: string
  skills: string[]
}

export interface SkillCategories {
  languages: SkillCategory
  frameworks: SkillCategory
  databases: SkillCategory
  cloud: SkillCategory
  web: SkillCategory
  tools: SkillCategory
}

export const skillCategories: SkillCategories = {
  languages: {
    id: 'languages',
    icon: '{}',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  frameworks: {
    id: 'frameworks',
    icon: '⚛',
    skills: ['Node.js', 'Express.js', 'React', 'Next.js', 'Django'],
  },
  databases: {
    id: 'databases',
    icon: '🗄',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  cloud: {
    id: 'cloud',
    icon: '☁',
    skills: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Jenkins'],
  },
  web: {
    id: 'web',
    icon: '🌐',
    skills: ['REST APIs', 'HTML5', 'CSS3', 'Swagger/OpenAPI', 'JSON', 'Microservices'],
  },
  tools: {
    id: 'tools',
    icon: '🛠',
    skills: ['Git', 'GitHub', 'Postman', 'Linux', 'Agile/SCRUM', 'Jira', 'VS Code'],
  },
}

// Featured / highlighted skills for hero or about section
export const featuredSkills = [
  'TypeScript',
  'Node.js',
  'React',
  'PostgreSQL',
  'Docker',
  'AWS',
]
