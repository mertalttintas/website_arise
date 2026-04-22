import { Link } from 'react-router-dom'
import { useData } from '../data/DataContext'

export default function ProjectCard({ project }) {
  const { getTheme, getPerson, themeColors } = useData()
  const theme = getTheme(project.themeId)
  const c     = themeColors[theme?.color ?? 'blue']

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      {/* Theme tag */}
      <span className={`tag w-fit ${c.tag}`}>{theme?.shortName}</span>

      <h3 className="font-semibold text-gray-900 text-base leading-snug">{project.title}</h3>
      <p className="text-sm text-gray-600 flex-1">{project.description}</p>

      {/* Status + year */}
      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span className={`inline-flex items-center gap-1 font-medium ${project.status === 'ongoing' ? 'text-green-600' : 'text-gray-500'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'ongoing' ? 'bg-green-500' : 'bg-gray-400'}`} />
          {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
        </span>
        <span>·</span>
        <span>{project.year}</span>
      </div>

      {/* People */}
      <div className="flex flex-wrap gap-1 pt-1 border-t border-gray-100">
        {project.peopleIds.map(pid => {
          const p = getPerson(pid)
          return p ? (
            <Link
              key={pid}
              to="/people"
              className="text-xs text-blue-700 hover:underline"
            >
              {p.name}
            </Link>
          ) : null
        }).reduce((acc, el, i) => acc.length ? [...acc, <span key={`sep-${i}`} className="text-xs text-gray-300">·</span>, el] : [el], [])}
      </div>
    </div>
  )
}
