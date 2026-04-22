import { useData } from '../data/DataContext'
import ThemeCard from '../components/ThemeCard'

export default function Themes() {
  const { themes } = useData()
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Research Themes</h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Our lab's work is organized around four interconnected research themes. Each theme
          addresses high-impact societal challenges through rigorous analytical methods.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {themes.map(t => <ThemeCard key={t.id} theme={t} />)}
      </div>
    </main>
  )
}
