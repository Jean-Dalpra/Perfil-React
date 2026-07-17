import { CERTIFICADOS } from '../data/portfolioData.js'
import SectionHeader from './SectionHeader.jsx'
import CertificateCard from './CertificateCard.jsx'

function CertificatesSection({ onSelectCertificate }) {
  return (
    <section className="section" id="certificados">
      <SectionHeader title="Certificados e prêmios" />
      <p className="section-lead">
        Formações e conquistas que comprovam a experiência técnica e o foco em projetos com impacto.
        Clique em qualquer certificado para ver mais detalhes.
      </p>
      <div className="card-grid">
        {CERTIFICADOS.map((certificado) => (
          <CertificateCard
            key={certificado.id}
            certificado={certificado}
            onSelect={onSelectCertificate}
          />
        ))}
      </div>
    </section>
  )
}

export default CertificatesSection