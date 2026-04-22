import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  themes,
  getThemeBySlug,
  getProjectsByIds,
  getPeopleByIds,
  themeColorMap,
} from '@/data/mockData'

export async function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }) {
  const theme = getThemeBySlug(params.slug)
  return { title: theme ? `${theme.title} — OptiLab` : 'Theme — OptiLab' }
}

export default function ThemeDetailPage({ params }) {
  const theme = getThemeBySlug(params.slug)
  if (!theme) notFound()

  const colors = themeColorMap[theme.slug]
  const relatedProjects = getProjectsByIds(theme.projectIds)
  const relatedPeople = getPeopleByIds(theme.peopleIds)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span>/</span>
        <Link href="/themes" className="hover:text-gray-900">Research Themes</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{theme.title}</span>
      </nav>

      {/* Theme header */}
      <div className={`${colors.bg} ${colors.border} border rounded-xl p-7 mb-10`}>
        <div className="flex items-start gap-4">
          <span className="text-4xl">{colors.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{theme.title}</h1>
            <p className="text-gray-700 leading-relaxed max-w-2xl">{theme.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Projects */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Projects
            <span className="text-sm font-normal text-gray-400 ml-2">({relatedProjects.length})</span>
          </h2>
          <div className="space-y-4">
            {relatedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                      project.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                <p className="text-xs text-gray-400 mt-3">Since {project.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* People */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Researchers
            <span className="text-sm font-normal text-gray-400 ml-2">({relatedPeople.length})</span>
          </h2>
          <div className="space-y-3">
            {relatedPeople.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3"
              >
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {person.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.title}</p>
                  <span
                    className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${
                      person.role === 'Faculty'
                        ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {person.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/people"
            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
          >
            View all team members →
          </Link>
        </div>
      </div>
    </div>
  )
}
