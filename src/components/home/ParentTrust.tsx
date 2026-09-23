import parentPhoto from '../../assets/images/parent-deepa.png'

export default function ParentTrust() {
  return (
    <section className="bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <span className="block text-center font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
          What Parents Say
        </span>

        <div className="relative mt-6 flex flex-col items-center gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(10,37,86,0.12)] sm:p-14">
          <span className="font-serif text-5xl leading-none text-accent">&ldquo;</span>
          <blockquote className="text-center text-lg leading-relaxed font-medium text-slate-700 sm:text-xl">
            &ldquo;The warmth of the teachers, transparent management, and visible confidence in
            my child&rsquo;s daily communication make Vidya Peeth the finest choice in
            Karimnagar.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <div className="size-14 overflow-hidden rounded-full border-2 border-accent">
              <img src={parentPhoto} alt="Deepa Ippalapally" className="size-full object-cover" />
            </div>
            <span className="font-display text-base font-bold text-brand">Deepa Ippalapally</span>
            <span className="text-xs text-slate-400">Parent of Vidya Peeth Student</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-6 rounded-full bg-brand" />
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="size-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
