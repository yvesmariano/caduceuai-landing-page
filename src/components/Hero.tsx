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
        Seu escritório com até 100x mais clientes
        <br />
        com <em>a mesma equipe</em>
      </h1>
      <p className="hero-lead">
        Como o cajado de Hermes, a caduceu.ai leva recado, cálculo e decisão entre
        a sua carteira e o Fisco. Agentes de declaração, emissão fiscal e
        conciliação automática rodando dentro do seu escritório — com a sua marca.
      </p>
      <div className="hero-actions">
        <a href="#comecar" className="btn btn-primary">
          Agendar diagnóstico do escritório
        </a>
        <a href="#agentes" className="btn btn-ghost">
          Ver os agentes
        </a>
      </div>
    </section>
  );
}
