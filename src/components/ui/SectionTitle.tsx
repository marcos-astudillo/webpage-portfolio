import { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionTitle({ title, subtitle, align = 'left', children }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="block w-8 h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
