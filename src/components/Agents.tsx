import { agents } from "../content.ts";

export function Agents() {
  return (
    <section id="agentes" className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">O panteão de agentes</span>
          <h2 className="heading">Cada rotina do escritório tem o seu mensageiro</h2>
        </div>
        <div className="card-grid">
          {agents.map((agent) => (
            <div key={agent.code} className="agent-card">
              <span className="agent-code">{agent.code}</span>
              <h3>{agent.title}</h3>
              <p>{agent.desc}</p>
              <span className="agent-meta">{agent.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
