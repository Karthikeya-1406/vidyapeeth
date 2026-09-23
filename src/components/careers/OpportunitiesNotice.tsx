export default function OpportunitiesNotice() {
  return (
    <section id="open-calls" className="relative overflow-hidden bg-[#001134] px-6 py-16 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between opacity-10">
        <span className="size-96 rounded-xl bg-white blur-3xl" />
        <span className="size-80 rounded-xl bg-accent blur-2xl" />
      </div>
      <div className="relative mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-3 lg:col-span-7">
          <span className="flex w-fit items-center gap-2 rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.48px] text-accent-light">
            📣 INSTITUTIONAL VACANCY DESK
          </span>
          <h2 className="font-display text-3xl font-bold tracking-[-0.5px] text-white sm:text-4xl lg:text-[44px]">
            Career Opportunities &amp; Active Hiring Roster
          </h2>
          <p className="max-w-xl text-lg text-[#d9e2ff]">
            In compliance with our institutional governance, current vacancies for teaching, administrative, and
            pastoral roles are managed directly through the Head Office and Central Secretariat. Contact the school
            administration for active department roster status and upcoming academic session openings.
          </p>
          <p className="rounded-sm bg-white/5 p-2 text-xs text-[#b0c6ff]">
            Vidya Peeth Schools follows fair merit-based selection. All appointments are formalized under CBSE
            statutory standards and State Education Board norms.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-2xl lg:col-span-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-brand">Office of the Administrator</h3>
            <span className="rounded-sm bg-[#e7eeff] px-2 py-0.5 text-xs text-brand">Karimnagar</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2 rounded-sm bg-[#f0f3ff] p-2">
              <span className="flex size-8 items-center justify-center rounded-sm bg-brand text-accent">📞</span>
              <div>
                <p className="text-xs text-slate-500">Direct Telephonic Helpline</p>
                <p className="font-display text-lg font-bold text-brand">09346002121</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-sm bg-[#f0f3ff] p-2">
              <span className="flex size-8 items-center justify-center rounded-sm bg-brand text-accent">✉️</span>
              <div>
                <p className="text-xs text-slate-500">Dedicated Secretariat Email</p>
                <p className="font-semibold break-all text-brand">ahps5103@academicheights.in</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-sm bg-[#f0f3ff] p-2">
              <span className="flex size-8 items-center justify-center rounded-sm bg-brand text-accent">🕐</span>
              <div>
                <p className="text-xs text-slate-500">Administrative Consultation Hours</p>
                <p className="text-sm font-medium text-[#101c2f]">Mon–Sat: 8:00 AM – 2:00 PM IST</p>
              </div>
            </div>
          </div>
          <a
            href="#resume-form"
            className="rounded-sm bg-brand py-3 text-center font-sans text-sm font-semibold text-white shadow-sm"
          >
            CONNECT WITH RECRUITMENT DESK
          </a>
        </div>
      </div>
    </section>
  )
}
