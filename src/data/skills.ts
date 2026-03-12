// Skills & Tech Stack Data - Merged from all resumes
export interface SkillCategory { id: string; icon: string; skills: string[] }
export interface SkillCategories {
  languages: SkillCategory; frameworks: SkillCategory; databases: SkillCategory
  cloud: SkillCategory; web: SkillCategory; tools: SkillCategory
  ai: SkillCategory; testing: SkillCategory
}

export const skillCategories: SkillCategories = {
  languages: {
    id: 'languages', icon: '{}',
    skills: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Java', 'C#', 'SQL', 'NoSQL', 'PL/SQL', 'Smalltalk'],
  },
  frameworks: {
    id: 'frameworks', icon: 'box',
    skills: ['Laravel', 'Node.js', 'Express.js', 'React', 'Angular', 'Vue 3', 'Next.js', 'Django', 'Flask', 'Tailwind CSS', 'Bootstrap'],
  },
  databases: {
    id: 'databases', icon: 'db',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Supabase'],
  },
  cloud: {
    id: 'cloud', icon: 'cloud',
    skills: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins'],
  },
  web: {
    id: 'web', icon: 'globe',
    skills: ['REST APIs', 'HTML5', 'CSS3', 'Swagger/OpenAPI', 'JSON', 'YAML', 'Microservices', 'JWT'],
  },
  tools: {
    id: 'tools', icon: 'tool',
    skills: ['Git', 'GitHub', 'Postman', 'Linux', 'macOS', 'Agile/SCRUM', 'VS Code', 'VMware', 'ETL Workflows'],
  },
  ai: {
    id: 'ai', icon: 'brain',
    skills: ['Data Engineering', 'ETL Workflows', 'Big Data Analytics', 'LLMs (knowledge of)', 'Data-Driven Solutions'],
  },
  testing: {
    id: 'testing', icon: 'test',
    skills: ['pytest', 'unittest', 'Test Automation', 'Software Validation', 'Postman API Testing'],
  },
}

export const featuredSkills = [
  'TypeScript', 'Node.js', 'React', 'Laravel', 'PostgreSQL', 'Docker', 'AWS', 'Python',
]
