import mapImage from '../../assets/images/admissions/map.png'

const items = [
  {
    icon: '\u{1F4CD}',
    title: 'Campus Address',
    body: 'House No. 2-10-1282, Back Side Lane District Court, Jyothinagar, Karimnagar, Telangana – 505001',
  },
  {
    icon: '\u{1F550}',
    title: 'Visiting Hours',
    body: 'Monday to Saturday: 8:00 AM – 2:00 PM',
    note: 'Sunday: Closed (Online Enquiries Active)',
  },
]

export default function CampusDesk() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1360px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
        <div className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 p-8 sm:p-12 lg:col-span-5">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs font-bold tracking-[1.2px] text-[#765b00] uppercase">
                Campus Visit
              </span>
              <h2 className="font-display text-3xl font-bold text-brand">Walk-in Admissions Desk</h2>
              <p className="text-slate-600">
                Parents are warmly invited to visit our administrative wing in person for guided
                consultations, prospectus collection, and campus tours.
              </p>

              <div className="flex flex-col gap-4 pt-2">
                {items.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#e7eeff] text-lg">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-brand">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.body}</p>
                      {item.note && <p className="text-xs text-slate-500">{item.note}</p>}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#e7eeff] text-lg">
                    &#128222;
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold text-brand">Admissions Hotline</p>
                    <p className="text-sm font-semibold text-slate-700">09346002121</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="tel:09346002121"
              className="inline-flex w-fit items-center gap-2 rounded-sm bg-brand px-4 py-2 font-sans text-sm font-semibold text-[#e7eeff] transition-colors hover:bg-brand/90"
            >
              Call Admissions Officer
            </a>
          </div>

          <div className="relative min-h-[320px] lg:col-span-7">
            <img src={mapImage} alt="Map to Vidya Peeth Schools, Karimnagar" className="size-full object-cover" />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-sm bg-white/95 px-3 py-2 shadow-md backdrop-blur">
              <span className="size-3 rounded-full bg-accent" />
              <span className="font-sans text-xs font-bold text-brand">Vidya Peeth Schools, Karimnagar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
