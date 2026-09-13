import { CONTACT_URL, aiIntegrations, platformNotes } from "../content";

export function OpenLayer() {
  return (
    <section id="integracoes" className="section-tight">
      <div className="wrap">
        <div className="open-head">
          <div className="section-head">
            <span className="eyebrow">Camada aberta</span>
            <h2 className="heading">Conecte a IA às rotinas do escritório</h2>
            <p>
              Claude, ChatGPT, n8n e seu próprio código podem consultar e acionar
              ferramentas contábeis com permissão por cliente e registro de cada
              ação.
            </p>
          </div>
          <a href={CONTACT_URL} className="btn btn-ghost btn-ghost-accent">
            Agendar diagnóstico gratuito
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
