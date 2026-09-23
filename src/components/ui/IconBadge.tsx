interface IconBadgeProps {
  children: React.ReactNode
  className?: string
}

export default function IconBadge({ children, className = '' }: IconBadgeProps) {
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-brand ${className}`}
    >
      {children}
    </div>
  )
}
