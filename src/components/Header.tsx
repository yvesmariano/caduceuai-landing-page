"use client";

import { useState } from "react";
import { CONTACT_URL } from "../content";

const links = [
  { href: "#operacao", label: "Operação" },
  { href: "#agentes", label: "Agentes" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#como", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header${open ? " is-open" : ""}`}>
      <a href="#top" className="brand">
        <span className="brand-mark">☤</span>
        <span className="brand-name">
          caduceu<span className="brand-accent">.ai</span>
        </span>
      </a>
      <nav className="nav">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="muted-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a href={CONTACT_URL} className="btn btn-primary header-cta">
          Agendar diagnóstico
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
