import { ctaLabel } from "../content";

export function Cta() {
  return (
    <section id="comecar" className="section-tight cta">
      <div className="cta-box">
        <div className="cta-glow" />
        <span className="cta-mark">☤</span>
        <h2>Coloque os agentes no seu escritório</h2>
        <p>
          Diagnóstico gratuito do seu operacional em 15 minutos. Onboarding da
          carteira sem custo e sem parar a produção.
        </p>
        <div className="cta-actions">
          <a href="#comecar" className="btn btn-primary">
            {ctaLabel}
          </a>
          <a href="#" className="btn btn-ghost">
            Falar com um humano
          </a>
        </div>
      </div>
    </section>
  );
}
