import { O_SOBRE } from '../data/portfolioData.js'
import SectionHeader from './SectionHeader.jsx'

const ICONS = ['🚀', '💻', '🗺️', '⚡', '🎯', '🧩']

function AboutSection() {
  return (
    <section className="section" id="sobre">
      <SectionHeader title={O_SOBRE.titulo} />
      <p className="section-lead">{O_SOBRE.texto}</p>
      <div className="services-grid">
        {O_SOBRE.destaques.map((item, index) => (
          <div key={item} className="service-card">
            <span className="service-icon" aria-hidden="true">{ICONS[index % ICONS.length]}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection