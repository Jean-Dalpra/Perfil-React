function certificatedetails({ certificado, onBack }) {
  return (
    <section className="section detail-section">
      <div className="detail-header">
        <button type="button" className="outline-button" onClick={onBack}>
          ← Voltar aos certificados
        </button>
        <div className="detail-labels">
          <span>{certificado.emissor}</span>
          <span>{certificado.ano}</span>
        </div>
      </div>
      <h2>{certificado.titulo}</h2>
      <p className="detail-description">{certificado.descricao}</p>

      {certificado.imagem && (
        <div className="detail-image">
          <img src={certificado.imagem} alt={`Certificado: ${certificado.titulo}`} />
        </div>
      )}

      {certificado.competencias && certificado.competencias.length > 0 && (
        <div className="detail-block">
          <h3>Competências desenvolvidas</h3>
          <div className="project-tags">
            {certificado.competencias.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      )}

      {certificado.enlace && (
        <div className="detail-footer">
          <a href={certificado.enlace} target="_blank" rel="noreferrer">
            Ver certificado
          </a>
        </div>
      )}
    </section>
  )
}

export default certificatedetails