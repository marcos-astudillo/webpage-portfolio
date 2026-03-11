import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import type { NavSection } from '@/config/site'

interface HomePageProps {
  activeSection: NavSection
  onNavClick: (section: NavSection) => void
}

const sectionComponents: Record<NavSection, React.ComponentType<{ onNavClick?: (s: NavSection) => void }>> = {
  home:       Hero as React.ComponentType<{ onNavClick?: (s: NavSection) => void }>,
  about:      About,
  skills:     Skills,
  experience: Experience,
  education:  Education,
  contact:    Contact,
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

const pageTransition = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1],
}

export function HomePage({ activeSection, onNavClick }: HomePageProps) {
  const ActiveComponent = sectionComponents[activeSection]

  return (
    <div className="flex-1 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="flex-1"
        >
          <ActiveComponent onNavClick={onNavClick} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
