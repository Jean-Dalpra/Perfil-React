import { PROJETOS, EXPERIENCIAS } from '../data/portfolioData.js'
import imgLogo from '../assets/logojd.png'

const NAV_ITEMS = [
  { key: 'sobre', label: 'Início', icon: '' },
  { key: 'habilidades', label: 'Habilidades', icon: '' },
  { key: 'projetos', label: 'Projetos', icon: '' },
  { key: 'experiencia', label: 'Experiência', icon: '' },
]

function Sidebar({ activePage, onNavigate }) {
  const currentNavKey = activePage === 'detalhe' ? 'projetos' : activePage

  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <span className="brand-mark"><img src={imgLogo} alt="Logo" /></span>
        <div className="sidebar-brand-text">
          <strong>Jean Dalpra</strong>
          <span>Iniciante em Desenvolvimento Web Full-Stack</span>
        </div>
      </div>

      <span className="sidebar-nav-label">Menu</span>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={item.key === currentNavKey ? 'sidebar-nav-item active' : 'sidebar-nav-item'}
            onClick={() => onNavigate(item.key)}
          >
            <span className="sidebar-nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-cta">
        <strong>Disponível para projetos</strong>
        <p>Vamos construir algo com impacto.</p>
        <a className="sidebar-cta-button" href="https://github.com/Jean-Dalpra/">
          Fale comigo →
        </a>
      </div>

      <div className="sidebar-stats">
        <div>
          <strong>{PROJETOS.length}</strong>
          <span>Projetos</span>
        </div>
        <div>
          <strong>{EXPERIENCIAS.length}</strong>
          <span>Experiências</span>
        </div>
      </div>

      <div className="sidebar-social">
        <a href="https://github.com/Jean-Dalpra/" aria-label="GitHub">GH</a>
        <a href="https://www.linkedin.com/in/jean-dalpra-0b315a38b/" aria-label="LinkedIn">in</a>
      </div>
    </aside>
  )
}

export default Sidebar