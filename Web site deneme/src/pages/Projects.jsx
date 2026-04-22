import { useState } from 'react'
import { useData } from '../data/DataContext'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const { projects, themes } = useData()
  const [activeTheme, setActiveTheme] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')

  const filtered = projects.filter(p => {
    const themeMatch  = activeTheme  === 'all' || p.themeId === Number(activeTheme)
    const statusMatch = activeStatus === 'all' || p.status === activeStatus
    return themeMatch && statusMatch
  })

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-500 mt-2">Ongoing and completed research projects across all themes.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {/* Theme filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTheme('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeTheme === 'all'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            All Themes
          </button>
          {themes.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTheme(String(t.id))}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeTheme === String(t.id)
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              {t.shortName}
            </button>
          ))}
        </div>

        <div className="w-px bg-gray-200 self-stretch hidden sm:block" />

        {/* Status filter */}
        <div className="flex gap-2">
          {[['all', 'All Status'], ['ongoing', 'Ongoing'], ['completed', 'Completed']].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setActiveStatus(val)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeStatus === val
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0
        ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        )
        : (
          <p className="text-gray-500 text-sm">No projects match the selected filters.</p>
        )
      }
    </main>
  )
}
