import { MapPin, Calendar, CheckCircle2, Wifi, Building2 } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { experience } from '@/data/experience'

export function Experience() {
  const { t, language } = useLanguage()

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="experience-title"
    >
      <AnimatedSection>
        <SectionTitle
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
      </AnimatedSection>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--accent) 0%, var(--border-color) 80%, transparent 100%)' }}
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <AnimatedSection key={job.id} delay={index * 100} direction="left">
              <div className="relative pl-16 sm:pl-20">
                {/* Timeline Dot */}
                <div
                  className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] z-10 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />

                <Card hover padding="md">
                  {/* Header */}
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-tight">
                        {job.role[language]}
                      </h3>
                      <p className="text-[var(--accent)] font-semibold text-sm mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <Badge variant="accent" className="flex-shrink-0">
                      {job.type[language]}
                    </Badge>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {job.period[language]}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {job.location[language]}
                    </span>
                    {job.remote ? (
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Wifi size={13} />
                        {t.experience.remote}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Building2 size={13} />
                        {t.experience.onsite}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {job.description[language]}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-2.5">
                      {t.experience.keyAchievements}
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements[language].map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                    {job.tech.map((tech) => (
                      <Badge key={tech} variant="tech">{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
