import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayCircleIcon, SparklesIcon } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-label="Hero principal"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-hero bg-dot-pattern"
    >
      {/* ── Decorative blobs (pointer-events-none, aria-hidden) ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary blob — top left */}
        <div className="animate-float-slow absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-[90px]" />
        {/* Secondary blob — top right */}
        <div
          className="animate-float-slow absolute -top-16 -right-16 w-[420px] h-[420px] rounded-full bg-[oklch(0.58_0.24_293/0.14)] blur-[100px]"
          style={{ animationDelay: "2.5s" }}
        />
        {/* Tertiary blob — bottom center */}
        <div
          className="animate-pulse-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[oklch(0.55_0.22_255/0.10)] blur-[80px]"
        />
      </div>

      {/* ── Main content ── */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">

        {/* Status badge */}
        <div
          className="animate-badge-slide inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 mx-auto w-fit"
          aria-label="Estado del producto"
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.55_0.22_255)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[oklch(0.48_0.23_258)]" />
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.40_0.21_260)]">
            Ahora disponible · V2.0
          </span>
          <SparklesIcon className="w-3.5 h-3.5 text-[oklch(0.58_0.24_293)]" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up stagger-1 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[oklch(0.12_0.015_245)] leading-[1.05] mb-6"
        >
          Innovación{" "}
          <span className="text-gradient-brand italic">Evolutiva</span>
          <br />
          para tu Negocio
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up stagger-2 text-lg sm:text-xl text-[oklch(0.45_0.04_245)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          En{" "}
          <strong className="font-bold text-[oklch(0.12_0.015_245)] tracking-wider">
            EVONOVA
          </strong>{" "}
          diseñamos y construimos el software que impulsa el futuro.
          Soluciones escalables, eficientes y hechas a medida.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="btn-shimmer group text-base font-semibold px-8 py-3 h-auto rounded-full text-white border-0 focus-visible:ring-2 focus-visible:ring-[oklch(0.55_0.22_255)] focus-visible:ring-offset-2"
          >
            Comienza Ahora
            <ArrowRightIcon
              className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group text-base font-semibold px-8 py-3 h-auto rounded-full border-[oklch(0.86_0.08_245)] bg-white/60 backdrop-blur-sm text-[oklch(0.40_0.21_260)] hover:bg-[oklch(0.93_0.04_245/0.8)] hover:border-[oklch(0.65_0.19_250)] transition-all duration-200"
          >
            <PlayCircleIcon
              className="w-4 h-4 mr-2 text-[oklch(0.55_0.22_255)]"
              aria-hidden="true"
            />
            Ver Demo
          </Button>
        </div>

        {/* Social proof / trust bar */}
        <div className="animate-fade-up stagger-4 flex flex-wrap gap-8 justify-center items-center">
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "50+", label: "Proyectos entregados" },
            { value: "<48h", label: "Tiempo de respuesta" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group">
              <p className="text-2xl font-bold text-gradient-brand leading-none mb-1">
                {value}
              </p>
              <p className="text-xs font-medium text-[oklch(0.55_0.04_245)] tracking-wide uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[oklch(0.96_0.01_240)] to-transparent pointer-events-none z-10"
      />
    </section>
  );
}
