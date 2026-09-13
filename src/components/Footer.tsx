const links = [
  { href: "#empresas", label: "Empresas" },
  { href: "#contadores", label: "Contadores" },
  { href: "#agentes", label: "Agentes" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#", label: "Contato" },
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
      <span className="footer-legal">CRC ativo · dados em conformidade com a LGPD</span>
    </footer>
  );
}
