import { NavLink } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import IconBadge from '../ui/IconBadge'
import badminton from '../../assets/images/beyond-academics/sport-badminton.jpg'
import basketball from '../../assets/images/beyond-academics/sport-basketball.jpg'
import football from '../../assets/images/beyond-academics/sport-football.jpg'
import cricket from '../../assets/images/beyond-academics/sport-cricket.jpg'
import skating from '../../assets/images/beyond-academics/sport-skating.jpg'

const arenas = [
  { tag: 'Indoor Court', title: 'Badminton', desc: 'Multi-court indoor wooden sprung flooring with shadowless LED illumination for junior and senior training.', meta: 'Certified Coach', standard: 'BWF Rules', image: badminton },
  { tag: 'Full Court', title: 'Basketball', desc: 'Polyurethane cushioned surface engineered for joint safety, hosting inter-district tournaments and daily drills.', meta: 'Inter-House League', standard: 'FIBA Standard', image: basketball },
  { tag: 'Natural Turf', title: 'Football', desc: 'Expansive natural turf pitch supporting tactical field positioning, stamina conditioning, and junior leagues.', meta: 'Junior & Senior', standard: '11v11 Pitch', image: football },
  { tag: 'Turf Nets', title: 'Cricket Nets', desc: 'Dedicated turf bowling practice nets with bowling machines and video analysis for stroke perfection.', meta: 'Bowling Machine', standard: 'Pro Nets', image: cricket },
  { tag: 'Signature Rink', title: 'Skating Rink', desc: 'Smooth-finished banked rink dedicated to roller skating and speed training under licensed safety mentors.', meta: 'All Age Groups', standard: 'Banked Track', image: skating },
]

export default function SportsInfrastructure() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Olympic-Standard Groundwork"
            heading="Sports Arenas Built for Discipline, Health & Teamwork"
            className="lg:max-w-xl"
          />
          <p className="max-w-sm text-slate-600">
            From high-speed court reflexes to endurance on the pitch, our athletic facilities are
            professionally maintained to cultivate physical resilience, camaraderie, and ethical
            competition.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {arenas.map((arena) => (
            <div key={arena.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <div className="relative">
                <img src={arena.image} alt={arena.title} className="aspect-4/3 w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-full bg-brand px-2.5 py-0.5 font-sans text-xs text-white">
                  {arena.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="font-display text-lg font-bold text-brand">{arena.title}</h3>
                <p className="flex-1 text-sm text-slate-600">{arena.desc}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                  <span className="text-slate-600">{arena.meta}</span>
                  <span className="font-bold text-[#765b00]">{arena.standard}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <IconBadge className="bg-accent/30 text-brand">
              <span aria-hidden className="text-2xl">&#10084;</span>
            </IconBadge>
            <div>
              <p className="font-display text-lg font-bold text-brand">
                Physiotherapy &amp; Wellness Monitoring
              </p>
              <p className="text-sm text-slate-600">
                Full-time sports trainer and on-site medical post for conditioning and injury prevention.
              </p>
            </div>
          </div>
          <NavLink to="/academics" className="inline-flex items-center gap-1 font-sans text-sm font-bold text-brand hover:underline">
            Explore Physical Education Curriculum <span aria-hidden>&rarr;</span>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
