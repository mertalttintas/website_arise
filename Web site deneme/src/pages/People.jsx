import { useState } from 'react'
import { useData } from '../data/DataContext'
import PersonCard from '../components/PersonCard'

const roles = [
  { value: 'all',     label: 'All Members' },
  { value: 'faculty', label: 'Faculty'      },
  { value: 'phd',     label: 'PhD Students' },
  { value: 'masters', label: 'MSc Students' },
]

export default function People() {
  const { people } = useData()
  const [activeRole, setActiveRole] = useState('all')

  const filtered = activeRole === 'all' ? people : people.filter(p => p.role === activeRole)

  const faculty  = people.filter(p => p.role === 'faculty')
  const phd      = people.filter(p => p.role === 'phd')
  const masters  = people.filter(p => p.role === 'masters')

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">People</h1>
        <p className="text-gray-500 mt-2">
          {faculty.length} faculty · {phd.length} PhD students · {masters.length} MSc students
        </p>
      </div>

      {/* Role filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {roles.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveRole(value)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeRole === value
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(p => <PersonCard key={p.id} person={p} />)}
      </div>
    </main>
  )
}
