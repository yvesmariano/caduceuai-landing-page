import { integrations } from "../content.ts";

export function LogoBar() {
  return (
    <section className="logos">
      <span className="eyebrow">Integrado aos sistemas do seu escritório</span>
      <div className="logo-row">
        {integrations.map((name) => (
          <div key={name} className="logo-chip">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
