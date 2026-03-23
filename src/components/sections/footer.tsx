import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                E
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-playfair, serif)",
                fontWeight: 700,
                fontSize: 16,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              EVONOVA
            </span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {[
              { href: "#servicios", label: "Servicios" },
              { href: "#casos", label: "Casos" },
              { href: "#pricing", label: "Pricing" },
              { href: "#contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
  
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Location + year */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.06em",
            }}
          >
            Chile · LATAM · 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
