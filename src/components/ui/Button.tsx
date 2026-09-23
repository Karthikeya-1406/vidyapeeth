import type { ElementType, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  as?: ElementType
  variant?: ButtonVariant
  icon?: ReactNode
  className?: string
  children?: ReactNode
  [key: string]: unknown
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-brand hover:bg-accent-dark shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]',
  secondary:
    'bg-white text-brand border border-slate-200 hover:border-brand',
  ghost: 'bg-transparent text-brand hover:bg-slate-100',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  icon,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-display text-xs font-bold tracking-[0.6px] uppercase transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </Component>
  )
}
