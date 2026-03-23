import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Cases() {
  const cases = [
    {
      client: "Pira.cl",
      category: "eCommerce + Logística",
      title: "Sincronización total Shopify a Bodega",
      metrics: ["+40h mensuales ahorradas", "0 errores de stock", "Procesamiento en tiempo real"],
      img: "bg-gradient-to-br from-neutral-800 to-neutral-900"
    },
    {
      client: "OTEC Tarapacá",
      category: "EdTech",
      title: "Integración WP + Moodle Automática",
      metrics: ["Reducción de carga manual en 85%", "Sincronización instantánea de alumnos", "Mayor retención"],
      img: "bg-gradient-to-br from-neutral-800 to-neutral-900"
    },
    {
      client: "Retail Local",
      category: "Pipeline IA",
      title: "Agente IA Instagram a Loyverse",
      metrics: ["+300% de leads calificados 24/7", "Conversión directa a POS", "Costo adquisición -40%"],
      img: "bg-gradient-to-br from-neutral-800 to-neutral-900"
    }
  ];

  return (
    <section id="casos" className="py-24">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="text-[var(--primary)] font-mono text-sm tracking-wider uppercase mb-4">Prueba Social</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Resultados Cuantificables.</h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            No vendemos tecnología, vendemos tiempo y rentabilidad. Estos son números reales de empresas locales.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((c, index) => (
            <div key={index} className="glass rounded-3xl overflow-hidden glass-hover group flex flex-col md:flex-row">
              <div className={`md:w-2/5 min-h-[250px] ${c.img} p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--border)]`}>
                <div className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--border)] w-fit text-white">
                  {c.category}
                </div>
                <h4 className="text-2xl font-bold mt-8 text-white">{c.client}</h4>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{c.title}</h3>
                
                <div className="space-y-4 mb-8">
                  {c.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      <span className="text-[var(--foreground-muted)]">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="#" className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-white transition-colors w-fit">
                  Leer caso de estudio completo <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
