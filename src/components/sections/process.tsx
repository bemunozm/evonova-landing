export function Process() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico Gratuito",
      desc: "30 minutos. Analizamos tus procesos actuales, identificamos los cuellos de botella y definimos qué se puede automatizar primero.",
      duration: "30 min",
    },
    {
      num: "02",
      title: "Diseño del Pipeline",
      desc: "Mapeamos el flujo de automatización: qué datos entran, qué procesa la IA, qué acciones ejecuta y cómo se integra con tus sistemas.",
      duration: "3–5 días",
    },
    {
      num: "03",
      title: "Implementación",
      desc: "Construimos e integramos la solución. Sin plantillas, sin código genérico. Arquitectura diseñada para tu caso específico.",
      duration: "2–6 semanas",
    },
    {
      num: "04",
      title: "Optimización IA",
      desc: "Una vez en producción, monitoreamos los resultados y afinamos los modelos. Tu sistema mejora con cada interacción.",
      duration: "Continuo",
    },
  ];

  return (
    <section
      id="proceso"
      style={{ background: "#fff", padding: "120px 0" }}
    >
      <div className="container">
        <div style={{ maxWidth: 520, marginBottom: 72 }}>
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
            Proceso
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.15,
            }}
          >
            De cero a automatizado en menos de 8 semanas.
          </h2>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 28,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "var(--border)",
              zIndex: 0,
            }}
          />

          {steps.map(({ num, title, desc, duration }, i) => (
            <div
              key={num}
              style={{
                position: "relative",
                zIndex: 1,
                padding: "0 24px 0 0",
              }}
            >
              {/* Step dot */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: i === 0 ? "var(--accent)" : "#fff",
                  border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: i === 0 ? "#fff" : "var(--fg-muted)",
                  }}
                >
                  {num}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {duration}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--fg)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
