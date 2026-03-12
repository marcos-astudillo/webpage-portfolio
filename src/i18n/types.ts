// Shared translation interface — string values allow any language
export interface Translations {
  nav: {
    home: string; about: string; skills: string; experience: string
    education: string; contact: string; portfolio: string
    toggleTheme: string; openMenu: string; closeMenu: string
  }
  hero: {
    greeting: string; name: string; title: string; subtitle: string; intro: string
    cta: { contact: string; resume: string; portfolio: string }
    social: { github: string; linkedin: string }
    location: string; available: string
  }
  about: {
    title: string; subtitle: string; bio: string[]
    stats: { years: string; projects: string; clients: string }
    highlights: string[]
  }
  skills: {
    title: string; subtitle: string
    categories: { languages: string; frameworks: string; databases: string; cloud: string; web: string; tools: string; ai: string; testing: string }
  }
  experience: { title: string; subtitle: string; present: string; keyAchievements: string; remote: string }
  education: { title: string; subtitle: string; gpa: string; honours: string; relevant: string; certifications: string }
  contact: {
    title: string; subtitle: string; formTitle: string
    form: { name: string; namePlaceholder: string; email: string; emailPlaceholder: string; subject: string; subjectPlaceholder: string; message: string; messagePlaceholder: string; submit: string; submitting: string }
    success: { title: string; message: string }
    error: { title: string; message: string }
    validation: { nameRequired: string; emailRequired: string; emailInvalid: string; subjectRequired: string; messageRequired: string; messageTooShort: string }
    captcha: { label: string; placeholder: string; invalid: string }
    info: { email: string; phone: string; location: string; availability: string; availabilityValue: string; locationBadges: { remote: string; relocation: string; onsite: string } }
  }
  portfolio: {
    title: string; subtitle: string
    comingSoon: { title: string; message: string; cta: string }
    projects: { viewCode: string; viewDemo: string; stack: string; status: { live: string; inProgress: string; archived: string } }
    backHome: string
  }
  footer: { madeWith: string; by: string; rights: string; links: { privacy: string; contact: string } }
  common: { downloadResume: string; viewPortfolio: string; learnMore: string; close: string; loading: string; seeAll: string; backToTop: string }
}
