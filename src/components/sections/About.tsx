import { Code2, Database, Cloud, Users } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { useLanguage } from '@/context/LanguageContext'

const statsData = [
  { value: '4+', key: 'years', icon: '🗓' },
  { value: '10+', key: 'projects', icon: '🚀' },
  { value: '3+', key: 'clients', icon: '🤝' },
] as const

const highlightIcons = [Code2, Database, Cloud, Users]

export function About() {
  const { t } = useLanguage()

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="about-title"
    >
      <AnimatedSection>
        <SectionTitle
          title={t.about.title}
          subtitle={t.about.subtitle}
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

        {/* Bio Column */}
        <div className="lg:col-span-3 space-y-5">
          {t.about.bio.map((paragraph, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}

          {/* Highlights */}
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap gap-2 pt-4">
              {t.about.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index]
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-subtle)]"
                  >
                    {Icon && <Icon size={13} />}
                    {highlight}
                  </span>
                )
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-2">
          <AnimatedSection direction="right" delay={100}>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {statsData.map(({ value, key, icon }) => (
                <Card key={key} hover className="text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{icon}</span>
                    <div>
                      <p className="text-3xl lg:text-4xl font-extrabold text-[var(--accent)] leading-none">
                        {value}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-snug">
                        {t.about.stats[key]}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Info Card */}
            <Card className="mt-4" padding="md">
              <dl className="space-y-3">
                <div className="flex items-start gap-3">
                  <dt className="text-[var(--text-muted)] text-sm w-20 flex-shrink-0">📍</dt>
                  <dd className="text-sm text-[var(--text-secondary)]">Ottawa, Ontario, Canada</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="text-[var(--text-muted)] text-sm w-20 flex-shrink-0">🌐</dt>
                  <dd className="text-sm text-[var(--text-secondary)]">English · Spanish (Native)</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="text-[var(--text-muted)] text-sm w-20 flex-shrink-0">🎓</dt>
                  <dd className="text-sm text-[var(--text-secondary)]">Algonquin College · Honours</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="text-[var(--text-muted)] text-sm w-20 flex-shrink-0">✅</dt>
                  <dd className="text-sm font-medium text-emerald-400">
                    Open to opportunities
                  </dd>
                </div>
              </dl>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
