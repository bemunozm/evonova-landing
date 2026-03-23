import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CtaFinal() {
  return (
    <section
      id="contacto"
      style={{
        background: "#0a0a0a",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(0,194,122,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            display: "block",
            marginBottom: 24,
          }}
        >
          ¿Empezamos?
        </span>

        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 700,
            margin: "0 auto 24px",
          }}
        >
          ¿Listo para automatizar tu empresa?
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 48,
            maxWidth: 480,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          El diagnóstico es gratis y sin compromiso. En 30 minutos te decimos exactamente qué se puede automatizar en tu empresa y cuánto te costaría.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
          }}
        >
          <Link
            href="https://calendly.com/evonova"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Calendar size={16} />
            Agendar Diagnóstico Gratis
            <ArrowRight size={16} />
          </Link>
          <Link
            href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20una%20demo%20de%20EVONOVA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-white"
          >
            Ver Demo por WhatsApp
          </Link>
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 48,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 48,
          }}
        >
          {[
            { value: "+30", label: "empresas automatizadas" },
            { value: "30 días", label: "al primer resultado" },
            { value: "100%", label: "satisfacción garantizada" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
