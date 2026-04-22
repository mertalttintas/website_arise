import { Link } from 'react-router-dom'
import { useData } from '../data/DataContext'

// ── Elaborate hero network visualization ─────────────────────────────────────
function HeroNetwork() {
  // Small junction dots (x, y as % of viewBox 0-100)
  const junctions = [
    [18,8],[32,5],[50,3],[66,8],[80,5],[92,18],[98,35],[96,55],
    [90,72],[80,88],[65,94],[50,90],[35,85],[20,78],[8,62],
    [5,42],[12,22],[55,30],[72,20],[85,42],[60,55],[38,48],
    [25,60],[70,78],[88,60],[45,18],[62,42],[30,35],
  ]

  // Large icon circles: [cx, cy, r, bg, content]
  const icons = [
    { cx: 50, cy: 22, r: 9,  bg: '#D4601A', label: '🚨' },
    { cx: 80, cy: 28, r: 7.5,bg: '#2B5FAD', label: '👥' },
    { cx: 26, cy: 58, r: 10, bg: '#0E7878', label: '✚'  },
    { cx: 74, cy: 70, r: 7.5,bg: '#3A7A32', label: '🌿' },
  ]

  // Connections between node indices (junctions + icons appended at end)
  const allNodes = [...junctions, [50,22],[80,28],[26,58],[74,70]]
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],
    [10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[0,16],[1,17],
    [2,45],[3,18],[4,18],[5,19],[6,19],[7,20],[8,23],[9,23],[10,24],
    [11,24],[12,13],[17,21],[17,28],[18,28],[19,25],[19,26],[20,26],
    [21,22],[22,28],[25,26],[26,29],[20,29],[24,29],[23,27],[27,22],
    [16,28],[15,27],[28,29],[28,30],[29,31],[30,31],
  ]

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
      style={{ overflow: 'visible' }}
    >
      {/* Connection lines */}
      {edges.map(([a, b], i) => {
        const n1 = allNodes[a], n2 = allNodes[b]
        if (!n1 || !n2) return null
        return (
          <line key={i}
            x1={n1[0]} y1={n1[1]} x2={n2[0]} y2={n2[1]}
            stroke="white" strokeOpacity="0.22" strokeWidth="0.5"
          />
        )
      })}

      {/* Junction dots */}
      {junctions.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.3"
          fill="white" fillOpacity="0.5" />
      ))}

      {/* Icon circles — rendered with foreignObject for emoji */}
      {icons.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r + 1.5}
            fill={n.bg} fillOpacity="0.25" />
          <circle cx={n.cx} cy={n.cy} r={n.r}
            fill={n.bg} />
          <text
            x={n.cx} y={n.cy}
            dominantBaseline="central" textAnchor="middle"
            fontSize={n.r * 1.05}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ── Theme cards data ──────────────────────────────────────────────────────────
const themeCards = [
  {
    color:    '#D4601A',
    icon:     '🚨',
    title:    'Humanitarian & Disaster Analytics',
    desc:     'Decision analytics for preparedness, response, recovery, and anticipatory action under uncertainty, disruption, and resource constraints.',
    slug:     'humanitarian',
  },
  {
    color:    '#0E7878',
    icon:     '🏥',
    title:    'Healthcare Analytics',
    desc:     'Analytical and optimization-based approaches to improve access, capacity allocation, continuity of care, and operational performance.',
    slug:     'healthcare',
  },
  {
    color:    '#4A7A32',
    icon:     '🌿',
    title:    'Food, Agriculture, and Climate Resilience Analytics',
    desc:     'Decision analytics for food systems, agricultural supply networks, sustainability, food security, and climate resilience.',
    slug:     'agriculture',
  },
]

