'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/themes', label: 'Research Themes' },
  { href: '/projects', label: 'Projects' },
  { href: '/people', label: 'People' },
  { href: '/publications', label: 'Publications' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + '/')

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#1e3a5f] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <div className="leading-tight">
              <div className="text-[#1e3a5f] font-bold text-lg tracking-tight">OptiLab</div>
              <div className="hidden sm:block text-gray-400 text-xs -mt-0.5">Analytics Research Lab</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-[#1e3a5f] bg-blue-50'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-2 pb-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm ${pathname === '/' ? 'text-[#1e3a5f] font-medium' : 'text-gray-600'}`}
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm ${isActive(link.href) ? 'text-[#1e3a5f] font-medium' : 'text-gray-600'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
