function ProjectDetails({ projeto, onBack }) {
  return (
    <section className="section detail-section">
      <div className="detail-header">
        <button type="button" className="outline-button" onClick={onBack}>
          ← Voltar aos projetos
        </button>
        <div className="detail-labels">
          <span>{projeto.tipo}</span>
          <span>{projeto.status}</span>
        </div>
      </div>
      <h2>{projeto.titulo}</h2>
      <p className="detail-description">{projeto.descricao}</p>
      <div className="detail-grid">
        <div>
          <h3>Contexto</h3>
          <p>{projeto.contexto}</p>
        </div>
        <div>
          <h3>Resultados</h3>
          <p>{projeto.resultados}</p>
        </div>
      </div>
      <div className="detail-block">
        <h3>Minhas responsabilidades</h3>
        <ul>
          {projeto.responsabilidades.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="detail-block">
        <h3>Aprendizados</h3>
        <p>{projeto.aprendizados}</p>
      </div>
      <div className="detail-block">
        <h3>Tecnologias usadas</h3>
        <div className="project-tags">
          {projeto.tecnologias.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      {projeto.enlace && (
        <div className="detail-footer">
          <a href={projeto.enlace} target="_blank" rel="noreferrer">
            Abrir projeto
          </a>
        </div>
      )}
    </section>
  )
}

export default ProjectDetails
