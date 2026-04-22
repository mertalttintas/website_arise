import { publications, themes, themeColorMap } from '@/data/mockData'

export const metadata = {
  title: 'Publications — OptiLab',
}

export default function PublicationsPage() {
  // Group by year descending
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)

  const byYear = years.reduce((acc, year) => {
    acc[year] = publications.filter((p) => p.year === year)
    return acc
  }, {})

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Publications</h1>
        <p className="text-gray-500 mt-2">
          {publications.length} publications · {years[0]}–{years[years.length - 1]}
        </p>
      </div>

      {/* Theme legend */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-10">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Research Theme
        </p>
        <div className="flex flex-wrap gap-3">
          {themes.map((theme) => {
            const colors = themeColorMap[theme.slug]
            return (
              <div key={theme.slug} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                <span className="text-xs text-gray-600">{theme.title}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Publications by year */}
      <div className="space-y-10">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b border-gray-200">
              {year}
            </h2>
            <ol className="space-y-5">
              {byYear[year].map((pub, idx) => {
                const colors = themeColorMap[pub.themeSlug]
                return (
                  <li key={pub.id} className="flex gap-4">
                    <span className="text-gray-300 text-sm font-mono pt-0.5 w-5 flex-shrink-0 text-right">
                      {idx + 1}.
                    </span>
                    <div className="flex gap-3 items-start">
                      <span className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${colors.dot}`} />
                      <div>
                        <p className="text-gray-900 font-medium text-sm leading-snug">{pub.title}</p>
                        <p className="text-gray-500 text-sm mt-1">
                          {pub.authors}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          <em>{pub.venue}</em> &middot; {pub.year}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
