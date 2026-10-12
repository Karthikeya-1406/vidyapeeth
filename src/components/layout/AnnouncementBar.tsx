const SURVEY_URL = 'https://forms.gle/3YV7mUj3ABmieLQv6'

export default function AnnouncementBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 px-4 sm:px-6">
      <a
        href={SURVEY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Parent survey: share your feedback (opens Google Form in a new tab)"
        className="group pointer-events-auto mx-auto flex max-w-[1360px] items-center justify-between gap-3 rounded-full border border-accent-dark/20 bg-gradient-to-r from-amber-50 via-[#fdf8e7] to-amber-50 py-2.5 pr-2.5 pl-5 shadow-[0_15px_35px_-10px_rgba(10,37,86,0.35)] transition-shadow hover:shadow-[0_18px_40px_-10px_rgba(10,37,86,0.45)] sm:pl-6"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="text-2xl" aria-hidden>
            📝
          </span>
          <span className="min-w-0">
            <span className="block font-script text-lg leading-none text-brand">Dear Parents,</span>
            <span className="mt-1 block truncate text-xs text-slate-600 sm:text-sm">
              Help us serve your child better &mdash; share your feedback in our 2-minute survey.
            </span>
          </span>
        </span>

        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 font-sans text-xs font-semibold text-white transition-colors group-hover:bg-brand/90 sm:text-sm">
          Take Survey
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </a>
    </div>
  )
}
