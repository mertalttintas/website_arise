import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0d1f3c] text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="font-bold text-lg tracking-wide">RiSE Lab</p>
            <p className="text-xs text-blue-300 mt-0.5 max-w-xs">
              Analytics for Resilient, Inclusive, and Sustainable Systems
            </p>
            <p className="text-sm text-blue-200 mt-3">
              Department of Industrial Engineering<br />
              University of Excellence
            </p>
          </div>
          <nav className="flex flex-col gap-1.5 text-sm text-blue-300">
            <Link to="/"             className="hover:text-white transition-colors">About</Link>
            <Link to="/themes"       className="hover:text-white transition-colors">Research Themes</Link>
            <Link to="/projects"     className="hover:text-white transition-colors">Projects</Link>
            <Link to="/people"       className="hover:text-white transition-colors">Join Us</Link>
            <Link to="/publications" className="hover:text-white transition-colors">Publications</Link>
          </nav>
        </div>
        <p className="text-xs text-blue-400 mt-8 border-t border-blue-900 pt-6">
          © 2024 RiSE Lab. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
