import { stats, steps } from "../content";

export function HowItWorks() {
  return (
    <section id="como" className="section-tight how">
      <div className="wrap how-grid">
        <div>
          <span className="eyebrow">Como funciona</span>
          <h2>Três dias para migrar o escritório</h2>
          <div>
            {steps.map((step) => (
              <div key={step.n} className="step">
                <span className="step-n">{step.n}</span>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="how-visual">
          <div className="panel-placeholder">
            painel multi-CNPJ
            <br />
            [screenshot do produto]
          </div>
          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
