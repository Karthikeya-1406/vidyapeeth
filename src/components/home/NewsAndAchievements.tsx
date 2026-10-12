import { NavLink } from 'react-router-dom'
import { newsItems, type NewsCategory, type NewsItem } from '../../data/news'

const MAX_STORIES = 3

const categoryColors: Record<NewsCategory, string> = {
  News: 'text-blue-600',
  Event: 'text-amber-600',
  Achievement: 'text-emerald-600',
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function StoryCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      {item.image && (
        <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
          <img src={item.image} alt={item.imageAlt ?? ''} className="size-full object-cover" />
        </div>
      )}
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className={`font-display text-[10px] font-extrabold tracking-[0.5px] uppercase ${categoryColors[item.category]}`}>
          {item.category}
        </span>
        <time dateTime={item.date} className="text-[11px] font-semibold text-slate-500">
          {formatDate(item.date)}
        </time>
      </div>
      <h3 className="mt-1 font-display text-base font-bold text-brand">{item.title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-500">{item.summary}</p>
      <NavLink
        to={item.href}
        className="mt-4 font-display text-xs font-bold tracking-[0.6px] text-brand uppercase hover:underline"
      >
        Read Story &rarr;
      </NavLink>
    </article>
  )
}

export default function NewsAndAchievements() {
  const today = new Date().toLocaleDateString('en-CA') // YYYY-MM-DD in local time

  const upcomingEvents = newsItems
    .filter((item) => item.category === 'Event' && item.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))

  const stories = newsItems
    .filter((item) => item.date <= today && !(item.category === 'Event' && item.date >= today))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, MAX_STORIES)

  return (
    <section className="bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
              Stories from Vidhyapeeth Karimnagar
            </span>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
              News, Events &amp; Achievements
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore recent school news, events and student achievements.
            </p>
          </div>
          <NavLink
            to="/blog"
            className="shrink-0 font-display text-xs font-bold tracking-[0.6px] text-brand uppercase hover:underline"
          >
            View All News &amp; Stories &rarr;
          </NavLink>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-extrabold tracking-[1px] text-accent-dark uppercase">
              Upcoming Events
            </h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <li
                  key={`${event.date}-${event.title}`}
                  className="flex flex-col gap-1 rounded-2xl border border-accent/40 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div>
                    <time dateTime={event.date} className="text-[11px] font-semibold text-amber-700">
                      {formatDate(event.date)}
                    </time>
                    <p className="font-display text-base font-bold text-brand">{event.title}</p>
                  </div>
                  <NavLink
                    to={event.href}
                    className="shrink-0 font-display text-xs font-bold tracking-[0.6px] text-brand uppercase hover:underline"
                  >
                    View Event Details &rarr;
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {stories.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((item) => (
              <StoryCard key={`${item.date}-${item.title}`} item={item} />
            ))}
          </div>
        ) : (
          upcomingEvents.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
              <p className="font-display text-lg font-bold text-brand">Stories coming soon</p>
              <p className="mt-1 text-sm text-slate-500">
                School news, events and student achievements will be shared here.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  )
}
