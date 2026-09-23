export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#001134] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-xl bg-brand/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-xl bg-accent/10 blur-2xl" />
      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 rounded-xl bg-white/10 px-4 py-1 text-xs font-semibold tracking-[1.2px] text-accent-light uppercase backdrop-blur-sm">
              <span className="size-2 rounded-full bg-accent" />
              Compliance &amp; Accountability
            </span>
            <span className="text-sm text-footer-muted">CBSE Affiliation No. 3630436</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-[-1px] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Mandatory Public{' '}
            <span className="text-accent-light underline decoration-accent/40 decoration-4 underline-offset-4">
              Disclosure
            </span>
          </h1>
          <p className="max-w-xl text-lg text-[#d9e2ff]">
            In accordance with CBSE regulatory standards and statutory transparency directives (Affiliation No.
            3630436), Vidya Peeth Schools presents certified institutional documentation for academic audits, legal
            mandates, and parental diligence.
          </p>
        </div>

        <div className="w-full max-w-sm rounded-lg bg-white/10 p-6 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-[0.6px] text-accent-light uppercase">
              Status Verification
            </span>
            <span className="rounded-sm bg-brand px-2 py-0.5 text-xs font-semibold text-white">2024–25 Verified</span>
          </div>
          <p className="mt-4 font-display text-5xl font-bold text-white">
            16 / <span className="block">16</span>
          </p>
          <p className="mt-2 text-sm text-footer-muted">Statutory Instruments Current</p>
          <p className="mt-4 text-xs text-[#dfe8ff]">
            All documents comply with circular no. CBSE/AFF./CIRCULAR/2021 regulations for institutional
            transparency.
          </p>
        </div>
      </div>
    </section>
  )
}
