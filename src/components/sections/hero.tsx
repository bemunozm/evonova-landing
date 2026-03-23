import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Clock } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative noise overflow-hidden"
      style={{
        paddingTop: "140px",
        paddingBottom: "100px",
        background: "linear-gradient(135deg, #ffffff 60%, #f0faf5 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,194,122,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container relative" style={{ zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left: copy */}
          <div style={{ maxWidth: 560 }}>
            {/* Badge */}
            <div className="fade-up fade-up-1" style={{ marginBottom: 28 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(0,194,122,0.1)",
                  color: "var(--accent-dark, #009960)",
                  border: "1px solid rgba(0,194,122,0.25)",
                  borderRadius: 99,
                  padding: "5px 14px",
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                <Zap size={11} />
                Agencia IA — Chile & LATAM
              </span>
            </div>

            {/* H1 */}
            <h1
              className="fade-up fade-up-2"
              style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 700,
                color: "var(--fg)",
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              Tu empresa,
              <br />
              operando en{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                piloto automático.
              </em>
            </h1>

            {/* Subheadline */}
            <p
              className="fade-up fade-up-3"
              style={{
                fontSize: 18,
                color: "var(--fg-muted)",
                marginBottom: 36,
                lineHeight: 1.65,
                fontFamily: "var(--font-body)",
              }}
            >
              Automatizamos los procesos críticos de tu empresa con IA y
              software a medida. Garantizamos resultados medibles en 30 días
              o devolvemos tu inversión.
            </p>

            {/* CTAs */}
            <div
              className="fade-up fade-up-4"
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}
            >
              <Link href="#contacto" className="btn-primary">
                Agendar Diagnóstico Gratis
                <ArrowRight size={16} />
              </Link>
              <Link href="#casos" className="btn-ghost">
                Ver Casos de Éxito
              </Link>
            </div>

            {/* Mini metrics */}
            <div
              className="fade-up fade-up-5"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 28,
                paddingTop: 28,
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { icon: TrendingUp, value: "+30", label: "empresas automatizadas" },
                { icon: Clock, value: "30", label: "días al primer resultado" },
                { icon: Zap, value: "80%", label: "reducción de tareas manuales" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 22, color: "var(--fg)", lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--fg-muted)", fontFamily: "var(--font-body)" }}>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard card */}
          <div
            className="fade-up fade-up-3 hidden md:block"
            style={{
              background: "#0a0a0a",
              borderRadius: 16,
              padding: "32px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dashboard glow */}
            <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,194,122,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", marginBottom: 20 }}>
              EVONOVA · AUTOMATION DASHBOARD
            </div>

            {/* Metric rows */}
            {[
              { label: "Leads procesados hoy", value: "342", delta: "+12%", color: "#00c27a" },
              { label: "Tareas automatizadas", value: "1,847", delta: "+28%", color: "#00c27a" },
              { label: "Tiempo ahorrado (hrs)", value: "94.3", delta: "esta semana", color: "#a3a3a3" },
            ].map(({ label, value, delta, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                  {label}
                </span>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 700, color: "#fff" }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color }}>
                    {delta}
                  </div>
                </div>
              </div>
            ))}

            {/* Activity bar */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>
                ACTIVIDAD — ÚLTIMAS 24H
              </div>
              <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 40 }}>
                {[60, 80, 45, 90, 70, 95, 55, 85, 75, 100, 60, 88].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: h > 80 ? "var(--accent)" : "rgba(255,255,255,0.12)",
                      borderRadius: 2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Status pill */}
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#00c27a", boxShadow: "0 0 8px #00c27a" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                Todos los pipelines operando
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
