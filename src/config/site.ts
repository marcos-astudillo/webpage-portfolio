// ─────────────────────────────────────────────────────────────
// Site Configuration
// Central place for site-wide settings and constants
// ─────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'Marcos Astudillo',
  title: 'Full-Stack Developer | Software Engineer',
  domain: 'marcosastudillo.com',
  url: 'https://marcosastudillo.com',
  email: 'm.astudillo1986@gmail.com',
  phone: '+1 (613) 501 4176',
  location: 'Ottawa, Ontario, Canada',
  github: 'https://github.com/marcos-astudillo',
  linkedin: 'https://linkedin.com/in/marcos-astudillo-c',
} as const

// ─────────────────────────────────────────────────────────────
// Asset Paths
// ─────────────────────────────────────────────────────────────
export const ASSETS = {
  profileImage: '/assets/images/profile.png',
  resumeEn: '/assets/resume/marcos-astudillo-resume-en.pdf',
  resumeEs: '/assets/resume/marcos-astudillo-resume-es.pdf',
  ogImage: '/assets/images/og-image.jpg',
} as const

// ─────────────────────────────────────────────────────────────
// Navigation Items
// ─────────────────────────────────────────────────────────────
export type NavSection = 'home' | 'about' | 'skills' | 'experience' | 'education' | 'contact'

export const NAV_SECTIONS: NavSection[] = [
  'home',
  'about',
  'skills',
  'experience',
  'education',
  'contact',
]
