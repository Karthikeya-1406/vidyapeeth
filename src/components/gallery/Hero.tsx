import heroPrimary from '../../assets/images/gallery/hero-primary.png'
import heroScrapbook from '../../assets/images/gallery/hero-scrapbook.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f0f3ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="absolute -top-20 -right-16 size-96 rounded-xl bg-accent-light/30 blur-3xl" />
      <div className="absolute bottom-0 left-10 size-80 rounded-xl bg-[#d9e2ff]/40 blur-2xl" />

      <div className="relative mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-start gap-4">
          <span className="flex items-center gap-1.5 rounded-xl bg-accent/30 px-4 py-1 font-sans text-xs font-semibold tracking-[1.2px] text-[#101c2f] uppercase">
            <span className="size-2 rounded-full bg-accent-dark" />
            Our Gallery
          </span>
          <h1 className="font-display text-4xl leading-tight font-bold tracking-tight text-brand sm:text-5xl lg:text-[56px]">
            Moments That Make{' '}
            <span className="relative inline-block">
              a Brighter Tomorrow.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 274 6"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M1 4.5C50 1.5 224 1.5 273 4.5" stroke="#FECB31" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            A visual celebration of athletic achievement, creative expression, scientific inquiry, and authentic
            daily life across our Karimnagar campus.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <span className="text-lg">🖼️</span>
              <div>
                <p className="font-display text-lg font-bold text-brand">1,400+</p>
                <p className="font-sans text-xs font-semibold text-slate-500">Archived Moments</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
              <span className="text-lg">🏆</span>
              <div>
                <p className="font-display text-lg font-bold text-brand">48 Events</p>
                <p className="font-sans text-xs font-semibold text-slate-500">Annual Highlights</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-[320px] w-full max-w-[420px] items-center justify-center sm:h-[380px]">
          <img
            src={heroPrimary}
            alt="Student at science exhibition"
            className="absolute top-0 right-0 z-10 w-[92%] rotate-2 rounded-lg border-4 border-white object-cover shadow-xl"
          />
          <img
            src={heroScrapbook}
            alt="Annual fest dance showcase"
            className="absolute bottom-0 left-0 z-10 w-[86%] -rotate-3 rounded-lg border-4 border-white object-cover shadow-xl"
          />
          <span className="absolute -top-4 left-0 z-20 -rotate-3 rounded-xl bg-accent px-4 py-1 font-sans text-sm font-semibold text-[#705600] shadow-sm">
            ✨ Memories of 2023–24
          </span>
          <span className="absolute right-4 -bottom-6 z-20 rotate-6 rounded-md bg-[#d7e3fd] px-3 py-1 font-sans text-xs font-semibold text-brand shadow-sm">
            #VidyaPeethPride
          </span>
        </div>
      </div>
    </section>
  )
}
