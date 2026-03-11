import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from './ProjectCard'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data/projects'

export function ProjectsView() {
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <Button
          as="a"
          href="/"
          variant="ghost"
          size="sm"
          icon={<ArrowLeft size={15} />}
        >
          {t.portfolio.backHome}
        </Button>
      </motion.div>

      <AnimatedSection>
        <SectionTitle
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />
      </AnimatedSection>

      {projects.length === 0 ? (
        <div className="text-center py-16 text-[var(--text-muted)]">
          <p>No projects available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  )
}
