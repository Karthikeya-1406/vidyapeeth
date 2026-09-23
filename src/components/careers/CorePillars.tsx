import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    icon: '📈',
    title: 'Continuous Professional Development',
    description:
      'Institutional sponsorship for NEP-aligned workshops, CBSE master trainer certifications, and annual curriculum symposiums.',
    tag: 'Skill Advancement',
  },
  {
    icon: '📚',
    title: 'Academic Autonomy',
    description:
      'Freedom to craft experiential lesson modules, inquiry-driven projects, and creative laboratory demonstrations that spark true curiosity.',
    tag: 'Creative Freedom',
  },
  {
    icon: '🤝',
    title: 'Respectful Collaboration',
    description:
      'Flat administrative hierarchies, transparent faculty council dialogues, and empathetic peer feedback loops that foster shared ownership.',
    tag: 'Inclusive Culture',
  },
  {
    icon: '💻',
    title: 'Modern Infrastructure',
    description:
      'Smart digital classrooms, high-speed campus connectivity, fully stocked STEM labs, and comfortable dedicated preparation lounges.',
    tag: 'High-Tech Campus',
  },
]

export default function CorePillars() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-16">
        <SectionHeading
          align="center"
          eyebrow="Our Faculty Pillars"
          heading="A Workplace Built on Dignity, Rigor & Autonomy"
          description="We regard educators not simply as curriculum instructors, but as intellectual architects shaping national aspirations from Karimnagar."
          className="max-w-2xl"
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-3">
                <span className="flex size-12 items-center justify-center rounded-sm bg-[#dfe8ff] text-2xl">
                  {pillar.icon}
                </span>
                <h3 className="font-display text-xl font-semibold text-brand">{pillar.title}</h3>
                <p className="text-sm text-slate-600">{pillar.description}</p>
              </div>
              <p className="mt-6 flex items-center gap-1 text-xs font-bold text-[#765b00]">
                {pillar.tag} <span aria-hidden>→</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
