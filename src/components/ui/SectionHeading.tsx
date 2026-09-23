interface SectionHeadingProps {
  eyebrow: string
  heading: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-2 ${alignClasses} ${className}`}>
      <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.5px] text-brand sm:text-4xl lg:text-5xl lg:tracking-[-1.2px]">
        {heading}
      </h2>
      {description && (
        <p className="max-w-2xl pt-1 text-base text-slate-600">{description}</p>
      )}
    </div>
  )
}
