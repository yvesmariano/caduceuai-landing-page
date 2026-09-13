import { aiIntegrations, platformNotes } from "../content.ts";

export function OpenLayer() {
  return (
    <section id="integracoes" className="section-tight">
      <div className="wrap">
        <div className="open-head">
          <div className="section-head">
            <span className="eyebrow">Camada aberta</span>
            <h2 className="heading">Plugue a IA que o seu escritório já usa</h2>
            <p>
              A caduceu.ai não é uma caixa fechada. Seus dados contábeis viram
              ferramentas que Claude, ChatGPT, n8n ou o seu próprio código podem
              chamar — com permissão por cliente e trilha de auditoria em cada
              ação.
            </p>
          </div>
          <a href="#comecar" className="btn btn-ghost btn-ghost-accent">
            Ver documentação da API
          </a>
        </div>
        <div className="ai-grid">
          {aiIntegrations.map((item) => (
            <div key={item.name} className="ai-card">
              <div className="ai-card-top">
                <span className="ai-name">{item.name}</span>
                <span className="ai-tag">{item.tag}</span>
              </div>
              <p>{item.desc}</p>
              <div className="ai-snippet-wrap">
                <div className="ai-snippet">{item.snippet}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="notes">
          {platformNotes.map((note) => (
            <div key={note.title} className="note">
              <div className="note-title">{note.title}</div>
              <div className="note-desc">{note.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
