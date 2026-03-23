import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$500",
      desc: "Ideal para la primera automatización",
      features: [
        "1 Flujo automatizado simple",
        "Conexión de 2 aplicaciones",
        "Soporte por email 48hrs",
        "ROI esperado: 10h/mes"
      ],
      button: "Agendar Starter",
      variant: "outline" as const
    },
    {
      name: "Growth",
      price: "$2.000",
      desc: "Para escalar operaciones completas",
      popular: true,
      features: [
        "Agente IA conversacional",
        "Integración CRM / ERP",
        "Dashboard de métricas",
        "Soporte WhatsApp 24hrs",
        "ROI esperado: 40h/mes"
      ],
      button: "Cotizar Growth",
      variant: "default" as const
    },
    {
      name: "Enterprise",
      price: "A Medida",
      desc: "Software custom e IA corporativa",
      features: [
        "Sistemas complejos ad-hoc",
        "Arquitectura Serverless",
        "Entrenamiento modelo IA propio",
        "SLA garantizado",
        "Escalabilidad infinita"
      ],
      button: "Contactar Ventas",
      variant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="text-[var(--primary)] font-mono text-sm tracking-wider uppercase mb-4">Inversión</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transparencia desde el día 1.</h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu madurez digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass rounded-3xl p-8 relative flex flex-col h-full ${plan.popular ? 'border-[var(--primary)]/50 scale-105 shadow-[0_0_30px_rgba(0,255,163,0.1)] z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] text-black font-bold px-4 py-1 text-xs rounded-full uppercase tracking-wider">
                  Más Recomendado
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-[var(--foreground-muted)] text-sm h-10">{plan.desc}</p>
              
              <div className="my-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== "A Medida" && <span className="text-[var(--foreground-muted)]"> USD</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
