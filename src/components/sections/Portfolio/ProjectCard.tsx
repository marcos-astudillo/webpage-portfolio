import { Github, ExternalLink, Tag } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

const statusVariant: Record<Project['status'], 'success' | 'warning' | 'default'> = {
  live: 'success',
  'in-progress': 'warning',
  archived: 'default',
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage()
  const statusKey = project.status === 'in-progress' ? 'inProgress' : project.status

  return (
    <Card hover padding="none" className="overflow-hidden flex flex-col h-full">
      {/* Project Image */}
      {project.image ? (
        <div className="h-44 bg-[var(--bg-elevated)] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-44 bg-gradient-to-br from-[var(--accent-subtle)] to-purple-500/5 flex items-center justify-center">
          <span className="text-4xl font-extrabold text-[var(--accent)]/30 select-none">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[var(--text-primary)] leading-tight">
            {project.title}
          </h3>
          <Badge variant={statusVariant[project.status]} className="flex-shrink-0">
            {t.portfolio.projects.status[statusKey as keyof typeof t.portfolio.projects.status]}
          </Badge>
        </div>

        {/* Year */}
        <p className="text-xs text-[var(--text-muted)] mb-3">{project.year}</p>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">
          {project.description[language]}
        </p>

        {/* Stack */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Tag size={11} className="text-[var(--text-muted)]" />
            <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">
              {t.portfolio.projects.stack}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="tech">{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-3 border-t border-[var(--border-subtle)]">
          {project.links.github && (
            <Button
              as="a"
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              icon={<Github size={14} />}
            >
              {t.portfolio.projects.viewCode}
            </Button>
          )}
          {project.links.demo && (
            <Button
              as="a"
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={<ExternalLink size={14} />}
            >
              {t.portfolio.projects.viewDemo}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
