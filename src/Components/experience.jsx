import { EXPERIENCIAS } from '../data/portfolioData.js'
import SectionHeader from './SectionHeader.jsx'

function ExperienceSection() {
  return (
    <section className="section" id="experiencia">
      <SectionHeader title="Experiências e atividades" />
      <p className="section-lead">
        Formações, competições e atividades que marcaram minha trajetória até aqui.
      </p>
      <div className="card-grid">
        {EXPERIENCIAS.map((item) => (
          <article key={item.id} className="card">
            <div className="card-badge">
              <span>{item.instituicao} · {item.periodo}</span>
              <strong>{item.tipo}</strong>
            </div>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection