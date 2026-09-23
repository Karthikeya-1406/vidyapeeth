import { NavLink } from 'react-router-dom'
import vignetteImage from '../../assets/images/gallery/feature-vignette.png'
import arrowRight from '../../assets/icons/arrow-right.svg'

export default function FeatureVignette() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-start gap-4">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Campus Spotlight
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-[44px]">
            Life at Vidya Peeth in Focus
          </h2>
          <p className="max-w-lg text-base text-slate-600">
            Beyond text and curriculum, what shapes the heartbeat of our school are the quiet pauses between
            periods, shared smiles during peer mentoring, and joy that accompanies discovering a solution after
            persistent teamwork.
          </p>
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded bg-[#dfe8ff] text-xl">
                🎨
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-brand">Holistic Growth Metrics</h3>
                <p className="text-sm text-slate-600">
                  Over 35 hobby clubs supervised by dedicated master educators.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded bg-accent-light/40 text-xl">
                🤝
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-brand">Values & Leadership</h3>
                <p className="text-sm text-slate-600">
                  Student-led parliamentary council managing daily assemblies.
                </p>
              </div>
            </div>
          </div>
          <NavLink
            to="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded bg-brand px-6 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#0d2f6b]"
          >
            Schedule a Campus Walkthrough
            <img src={arrowRight} alt="" className="size-3" />
          </NavLink>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img src={vignetteImage} alt="Vidya Peeth Chronicles video preview" className="aspect-[4/3] w-full object-cover" />
          <button
            type="button"
            aria-label="Play campus chronicles video"
            className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-accent shadow-xl transition-transform hover:scale-105 sm:size-20"
          >
            <span className="ml-1 text-3xl text-[#705600]">▶</span>
          </button>
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-white/90 p-4 backdrop-blur-[6px]">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ba1a1a]" />
              <div>
                <p className="font-display text-base font-bold text-brand">Vidya Peeth Chronicles: 2023–24</p>
                <p className="text-xs text-slate-500">Runtime 03:45 • Directed by School Media Club</p>
              </div>
            </div>
            <span className="hidden rounded-sm bg-[#e7eeff] px-3 py-1 font-sans text-xs font-semibold text-brand sm:inline-block">
              HD Preview
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
