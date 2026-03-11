import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, Globe, Code2, ExternalLink } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage, type Language } from '@/context/LanguageContext'
import { NAV_SECTIONS, type NavSection } from '@/config/site'

interface HeaderProps {
  activeSection: NavSection
  onNavClick: (section: NavSection) => void
}

export function Header({ activeSection, onNavClick }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()
  const isPortfolioPage = location.pathname === '/portfolio'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleNavClick = (section: NavSection) => {
    onNavClick(section)
    setIsMobileMenuOpen(false)
  }

  const handleLangSwitch = (lang: Language) => {
    setLanguage(lang)
    setIsLangOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group"
              aria-label="Marcos Astudillo — Home"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
                M
              </div>
              <span className="font-bold text-[var(--text-primary)] hidden sm:block">
                Marcos<span className="text-[var(--accent)]">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            {!isPortfolioPage && (
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {NAV_SECTIONS.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg
                      transition-all duration-200
                      ${activeSection === section
                        ? 'text-[var(--accent)] bg-[var(--accent-subtle)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                      }
                    `}
                    aria-current={activeSection === section ? 'page' : undefined}
                  >
                    {t.nav[section]}
                    {activeSection === section && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--accent)] rounded-full" />
                    )}
                  </button>
                ))}
              </nav>
            )}

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Portfolio Link */}
              <Link
                to="/portfolio"
                className={`
                  hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg
                  border border-[var(--border-color)]
                  text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]
                  transition-all duration-200
                  ${isPortfolioPage ? 'text-[var(--accent)] border-[var(--accent)] bg-[var(--accent-subtle)]' : ''}
                `}
              >
                <Code2 size={14} />
                {t.nav.portfolio}
                {!isPortfolioPage && <ExternalLink size={11} className="opacity-50" />}
              </Link>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
                  aria-label={t.nav.toggleTheme}
                  aria-expanded={isLangOpen}
                >
                  <Globe size={16} />
                  <span className="uppercase font-semibold text-xs">{language}</span>
                </button>

                {isLangOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLangOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-1 z-20 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-[var(--shadow-lg)] overflow-hidden min-w-[120px]">
                      {(['en', 'es'] as Language[]).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleLangSwitch(lang)}
                          className={`
                            w-full px-4 py-2.5 text-sm text-left
                            transition-colors duration-150
                            ${language === lang
                              ? 'text-[var(--accent)] bg-[var(--accent-subtle)] font-medium'
                              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]'
                            }
                          `}
                        >
                          {lang === 'en' ? '🇺🇸 English' : '🇪🇸 Español'}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
                aria-label={t.nav.toggleTheme}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              {!isPortfolioPage && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
                  aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 menu-backdrop md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-16 left-0 right-0 z-40 md:hidden
          bg-[var(--bg-card)] border-b border-[var(--border-color)]
          shadow-[var(--shadow-lg)]
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`
                px-4 py-3 text-sm font-medium rounded-lg text-left
                transition-all duration-200
                ${activeSection === section
                  ? 'text-[var(--accent)] bg-[var(--accent-subtle)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }
              `}
            >
              {t.nav[section]}
            </button>
          ))}
          <Link
            to="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-all duration-200 mt-1 border-t border-[var(--border-color)] pt-3"
          >
            <Code2 size={15} />
            {t.nav.portfolio}
          </Link>
        </nav>
      </div>
    </>
  )
}
