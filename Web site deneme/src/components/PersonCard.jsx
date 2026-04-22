import { useData } from '../data/DataContext'

const roleLabel = { faculty: 'Faculty', phd: 'PhD Candidate', masters: 'MSc Student' }
const roleBadge = {
  faculty: 'bg-blue-100 text-blue-700',
  phd:     'bg-purple-100 text-purple-700',
  masters: 'bg-gray-100 text-gray-600',
}

function Initials({ name }) {
  const parts = name.replace('Dr. ', '').split(' ')
  const letters = parts.slice(0, 2).map(p => p[0]).join('')
  return (
    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
      <span className="text-lg font-semibold text-gray-500">{letters}</span>
    </div>
  )
}

export default function PersonCard({ person }) {
  const { themes, themeColors } = useData()
  const personThemes = themes.filter(t => person.themeIds.includes(t.id))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Initials name={person.name} />
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900">{person.name}</h3>
          <p className="text-sm text-gray-500">{person.title}</p>
          <span className={`mt-1 tag ${roleBadge[person.role]}`}>{roleLabel[person.role]}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600">{person.bio}</p>

      {/* Research interests */}
      <div className="flex flex-wrap gap-1">
        {person.interests.map(i => (
          <span key={i} className="tag bg-gray-100 text-gray-600">{i}</span>
        ))}
      </div>

      {/* Themes */}
      <div className="flex flex-wrap gap-1 pt-1 border-t border-gray-100">
        {personThemes.map(t => {
          const c = themeColors[t.color]
          return (
            <span key={t.id} className={`tag ${c.tag}`}>{t.shortName}</span>
          )
        })}
      </div>

      <a
        href={`mailto:${person.email}`}
        className="text-xs text-blue-600 hover:underline mt-auto"
      >
        {person.email}
      </a>
    </div>
  )
}
