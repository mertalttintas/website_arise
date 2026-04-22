import { useState } from 'react'
import { useData } from '../data/DataContext'

export default function Publications() {
  const { publications } = useData()
  const [query, setQuery] = useState('')

  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)

  const filtered = publications.filter(p => {
    if (!query.trim()) return true
    const q = query.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      p.authors.some(a => a.toLowerCase().includes(q)) ||
      p.venue.toLowerCase().includes(q)
    )
  })

  const byYear = years.map(y => ({
    year: y,
    pubs: filtered.filter(p => p.year === y),
  })).filter(g => g.pubs.length > 0)

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Publications</h1>
        <p className="text-gray-500 mt-2">{publications.length} publications in total.</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by title, author, or venue…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full sm:w-96 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {byYear.length === 0 && (
        <p className="text-gray-500 text-sm">No publications match your search.</p>
      )}

      <div className="flex flex-col gap-10">
        {byYear.map(({ year, pubs }) => (
          <section key={year}>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
              {year}
              <span className="h-px flex-1 bg-gray-200" />
            </h2>
            <div className="flex flex-col gap-3">
              {pubs.map(pub => (
                <div
                  key={pub.id}
                  className="bg-white border border-gray-200 rounded-lg px-5 py-4 hover:shadow-sm transition-shadow"
                >
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{pub.title}</p>
                  <p className="text-xs text-gray-500 mt-1.5">
                    <span className="text-gray-700">{pub.authors.join(', ')}</span>
                    {' '}&middot;{' '}
                    <span className="italic">{pub.venue}</span>
                  </p>
                  {pub.doi && (
                    <p className="text-xs text-blue-600 mt-1 font-mono">DOI: {pub.doi}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
