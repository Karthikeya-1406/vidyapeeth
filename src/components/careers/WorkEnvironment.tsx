import SectionHeading from '../ui/SectionHeading'
import smartClassroom from '../../assets/images/academics-smart-classroom.jpg'
import computerLab from '../../assets/images/academics-computer-lab.jpg'
import library from '../../assets/images/academics-library.jpg'
import campus from '../../assets/images/campus-exterior.png'

const environments = [
  {
    image: smartClassroom,
    badge: '📺 Smart Tech',
    title: 'Modern Digital Smart Boards',
    description: 'Every lecture space is fitted with multimedia interactive panels, stylus touchboards, and dedicated high-speed broadband.',
  },
  {
    image: computerLab,
    badge: '❄️ Rest & Prep',
    title: 'AC Faculty Lounge',
    description: 'Quiet, climate-controlled staff suites with ergonomic workstations, individual lockers, and collaborative discussion tables.',
  },
  {
    image: library,
    badge: '📖 Resources',
    title: 'Comprehensive Library',
    description: 'Unlimited access to over 15,000 academic titles, peer-reviewed educational periodicals, and digital research archives.',
  },
  {
    image: campus,
    badge: '🤝 Assistance',
    title: 'Supportive Administration',
    description: 'Dedicated operational teams manage printing, event logistics, and parent liaisons so teachers stay focused on education.',
  },
]

export default function WorkEnvironment() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-16">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <SectionHeading
            eyebrow="Educator Infrastructure"
            heading="Spaces Designed for Inspiring Pedagogy"
            description="We invest in state-of-the-art tools and supportive faculty lounges so educators can focus entirely on student transformation."
            className="max-w-xl"
          />
          <p className="flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500">
            🏫 Karimnagar Main Campus Facility Standards
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {environments.map((env) => (
            <div key={env.title} className="overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="relative h-48">
                <img src={env.image} alt={env.title} className="size-full object-cover" />
                <span className="absolute top-3 left-3 flex items-center gap-1 rounded-sm bg-brand px-2.5 py-1 text-xs text-white">
                  {env.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-brand">{env.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{env.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