// ── Bottom info cards ─────────────────────────────────────────────────────────
const infoCards = [
  {
    title: 'Our Goal',
    body:  'To help design resilient and sustainable systems that are inclusive by design and more responsive to vulnerable and underserved populations.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="20" stroke="#1e3a5f" strokeWidth="2"/>
        <circle cx="22" cy="22" r="12" stroke="#1e3a5f" strokeWidth="2"/>
        <circle cx="22" cy="22" r="4"  fill="#1e3a5f"/>
        <line x1="22" y1="2"  x2="22" y2="8"  stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round"/>
        <line x1="22" y1="36" x2="22" y2="42" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round"/>
        <line x1="2"  y1="22" x2="8"  y2="22" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round"/>
        <line x1="36" y1="22" x2="42" y2="22" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Our Approach',
    body:  'We combine operations research, optimization, uncertainty modeling, systems thinking, behavioral insights, and data-driven methods.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="20" stroke="#1e3a5f" strokeWidth="2"/>
        <circle cx="22" cy="22" r="3"  fill="#1e3a5f"/>
        <circle cx="11" cy="14" r="2.5" fill="#1e3a5f"/>
        <circle cx="33" cy="14" r="2.5" fill="#1e3a5f"/>
        <circle cx="11" cy="30" r="2.5" fill="#1e3a5f"/>
        <circle cx="33" cy="30" r="2.5" fill="#1e3a5f"/>
        <line x1="22" y1="22" x2="11" y2="14" stroke="#1e3a5f" strokeWidth="1.5"/>
        <line x1="22" y1="22" x2="33" y2="14" stroke="#1e3a5f" strokeWidth="1.5"/>
        <line x1="22" y1="22" x2="11" y2="30" stroke="#1e3a5f" strokeWidth="1.5"/>
        <line x1="22" y1="22" x2="33" y2="30" stroke="#1e3a5f" strokeWidth="1.5"/>
        <line x1="11" y1="14" x2="33" y2="14" stroke="#1e3a5f" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="11" y1="30" x2="33" y2="30" stroke="#1e3a5f" strokeWidth="1" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Our Collaborations',
    body:  'We work with researchers across disciplines and with partners from public, private, humanitarian, healthcare, and community sectors.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="20" stroke="#1e3a5f" strokeWidth="2"/>
        <path d="M13 26 C13 22 17 19 22 21 C27 19 31 22 31 26" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M15 26 C16 30 28 30 29 26" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="22" cy="16" r="3" stroke="#1e3a5f" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Our Impact',
    body:  'We connect analytical rigor with implementation realities to improve coordination, resilience, sustainability, and equitable outcomes.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
        <circle cx="22" cy="22" r="20" stroke="#1e3a5f" strokeWidth="2"/>
        <polyline points="10,32 16,24 22,27 32,14"
          stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="28,14 32,14 32,18"
          stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const { themes } = useData()

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(105deg, #0b1e38 0%, #0f2a45 30%, #0d2d38 60%, #0a2820 100%)',
          minHeight: '520px',
        }}
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 flex items-center min-h-[520px]">
          {/* Left — text */}
          <div className="flex-1 text-white py-16 pr-8 max-w-xl z-10">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15]">
              Better Decisions.<br />
              More <span style={{ color: '#E07B3A' }}>Resilient</span>,{' '}
              <span style={{ color: '#60B8E8' }}>Inclusive</span>,<br />
              and <span style={{ color: '#72C472' }}>Sustainable</span> Systems.
            </h1>
            <p className="mt-6 text-[#b0c8e0] text-base leading-relaxed">
              ARISE Lab develops decision analytics for complex societal systems.
              We design analytical and computational approaches to support more
              resilient and sustainable systems, while treating inclusivity as a core
              design principle — especially for vulnerable, underserved, and
              minority populations.
            </p>
            <div className="mt-8">
              <Link
                to="/themes"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/70 text-white font-semibold rounded-full text-sm hover:bg-white hover:text-[#0b1e38] transition-all"
              >
                Learn More About Our Lab <span className="text-base">→</span>
              </Link>
            </div>
          </div>

          {/* Right — network */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%]">
            <HeroNetwork />
          </div>
        </div>
      </section>

      {/* ── Research Themes (3 columns with dividers) ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {themeCards.map((card) => (
              <div key={card.slug} className="px-10 py-12 flex gap-6">
                {/* Icon circle */}
                <div
                  className="shrink-0 w-[72px] h-[72px] rounded-full flex items-center justify-center text-3xl shadow-md"
                  style={{ background: card.color }}
                >
                  {card.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-bold text-[17px] leading-snug" style={{ color: card.color }}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{card.desc}</p>
                  <Link
                    to={`/themes/${card.slug}`}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:underline"
                    style={{ color: card.color }}
                  >
                    Learn more <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-column info strip ── */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {infoCards.map(({ icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center bg-white">
                {icon}
              </div>
              <h3 className="font-bold text-[#1e3a5f] text-sm mt-1">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
