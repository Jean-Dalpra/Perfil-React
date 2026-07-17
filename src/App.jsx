import { useState } from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Hero from './Components/Hero.jsx'
import AboutSection from './Components/About.jsx'
import SkillsSection from './Components/Skills.jsx'
import CompetenciesSection from './Components/Competencies.jsx'
import ProjectsSection from './Components/ProjectList.jsx'
import ProjectDetails from './Components/ProjectDetails.jsx'
import ExperienceSection from './Components/Experience.jsx'
import Footer from './Components/Footer.jsx'
import { PROJETOS } from './data/portfolioData.js'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('sobre')
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const selectedProject = PROJETOS.find((item) => item.id === selectedProjectId)

  const navigate = (page) => {
    setSelectedProjectId(null)
    setActivePage(page)
  }

  const handleSelectProject = (id) => {
    setSelectedProjectId(id)
    setActivePage('detalhe')
  }

  const handleBackToProjects = () => {
    setSelectedProjectId(null)
    setActivePage('projetos')
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={navigate} />
      <main className="app-main">
        {activePage === 'sobre' && (
          <>
            <Hero onNavigate={navigate} />
            <AboutSection />
          </>
        )}
        {activePage === 'habilidades' && (
          <>
            <SkillsSection />
            <CompetenciesSection />
          </>
        )}
        {activePage === 'projetos' && <ProjectsSection onSelectProject={handleSelectProject} />}
        {activePage === 'experiencia' && <ExperienceSection />}
        {activePage === 'detalhe' && selectedProject && (
          <ProjectDetails projeto={selectedProject} onBack={handleBackToProjects} />
        )}
        <Footer />
      </main>
    </div>
  )
}

export default App