import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

const SECTIONS = {
  about: About,
  skills: Skills,
  experience: Experience,
  education: Education,
}

export default function App() {
  const [section, setSection] = useState('about')
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const Active = SECTIONS[section]

  return (
    <div className="layout">
      <Sidebar
        section={section}
        onNavigate={setSection}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main className="content">
        <div className="terminal-bar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="terminal-path">~/javed/{section}</span>
        </div>
        <div className="content-body" key={section}>
          <Active />
        </div>
      </main>
    </div>
  )
}
