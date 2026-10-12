import { Link } from 'react-router-dom'

// PLACEHOLDER: shown until the school publishes the approved policy text.
export default function PolicyPlaceholder({ title }: { title: string }) {
  return (
    <section className="bg-surface px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
          Vidhyapeeth Karimnagar
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">{title}</h1>
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10">
          <p className="font-display text-lg font-bold text-brand">Coming soon</p>
          <p className="mt-1 text-sm text-slate-500">
            This page is being prepared and will be published shortly. For any questions in the
            meantime, please{' '}
            <Link to="/contact" className="font-semibold text-brand underline">
              contact the school office
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
