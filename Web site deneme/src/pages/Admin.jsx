import { useState } from 'react'
import { useData } from '../data/DataContext'

const PASSWORD = 'admin123'

// ─── Auth ────────────────────────────────────────────────────────────────────

function AuthGate({ onAuth }) {
  const [pw,  setPw]  = useState('')
  const [err, setErr] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (pw === PASSWORD) { onAuth() } else { setErr(true) }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-sm">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Admin Panel</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to manage site content.</p>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setErr(false) }}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${err ? 'border-red-400' : 'border-gray-300'}`}
              autoFocus
            />
            {err && <p className="text-red-500 text-xs mt-1">Incorrect password.</p>}
          </div>
          <button type="submit" className="bg-blue-700 text-white rounded-lg py-2 text-sm font-semibold hover:bg-blue-800 transition-colors">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

const inputCls    = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
const textareaCls = inputCls + ' resize-y'

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">{label}</label>
      {children}
    </div>
  )
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  )
}

function SaveCancel({ onCancel }) {
  return (
    <div className="flex justify-end gap-2 pt-3 border-t border-gray-100 mt-2">
      <button type="button" onClick={onCancel} className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
      <button type="submit" className="px-4 py-2 text-sm bg-blue-700 text-white rounded-lg hover:bg-blue-800">Save</button>
    </div>
  )
}

function ItemRow({ title, subtitle, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-900 text-sm truncate">{title}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5 truncate">{subtitle}</p>}
      </div>
      <div className="flex gap-2 ml-4 shrink-0">
        <button onClick={onEdit}   className="text-xs px-2.5 py-1 border border-gray-300 rounded-md hover:bg-gray-50">Edit</button>
        <button onClick={onDelete} className="text-xs px-2.5 py-1 border border-red-200 text-red-600 rounded-md hover:bg-red-50">Delete</button>
      </div>
    </div>
  )
}

// ─── People ──────────────────────────────────────────────────────────────────

const emptyPerson = { name: '', role: 'phd', title: '', email: '', bio: '', interests: [], themeIds: [] }

function PeopleTab() {
  const { people, themes, savePeople } = useData()
  const [editing, setEditing] = useState(null)

  function openNew()   { setEditing({ ...emptyPerson, id: Date.now() }) }
  function openEdit(p) { setEditing({ ...p }) }
  function del(id)     { if (confirm('Delete this person?')) savePeople(people.filter(p => p.id !== id)) }

  function save(data) {
    savePeople(people.some(p => p.id === data.id)
      ? people.map(p => p.id === data.id ? data : p)
      : [...people, data])
    setEditing(null)
  }

  return (
    <Section title={`People (${people.length})`} onAdd={openNew} addLabel="+ Add Person">
      {people.map(p => (
        <ItemRow key={p.id} title={p.name} subtitle={`${p.title} · ${p.email}`}
          onEdit={() => openEdit(p)} onDelete={() => del(p.id)} />
      ))}
      {editing && <PersonForm initial={editing} themes={themes} onSave={save} onCancel={() => setEditing(null)} />}
    </Section>
  )
}

