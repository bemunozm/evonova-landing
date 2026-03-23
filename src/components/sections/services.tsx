import { Bot, Code2, Link2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "Agentes IA Autónomos",
      desc: "Desplegamos IA tipo LangGraph que atiende WhatsApp, califica leads y agenda reuniones 24/7 sin intervención humana.",
      color: "text-[var(--primary)]",
      bg: "bg-[var(--primary)]/10"
    },
    {
      icon: Code2,
      title: "Software a Medida",
      desc: "Plataformas web y móviles robustas diseñadas para escalar. Arquitectura serverless y bases de datos optimizadas.",
      color: "text-[var(--secondary)]",
      bg: "bg-[var(--secondary)]/10"
    },
    {
      icon: Link2,
      title: "Pipelines de Integración",
      desc: "Conectamos tu ERP, CRM y eCommerce. Desde Shopify a Loyverse o tu sistema contable, uniendo tu operación.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    }
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[var(--surface)]/30">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <div className="text-[var(--primary)] font-mono text-sm tracking-wider uppercase mb-4">El Remedio</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sistemas que trabajan por ti.</h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Transformamos horas de trabajo manual en flujos instantáneos. Infraestructura tecnológica para empresas que buscan máxima rentabilidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass rounded-2xl p-8 glass-hover flex flex-col h-full border-t border-t-[var(--border)]">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed flex-grow">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
