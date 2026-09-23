import classroomPhoto from '../../assets/images/about-holistic-classroom.jpg'

const pillars = [
  {
    icon: '⛹',
    title: 'Physical Vitality',
    body: 'Volleyball, cricket academy, athletics, and yoga routines fostering endurance and camaraderie.',
  },
  {
    icon: '\u{1F3A8}',
    title: 'Fine & Performing Arts',
    body: 'Classical Carnatic/Hindustani music, contemporary theatre, pottery, and visual arts studios.',
  },
  {
    icon: '\u{1F4BB}',
    title: 'Digital Fluency',
    body: 'Computational thinking, age-appropriate robotics, and ethical artificial intelligence literacy.',
  },
  {
    icon: '\u{1F91D}',
    title: 'Community Service',
    body: 'Active outreach initiatives, village literacy drives, and district environmental cleanups.',
  },
]

export default function HolisticHighlights() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12">
        <div className="flex max-w-2xl flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Beyond Pedagogy
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
            Nurturing Every Dimension of the Scholar
          </h2>
          <p className="text-base text-slate-600">
            Curated experiential learning tracks that transcend standard textbook boundaries.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={classroomPhoto} alt="Collaborative classroom at Vidya Peeth" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-2 rounded-lg bg-accent p-4 shadow-lg">
              <span className="text-2xl text-[#705600]">&#128101;</span>
              <div>
                <p className="font-display text-xl font-bold text-[#705600]">360&deg;</p>
                <p className="text-xs text-[#705600]">Child Development</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-sm bg-white p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-sm bg-[#e7eeff] text-lg">
                  {pillar.icon}
                </span>
                <h3 className="pt-3 font-display text-lg font-bold text-brand">{pillar.title}</h3>
                <p className="pt-1 text-sm text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