function PersonForm({ initial, themes, onSave, onCancel }) {
  const [form, setForm] = useState({
    ...initial,
    interests: Array.isArray(initial.interests) ? initial.interests.join(', ') : initial.interests,
  })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const toggleTheme = id => setForm(f => ({
    ...f, themeIds: f.themeIds.includes(id) ? f.themeIds.filter(x => x !== id) : [...f.themeIds, id]
  }))

  function submit(e) {
    e.preventDefault()
    onSave({ ...form, interests: form.interests.split(',').map(s => s.trim()).filter(Boolean) })
  }

  return (
    <Modal title={initial.name ? `Edit: ${initial.name}` : 'New Person'} onClose={onCancel}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Full Name">
            <input className={inputCls} value={form.name} onChange={e => set('name', e.target.value)} required />
          </Field>
          <Field label="Title">
            <input className={inputCls} value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. PhD Candidate" />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Role">
            <select className={inputCls} value={form.role} onChange={e => set('role', e.target.value)}>
              <option value="faculty">Faculty</option>
              <option value="phd">PhD Student</option>
              <option value="masters">MSc Student</option>
            </select>
          </Field>
          <Field label="Email">
            <input className={inputCls} type="email" value={form.email} onChange={e => set('email', e.target.value)} />
          </Field>
        </div>
        <Field label="Bio">
          <textarea className={textareaCls} rows={3} value={form.bio} onChange={e => set('bio', e.target.value)} />
        </Field>
        <Field label="Research Interests (comma-separated)">
          <input className={inputCls} value={form.interests} onChange={e => set('interests', e.target.value)} placeholder="Optimization, Machine Learning, ..." />
        </Field>
        <Field label="Research Themes">
          <div className="flex flex-wrap gap-3 mt-1">
            {themes.map(t => (
              <label key={t.id} className="flex items-center gap-1.5 text-sm cursor-pointer select-none">
                <input type="checkbox" checked={form.themeIds.includes(t.id)} onChange={() => toggleTheme(t.id)} className="accent-blue-700" />
                {t.shortName}
              </label>
            ))}
          </div>
        </Field>
        <SaveCancel onCancel={onCancel} />
      </form>
    </Modal>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────

function ProjectsTab() {
  const { projects, themes, people, saveProjects } = useData()
  const [editing, setEditing] = useState(null)

  function openNew()   { setEditing({ title: '', description: '', themeId: themes[0]?.id ?? 1, status: 'ongoing', year: new Date().getFullYear(), peopleIds: [], id: Date.now() }) }
  function openEdit(p) { setEditing({ ...p }) }
  function del(id)     { if (confirm('Delete this project?')) saveProjects(projects.filter(p => p.id !== id)) }

  function save(data) {
    saveProjects(projects.some(p => p.id === data.id)
      ? projects.map(p => p.id === data.id ? data : p)
      : [...projects, data])
    setEditing(null)
  }

  return (
    <Section title={`Projects (${projects.length})`} onAdd={openNew} addLabel="+ Add Project">
      {projects.map(p => {
        const theme = themes.find(t => t.id === p.themeId)
        return (
          <ItemRow key={p.id} title={p.title} subtitle={`${theme?.shortName ?? '—'} · ${p.status} · ${p.year}`}
            onEdit={() => openEdit(p)} onDelete={() => del(p.id)} />
        )
      })}
      {editing && <ProjectForm initial={editing} themes={themes} people={people} onSave={save} onCancel={() => setEditing(null)} />}
    </Section>
  )
}

function ProjectForm({ initial, themes, people, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const togglePerson = id => setForm(f => ({
    ...f, peopleIds: f.peopleIds.includes(id) ? f.peopleIds.filter(x => x !== id) : [...f.peopleIds, id]
  }))

  function submit(e) {
    e.preventDefault()
    onSave({ ...form, themeId: Number(form.themeId), year: Number(form.year) })
  }

  return (
    <Modal title={initial.title ? `Edit: ${initial.title}` : 'New Project'} onClose={onCancel}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <Field label="Title">
          <input className={inputCls} value={form.title} onChange={e => set('title', e.target.value)} required />
        </Field>
        <Field label="Description">
          <textarea className={textareaCls} rows={3} value={form.description} onChange={e => set('description', e.target.value)} />
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Theme">
            <select className={inputCls} value={form.themeId} onChange={e => set('themeId', e.target.value)}>
              {themes.map(t => <option key={t.id} value={t.id}>{t.shortName}</option>)}
            </select>
          </Field>
          <Field label="Status">
            <select className={inputCls} value={form.status} onChange={e => set('status', e.target.value)}>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </Field>
          <Field label="Year">
            <input className={inputCls} type="number" value={form.year} onChange={e => set('year', e.target.value)} min={2000} max={2035} />
          </Field>
        </div>
        <Field label="Team Members">
          <div className="flex flex-wrap gap-3 mt-1">
            {people.map(p => (
              <label key={p.id} className="flex items-center gap-1.5 text-sm cursor-pointer select-none">
                <input type="checkbox" checked={form.peopleIds.includes(p.id)} onChange={() => togglePerson(p.id)} className="accent-blue-700" />
                {p.name}
              </label>
            ))}
          </div>
        </Field>
        <SaveCancel onCancel={onCancel} />
      </form>
    </Modal>
  )
}

// ─── Publications ─────────────────────────────────────────────────────────────

function PublicationsTab() {
  const { publications, savePublications } = useData()
  const [editing, setEditing] = useState(null)

  function openNew()   { setEditing({ title: '', authors: [], venue: '', year: new Date().getFullYear(), doi: '', id: Date.now() }) }
  function openEdit(p) { setEditing({ ...p }) }
  function del(id)     { if (confirm('Delete this publication?')) savePublications(publications.filter(p => p.id !== id)) }

  function save(data) {
    savePublications(publications.some(p => p.id === data.id)
      ? publications.map(p => p.id === data.id ? data : p)
      : [...publications, data])
    setEditing(null)
  }

  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)

  return (
    <Section title={`Publications (${publications.length})`} onAdd={openNew} addLabel="+ Add Publication">
      {years.map(year => (
        <div key={year}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 mt-4 first:mt-0">{year}</p>
          {publications.filter(p => p.year === year).map(pub => (
            <div key={pub.id} className="mb-2">
              <ItemRow
                title={pub.title}
                subtitle={`${pub.authors.join(', ')} · ${pub.venue}`}
                onEdit={() => openEdit(pub)}
                onDelete={() => del(pub.id)}
              />
            </div>
          ))}
        </div>
      ))}
      {editing && <PublicationForm initial={editing} onSave={save} onCancel={() => setEditing(null)} />}
    </Section>
  )
}

function PublicationForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    ...initial,
    authors: Array.isArray(initial.authors) ? initial.authors.join(', ') : initial.authors,
  })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  function submit(e) {
    e.preventDefault()
    onSave({ ...form, year: Number(form.year), authors: form.authors.split(',').map(s => s.trim()).filter(Boolean) })
  }

  return (
    <Modal title={initial.title ? 'Edit Publication' : 'New Publication'} onClose={onCancel}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <Field label="Title">
          <input className={inputCls} value={form.title} onChange={e => set('title', e.target.value)} required />
        </Field>
        <Field label="Authors (comma-separated)">
          <input className={inputCls} value={form.authors} onChange={e => set('authors', e.target.value)} placeholder="A. Smith, B. Jones, ..." />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Venue / Journal">
            <input className={inputCls} value={form.venue} onChange={e => set('venue', e.target.value)} />
          </Field>
          <Field label="Year">
            <input className={inputCls} type="number" value={form.year} onChange={e => set('year', e.target.value)} min={2000} max={2035} />
          </Field>
        </div>
        <Field label="DOI">
          <input className={inputCls} value={form.doi} onChange={e => set('doi', e.target.value)} placeholder="10.xxxx/..." />
        </Field>
        <SaveCancel onCancel={onCancel} />
      </form>
    </Modal>
  )
}

