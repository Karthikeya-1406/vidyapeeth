import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 px-4 sm:px-6">
      <Link
        to="/admissions"
        className="group pointer-events-auto mx-auto mt-3 flex w-fit max-w-full items-center gap-3 rounded-full border border-accent-dark/20 bg-gradient-to-r from-amber-50 via-[#fdf8e7] to-amber-50 py-1.5 pr-1.5 pl-4 shadow-[0_15px_35px_-10px_rgba(10,37,86,0.35)] transition-shadow hover:shadow-[0_18px_40px_-10px_rgba(10,37,86,0.45)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:pl-5"
      >
        <span className="min-w-0 truncate font-display text-xs font-bold tracking-[0.4px] text-brand sm:text-sm">
          Admissions Open 2027&ndash;28
          <span className="px-2 text-accent-dark" aria-hidden>
            |
          </span>
          <span className="sr-only">for </span>
          Grade 1 to Grade X
        </span>

        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 font-sans text-xs font-semibold text-white transition-colors group-hover:bg-brand/90">
          Admissions
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </Link>
    </div>
  )
}
