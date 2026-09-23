import { NavLink } from 'react-router-dom'
import skitDay from '../../assets/images/news-skit-day.png'
import literary from '../../assets/images/news-literary.png'
import sportsMeet from '../../assets/images/news-sports-meet.png'
import scienceExpo from '../../assets/images/news-science-expo.png'

const events = [
  {
    img: skitDay,
    tag: 'Culture',
    tagColor: 'text-amber-600',
    title: 'Skit Day Celebrations',
    body: 'Students showcasing dramatic flair and creative linguistic expression.',
  },
  {
    img: literary,
    tag: 'Academic',
    tagColor: 'text-blue-600',
    title: 'Literary Competitions',
    body: 'Debates, elocutions, spelling bees, and essay recitations.',
  },
  {
    img: sportsMeet,
    tag: 'Athletics',
    tagColor: 'text-emerald-600',
    title: 'Annual Sports Meets',
    body: 'Track events, relay races, agility tests, and team sports.',
  },
  {
    img: scienceExpo,
    tag: 'Innovation',
    tagColor: 'text-accent-dark',
    title: 'Science Expo "Eurekha"',
    body: 'Over 220 student-built interactive models, robotics, and ecological experiments.',
    flagship: true,
  },
]

export default function NewsAndAchievements() {
  return (
    <section className="bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
              News &amp; Achievements
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
              Moments That Matter
            </h2>
          </div>
          <NavLink
            to="/blog"
            className="hidden shrink-0 font-display text-xs font-bold tracking-[0.6px] text-brand uppercase hover:underline sm:block"
          >
            View All &rarr;
          </NavLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div
              key={event.title}
              className={`relative flex flex-col rounded-2xl border bg-white p-4 shadow-sm ${
                event.flagship ? 'border-2 border-accent/60' : 'border-slate-100'
              }`}
            >
              {event.flagship && (
                <span className="absolute -top-3 right-3 rounded-full bg-accent px-2.5 py-0.5 font-display text-[10px] font-extrabold tracking-[0.5px] text-brand uppercase">
                  Flagship
                </span>
              )}
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                <img src={event.img} alt={event.title} className="size-full object-cover" />
              </div>
              <span className={`mt-4 font-display text-[10px] font-extrabold tracking-[0.5px] uppercase ${event.tagColor}`}>
                {event.tag}
              </span>
              <h3 className="mt-1 font-display text-base font-bold text-brand">{event.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{event.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
