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
        ${hover ? 'hover:border-[var(--accent)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300 cursor-default' : ''}
        ${paddingStyles[padding]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
