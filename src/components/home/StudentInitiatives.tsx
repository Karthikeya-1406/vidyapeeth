import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import culturalPhoto from '../../assets/images/news-skit-day.png'
import artPhoto from '../../assets/images/gallery/item-activities-pottery.jpeg'
import sciencePhoto from '../../assets/images/news-science-expo.png'

// Only activities confirmed by the school are listed here.
const activityGroups = [
  { title: 'Competitions & Programmes', items: ['Olympiads', 'Decode Startups', 'KEO & Born to Win', 'Science Expo'] },
  { title: 'School Events', items: ['Annual Sports Meet', 'Annual Day', 'Skit Day', 'Literary Competitions'] },
  { title: 'Clubs & Activities', items: ['Music & Choir', 'Dance', 'Art & Craft', 'Yoga'] },
]

const photos = [
  {
    src: culturalPhoto,
    alt: 'Students performing a classical dance on stage at a cultural event',
    caption: 'Annual Day & cultural performances',
    className: 'col-span-2 aspect-[16/9]',
  },
  {
    src: artPhoto,
    alt: 'Students shaping clay on pottery wheels during an art class',
    caption: 'Art & craft',
    className: 'aspect-square sm:aspect-[4/3]',
  },
  {
    src: sciencePhoto,
    alt: 'Students presenting a robotics project to visitors at a science exhibition',
    caption: 'Science Expo',
    className: 'aspect-square sm:aspect-[4/3]',
  },
]

export default function StudentInitiatives() {
  return (
    <section className="relative overflow-hidden bg-brand px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent uppercase">
            Experiences that help children express and grow
          </span>
          <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            Student Life
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            Through participation and shared experiences, children discover interests, express
            ideas and build confidence.
          </p>

          <div className="flex w-full flex-col gap-4">
            {activityGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-[11px] font-extrabold tracking-[1.2px] text-accent uppercase">
                  {group.title}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <Button as={NavLink} to="/gallery" icon={<img src={arrowRight} alt="" className="size-4" />}>
              Explore Student Life
            </Button>
            <NavLink
              to="/beyond-academics"
              className="font-display text-xs font-extrabold tracking-[1.2px] text-accent uppercase hover:underline"
            >
              Beyond Academics &rarr;
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className={`relative overflow-hidden rounded-2xl border-4 border-white/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ${photo.className}`}
            >
              <img src={photo.src} alt={photo.alt} className="size-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/90 to-transparent px-4 pt-8 pb-3 font-display text-sm font-bold text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
