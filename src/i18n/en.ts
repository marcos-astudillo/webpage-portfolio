import type { Translations } from './types'

export const en: Translations = {
  nav: {
    home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience',
    education: 'Education', contact: 'Contact', portfolio: 'Portfolio',
    toggleTheme: 'Toggle theme', openMenu: 'Open menu', closeMenu: 'Close menu',
  },
  hero: {
    greeting: "Hi, I'm", name: 'Marcos Astudillo',
    title: 'Full-Stack Developer', subtitle: 'Software Engineer · Backend Specialist',
    intro: 'Building scalable web applications with TypeScript, Node.js, and React. Focused on clean architecture, REST API design, and high-performance production systems.',
    cta: { contact: 'Get in Touch', resume: 'Download Resume', resumeBtn: 'Resume', cvBtn: 'CV', portfolio: 'View Portfolio' },
    social: { github: 'GitHub Profile', linkedin: 'LinkedIn Profile' },
    location: 'Ottawa, Ontario, Canada', available: 'Open to opportunities',
  },
  about: {
    title: 'About Me', subtitle: 'A bit about who I am and what drives me',
    bio: [
      "I'm a Full-Stack Developer and Software Engineer with a Computer Engineering Technology – Computing Science diploma (Honours) from Algonquin College, Canada. I specialize in building scalable applications using Node.js, TypeScript, React, and Python.",
      'My experience spans customer platforms, interactive dashboards, e-commerce solutions, and data visualization tools — always focused on clean architecture, reliable REST APIs, and maintainable code.',
      'I enjoy solving complex technical problems and building systems that perform well in production. My interests include backend engineering, cloud platforms, microservices architecture, and high-performance applications.',
    ],
    stats: { years: 'Years of Experience', projects: 'Projects Delivered', clients: 'Clients Served' },
    highlights: ['Clean architecture advocate', 'REST API design expert', 'Agile / SCRUM practitioner', 'Continuous learner'],
  },
  skills: {
    title: 'Tech Stack', subtitle: 'Technologies and tools I work with',
    categories: { languages: 'Programming Languages', frameworks: 'Frameworks & Libraries', databases: 'Databases', cloud: 'Cloud & DevOps', web: 'Web Technologies', tools: 'Tools & Methodologies', ai: 'AI & Data Engineering', testing: 'Testing & QA' },
  },
  experience: { title: 'Work Experience', subtitle: 'My professional journey', present: 'Present', keyAchievements: 'Key Achievements', remote: 'Remote', onsite: 'On-site' },
  education: { title: 'Education & Certifications', subtitle: 'Academic background and continuous learning', gpa: 'GPA', honours: 'Honours', relevant: 'Relevant Coursework', certifications: 'Certifications' },
  contact: {
    title: 'Get in Touch', subtitle: "I'm currently open to freelance projects and full-time opportunities. Whether you have a project in mind or just want to connect, my inbox is always open.",
    formTitle: 'Send me a message',
    form: { name: 'Your Name', namePlaceholder: 'John Smith', email: 'Email Address', emailPlaceholder: 'john@example.com', subject: 'Subject', subjectPlaceholder: "Let's talk about...", message: 'Message', messagePlaceholder: 'Tell me about your project or how I can help...', submit: 'Send Message', submitting: 'Sending...' },
    success: { title: 'Message Sent!', message: "Thanks for reaching out. I'll get back to you as soon as possible." },
    error: { title: 'Something went wrong', message: 'Please try again or email me directly at m.astudillo1986@gmail.com' },
    validation: { nameRequired: 'Name is required', emailRequired: 'Email is required', emailInvalid: 'Please enter a valid email address', subjectRequired: 'Subject is required', messageRequired: 'Message is required', messageTooShort: 'Message must be at least 10 characters' },
    captcha: { label: 'Verify you are human', placeholder: 'Your answer', invalid: 'Incorrect answer — please try again' },
    info: { email: 'Email', phone: 'Phone', location: 'Location', availability: 'Availability', availabilityValue: 'Open to opportunities', locationBadges: { remote: 'Remote-friendly', relocation: 'Open to relocation', onsite: 'On-site available', hybrid: 'Hybrid' } },
  },
  portfolio: {
    title: 'Portfolio', subtitle: 'Selected projects and work',
    comingSoon: { title: 'Coming Soon', message: "I'm currently curating my best work to showcase here. Check back soon for projects, case studies, and demos.", cta: "In the meantime, check my GitHub" },
    projects: { viewCode: 'View Code', viewDemo: 'Live Demo', stack: 'Stack', status: { live: 'Live', inProgress: 'In Progress', archived: 'Archived' } },
    backHome: 'Back to Home',
  },
  footer: { madeWith: 'Built with', by: 'by', rights: 'All rights reserved.', links: { privacy: 'Privacy', contact: 'Contact' } },
  common: { downloadResume: 'Download Resume', viewPortfolio: 'View Portfolio', learnMore: 'Learn More', close: 'Close', loading: 'Loading...', seeAll: 'See All', backToTop: 'Back to Top' },
}
