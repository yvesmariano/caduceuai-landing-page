import { CONTACT_URL, ctaLabel } from "../content";

export function Cta() {
  return (
    <section id="comecar" className="section-tight cta">
      <div className="cta-box">
        <div className="cta-glow" />
        <span className="cta-mark">☤</span>
        <h2>Descubra onde seu escritório pode reduzir trabalho manual</h2>
        <p>
          Em uma conversa gratuita de 15 minutos, vamos entender suas rotinas e
          identificar onde a caduceu.ai pode apoiar sua equipe.
        </p>
        <div className="cta-actions">
          <a href={CONTACT_URL} className="btn btn-primary">
            {ctaLabel}
          </a>
          <a href="#como" className="btn btn-ghost">
            Entender como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
