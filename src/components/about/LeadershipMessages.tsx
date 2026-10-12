// Names and roles as approved by the school. Add `photo` only once an approved portrait
// is available, and `message` only once the leader has approved the text.
// Do not add qualifications, surnames or quotes without approval.
const leaders: { name: string; role: string; photo?: string; message?: string }[] = [
  { name: 'Shireesha', role: 'Director' },
  { name: 'Deepthi', role: 'Principal' },
]

export default function LeadershipMessages() {
  return (
    <section id="leadership" className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Guiding learning with purpose
            </span>
            <span className="h-0.5 w-6 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand sm:text-4xl">Leadership</h2>
          <p className="text-base text-slate-600">Meet the leadership of Vidhyapeeth Karimnagar.</p>
        </div>

        <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md sm:flex-row">
              <div className="flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-sm bg-brand shadow-sm sm:w-40">
                {leader.photo ? (
                  <img
                    src={leader.photo}
                    alt={`${leader.name}, ${leader.role} of Vidhyapeeth Karimnagar`}
                    className="size-full object-cover"
                  />
                ) : (
                  <span aria-hidden className="font-display text-6xl font-extrabold text-accent">
                    {leader.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
                  {leader.role}
                </p>
                <h3 className="pt-1 font-display text-xl font-bold text-brand">{leader.name}</h3>
                {leader.message ? (
                  <p className="pt-3 text-sm leading-relaxed text-slate-600">{leader.message}</p>
                ) : (
                  <p className="pt-3 text-sm leading-relaxed text-slate-500 italic">
                    A message from our {leader.role} will be shared here soon.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
