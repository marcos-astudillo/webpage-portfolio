import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'tech'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-color)]',
  accent:  'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent-subtle)]',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  danger:  'bg-red-500/10 text-red-400 border-red-500/20',
  tech:    'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] font-mono text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1 rounded-md
        text-xs font-medium border
        ${variantStyles[variant]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </span>
  )
}
