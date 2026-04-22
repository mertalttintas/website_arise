import { Link } from 'react-router-dom'
import { themeColors } from '../data/mockData'

export default function ThemeCard({ theme }) {
  const c = themeColors[theme.color]
  return (
    <Link
      to={`/themes/${theme.slug}`}
      className={`block rounded-xl border p-6 transition-shadow hover:shadow-md ${c.bg} ${c.border}`}
    >
      <span className="text-3xl">{theme.icon}</span>
      <h3 className={`mt-3 font-semibold text-lg ${c.text}`}>{theme.name}</h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{theme.description}</p>
      <span className={`mt-4 inline-flex items-center gap-1 text-xs font-medium ${c.text}`}>
        View theme →
      </span>
    </Link>
  )
}
