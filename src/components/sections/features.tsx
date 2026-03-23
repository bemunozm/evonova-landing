import {
  RocketIcon,
  LayersIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChart3Icon,
  Code2Icon,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  glowClass: string;
  numberLabel: string;
}

const features: Feature[] = [
  {
    title: "Desarrollo Ágil",
    description:
      "Metodologías iterativas para entregas rápidas, de alta calidad y feedback continuo que reducen el time-to-market.",
    icon: RocketIcon,
    accentClass: "text-[oklch(0.55_0.22_255)] bg-[oklch(0.93_0.04_245)]",
    glowClass: "group-hover:shadow-[0_0_28px_oklch(0.55_0.22_255/0.35)]",
    numberLabel: "01",
  },
  {
    title: "Escalabilidad Total",
    description:
      "Sistemas diseñados para crecer contigo, desde una startup hasta un corporativo, sin sacrificar rendimiento.",
    icon: LayersIcon,
    accentClass: "text-[oklch(0.58_0.24_293)] bg-[oklch(0.93_0.04_290)]",
    glowClass: "group-hover:shadow-[0_0_28px_oklch(0.58_0.24_293/0.35)]",
    numberLabel: "02",
  },
  {
    title: "Seguridad Robusta",
    description:
      "Protección integral en cada línea de código y capa de infraestructura, con auditorías continuas.",
    icon: ShieldCheckIcon,
    accentClass: "text-[oklch(0.48_0.16_185)] bg-[oklch(0.93_0.04_190)]",
    glowClass: "group-hover:shadow-[0_0_28px_oklch(0.48_0.16_185/0.35)]",
    numberLabel: "03",
  },
  {
    title: "Máxima Velocidad",
    description:
      "Rendimiento optimizado para tiempos de carga mínimos, alta eficiencia y experiencias ultra-fluidas.",
    icon: ZapIcon,
    accentClass: "text-[oklch(0.65_0.19_85)] bg-[oklch(0.95_0.06_85)]",
    glowClass: "group-hover:shadow-[0_0_28px_oklch(0.65_0.19_85/0.35)]",
    numberLabel: "04",
  },
  {
    title: "Análisis Basado en Datos",
    description:
      "Toma decisiones fundamentadas con herramientas de reporting e inteligencia de negocio en tiempo real.",
    icon: BarChart3Icon,
    accentClass: "text-[oklch(0.55_0.18_25)] bg-[oklch(0.95_0.04_25)]",
    glowClass: "group-hover:shadow-[0_0_28px_oklch(0.55_0.18_25/0.35)]",
    numberLabel: "05",
  },
  {
    title: "Tecnología de Punta",
    description:
      "Utilizamos las últimas arquitecturas y lenguajes para construir soluciones modernas y mantenibles.",
    icon: Code2Icon,
    accentClass: "text-[oklch(0.50_0.24_296)] bg-[oklch(0.93_0.04_296)]",
    glowClass: "group-hover:shadow-[0_0_28px_oklch(0.50_0.24_296/0.35)]",
    numberLabel: "06",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative py-28 lg:py-36 overflow-hidden bg-[oklch(0.97_0.012_245)]"
    >
      {/* ── Background grid texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none"
      />

      {/* ── Decorative gradient top ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.19_250/0.4)] to-transparent"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {/* Eyebrow label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.65_0.19_250/0.3)] bg-[oklch(0.93_0.04_245/0.6)] mb-6"
            aria-hidden="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.22_255)]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.48_0.23_258)]">
              ¿Por qué EVONOVA?
            </span>
          </div>

          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[oklch(0.12_0.015_245)] leading-tight mb-5"
          >
            Soluciones diseñadas para
            <br />
            el{" "}
            <span className="text-gradient-brand">éxito digital</span>
          </h2>

          <p className="text-base sm:text-lg text-[oklch(0.50_0.04_245)] leading-relaxed max-w-xl mx-auto">
            Cada proyecto es una oportunidad de superar expectativas. Nuestro
            stack y metodología garantizan calidad en cada iteración.
          </p>
        </div>

        {/* ── Features grid ── */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          aria-label="Lista de características"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const staggerClass = `stagger-${idx + 1}` as
              | "stagger-1"
              | "stagger-2"
              | "stagger-3"
              | "stagger-4"
              | "stagger-5"
              | "stagger-6";

            return (
              <li
                key={feature.numberLabel}
                className={`animate-card-reveal ${staggerClass} group relative flex flex-col p-8 rounded-3xl glass-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[oklch(0.55_0.22_255/0.08)] cursor-default`}
              >
                {/* Card number — decorative */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-7 text-xs font-bold text-[oklch(0.78_0.04_245)] tracking-widest select-none"
                >
                  {feature.numberLabel}
                </span>

                {/* Icon container */}
                <div
                  className={`
                    w-14 h-14 mb-7 flex items-center justify-center rounded-2xl
                    ${feature.accentClass}
                    ${feature.glowClass}
                    transition-all duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[oklch(0.12_0.015_245)] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-[oklch(0.50_0.04_245)] leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.19_250/0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Decorative gradient bottom ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.19_250/0.4)] to-transparent"
      />
    </section>
  );
}
