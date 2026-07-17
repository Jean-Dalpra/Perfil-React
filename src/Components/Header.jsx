function Header({ activePage, onNavigate }) {
  const NAV_ITEMS = [
    { key: 'sobre', label: 'Sobre', icon: '' },
    { key: 'projetos', label: 'Projetos', icon: '' },
    { key: 'certificados', label: 'Certificados', icon: '' },
    { key: 'gostos', label: 'Gostos', icon: '' },
  ]

  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">JD</span>
        <span className="brand-name">Jean Dalpra</span>
      </div>
      <nav className="site-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={item.key === activePage ? 'nav-button active' : 'nav-button'}
            onClick={() => onNavigate(item.key)}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header