export function TrustBar() {
  const clients = [
    "Pira.cl",
    "OTEC Tarapacá",
    "Comercial Atacama",
    "Constructora Norte",
    "Retail IA",
    "Distribuidora Sur",
    "Pira.cl",
    "OTEC Tarapacá",
    "Comercial Atacama",
    "Constructora Norte",
    "Retail IA",
    "Distribuidora Sur",
  ];

  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-soft)",
        padding: "28px 0",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ marginBottom: 16 }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            fontFamily: "var(--font-mono)",
            textAlign: "center",
          }}
        >
          Empresas que ya operan con EVONOVA
        </p>
      </div>

      <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div className="scroll-infinite">
          {clients.map((name, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 40px",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                color: "var(--fg)",
                opacity: 0.45,
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
              }}
            >
              {name}
              <span style={{ marginLeft: 40, color: "var(--accent)", opacity: 1, fontSize: 8 }}>●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
