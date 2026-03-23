import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$500",
      period: "USD desde",
      desc: "Ideal para automatizar tu primer proceso crítico y ver resultados rápidos.",
      features: [
        "Automatización de 1 proceso",
        "Integración con 2 sistemas",
        "Agente IA básico",
        "30 días de soporte post-entrega",
        "Diagnóstico incluido",
      ],
      cta: "Comenzar",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$2.000",
      period: "USD desde",
      desc: "Suite completa para empresas que quieren escalar su operación con IA de forma integral.",
      features: [
        "Automatización de hasta 5 procesos",
        "Integraciones ilimitadas",
        "Agentes IA avanzados (LangGraph)",
        "Software a medida incluido",
        "Dashboard de métricas",
        "3 meses de soporte",
        "Capacitación al equipo",
      ],
      cta: "Más información",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Cotización",
      period: "a medida",
      desc: "Ecosistema completo de automatización e IA para empresas con operaciones complejas.",
      features: [
        "Procesos ilimitados",
        "Arquitectura de datos propia",
        "Modelos de IA fine-tuned",
        "Mantenimiento mensual incluido",
        "SLA garantizado",
        "Soporte prioritario 24/7",
      ],
      cta: "Hablar con un experto",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
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
            Pricing
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Precios transparentes. Sin sorpresas.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-muted)" }}>
            Somos la única agencia de IA en Chile que publica sus precios. Porque la confianza se construye desde el primer contacto.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {plans.map(({ name, price, period, desc, features, cta, highlight }) => (
            <div
              key={name}
              className="card-hover"
              style={{
                background: highlight ? "var(--fg)" : "#fff",
                border: highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
                borderRadius: 14,
                padding: "40px 36px",
                position: "relative",
              }}
            >
              {highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: 99,
                    whiteSpace: "nowrap",
                  }}
                >
                  Más popular
                </div>
              )}

              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: 14,
                    color: highlight ? "rgba(255,255,255,0.6)" : "var(--fg-muted)",
                    marginBottom: 8,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 36,
                      fontWeight: 700,
                      color: highlight ? "#fff" : "var(--fg)",
                      lineHeight: 1,
                    }}
                  >
                    {price}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: highlight ? "rgba(255,255,255,0.45)" : "var(--fg-muted)" }}>
                    {period}
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: highlight ? "rgba(255,255,255,0.6)" : "var(--fg-muted)", lineHeight: 1.55 }}>
                  {desc}
                </p>
              </div>

              <div style={{ marginBottom: 32 }}>
                {features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <Check size={14} style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: highlight ? "rgba(255,255,255,0.8)" : "var(--fg)", lineHeight: 1.4 }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contacto"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px 24px",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  background: highlight ? "var(--accent)" : "transparent",
                  color: highlight ? "#fff" : "var(--fg)",
                  border: highlight ? "none" : "1.5px solid var(--border-strong)",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
