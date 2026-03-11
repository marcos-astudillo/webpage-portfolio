import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    text-white font-semibold
    bg-[var(--accent)] hover:bg-[var(--accent-hover)]
    shadow-[0_4px_14px_var(--accent-glow)]
    hover:shadow-[0_6px_20px_var(--accent-glow)]
    border border-transparent
  `,
  secondary: `
    text-[var(--text-primary)] font-semibold
    bg-[var(--bg-elevated)] hover:bg-[var(--bg-card)]
    border border-[var(--border-color)]
    hover:border-[var(--accent)]
  `,
  ghost: `
    text-[var(--text-secondary)] font-medium
    bg-transparent hover:bg-[var(--accent-subtle)]
    hover:text-[var(--accent)]
    border border-transparent
  `,
  outline: `
    text-[var(--accent)] font-semibold
    bg-transparent hover:bg-[var(--accent-subtle)]
    border border-[var(--accent)]
    hover:border-[var(--accent-hover)]
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-lg cursor-pointer
    transition-all duration-200 ease-in-out
    select-none whitespace-nowrap
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  )

  if ((rest as ButtonAsAnchor).as === 'a') {
    const { as: _as, ...anchorProps } = rest as ButtonAsAnchor
    return (
      <a className={baseClasses} {...anchorProps}>
        {content}
      </a>
    )
  }

  return (
    <button className={baseClasses} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
