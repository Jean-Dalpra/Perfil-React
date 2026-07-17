import { HABILIDADES_TECNICAS } from '../data/portfolioData.js'
import SectionHeader from './SectionHeader.jsx'

function SkillsSection() {
  return (
    <section className="section" id="habilidades-tecnicas">
      <SectionHeader title="Habilidades técnicas" />
      <p className="section-lead">
        Tecnologias e ferramentas que uso no dia a dia dos projetos.
      </p>
      <div className="skills-grid">
        {HABILIDADES_TECNICAS.map(({ grupo, lista }) => (
          <div key={grupo} className="skill-group">
            <h4>{grupo}</h4>
            <div className="skill-pills">
              {lista.map((item) => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection