import ProjectCard from './ProjectCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import { PROJETOS } from '../data/portfolioData.js'


function ProjectsSection({ onSelectProject }) {
  return (
    <section className="section" id="projetos">
      <SectionHeader title="Projetos" />
      <p className="section-lead">
        Clique em qualquer projeto para ver uma análise detalhada do objetivo,
        responsabilidades e resultados.
      </p>
      <div className="card-grid">
        {PROJETOS.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} onSelect={onSelectProject} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
