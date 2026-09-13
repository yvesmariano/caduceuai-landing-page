"use client";

const CADU_URL = "https://cadu.ia.br";

type Profile = "empresario" | "contador" | "outro";

type Props = {
  onSelect: (profile: Exclude<Profile, "empresario">) => void;
};

export function ProfileGate({ onSelect }: Props) {
  function choose(profile: Profile) {
    if (profile === "empresario") {
      window.location.assign(CADU_URL);
      return;
    }
    onSelect(profile);
  }

  return (
    <div className="gate">
      <div className="gate-glow" />
      <span className="gate-mark">☤</span>
      <p className="eyebrow gate-eyebrow">caduceu.ai</p>
      <h1 className="gate-title">Qual é o seu perfil?</h1>
      <p className="gate-lead">Escolha para vermos a jornada certa para você.</p>
      <div className="gate-actions">
        <button type="button" className="btn btn-primary gate-btn" onClick={() => choose("empresario")}>
          Sou empresário
        </button>
        <button type="button" className="btn btn-ghost gate-btn" onClick={() => choose("contador")}>
          Sou contador
        </button>
        <button type="button" className="btn btn-ghost gate-btn" onClick={() => choose("outro")}>
          Outro
        </button>
      </div>
    </div>
  );
}
