import { COMPETENCIAS_PROFISSIONAIS } from '../data/portfolioData.js'
import SectionHeader from './SectionHeader.jsx'

function CompetenciesSection() {
  return (
    <section className="section" id="competencias">
      <SectionHeader title="Competências profissionais" />
      <p className="section-lead">
        Habilidades comportamentais que levo para o trabalho em equipe.
      </p>
      <div className="card-grid">
        {COMPETENCIAS_PROFISSIONAIS.map((item) => (
          <article key={item.titulo} className="card">
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CompetenciesSection