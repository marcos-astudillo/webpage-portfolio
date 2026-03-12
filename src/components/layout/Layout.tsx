import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingSocials } from './FloatingSocials'
import { type NavSection } from '@/config/site'

interface LayoutProps {
  children: ReactNode
  activeSection: NavSection
  onNavClick: (section: NavSection) => void
}

export function Layout({ children, activeSection, onNavClick }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] transition-colors duration-300">
      <Header activeSection={activeSection} onNavClick={onNavClick} />
      <FloatingSocials onNavClick={onNavClick} />
      <main className="flex-1 flex flex-col pt-16" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
