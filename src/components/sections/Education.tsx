import { GraduationCap, Calendar, Star, Award, BookOpen } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { education, certifications } from '@/data/education'

export function Education() {
  const { t, language } = useLanguage()

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="education-title"
    >
      <AnimatedSection>
        <SectionTitle
          title={t.education.title}
          subtitle={t.education.subtitle}
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Education Column */}
        <div className="lg:col-span-2 space-y-5">
          {education.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <Card hover padding="md">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${item.logoColor}20` }}
                  >
                    <GraduationCap size={20} style={{ color: item.logoColor }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-1">
                      <h3 className="text-base font-bold text-[var(--text-primary)] leading-tight">
                        {item.institution}
                      </h3>
                      {item.honours && (
                        <Badge variant="success">
                          <Star size={10} className="mr-1" />
                          {t.education.honours}
                        </Badge>
                      )}
                    </div>

                    <p className="text-[var(--accent)] text-sm font-semibold">
                      {item.degree[language]}
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm mb-2">
                      {item.field[language]}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {item.period[language]}
                      </span>
                      <span>{item.location}</span>
                      {item.gpa && (
                        <span className="font-semibold text-[var(--text-secondary)]">
                          {t.education.gpa}: {item.gpa}
                        </span>
                      )}
                    </div>

                    {/* Coursework */}
                    {item.coursework && (
                      <div>
                        <p className="text-xs text-[var(--text-muted)] font-medium mb-1.5">
                          {t.education.relevant}:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework[language].map((course) => (
                            <Badge key={course} variant="tech">{course}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-1">
          <AnimatedSection delay={200} direction="right">
            <div className="flex items-center gap-2 mb-4">
              <Award size={17} className="text-[var(--accent)]" />
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-widest">
                {t.education.certifications}
              </h3>
            </div>

            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
              {certifications.map((cert, index) => (
                <AnimatedSection key={cert.id} delay={300 + index * 80}>
                  <Card hover padding="sm">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0">
                        <BookOpen size={14} className="text-[var(--accent)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                          {cert.name[language]}
                        </p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">
                          {cert.issuer}
                          {cert.year && ` · ${cert.year}`}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
