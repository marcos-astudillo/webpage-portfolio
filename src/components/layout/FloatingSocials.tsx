import { Linkedin, Github, Mail, MessageSquare } from 'lucide-react'
import { SITE_CONFIG, type NavSection } from '@/config/site'

interface FloatingSocialsProps {
  onNavClick: (section: NavSection) => void
}

export function FloatingSocials({ onNavClick }: FloatingSocialsProps) {
  const links = [
    { icon: Linkedin, href: SITE_CONFIG.linkedin, label: 'LinkedIn' },
    { icon: Github,   href: SITE_CONFIG.github,   label: 'GitHub'   },
    { icon: Mail,     href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
  ]

  return (
    <div className="fixed left-5 bottom-0 z-30 hidden lg:flex flex-col items-center gap-3">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          className="
            w-10 h-10 rounded-xl
            bg-[var(--bg-card)] border border-[var(--border-color)]
            flex items-center justify-center
            text-[var(--text-muted)] hover:text-[var(--accent)]
            hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)]
            transition-all duration-200 shadow-sm
          "
        >
          <Icon size={17} />
        </a>
      ))}

      <button
        onClick={() => onNavClick('contact')}
        aria-label="Go to Contact"
        className="
          w-10 h-10 rounded-xl
          bg-[var(--accent)] text-white
          flex items-center justify-center
          hover:bg-[var(--accent-hover)]
          transition-all duration-200 shadow-sm
        "
      >
        <MessageSquare size={17} />
      </button>

      {/* vertical line to bottom */}
      <div className="w-px h-16 bg-[var(--border-color)]" />
    </div>
  )
}
