import { PROJETOS, EXPERIENCIAS } from '../data/portfolioData.js'
import imgjean from '../assets/image.png'

const TECNOLOGIAS = ['React', 'PHP', 'MySQL', 'Leaflet.js', 'Mapbox GL']

function Hero({ onNavigate }) {
  const tecnologiasUnicas = new Set(PROJETOS.flatMap((p) => p.tecnologias)).size

  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Profile</span>
        <h1>
          Jean <span className="text-gradient">Dalpra</span>
        </h1>
        <p className="hero-role">Iniciante em Desenvolvimento Web Full-Stack</p>
        <p className="hero-lead">
          Crio experiências digitais que conectam pessoas, informação e lugares, unindo mapas
          interativos, sistemas de busca, interfaces belas/intuitivas e projetos que sempre visam Inovação
        </p>
        <div className="hero-actions">
          <button type="button" className="btn-gradient" onClick={() => onNavigate('projetos')}>
            Ver projetos →
          </button>
          <button type="button" className="btn-outline" onClick={() => onNavigate('habilidades')}>
            Habilidades
          </button>
        </div>
        <div className="hero-trusted">
          <span>Tecnologias que utilizo</span>
          <div className="hero-trusted-list">
            {TECNOLOGIAS.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-blob">
          <img
            style={{ height: '98%', width: '98%', borderRadius: '50%', objectFit: 'cover' }}
            src={imgjean}
            alt="Jean Dalpra"
          />
        </div>
        <span className="hero-badge">
          <strong>2026</strong>
          <span>Atuando</span>
        </span>
      </div>

      <div className="hero-stats">
        <div>
          <strong>{PROJETOS.length}</strong>
          <span>Projetos Grandes</span>
        </div>
        <div>
          <strong>{EXPERIENCIAS.length}</strong>
          <span>Experiências</span>
        </div>
        <div>
          <strong>{tecnologiasUnicas}+</strong>
          <span>Tecnologias</span>
        </div>
        <div>
          <strong>2024</strong>
          <span>Desde</span>
        </div>
      </div>
    </section>
  )
}

export default Hero