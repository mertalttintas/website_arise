import { useParams, Link } from 'react-router-dom'
import { useData } from '../data/DataContext'
import ProjectCard from '../components/ProjectCard'
import PersonCard from '../components/PersonCard'

export default function ThemeDetail() {
  const { slug } = useParams()
  const { themes, themeColors, getProject, getPerson } = useData()
  const theme = themes.find(t => t.slug === slug)

  if (!theme) {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-gray-500">Theme not found.</p>
        <Link to="/themes" className="mt-4 inline-block text-blue-700 hover:underline">← Back to themes</Link>
      </main>
    )
  }

  const c              = themeColors[theme.color]
  const themeProjects  = theme.projectIds.map(getProject).filter(Boolean)
  const themePeople    = theme.peopleIds.map(getPerson).filter(Boolean)

  return (
    <main>
      {/* Header banner */}
      <section className={`${c.bg} border-b ${c.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <Link to="/themes" className="text-sm text-gray-500 hover:text-gray-700">← Research Themes</Link>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-4xl">{theme.icon}</span>
            <h1 className={`text-3xl font-bold ${c.text}`}>{theme.name}</h1>
          </div>
          <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">{theme.description}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-14">
        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Projects</h2>
          {themeProjects.length > 0
            ? <div className="grid sm:grid-cols-2 gap-5">
                {themeProjects.map(p => <ProjectCard key={p.id} project={p} />)}
              </div>
            : <p className="text-gray-500 text-sm">No projects yet.</p>
          }
        </section>

        {/* People */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">People in this Theme</h2>
          {themePeople.length > 0
            ? <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {themePeople.map(p => <PersonCard key={p.id} person={p} />)}
              </div>
            : <p className="text-gray-500 text-sm">No people listed.</p>
          }
        </section>
      </div>
    </main>
  )
}
