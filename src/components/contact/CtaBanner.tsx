import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:px-20">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-6 overflow-hidden rounded-2xl bg-[#001134] p-10 sm:flex-row sm:items-center sm:justify-between sm:p-16">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="relative flex max-w-xl flex-col gap-2">
          <span className="font-sans text-xs font-bold tracking-[1.2px] text-accent uppercase">
            2025&ndash;2026 Academic Admissions Open
          </span>
          <h2 className="font-display text-2xl font-bold text-white sm:text-[32px] sm:leading-[40px]">
            Empowering Young Minds with Purpose &amp; Gravity
          </h2>
          <p className="text-base text-[#e7eeff]">
            Book your personalized counseling session today and discover what makes Vidya Peeth
            Schools Karimnagar&rsquo;s foremost institution.
          </p>
        </div>
        <Link
          to="/enquiry"
          className="relative shrink-0 rounded bg-accent px-6 py-2 font-display text-lg font-bold text-accent-dark shadow"
        >
          Schedule Campus Visit
        </Link>
      </div>
    </section>
  )
}
