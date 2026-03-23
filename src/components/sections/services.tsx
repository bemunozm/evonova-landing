import { Bot, Code2, Plug } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "Automatización Empresarial IA",
      desc: "Construimos agentes de IA con LangGraph que toman decisiones, procesan información y ejecutan flujos de trabajo complejos sin intervención humana. Desde atención al cliente hasta gestión de inventario.",
      tags: ["LangGraph", "Agentes IA", "Chatbots", "Pipelines"],
    },
    {
      icon: Code2,
      title: "Software a Medida",
      desc: "Desarrollamos plataformas, CRMs, dashboards y APIs con el stack más robusto del mercado. Sin plantillas genéricas — arquitectura pensada para tu operación específica.",
      tags: ["Next.js", "NestJS", "Supabase", "APIs REST"],
    },
    {
      icon: Plug,
      title: "Integración de Sistemas",
      desc: "Conectamos tus plataformas existentes para que hablen entre sí. Shopify, Moodle, ERPs, CRMs, WhatsApp, Instagram — integramos cualquier sistema en una sola fuente de verdad.",
      tags: ["Shopify", "Moodle", "WhatsApp API", "ERPs"],
    },
  ];

  return (
    <section
      id="servicios"
      style={{ background: "#fff", padding: "120px 0" }}
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
            Servicios
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.15,
            }}
          >
            Todo lo que necesitas para escalar tu operación con IA.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="card-hover"
              style={{
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "36px",
                background: "#fff",
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  background: "var(--fg)",
                  borderRadius: 12,
                  marginBottom: 24,
                }}
              >
                <Icon size={22} style={{ color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontFamily: "var(--font-body)",
                }}
              >
                {desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
