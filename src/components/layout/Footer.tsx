import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SITE_CONFIG } from '@/config/site'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-card)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 44" fill="none" width="28" height="21" aria-hidden="true" className="text-[var(--accent)]">
              <path d="M5 40 L5 5 L20 27 L35 5 L50 40" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter"/>
              <line x1="24" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/>
            </svg>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              Marcos Astudillo
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 flex-wrap justify-center">
            {t.footer.madeWith}
            <Heart size={12} className="text-red-400 fill-red-400" />
            {t.footer.by} Marcos Astudillo · © {year} · {t.footer.rights}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
