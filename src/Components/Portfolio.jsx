import './portfolio.css';

const PROJETOS = [
  {
    id: 1,
    titulo: "Agente Urbano",
    descricao: "Plataforma de participação cívica para reporte de problemas urbanos. Mapa 3D com Mapbox GL, assistente de IA integrado a múltiplos provedores (Gemini, OpenAI, Ollama) e dashboard de gestão com modo dark.",
    tecnologias: ["PHP", "Leaflet.js", "Mapbox GL", "MySQL", "JavaScript"],
    status: "Em andamento",
    tipo: "Projeto Integrador",
  },
  {
    id: 2,
    titulo: "Comércio no Mapa",
    descricao: "Diretório de comércios com mapeamento georreferenciado desenvolvido para o Fecomércio/Sistema S. Rebuild completo com identidade visual da marca e modo de moderação protegido por senha.",
    tecnologias: ["PHP", "PDO", "Leaflet.js", "OpenStreetMap", "MySQL"],
    status: "Concluído",
    tipo: "Projeto Institucional",
  },
  {
    id: 3,
    titulo: "Biblioteca Vestibular",
    descricao: "Catálogo interativo de livros para vestibulandos com filtros dinâmicos por categoria, status e busca em tempo real. Favoritos persistentes via localStorage e ficha detalhada em nova guia.",
    tecnologias: ["React", "Vite", "JavaScript", "CSS"],
    status: "Em andamento",
    tipo: "Projeto Integrador",
  },
];

const HABILIDADES = [
  { grupo: "Front-end",    lista: ["React", "JavaScript", "HTML5", "CSS3", "Vite"] },
  { grupo: "Back-end",     lista: ["PHP", "MySQL", "PDO"] },
  { grupo: "Mapas & Geo",  lista: ["Leaflet.js", "Mapbox GL", "OpenStreetMap"] },
  { grupo: "Ferramentas",  lista: ["Git", "XAMPP", "VS Code"] },
];

function Header() {
  return (
    <header className="pf-header">
      <span className="pf-logo">&lt;Jean /&gt;</span>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pf-hero" id="sobre">
      <div className="pf-avatar">J</div>
      <h1>Jean</h1>
      <p className="pf-role">// Desenvolvedor Web Full-Stack</p>
      <p className="pf-bio">
        Estudante de Desenvolvimento Web focado em criar aplicações que conectam pessoas e informação.
        Especializado em interfaces com mapas, sistemas de busca e filtragem dinâmica.
      </p>
      <div className="pf-meta">
        <span>📍 Porto Alegre, RS</span>
        <span>🎓 Estudante</span>
        <span>🖥️ Disponível para projetos</span>
      </div>
      <div className="pf-stats">
        <div className="pf-stat"><strong>3</strong><span>Projetos</span></div>
        <div className="pf-stat"><strong>10+</strong><span>Tecnologias</span></div>
        <div className="pf-stat"><strong>2026</strong><span>Desde</span></div>
      </div>
    </section>
  );
}

function CardProjeto({ projeto }) {
  const statusClass = projeto.status === "Concluído" ? "status-ok" : "status-wip";

  return (
    <article className="pf-card">
      <div className="pf-card-topo">
        <span className="pf-tipo">{projeto.tipo}</span>
        <span className={`pf-status ${statusClass}`}>{projeto.status}</span>
      </div>
      <h3>{projeto.titulo}</h3>
      <p>{projeto.descricao}</p>
      <div className="pf-techs">
        {projeto.tecnologias.map((tech) => (
          <span key={tech} className="pf-tech">{tech}</span>
        ))}
      </div>
    </article>
  );
}

function Projetos() {
  return (
    <section className="pf-secao" id="projetos">
      <h2>Projetos</h2>
      <div className="pf-grid-projetos">
        {PROJETOS.map((p) => (
          <CardProjeto key={p.id} projeto={p} />
        ))}
      </div>
    </section>
  );
}

function Habilidades() {
  return (
    <section className="pf-secao" id="habilidades">
      <h2>Habilidades</h2>
      <div className="pf-grid-skills">
        {HABILIDADES.map(({ grupo, lista }) => (
          <div key={grupo} className="pf-skill-grupo">
            <h4>{grupo}</h4>
            <div className="pf-pills">
              {lista.map((s) => (
                <span key={s} className="pf-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pf-footer">
      <p>Jean · Desenvolvedor Web · Porto Alegre, RS</p>
      <span className="pf-footer-sub">Feito com React · 2026</span>
    </footer>
  );
}

function Portfolio() {
  return (
    <>
      <Header />
      <main className="pf-main">
        <Hero />
        <Projetos />
        <Habilidades />
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
