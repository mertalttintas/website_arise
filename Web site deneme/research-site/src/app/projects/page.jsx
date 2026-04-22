'use client'
import { useState } from 'react'
import { projects, themes, people, themeColorMap } from '@/data/mockData'

const ALL = 'all'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState(ALL)

  const filters = [
    { value: ALL, label: 'All Projects' },
    ...themes.map((t) => ({ value: t.slug, label: t.title })),
  ]

  const filtered =
    activeFilter === ALL ? projects : projects.filter((p) => p.themeSlug === activeFilter)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-500 mt-2">
          {projects.length} projects across {themes.length} research themes
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeFilter === f.value
                ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project) => {
          const colors = themeColorMap[project.themeSlug]
          const involvedPeople = people.filter((p) => project.peopleIds.includes(p.id))

          return (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Theme badge + status */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.badge}`}>
                  {colors.icon} {project.themeLabel}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    project.status === 'Active'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-gray-50 text-gray-500 border border-gray-200'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 mb-2 leading-snug">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* People */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Team</p>
                <div className="flex flex-wrap gap-1.5">
                  {involvedPeople.map((person) => (
                    <span
                      key={person.id}
                      className="text-xs bg-gray-50 border border-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
                    >
                      {person.name}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-3">Since {project.year}</p>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">No projects found for this filter.</p>
      )}
    </div>
  )
}
