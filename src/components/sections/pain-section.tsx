import { Clock, AlertCircle, RefreshCw } from "lucide-react";

export function PainSection() {
  const pains = [
    {
      icon: Clock,
      number: "23h",
      title: "Semanales en tareas manuales",
      desc: "Tu equipo dedica casi 3 días completos a procesos repetitivos que ninguna persona debería hacer: copiar datos, responder las mismas preguntas, actualizar registros.",
    },
    {
      icon: AlertCircle,
      number: "67%",
      title: "De los leads se pierden por respuesta lenta",
      desc: "Un cliente potencial contacta a tu empresa y espera horas (o días). Para entonces ya compró con la competencia. La velocidad de respuesta es la diferencia entre ganar y perder.",
    },
    {
      icon: RefreshCw,
      number: "4x",
      title: "Más costoso crecer sin automatización",
      desc: "Cada vez que escalas, contratas más personas para hacer lo mismo. Es un ciclo que no termina. La alternativa es construir sistemas que crezcan contigo sin costo proporcional.",
    },
  ];

  return (
    <section
      id="problema"
      style={{
        background: "var(--bg-soft)",
        padding: "120px 0",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 64 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "var(--fg)",
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            ¿Cuántas horas pierde tu equipo en tareas que debería hacer una máquina?
          </h2>
          <p style={{ fontSize: 18, color: "var(--fg-muted)", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
            El costo invisible de la operación manual no es solo tiempo. Es crecimiento que no ocurrió.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
        >
          {pains.map(({ icon: Icon, number, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 36,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  background: "rgba(0,194,122,0.08)",
                  borderRadius: 10,
                  marginBottom: 20,
                }}
              >
                <Icon size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 40,
                  fontWeight: 700,
                  color: "var(--fg)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "var(--fg)",
                  marginBottom: 12,
                }}
              >
                {title}
              </div>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