// ─── Themes ──────────────────────────────────────────────────────────────────

function ThemesTab() {
  const { themes, projects, people, saveThemes } = useData()
  const [editing, setEditing] = useState(null)

  function openNew()   { setEditing({ name: '', shortName: '', slug: '', color: 'blue', icon: '🔬', description: '', projectIds: [], peopleIds: [], id: Date.now() }) }
  function openEdit(t) { setEditing({ ...t }) }
  function del(id)     { if (confirm('Delete this theme?')) saveThemes(themes.filter(t => t.id !== id)) }

  function save(data) {
    saveThemes(themes.some(t => t.id === data.id)
      ? themes.map(t => t.id === data.id ? data : t)
      : [...themes, data])
    setEditing(null)
  }

  return (
    <Section title={`Research Themes (${themes.length})`} onAdd={openNew} addLabel="+ Add Theme">
      {themes.map(t => (
        <ItemRow key={t.id}
          title={`${t.icon}  ${t.name}`}
          subtitle={`Color: ${t.color} · Slug: /${t.slug}`}
          onEdit={() => openEdit(t)} onDelete={() => del(t.id)} />
      ))}
      {editing && <ThemeForm initial={editing} projects={projects} people={people} onSave={save} onCancel={() => setEditing(null)} />}
    </Section>
  )
}

