"use client";

import { useState } from "react";

const links = [
  { href: "#contadores", label: "O escritório" },
  { href: "#agentes", label: "Agentes" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#como", label: "Como funciona" },
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
        <a href="#" className="muted-link">
          Entrar
        </a>
        <a href="#comecar" className="btn btn-primary header-cta">
          Abrir minha conta
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
