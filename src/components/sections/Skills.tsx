import { Terminal, Box, Database, Cloud, Globe, Wrench } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { skillCategories, type SkillCategories } from '@/data/skills'

type CategoryKey = keyof SkillCategories

const categoryIcons: Record<CategoryKey, typeof Terminal> = {
  languages:  Terminal,
  frameworks: Box,
  databases:  Database,
  cloud:      Cloud,
  web:        Globe,
  tools:      Wrench,
}

const categoryOrder: CategoryKey[] = ['languages', 'frameworks', 'databases', 'cloud', 'web', 'tools']

export function Skills() {
  const { t } = useLanguage()

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="skills-title"
    >
      <AnimatedSection>
        <SectionTitle
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryOrder.map((key, index) => {
          const Icon = categoryIcons[key]
          const category = skillCategories[key]
          const label = t.skills.categories[key]

          return (
            <AnimatedSection key={key} delay={index * 80} direction="up">
              <Card hover padding="md" className="h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {label}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="tech">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}
