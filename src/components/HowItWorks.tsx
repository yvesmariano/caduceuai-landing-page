import { steps, workflow } from "../content";

export function HowItWorks() {
  return (
    <section id="como" className="section-tight how">
      <div className="wrap how-grid">
        <div>
          <span className="eyebrow">Como funciona</span>
          <h2>Comece pelas rotinas que mais consomem tempo</h2>
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
            <span className="panel-title">Acompanhamento por competência</span>
            {workflow.map((item) => (
              <div key={item.label} className="panel-row">
                <span>{item.label}</span>
                <strong>{item.status}</strong>
              </div>
            ))}
          </div>
          <div className="supervision-note">
            Os agentes executam o trabalho repetitivo. Sua equipe mantém a
            supervisão, revisa divergências e autoriza o que exige decisão técnica.
          </div>
        </div>
      </div>
    </section>
  );
}
