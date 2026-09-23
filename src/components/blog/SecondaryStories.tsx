import { secondaryStories } from '../../data/blog'

export default function SecondaryStories() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-10 flex flex-col gap-4 border-b border-slate-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
              Verified Stories
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
              Where Character, Eloquence & Vitality Meet
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600">
            Handpicked dispatches from the sports field, the stage, and the debate hall — three sides of a
            well-rounded Vidya Peeth education.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {secondaryStories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_12px_0_rgba(10,37,86,0.04)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={story.image} alt={story.title} className="size-full object-cover" />
                <span
                  className={`absolute top-2.5 left-2 rounded-sm px-2 py-[3.5px] font-sans text-xs font-semibold tracking-[0.3px] uppercase ${
                    story.tagVariant === 'dark' ? 'bg-brand text-white' : 'bg-accent text-[#705600]'
                  }`}
                >
                  {story.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-center gap-1 font-sans text-xs font-semibold text-slate-500">
                  <span aria-hidden>{story.icon}</span>
                  <span>{story.location}</span>
                  <span>•</span>
                  <span>{story.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-brand">{story.title}</h3>
                <p className="flex-1 text-base text-slate-600">{story.excerpt}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="font-sans text-sm font-bold text-brand">{story.linkLabel}</span>
                  <span className="flex size-8 items-center justify-center rounded-xl bg-[#e7eeff] text-brand">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
