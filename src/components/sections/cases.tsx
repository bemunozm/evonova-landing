export function Cases() {
  const cases = [
    {
      client: "Pira.cl",
      industry: "E-commerce · Retail",
      challenge: "Carga manual de cientos de productos desde Instagram al catálogo Shopify y sistema de punto de venta.",
      solution: "Pipeline IA que detecta publicaciones de Instagram, extrae nombre, precio e imagen, y sincroniza automáticamente con Shopify y Loyverse.",
      metric: "80%",
      metricLabel: "menos tiempo en carga de productos",
      tags: ["Instagram API", "Shopify", "Loyverse", "LangGraph"],
    },
    {
      client: "OTEC Tarapacá",
      industry: "Educación · Capacitación",
      challenge: "WordPress para ventas y Moodle para cursos operaban como islas — matrículas, progreso y certificados gestionados a mano.",
      solution: "Bridge de integración a medida con plugins propios que sincroniza matrículas, progreso y certificados en tiempo real entre ambas plataformas.",
      metric: "100%",
      metricLabel: "de matrículas sincronizadas en tiempo real",
      tags: ["WordPress", "Moodle", "Plugins PHP", "API Bridge"],
    },
    {
      client: "Empresa Comercial",
      industry: "Ventas · Servicios",
      challenge: "El equipo comercial respondía manualmente 200+ consultas diarias en WhatsApp, perdiendo leads fuera del horario laboral.",
      solution: "Agente IA en WhatsApp que califica leads, responde preguntas frecuentes, genera links de pago y agenda reuniones en Calendly — las 24 horas.",
      metric: "24/7",
      metricLabel: "atención automática sin intervención humana",
      tags: ["WhatsApp Business API", "Agente IA", "Calendly", "Links de pago"],
    },
  ];

  return (
    <section
      id="casos"
      style={{ background: "var(--bg-soft)", padding: "120px 0" }}
    >
      <div className="container">
        <div style={{ maxWidth: 520, marginBottom: 64 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              display: "block",
              marginBottom: 16,
            }}
          >
            Casos de Éxito
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.15,
            }}
          >
            Resultados reales, no promesas.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {cases.map(({ client, industry, challenge, solution, metric, metricLabel, tags }) => (
            <div
              key={client}
              className="card-hover"
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "40px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 32,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 32,
                  alignItems: "start",
                }}
              >
                {/* Left */}
                <div>
                  <div style={{ marginBottom: 8 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 22,
                        color: "var(--fg)",
                      }}
                    >
                      {client}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--fg-muted)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: 20,
                    }}
                  >
                    {industry}
                  </div>
                  {/* Metric */}
                  <div
                    style={{
                      background: "rgba(0,194,122,0.06)",
                      border: "1px solid rgba(0,194,122,0.2)",
                      borderRadius: 10,
                      padding: "16px 20px",
                      display: "inline-block",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 36,
                        fontWeight: 700,
                        color: "var(--accent)",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {metric}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "var(--fg-muted)",
                      }}
                    >
                      {metricLabel}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                      El problema
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--fg)", lineHeight: 1.65 }}>
                      {challenge}
                    </p>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                      La solución
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--fg)", lineHeight: 1.65 }}>
                      {solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--fg-muted)",
                      background: "var(--bg-soft)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      padding: "3px 8px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
