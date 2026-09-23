import { useState } from 'react'
import { galleryCategories, galleryItems, type GalleryCategoryId } from '../../data/gallery'

type FilterId = 'all' | GalleryCategoryId

export default function GalleryGrid() {
  const [filter, setFilter] = useState<FilterId>('all')

  const visibleItems =
    filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <section>
      <div className="sticky top-20 z-40 border-b border-slate-100 bg-white/95 py-4 backdrop-blur-[6px]">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-20">
          <div className="flex flex-wrap gap-1 overflow-x-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-1 font-sans text-sm font-semibold transition-colors ${
                filter === 'all' ? 'bg-brand text-white' : 'bg-[#e7eeff] text-[#101c2f] hover:bg-[#d9e2ff]'
              }`}
            >
              <span aria-hidden>▦</span> All Moments
            </button>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-1 font-sans text-sm font-semibold transition-colors ${
                  filter === category.id ? 'bg-brand text-white' : 'bg-[#e7eeff] text-[#101c2f] hover:bg-[#d9e2ff]'
                }`}
              >
                <span aria-hidden>{category.icon}</span> {category.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.48px] text-slate-500">
            <span className="size-2 rounded-full bg-accent" />
            Displaying Academic Year 2023–2024
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 py-10 sm:px-10 lg:px-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {visibleItems.map((item) => (
            <figure
              key={item.id}
              className="group relative mb-4 overflow-hidden rounded-lg bg-slate-100 shadow-sm break-inside-avoid"
            >
              <img src={item.image} alt={item.caption} className="w-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-sans text-sm font-medium text-white">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 pt-6">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-brand px-8 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#0d2f6b]"
          >
            Load More Moments <span aria-hidden>↓</span>
          </button>
          <span className="text-xs text-slate-400">
            Showing {visibleItems.length} of {galleryItems.length} moments
          </span>
        </div>
      </div>
    </section>
  )
}
