import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import olympiad from '../../assets/images/beyond-academics/flagship-olympiad.jpg'
import conclave from '../../assets/images/beyond-academics/flagship-conclave.jpg'
import startup from '../../assets/images/beyond-academics/flagship-startup.jpg'
import keo from '../../assets/images/beyond-academics/flagship-keo.jpg'
import borntowin from '../../assets/images/beyond-academics/flagship-borntowin.jpg'

const programs = [
  {
    tag: 'Program 01',
    badge: 'School & National',
    title: 'AHPS Inter-School Olympiads',
    desc: 'National competitive examinations spanning English, Mathematics, Science, and Computer Programming, focused on analytical reasoning beyond the standard syllabus.',
    image: olympiad,
  },
  {
    tag: 'Program 02 · Est. 2014',
    badge: 'Delhi NCR Conclave',
    title: 'Annual Mega Competitions',
    desc: 'A premier multi-disciplinary championship bringing together qualifying scholars across India in Academics, Sports, and Fine Arts for an elite national showdown in Delhi NCR.',
    image: conclave,
  },
  {
    tag: 'Program 03 · Grades 9–12',
    badge: 'Seed Capital Granted',
    title: 'Decode Startups',
    desc: 'Our high-school entrepreneurship accelerator — senior students build business models, pitch to venture capitalists, and winners receive seed money and industry mentorship.',
    image: startup,
  },
  {
    tag: 'Program 04',
    badge: 'Cash Prizes & Medals',
    title: 'AHPS KEO (Knowledge Exchange Opportunity)',
    desc: 'An inter-state cultural synthesis summit fostering linguistic diversity, indigenous art forms, and regional heritage, with certificates and financial awards.',
    image: keo,
  },
  {
    tag: 'Program 05',
    badge: 'Whole-Child Recognition',
    title: 'Born to Win (Character & Bravery)',
    desc: 'Our flagship self-esteem paradigm recognizing students whose merit transcends grades — honoring civic bravery, empathy, and individual perseverance.',
    image: borntowin,
  },
]

export default function FlagshipInitiatives() {
  return (
    <section id="flagship" className="bg-[#f8fafe] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <SectionHeading
          eyebrow="National Competence Benchmarks"
          heading="Five Flagship Initiatives Driving Distinction"
          description="Distinct from conventional extra-curriculars, these five signature frameworks provide our scholars with structured national exposure, startup seed capital, and inter-state cultural immersion."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="relative flex flex-col gap-3 overflow-hidden pl-7">
              <span className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
              <div className="flex items-center justify-between gap-2">
                <span className="font-sans text-xs font-bold tracking-[0.6px] text-slate-500 uppercase">
                  {program.tag}
                </span>
                <span className="rounded-full bg-[#e3ecfe] px-2.5 py-0.5 font-sans text-xs font-semibold text-brand">
                  {program.badge}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand">{program.title}</h3>
              <img src={program.image} alt={program.title} className="aspect-video w-full rounded-lg object-cover" />
              <p className="text-sm text-slate-600">{program.desc}</p>
            </Card>
          ))}

          <div className="flex flex-col justify-center gap-2 rounded-2xl bg-brand p-6 text-white shadow-lg">
            <p className="font-sans text-xs font-bold tracking-[0.6px] text-accent uppercase">
              CBSE National Laurels
            </p>
            <p className="font-display text-lg font-bold">
              Consistently ranked Top in North Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
