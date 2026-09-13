import { centralizedItems, fragmentedItems } from "../content";

export function Tracks() {
  return (
    <section id="operacao" className="tracks">
      <div className="tracks-inner">
        <div className="tracks-intro">
          <h2>De sistemas e planilhas espalhados para uma operação centralizada</h2>
          <p>
            Reúna dados, prazos e pendências da carteira em um só fluxo de
            trabalho.
          </p>
        </div>
        <div className="tracks-grid">
          <div className="track-card track-before">
            <span className="eyebrow">Hoje</span>
            <h3>A informação fica espalhada</h3>
            <p className="track-lead">
              A equipe alterna entre sistemas, bancos, mensagens e planilhas para
              descobrir o que já foi feito e o que ainda está pendente.
            </p>
            <div className="feature-list">
              {fragmentedItems.map((item) => (
                <div key={item.title} className="feature">
                  <span className="feature-dot" />
                  <div>
                    <div className="feature-title">{item.title}</div>
                    <div className="feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="track-card track-after">
            <span className="eyebrow">Com a caduceu.ai</span>
            <h3>A operação trabalha em um só lugar</h3>
            <p className="track-lead">
              Dados e rotinas da carteira se encontram em uma visão única. Sua
              equipe acompanha o fluxo e atua onde precisa de atenção.
            </p>
            <div className="feature-list">
              {centralizedItems.map((item) => (
                <div key={item.title} className="feature">
                  <span className="feature-dot" />
                  <div>
                    <div className="feature-title">{item.title}</div>
                    <div className="feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
