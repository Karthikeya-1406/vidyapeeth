export default function IntegrityBanner() {
  return (
    <section className="bg-[#e7eeff] px-6 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-6 rounded-lg bg-white p-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-xl">⚖️</span>
          <div>
            <h3 className="font-display text-xl font-bold text-brand">Need Clarification on Hiring Protocols?</h3>
            <p className="text-sm text-slate-600">
              Speak directly to our HR Secretariat at Karimnagar Campus for current recruitment schedules.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:09346002121"
            className="flex items-center gap-1 rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white"
          >
            📞 Call 09346002121
          </a>
          <a
            href="mailto:ahps5103@academicheights.in"
            className="flex items-center gap-1 rounded-sm bg-[#e7eeff] px-4 py-2.5 text-sm font-semibold text-brand"
          >
            ✉️ Email Secretariat
          </a>
        </div>
      </div>
    </section>
  )
}
