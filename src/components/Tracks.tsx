import { CONTACT_URL, contadoresItems, empresasItems } from "../content";

export function Tracks() {
  return (
    <section className="tracks">
      <div className="tracks-inner">
        <div className="tracks-intro">
          <h2>Mais capacidade para sua equipe. Uma experiência melhor para seus clientes.</h2>
          <p>
            Automatize o trabalho repetitivo e ofereça um atendimento digital
            com a identidade do seu escritório.
          </p>
        </div>
        <div className="tracks-grid">
          <div id="empresas" className="track-card track-empresas">
            <span className="eyebrow">O que você entrega aos seus clientes</span>
            <h3>Atendimento digital com a marca do seu escritório</h3>
            <p className="track-lead">
              Seus clientes acessam serviços contábeis e recebem atualizações sem
              perder o vínculo com a sua marca e com a sua equipe.
            </p>
            <div className="feature-list">
              {empresasItems.map((item) => (
                <div key={item.title} className="feature">
                  <span className="feature-dot" />
                  <div>
                    <div className="feature-title">{item.title}</div>
                    <div className="feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="track-footer">
              <a href={CONTACT_URL} className="btn btn-wine">
                Agendar diagnóstico gratuito
              </a>
              <span className="track-note">
                benefícios disponíveis conforme o plano
              </span>
            </div>
          </div>
          <div id="contadores" className="track-card track-contadores">
            <span className="eyebrow">Para contadores</span>
            <h3>Reduza tarefas manuais em toda a carteira</h3>
            <p className="track-lead">
              Use agentes para preparar competências, emitir documentos e
              conciliar dados. Sua equipe acompanha o andamento e revisa as
              exceções.
            </p>
            <div className="feature-list">
              {contadoresItems.map((item) => (
                <div key={item.title} className="feature">
                  <span className="feature-dot" />
                  <div>
                    <div className="feature-title">{item.title}</div>
                    <div className="feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="track-footer">
              <a href={CONTACT_URL} className="btn btn-cream">
                Agendar diagnóstico gratuito
              </a>
              <span className="track-note">white-label disponível</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
