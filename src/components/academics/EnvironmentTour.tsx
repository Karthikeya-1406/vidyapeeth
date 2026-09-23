import smartClassroom from '../../assets/images/academics-smart-classroom.jpg'
import scienceLab from '../../assets/images/academics-science-lab.jpg'
import computerLab from '../../assets/images/academics-computer-lab.jpg'
import mathLab from '../../assets/images/academics-math-lab.jpg'
import library from '../../assets/images/academics-library.jpg'

const spaces = [
  {
    photo: smartClassroom,
    tag: 'Smart Infrastructure',
    title: 'Smart Classrooms',
    body: 'Interactive IFPD panels, ergonomic furnishings, and natural acoustic insulation.',
    span: 'sm:col-span-7',
    photoHeight: 'h-72',
  },
  {
    photo: scienceLab,
    tag: 'Research & Inquiry',
    title: 'Composite Science Lab',
    body: 'Precision apparatus adhering to CBSE standards for Physics, Chemistry, and Biology.',
    span: 'sm:col-span-5',
    photoHeight: 'h-72',
  },
  {
    photo: computerLab,
    tag: null,
    title: 'Computer & ICT Lab',
    body: 'High-speed fiber connectivity and coding suites.',
    span: 'sm:col-span-4',
    photoHeight: 'h-56',
  },
  {
    photo: mathLab,
    tag: null,
    title: 'Mathematics Lab',
    body: 'Tactile manipulatives converting abstract concepts to reality.',
    span: 'sm:col-span-4',
    photoHeight: 'h-56',
  },
  {
    photo: library,
    tag: null,
    title: 'Enriched Resource Library',
    body: '2,000+ print volumes plus digital journals repository.',
    span: 'sm:col-span-4',
    photoHeight: 'h-56',
  },
]

export default function EnvironmentTour() {
  return (
    <section id="environment" className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Learning Environments
            </span>
            <h2 className="pt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
              Spaces That Inspire
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Purpose-built educational architecture configured to encourage active collaboration,
            focused research, and joyful discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
          {spaces.map((space) => (
            <div key={space.title} className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 sm:col-span-12 ${space.span}`}>
              <div className={`relative ${space.photoHeight} bg-[#e7eeff]`}>
                <img src={space.photo} alt={space.title} className="size-full object-cover" />
                {space.tag && (
                  <span className="absolute top-4 left-4 rounded-sm bg-brand px-3 py-1 font-sans text-xs font-semibold tracking-wide text-white uppercase">
                    {space.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-brand">{space.title}</h3>
                <p className="pt-1 text-sm text-slate-600">{space.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
