function ProjectCard({ projeto, onSelect }) {
  return (
    <article className="card project-card" onClick={() => onSelect(projeto.id)}>
      <div className="project-thumb">
        {projeto.imagem ? (
          <img
            className="project-thumb-img"
            src={projeto.imagem}
            alt={`Captura de tela do projeto ${projeto.titulo}`}
          />
        ) : (
          <>
            <div className="project-thumb-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="project-thumb-body" aria-hidden="true">
              <span className="project-thumb-line" style={{ width: '70%' }} />
              <span className="project-thumb-line" style={{ width: '45%' }} />
              <span className="project-thumb-line" style={{ width: '85%' }} />
            </div>
          </>
        )}
      </div>
      <div className="card-badge">
        <span>{projeto.tipo}</span>
        <strong>{projeto.status}</strong>
      </div>
      <h3>{projeto.titulo}</h3>
      <p>{projeto.descricao}</p>
      <div className="project-tags">
        {projeto.tecnologias.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="project-cta">Ver detalhes →</div>
    </article>
  )
}

export default ProjectCard