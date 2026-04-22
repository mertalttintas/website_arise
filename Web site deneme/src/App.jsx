import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { DataProvider } from './data/DataContext'
import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import Home         from './pages/Home'
import Themes       from './pages/Themes'
import ThemeDetail  from './pages/ThemeDetail'
import Projects     from './pages/Projects'
import People       from './pages/People'
import Publications from './pages/Publications'
import Admin        from './pages/Admin'

function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          {/* Admin — no Navbar/Footer */}
          <Route path="/admin" element={<Admin />} />

          {/* Public site */}
          <Route element={<SiteLayout />}>
            <Route path="/"             element={<Home />} />
            <Route path="/themes"       element={<Themes />} />
            <Route path="/themes/:slug" element={<ThemeDetail />} />
            <Route path="/projects"     element={<Projects />} />
            <Route path="/people"       element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research"     element={<Navigate to="/themes" replace />} />
            <Route path="*" element={
              <div className="max-w-6xl mx-auto px-4 py-24 text-center">
                <p className="text-5xl font-bold text-gray-200">404</p>
                <p className="text-gray-500 mt-4">Page not found.</p>
              </div>
            } />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}
