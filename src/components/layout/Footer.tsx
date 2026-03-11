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
            <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center text-white font-bold text-xs">
              M
            </div>
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