function ThemeForm({ initial, projects, people, onSave, onCancel }) {
  const [form, setForm] = useState({ ...initial })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const toggleProject = id => setForm(f => ({
    ...f, projectIds: f.projectIds.includes(id) ? f.projectIds.filter(x => x !== id) : [...f.projectIds, id]
  }))
  const togglePerson = id => setForm(f => ({
    ...f, peopleIds: f.peopleIds.includes(id) ? f.peopleIds.filter(x => x !== id) : [...f.peopleIds, id]
  }))

  function submit(e) { e.preventDefault(); onSave(form) }

  return (
    <Modal title={initial.name ? `Edit: ${initial.name}` : 'New Theme'} onClose={onCancel}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Name">
            <input className={inputCls} value={form.name} onChange={e => set('name', e.target.value)} required />
          </Field>
          <Field label="Short Name">
            <input className={inputCls} value={form.shortName} onChange={e => set('shortName', e.target.value)} />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Slug (URL)">
            <input className={inputCls} value={form.slug} onChange={e => set('slug', e.target.value)} placeholder="e.g. healthcare" />
          </Field>
          <Field label="Color">
            <select className={inputCls} value={form.color} onChange={e => set('color', e.target.value)}>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="amber">Amber</option>
              <option value="rose">Rose</option>
            </select>
          </Field>
          <Field label="Icon (emoji)">
            <input className={inputCls} value={form.icon} onChange={e => set('icon', e.target.value)} />
          </Field>
        </div>
        <Field label="Description">
          <textarea className={textareaCls} rows={3} value={form.description} onChange={e => set('description', e.target.value)} />
        </Field>
        <Field label="Projects">
          <div className="flex flex-wrap gap-3 mt-1">
            {projects.map(p => (
              <label key={p.id} className="flex items-center gap-1.5 text-sm cursor-pointer select-none">
                <input type="checkbox" checked={form.projectIds.includes(p.id)} onChange={() => toggleProject(p.id)} className="accent-blue-700" />
                {p.title.length > 45 ? p.title.slice(0, 45) + '…' : p.title}
              </label>
            ))}
          </div>
        </Field>
        <Field label="People">
          <div className="flex flex-wrap gap-3 mt-1">
            {people.map(p => (
              <label key={p.id} className="flex items-center gap-1.5 text-sm cursor-pointer select-none">
                <input type="checkbox" checked={form.peopleIds.includes(p.id)} onChange={() => togglePerson(p.id)} className="accent-blue-700" />
                {p.name}
              </label>
            ))}
          </div>
        </Field>
        <SaveCancel onCancel={onCancel} />
      </form>
    </Modal>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────

function Section({ title, onAdd, addLabel, children }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <button onClick={onAdd} className="px-3 py-1.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">
          {addLabel}
        </button>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'people',       label: 'People' },
  { id: 'projects',     label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'themes',       label: 'Themes' },
]

export default function Admin() {
  const [authed,    setAuthed]    = useState(() => sessionStorage.getItem('admin_auth') === '1')
  const [activeTab, setActiveTab] = useState('people')

  function handleAuth() {
    sessionStorage.setItem('admin_auth', '1')
    setAuthed(true)
  }

  function signOut() {
    sessionStorage.removeItem('admin_auth')
    setAuthed(false)
  }

  if (!authed) return <AuthGate onAuth={handleAuth} />

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-base font-bold text-gray-900">Admin Panel</h1>
          <span className="text-gray-300 select-none">|</span>
          <a href="/" className="text-sm text-blue-700 hover:underline">← View Site</a>
        </div>
        <button onClick={signOut} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
          Sign out
        </button>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <nav className="flex gap-0">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'people'       && <PeopleTab />}
        {activeTab === 'projects'     && <ProjectsTab />}
        {activeTab === 'publications' && <PublicationsTab />}
        {activeTab === 'themes'       && <ThemesTab />}
      </div>
    </div>
  )
}
