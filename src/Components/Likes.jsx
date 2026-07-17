import { GOSTOS } from '../data/portfolioData.js'
import SectionHeader from './SectionHeader.jsx'

function LikesSection() {
  return (
    <section className="section" id="gostos">
      <SectionHeader title="Meus gostos e aspirações" />
      <div className="split-grid">
        <div className="card detail-card">
          <h3>Meus gostos</h3>
          <ul>
            {GOSTOS.gostos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card detail-card">
          <h3>Minhas aspirações</h3>
          <ul>
            {GOSTOS.aspiracoes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LikesSection
