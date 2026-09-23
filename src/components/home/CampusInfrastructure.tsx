import { NavLink } from 'react-router-dom'
import campusExterior from '../../assets/images/campus-exterior.png'

const labs = [
  {
    eyebrow: 'Practical Learning',
    eyebrowColor: 'text-accent-dark',
    bg: 'bg-surface border-slate-100',
    title: 'Science & Tech Labs',
    body: 'Well-equipped Composite Science Lab and high-speed Computer Lab facilitating STEM inquiry and computational literacy.',
    tags: ['Physics & Chem', 'Biology Corner', 'Digital Lab'],
    num: '01',
  },
  {
    eyebrow: 'Knowledge Hub',
    eyebrowColor: 'text-amber-700',
    bg: 'bg-amber-50/60 border-amber-200/60',
    title: 'Enriched Library',
    body: 'Thousands of curated titles, encyclopedias, journals, and a peaceful reading nook that cultivates lifelong reading habits.',
    quote: '"A place where learning feels like home"',
    num: '02',
  },
]

const pills = [
  { title: 'Smart Classrooms', body: 'Interactive digital boards' },
  { title: 'Mathematics Lab', body: 'Hands-on geometry & concepts' },
  { title: 'Sports & Playground', body: 'Track, games & physical fitness' },
  { title: 'Safe Transport', body: 'GPS-tracked reliable fleet' },
]

export default function CampusInfrastructure() {
  return (
    <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-8">
        <div className="max-w-2xl">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Infrastructure
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
            Spaces That Inspire
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Classrooms, labs, library, sports and more — a safe and modern learning environment
            where every space breathes energy and possibility.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl border-4 border-slate-100 shadow-lg lg:col-span-7">
            <img src={campusExterior} alt="Vidya Peeth Karimnagar modern campus" className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <span className="font-display text-xs font-bold tracking-[1.2px] text-accent uppercase">
                  Main Facility
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">
                  Spacious &amp; Safe Campus
                </h3>
                <p className="mt-1 max-w-sm text-xs text-slate-200">
                  Monitored round-the-clock with CCTV, secure access, and child-safe architecture.
                </p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                &#8599;
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {labs.map((lab) => (
              <div key={lab.title} className={`rounded-3xl border p-6 ${lab.bg}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`font-display text-[10px] font-extrabold tracking-[1px] uppercase ${lab.eyebrowColor}`}>
                      {lab.eyebrow}
                    </span>
                    <h4 className="font-display text-xl font-bold text-brand">{lab.title}</h4>
                  </div>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-brand shadow-sm">
                    {lab.num}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">{lab.body}</p>
                {lab.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {lab.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {lab.quote && (
                  <div className="mt-3 flex items-center justify-between border-t border-amber-200/60 pt-3">
                    <span className="font-script text-xl text-brand">{lab.quote}</span>
                    <span aria-hidden className="text-lg">
                      📖
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {pills.map((pill) => (
            <div key={pill.title} className="flex flex-col items-center gap-1 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-5 text-center">
              <span className="font-display text-xs font-bold text-brand">{pill.title}</span>
              <span className="text-[11px] text-slate-500">{pill.body}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <NavLink
            to="/academics#environment"
            className="font-display text-xs font-bold tracking-[1.2px] text-brand uppercase hover:underline"
          >
            Explore Full Campus Tour &rarr;
          </NavLink>
        </div>
      </div>
    </section>
  )
}
