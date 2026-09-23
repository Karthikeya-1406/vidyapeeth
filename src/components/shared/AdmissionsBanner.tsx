import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'

interface AdmissionsBannerProps {
  eyebrow: string
  heading: ReactNode
  body: string
  footerNote?: ReactNode
  secondaryLabel?: string
  secondaryTo?: string
  image?: string
  imageCaption?: ReactNode
}

export default function AdmissionsBanner({
  eyebrow,
  heading,
  body,
  footerNote,
  secondaryLabel = 'Contact Us',
  secondaryTo = '/contact',
  image,
  imageCaption,
}: AdmissionsBannerProps) {
  return (
    <section className="bg-surface px-6 py-10 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-3xl bg-brand p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16">
        <div className="absolute -right-20 -bottom-20 size-80 rounded-xl bg-accent/15 blur-3xl" />
        <div className="absolute -top-20 -left-20 size-60 rounded-xl bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-8">
          <div className={`flex flex-col gap-10 ${image ? 'lg:flex-row lg:items-center lg:justify-between' : ''}`}>
            <div className="flex max-w-2xl flex-col items-start gap-4">
              <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent uppercase">
                {eyebrow}
              </span>
              <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="text-base leading-relaxed text-slate-200">{body}</p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button as={NavLink} to="/admissions" icon={<img src={arrowRight} alt="" className="size-4" />}>
                  Apply for Admission
                </Button>
                <NavLink
                  to={secondaryTo}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-xs font-bold tracking-[0.6px] text-white uppercase transition-colors hover:bg-white/10"
                >
                  {secondaryLabel}
                </NavLink>
              </div>
            </div>

            {image && (
              <div className="relative w-full max-w-[320px] shrink-0 self-center overflow-hidden rounded-2xl shadow-2xl">
                <img src={image} alt="" className="aspect-[10/9] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000f2e]/80 via-transparent to-transparent" />
                {imageCaption && <div className="absolute inset-x-4 bottom-4">{imageCaption}</div>}
              </div>
            )}
          </div>

          {footerNote && (
            <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
              {footerNote}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
