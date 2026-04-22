import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-lg">OptiLab</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Interdisciplinary analytics research for humanitarian, agricultural, and healthcare challenges.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-300 mb-3">Research Areas</h4>
            <ul className="space-y-1.5 text-sm text-blue-200">
              <li>
                <Link href="/themes/humanitarian-disaster-analytics" className="hover:text-white transition-colors">
                  Humanitarian & Disaster Analytics
                </Link>
              </li>
              <li>
                <Link href="/themes/agriculture-analytics" className="hover:text-white transition-colors">
                  Agriculture Analytics
                </Link>
              </li>
              <li>
                <Link href="/themes/agrifood-analytics" className="hover:text-white transition-colors">
                  Agrifood Analytics
                </Link>
              </li>
              <li>
                <Link href="/themes/healthcare-analytics" className="hover:text-white transition-colors">
                  Healthcare Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-300 mb-3">Contact</h4>
            <div className="text-sm text-blue-200 space-y-1">
              <p>Department of Industrial Engineering</p>
              <p>Özyeğin University, Istanbul</p>
              <p className="mt-2">
                <a href="mailto:optilab@ozyegin.edu.tr" className="hover:text-white transition-colors">
                  optilab@ozyegin.edu.tr
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-xs text-blue-400">
          © 2024 OptiLab · Özyeğin University · All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
