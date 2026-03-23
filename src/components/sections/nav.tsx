"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--accent)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                color: "#fff",
                fontSize: 18,
                lineHeight: 1,
              }}
            >
              E
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: 18,
                color: "var(--fg)",
                letterSpacing: "-0.03em",
              }}
            >
              EVONOVA
            </span>
            <span
              className="hidden sm:block"
              style={{
                fontSize: 10,
                color: "var(--fg-muted)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "block",
                marginTop: -2,
              }}
            >
              Automatización IA · Chile
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["#servicios", "#casos", "#proceso", "#pricing"].map((href, i) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
            >
              {["Servicios", "Casos", "Proceso", "Pricing"][i]}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link href="#contacto" className="btn-primary" style={{ fontSize: 14, padding: "10px 22px" }}>
            Agendar Diagnóstico
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          style={{ color: "var(--fg)", background: "none", border: "none", cursor: "pointer" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: "#fff",
            borderTop: "1px solid var(--border)",
            padding: "20px 24px",
          }}
        >
          <div className="flex flex-col gap-5">
            {["#servicios", "#casos", "#proceso", "#pricing"].map((href, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ color: "var(--fg)", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 16, textDecoration: "none" }}
              >
                {["Servicios", "Casos", "Proceso", "Pricing"][i]}
              </Link>
            ))}
            <Link href="#contacto" className="btn-primary" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>
              Agendar Diagnóstico
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
