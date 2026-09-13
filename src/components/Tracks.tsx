import { contadoresItems, empresasItems } from "../content";

export function Tracks() {
  return (
    <section className="tracks">
      <div className="tracks-inner">
        <div className="tracks-intro">
          <h2>O escritório digitalizado — e o que seus clientes ganham</h2>
          <p>
            Primeiro o seu operacional. Depois, uma oferta melhor para vender à
            sua carteira.
          </p>
        </div>
        <div className="tracks-grid">
          <div id="empresas" className="track-card track-empresas">
            <span className="eyebrow">O que você entrega aos seus clientes</span>
            <h3>Uma oferta que nenhuma ferramenta faz igual</h3>
            <p className="track-lead">
              Com a caduceu.ai por baixo, o seu escritório passa a oferecer o que
              hoje só as contabilidades digitais oferecem — com o seu nome na
              porta.
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
              <a href="#comecar" className="btn btn-wine">
                Ver o material comercial
              </a>
              <span className="track-note">
                endereço fiscal + certificado digital inclusos
              </span>
            </div>
          </div>
          <div id="contadores" className="track-card track-contadores">
            <span className="eyebrow">Para contadores</span>
            <h3>Escale a carteira 100x sem contratar</h3>
            <p className="track-lead">
              Digitalize o repetitivo e coloque agentes para fechar competência,
              emitir e conciliar enquanto você atende.
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
              <a href="#comecar" className="btn btn-cream">
                Ver demo para escritórios
              </a>
              <span className="track-note">white-label disponível</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
