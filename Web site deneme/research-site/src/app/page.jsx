import Link from 'next/link'
import { themes, projects, publications, themeColorMap } from '@/data/mockData'

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.status === 'Active').slice(0, 3)
  const recentPubs = publications.slice(0, 4)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1e3a5f] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Department of Industrial Engineering · Özyeğin University
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">OptiLab</h1>
          <p className="text-xl text-blue-200 mb-5 font-light">
            Optimization &amp; Analytics Research Laboratory
          </p>
          <p className="text-blue-100 max-w-2xl leading-relaxed text-base">
            We develop data-driven methods and optimization models to tackle complex challenges
            in humanitarian operations, agriculture, agrifood systems, and healthcare delivery.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/themes"
              className="bg-white text-[#1e3a5f] px-5 py-2.5 rounded font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Our Research
            </Link>
            <Link
              href="/people"
              className="border border-blue-400 text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-blue-800 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: '4', label: 'Research Themes' },
            { value: '8', label: 'Active Projects' },
            { value: '10', label: 'Researchers' },
            { value: '12+', label: 'Publications' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#1e3a5f]">{value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* ── Research Themes ──────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Research Themes</h2>
              <p className="text-gray-500 text-sm mt-1">Four interdisciplinary focus areas</p>
            </div>
            <Link href="/themes" className="text-sm text-blue-600 hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {themes.map((theme) => {
              const colors = themeColorMap[theme.slug]
              return (
                <Link
                  key={theme.id}
                  href={`/themes/${theme.slug}`}
                  className="group block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">{colors.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#1e3a5f] transition-colors">
                        {theme.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                        {theme.shortDescription}
                      </p>
                      <div className="mt-3 flex gap-2">
                        <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>
                          {theme.projectIds.length} projects
                        </span>
                        <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>
                          {theme.peopleIds.length} researchers
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Featured Projects ────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
              <p className="text-gray-500 text-sm mt-1">Currently active research</p>
            </div>
            <Link href="/projects" className="text-sm text-blue-600 hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProjects.map((project) => {
              const colors = themeColorMap[project.themeSlug]
              return (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col"
                >
                  <span className={`self-start text-xs px-2 py-0.5 rounded-full font-medium mb-3 ${colors.badge}`}>
                    {project.themeLabel}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {project.description.slice(0, 120)}…
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-green-600 font-medium">● Active</span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Recent Publications ──────────────────────────────────────────────── */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Publications</h2>
              <p className="text-gray-500 text-sm mt-1">Selected from 2022–2024</p>
            </div>
            <Link href="/publications" className="text-sm text-blue-600 hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {recentPubs.map((pub) => {
              const colors = themeColorMap[pub.themeSlug]
              return (
                <div key={pub.id} className="px-5 py-4 flex gap-4 items-start">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 leading-snug">{pub.title}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {pub.authors} · <em>{pub.venue}</em> · {pub.year}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
