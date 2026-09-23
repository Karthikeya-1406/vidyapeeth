import { Link } from 'react-router-dom'

export default function Breadcrumb() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-2 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-2">
        <nav className="flex items-center gap-1 text-xs text-slate-600">
          <Link to="/" className="hover:text-brand">
            Home
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <Link to="/admissions" className="hover:text-brand">
            Admissions
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <span className="font-semibold text-brand">Online Enquiry &amp; Consultation</span>
        </nav>
        <span className="flex items-center gap-1 text-xs font-semibold text-accent-dark">
          <span className="size-2 rounded-full bg-accent" />
          Admissions Open for Academic Year 2025&ndash;26
        </span>
      </div>
    </section>
  )
}
