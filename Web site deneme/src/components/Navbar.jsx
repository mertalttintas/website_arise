import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/',             label: 'About'        },
  { to: '/themes',       label: 'Research'     },
  { to: '/projects',     label: 'Projects'     },
  { to: '/people',       label: 'Team'         },
  { to: '/publications', label: 'Publications' },
]


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-28 py-2">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/Arise Logo (2).png"
              alt="ARISE Lab"
              style={{ width: '320px', height: 'auto' }}
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }, i) => (
              <NavLink
                key={i}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? 'border-[#1e3a5f] text-[#1e3a5f]'
                      : 'border-transparent text-gray-600 hover:text-[#1e3a5f]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-500 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-3 flex flex-col gap-1">
            {links.map(({ to, label }, i) => (
              <NavLink
                key={i}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-sm font-medium ${isActive ? 'text-[#1e3a5f] bg-blue-50' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
