import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ComingSoon } from '@/components/sections/Portfolio/ComingSoon'
import { ProjectsView } from '@/components/sections/Portfolio'
import { PORTFOLIO_MODE } from '@/config/site'

export function PortfolioPage() {
  // Update SEO title for portfolio route
  useEffect(() => {
    document.title = 'Portfolio | Marcos Astudillo'
    return () => {
      document.title = 'Marcos Astudillo | Full-Stack Developer & Software Engineer'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1"
    >
      {PORTFOLIO_MODE === 'coming-soon' ? <ComingSoon /> : <ProjectsView />}
    </motion.div>
  )
}
