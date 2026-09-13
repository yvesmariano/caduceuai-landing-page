import { CONTACT_URL } from "../content";

const links = [
  { href: "#operacao", label: "Operação" },
  { href: "#agentes", label: "Agentes" },
  { href: "#integracoes", label: "Integrações" },
  { href: CONTACT_URL, label: "Contato" },
];

export function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="footer-brand">
        <span className="footer-mark">☤</span>
        <span className="footer-name">caduceu.ai</span>
      </a>
      <div className="footer-links">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <span className="footer-legal">Controle de acesso · trilha de auditoria</span>
    </footer>
  );
}
