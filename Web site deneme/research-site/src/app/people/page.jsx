import { people, getProjectsByIds } from '@/data/mockData'

export const metadata = {
  title: 'People — OptiLab',
}

function PersonCard({ person }) {
  const projects = getProjectsByIds(person.projectIds)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col">
      {/* Avatar + name */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">
            {person.name
              .split(' ')
              .filter((n) => !n.startsWith('Dr'))
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{person.name}</h3>
          <p className="text-sm text-gray-500">{person.title}</p>
          <span
            className={`inline-block mt-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium ${
              person.role === 'Faculty'
                ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {person.role}
          </span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{person.bio}</p>

      {/* Interests */}
      <div className="mt-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
          Research Interests
        </p>
        <div className="flex flex-wrap gap-1.5">
          {person.interests.map((interest) => (
            <span
              key={interest}
              className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
            Projects
          </p>
          <ul className="space-y-1">
            {projects.map((p) => (
              <li key={p.id} className="text-xs text-gray-600 flex items-start gap-1.5">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function PeoplePage() {
  const faculty = people.filter((p) => p.role === 'Faculty')
  const students = people.filter((p) => p.role === 'Student')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">People</h1>
        <p className="text-gray-500 mt-2">
          {faculty.length} faculty members &amp; {students.length} graduate students
        </p>
      </div>

      {/* Faculty */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-gray-700 mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#1e3a5f] rounded-full inline-block" />
          Faculty &amp; Researchers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {faculty.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </section>

      {/* Students */}
      <section>
        <h2 className="text-lg font-bold text-gray-700 mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-400 rounded-full inline-block" />
          Graduate Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {students.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </section>
    </div>
  )
}
