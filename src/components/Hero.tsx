import { CONTACT_URL } from "../content";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="hero-badge">
        <span className="live-dot" />
        Plataforma de agentes de IA para escritórios contábeis
      </div>
      <h1>
        Menos trabalho operacional.
        <br />
        <em>Mais capacidade para atender.</em>
      </h1>
      <p className="hero-lead">
        Automatize declarações, emissão de notas e conciliação. Acompanhe
        pendências por CNPJ e concentre sua equipe na revisão e no atendimento,
        com a marca do seu escritório.
      </p>
      <div className="hero-actions">
        <a href={CONTACT_URL} className="btn btn-primary">
          Agendar diagnóstico gratuito
        </a>
        <a href="#agentes" className="btn btn-ghost">
          Ver as rotinas automatizadas
        </a>
      </div>
    </section>
  );
}
