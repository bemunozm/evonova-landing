export function Process() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico Profundo",
      desc: "Analizamos tu cuello de botella operativo y calculamos el ROI potencial de automatizar."
    },
    {
      num: "02",
      title: "Diseño del Pipeline",
      desc: "Arquitectura técnica y flujos de usuario. Decidimos qué IA (OpenAI, Claude) se adapta mejor."
    },
    {
      num: "03",
      title: "Implementación Ágil",
      desc: "Desarrollo en sprints cortos. Conectamos APIs, webhooks y bases de datos sin romper tu operación actual."
    },
    {
      num: "04",
      title: "IA Tuning & Soporte",
      desc: "Entrenamos a los agentes con tus datos y monitoreamos el rendimiento mes a mes."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--surface)]/30 border-y border-[var(--border)]">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="text-[var(--secondary)] font-mono text-sm tracking-wider uppercase mb-4">El Camino</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">De caos manual a piloto automático.</h2>
          <p className="text-lg text-[var(--foreground-muted)]">
            Metodología probada para implementar automatización sin riesgos.
          </p>
        </div>

        <div className="relative border-l border-[var(--border)] ml-6 md:ml-[50%] md:-translate-x-[1px]">
          {steps.map((step, index) => (
            <div key={index} className={`mb-12 relative flex items-center md:justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[var(--background)] border-2 border-[var(--primary)] rounded-full -left-[9px] md:left-1/2 md:-translate-x-[8px] z-10" />
              
              <div className="md:w-[45%] pl-8 md:pl-0">
                <div className={`glass p-8 rounded-2xl glass-hover ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="text-[var(--primary)] font-mono text-xl mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              
              <div className="hidden md:block md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
