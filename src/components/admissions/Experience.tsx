import SectionHeading from '../ui/SectionHeading'
import scienceLab from '../../assets/images/admissions/exp-science-lab.jpg'
import computerLab from '../../assets/images/admissions/exp-computer-lab.jpg'
import basketball from '../../assets/images/admissions/exp-basketball.jpg'
import football from '../../assets/images/admissions/exp-football.jpg'
import library from '../../assets/images/admissions/exp-library.jpg'
import gardens from '../../assets/images/admissions/exp-gardens.jpg'
import classrooms from '../../assets/images/admissions/exp-classrooms.jpg'
import faculty from '../../assets/images/admissions/exp-faculty.jpg'

const facilities = [
  { tag: 'Practical Science', title: 'Composite Science Lab', desc: 'Equipped for advanced Physics, Chemistry, and Biology discovery.', image: scienceLab },
  { tag: 'Digital Literacy', title: 'Computer & ICT Lab', desc: 'High-speed connected systems fostering algorithmic reasoning.', image: computerLab },
  { tag: 'Sports Wing', title: 'Basketball Court', desc: 'Full-sized synthetic court with trained physical instructors.', image: basketball },
  { tag: 'Outdoor Athletics', title: 'Football & Track Field', desc: 'Expansive natural turf arena for team sports and endurance.', image: football },
  { tag: 'Knowledge Hub', title: 'Enriched Library', desc: 'Thousands of cross-disciplinary titles and reference journals.', image: library },
  { tag: 'Calm Atmosphere', title: 'Green Gardens & Fountains', desc: 'Peaceful open spaces that promote mindfulness and fresh air.', image: gardens },
  { tag: 'Active Learning', title: 'Modular Classrooms', desc: 'Configurable seating and smart interactive display screens.', image: classrooms },
  { tag: 'Mentorship', title: 'Personalized Attention', desc: 'Experienced educators tailoring guidance to individual learner needs.', image: faculty },
]

export default function Experience() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Campus Advantage"
            heading="The Vidya Peeth Experience"
            description="A harmonious synthesis of scientific facilities, spacious sports grounds, and compassionate mentorship."
          />
          <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand">
            <span aria-hidden>&#128737;</span> Verified Safe &amp; Secure Campus
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <div key={facility.title} className="overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="relative">
                <img src={facility.image} alt={facility.title} className="aspect-4/3 w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-sm bg-brand/85 px-2 py-1 font-sans text-xs font-semibold text-white">
                  {facility.tag}
                </span>
              </div>
              <div className="flex flex-col gap-1 p-4">
                <h3 className="font-display text-lg font-bold text-brand">{facility.title}</h3>
                <p className="text-sm text-slate-600">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
