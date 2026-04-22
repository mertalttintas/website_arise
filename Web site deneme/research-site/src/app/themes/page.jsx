import Link from 'next/link'
import { themes, themeColorMap } from '@/data/mockData'

export const metadata = {
  title: 'Research Themes — OptiLab',
}

export default function ThemesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Research Themes</h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          OptiLab's work is organized around four interdisciplinary themes that apply optimization
          and machine learning to high-impact real-world problems.
        </p>
      </div>

      {/* Theme cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {themes.map((theme) => {
          const colors = themeColorMap[theme.slug]
          return (
            <Link
              key={theme.id}
              href={`/themes/${theme.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center text-2xl`}>
                  {colors.icon}
                </div>
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#1e3a5f] transition-colors leading-tight">
                  {theme.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {theme.shortDescription}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.badge}`}>
                    {theme.projectIds.length} projects
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.badge}`}>
                    {theme.peopleIds.length} researchers
                  </span>
                </div>
                <span className="text-sm text-blue-600 font-medium group-hover:underline">
                  Explore →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
