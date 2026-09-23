import { useMemo, useState } from 'react'
import { disclosureDocuments, type DisclosureCategory } from '../../data/disclosureDocuments'
import SectionHeading from '../ui/SectionHeading'

type Filter = 'All' | DisclosureCategory

const filters: Filter[] = ['All', 'Governance & Safety', 'Academics & Affiliation']

export default function DocumentRepository() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return disclosureDocuments.filter((doc) => {
      const matchesFilter = filter === 'All' || doc.category === filter
      const matchesQuery =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.docNumber.toLowerCase().includes(q) ||
        doc.tags.some((tag) => tag.toLowerCase().includes(q))
      return matchesFilter && matchesQuery
    })
  }, [query, filter])

  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <SectionHeading eyebrow="Statutory Archive" heading="Interactive Document Repository" />

        <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-lg">
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by document name, code, or issuing authority..."
              className="w-full rounded-sm bg-[#f0f3ff] py-3 pr-4 pl-10 text-sm text-brand placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div className="flex flex-wrap gap-1">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-sm px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                  filter === item ? 'bg-brand text-white' : 'bg-[#f0f3ff] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item === 'All' ? `All ${disclosureDocuments.length} Documents` : item}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-slate-500">
            No documents match your search. Try a different keyword or filter.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doc) => (
              <article
                key={doc.docNumber}
                className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <span className="flex size-10 items-center justify-center rounded-sm bg-[#e7eeff] text-lg">
                      {doc.isVideo ? '🎬' : '📄'}
                    </span>
                    <span
                      className={`rounded-sm px-2 py-0.5 text-xs tracking-[0.6px] uppercase ${
                        doc.isVideo ? 'bg-accent-light text-[#241a00]' : 'bg-[#dfe8ff] text-brand'
                      }`}
                    >
                      {doc.docNumber}
                      {doc.isVideo && ' • VIDEO'}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand">{doc.title}</h3>
                  <p className="text-sm text-slate-600">{doc.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="rounded-sm bg-[#f0f3ff] px-2 py-1 text-xs text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-7 border-t border-[#f0f3ff] pt-4">
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-sm font-semibold ${
                      doc.isVideo ? 'text-[#765b00]' : 'text-brand'
                    }`}
                  >
                    {doc.isVideo ? 'STREAM INSPECTION VIDEO' : 'VIEW / DOWNLOAD PDF'}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
