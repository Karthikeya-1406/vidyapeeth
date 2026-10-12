import { useState } from 'react'
import { testimonials } from '../../data/testimonials'

const approved = testimonials.filter((t) => t.approved && t.parentName && t.grade)

function NavButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand transition-colors hover:border-brand focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-4 ${direction === 'prev' ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  )
}

export default function ParentTrust() {
  const [index, setIndex] = useState(0)

  const current = approved[index]
  const hasMany = approved.length > 1
  const prev = () => setIndex((i) => (i - 1 + approved.length) % approved.length)
  const next = () => setIndex((i) => (i + 1) % approved.length)

  return (
    <section className="bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            What parents value at Vidhyapeeth
          </span>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">Parent Testimonials</h2>
        </div>

        {/* Shown until at least one parent has approved a testimonial. */}
        {!current ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
            <p className="font-display text-lg font-bold text-brand">Testimonials coming soon</p>
            <p className="mt-1 text-sm text-slate-500">
              Experiences shared by Vidhyapeeth parents will appear here.
            </p>
          </div>
        ) : (
          <div
            role="group"
            aria-roledescription={hasMany ? 'carousel' : undefined}
            aria-label="Parent testimonials"
            onKeyDown={(event) => {
              if (!hasMany) return
              if (event.key === 'ArrowLeft') prev()
              if (event.key === 'ArrowRight') next()
            }}
            className="relative mt-8 flex flex-col items-center gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(10,37,86,0.12)] sm:p-14"
          >
            <span aria-hidden className="font-serif text-5xl leading-none text-accent">
              &ldquo;
            </span>
            <figure className="flex flex-col items-center gap-6" aria-live="polite">
              <blockquote className="text-center text-lg leading-relaxed font-medium text-slate-700 sm:text-xl">
                {current.quote}
              </blockquote>
              <figcaption className="flex flex-col items-center gap-1">
                {current.photo && (
                  <div className="size-14 overflow-hidden rounded-full border-2 border-accent">
                    <img src={current.photo} alt="" className="size-full object-cover" />
                  </div>
                )}
                <span className="font-display text-base font-bold text-brand">{current.parentName}</span>
                <span className="text-xs text-slate-500">
                  Parent of {current.grade} Student, Vidhyapeeth Karimnagar
                </span>
              </figcaption>
            </figure>
  
            {hasMany && (
              <div className="flex items-center gap-4">
                <NavButton direction="prev" onClick={prev} />
                <div className="flex items-center gap-2">
                  {approved.map((t, i) => (
                    <button
                      key={t.parentName + i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show testimonial ${i + 1} of ${approved.length}`}
                      aria-current={i === index}
                      className="flex h-6 items-center"
                    >
                      <span
                        className={`block h-2 rounded-full transition-all ${
                          i === index ? 'w-6 bg-brand' : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <NavButton direction="next" onClick={next} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
