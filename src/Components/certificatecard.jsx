function certificatecard({ certificado, onSelect }) {
  return (
    <article className="card certificate-card project-card" onClick={() => onSelect(certificado.id)}>
      <div className="project-thumb">
        {certificado.imagem ? (
          <img
            className="project-thumb-img"
            src={certificado.imagem}
            alt={`Certificado ${certificado.titulo}`}
          />
        ) : (
          <div className="project-thumb-body" aria-hidden="true">
            <span className="project-thumb-line" style={{ width: '60%' }} />
            <span className="project-thumb-line" style={{ width: '40%' }} />
          </div>
        )}
      </div>
      <span className="certificate-meta">{certificado.emissor} · {certificado.ano}</span>
      <h3>{certificado.titulo}</h3>
      <p>{certificado.descricao}</p>
      <div className="project-cta">Ver detalhes →</div>
    </article>
  )
}

export default certificatecard