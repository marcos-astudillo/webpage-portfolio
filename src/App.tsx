import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { type NavSection } from '@/config/site'

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home')
  const location = useLocation()

  const handleNavClick = (section: NavSection) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout activeSection={activeSection} onNavClick={handleNavClick}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <HomePage
                activeSection={activeSection}
                onNavClick={handleNavClick}
              />
            }
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="flex-1 flex items-center justify-center min-h-[50vh] text-center px-4">
                <div>
                  <p className="text-8xl font-extrabold text-[var(--accent)]/20 mb-4">404</p>
                  <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Page not found</h1>
                  <p className="text-[var(--text-muted)] mb-6">The page you're looking for doesn't exist.</p>
                  <a
                    href="/"
                    className="text-[var(--accent)] hover:underline text-sm font-medium"
                  >
                    ← Back to Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
