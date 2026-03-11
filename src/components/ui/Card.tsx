import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
}

export function Card({
  children,
  hover = false,
  className = '',
  padding = 'md',
  ...rest
}: CardProps) {
  return (
    <div
      className={`
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        rounded-xl
        shadow-[var(--shadow-sm)]
        ${hover ? 'hover:border-[var(--accent-subtle)] hover:shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-0.5' : ''}
        ${paddingStyles[padding]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
