import { createContext, useContext, useState } from 'react'
import {
  themes as defaultThemes,
  people as defaultPeople,
  projects as defaultProjects,
  publications as defaultPublications,
  themeColors,
} from './mockData.js'

const KEYS = {
  themes:       'site_themes',
  people:       'site_people',
  projects:     'site_projects',
  publications: 'site_publications',
}

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch { return fallback }
}

function persist(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [themes,       setThemes]       = useState(() => load(KEYS.themes,       defaultThemes))
  const [people,       setPeople]       = useState(() => load(KEYS.people,       defaultPeople))
  const [projects,     setProjects]     = useState(() => load(KEYS.projects,     defaultProjects))
  const [publications, setPublications] = useState(() => load(KEYS.publications, defaultPublications))

  const saveThemes       = d => { persist(KEYS.themes,       d); setThemes(d) }
  const savePeople       = d => { persist(KEYS.people,       d); setPeople(d) }
  const saveProjects     = d => { persist(KEYS.projects,     d); setProjects(d) }
  const savePublications = d => { persist(KEYS.publications, d); setPublications(d) }

  const getTheme   = id => themes.find(t => t.id === id)
  const getPerson  = id => people.find(p => p.id === id)
  const getProject = id => projects.find(p => p.id === id)

  return (
    <DataContext.Provider value={{
      themes, people, projects, publications, themeColors,
      saveThemes, savePeople, saveProjects, savePublications,
      getTheme, getPerson, getProject,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() { return useContext(DataContext) }
