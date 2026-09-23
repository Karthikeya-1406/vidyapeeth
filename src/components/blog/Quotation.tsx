export default function Quotation() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-10 sm:px-10 lg:px-20">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-2xl bg-white p-8 shadow-[0_2px_16px_0_rgba(10,37,86,0.05)] sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-8">
            <div className="flex items-center gap-1.5">
              <span className="text-lg">📖</span>
              <span className="font-sans text-xs font-bold tracking-[1.2px] text-accent-dark uppercase">
                From the Principal&rsquo;s Desk • Pedagogical Journal
              </span>
            </div>
            <blockquote className="font-display text-2xl leading-snug font-semibold tracking-tight text-brand sm:text-3xl">
              &ldquo;Education reaches its zenith not when textbooks are memorized, but when our students cultivate
              the moral courage to investigate, the empathy to collaborate, and the passion to build.&rdquo;
            </blockquote>
            <p className="pt-1 text-sm text-slate-500">
              Published in Vidya Peeth Quarterly Digest • Affiliated to CBSE New Delhi (No. 3630436)
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 lg:col-span-4">
            <div className="flex items-center gap-4 rounded-lg bg-[#e7eeff] p-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded bg-brand text-xl text-white">
                📄
              </span>
              <div>
                <p className="font-display text-lg font-bold text-brand">Campus Gazette PDF</p>
                <p className="text-xs text-slate-600">Winter Edition • 4.8 MB</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-[#e7eeff] p-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded bg-brand text-xl text-white">
                🏅
              </span>
              <div>
                <p className="font-display text-lg font-bold text-brand">CBSE Merit Honors</p>
                <p className="text-xs text-slate-600">District Recognition Karimnagar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
