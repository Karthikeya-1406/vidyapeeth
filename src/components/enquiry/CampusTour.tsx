import mapImage from '../../assets/images/admissions/map.png'

const faqPills = [
  'Do both parents need to attend the campus consultation?',
  'Which academic documents should we bring along?',
]

export default function CampusTour() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-6">
          <span className="flex w-fit items-center gap-1 rounded-full bg-white px-4 py-1">
            <span aria-hidden>🚌</span>
            <span className="font-sans text-xs font-bold tracking-[0.6px] text-brand uppercase">
              Campus Visit Experience
            </span>
          </span>
          <h2 className="font-display text-3xl font-semibold text-brand sm:text-[44px] sm:leading-[52px]">
            Schedule a Personal Walkthrough of Our Karimnagar Campus
          </h2>
          <p className="text-base text-slate-600">
            Experience our vibrant learning atmosphere firsthand. Observe teacher-student
            interactions in experiential labs, discover our world-class sporting arenas, and meet
            department chairs.
          </p>

          <div className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-start gap-2">
              <span className="flex size-10 shrink-0 items-center justify-center rounded bg-[#e7eeff] text-lg">
                📍
              </span>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-brand">
                  Vidya Peeth Schools Campus
                </span>
                <span className="text-sm text-slate-600">
                  House No. 2-10-1282, Back Side Lane District Court, Jyothinagar, Karim Nagar,
                  Telangana &ndash; 505001
                </span>
              </div>
            </div>
            <div className="grid gap-2 pt-1 sm:grid-cols-2">
              <p className="flex items-center gap-1 text-sm text-slate-600">
                <span aria-hidden>🧭</span>
                <span>
                  <span className="font-bold text-brand">Visiting Hours:</span> Mon&ndash;Sat,
                  8am&ndash;2pm
                </span>
              </p>
              <p className="flex items-center gap-1 text-sm text-slate-600">
                <span aria-hidden>🚐</span> ahps5103@academicheights.in
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {faqPills.map((question) => (
              <div
                key={question}
                className="flex items-center justify-between rounded bg-white p-4 text-sm font-semibold text-brand"
              >
                {question} <span aria-hidden>▾</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#e7eeff] shadow-2xl">
            <img src={mapImage} alt="Vidya Peeth Schools campus map" className="h-[320px] w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-[6px] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                  📍
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-brand">
                    Centrally Located in Jyothinagar
                  </span>
                  <span className="text-xs text-slate-600">
                    Minutes from Karimnagar District Court &amp; Collectorate
                  </span>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded bg-brand px-4 py-2 text-center text-xs font-semibold text-white"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-lg bg-white p-4">
              <span className="text-2xl text-accent-dark" aria-hidden>
                📞
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase">Admissions Desk</span>
                <span className="text-sm font-bold text-brand">09346002121</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-4">
              <span className="text-2xl text-accent-dark" aria-hidden>
                📅
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase">Slot Booking</span>
                <span className="text-sm font-bold text-brand">Walk-ins Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
