import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-50 font-sans selection:bg-indigo-500/30">
      <Hero />
      
      {/* Casos de Éxito Reales */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Resultados Reales. <span className="text-indigo-500">Fricción Cero.</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl">
            No hacemos "páginas web". Construimos ecosistemas de conversión y automatización empresarial impulsados por IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Caso 1: Pira */}
          <div className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-sm font-semibold text-indigo-500 mb-2">E-COMMERCE & IA</div>
            <h3 className="text-2xl font-bold mb-4">Pira.cl (Shopify)</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Pipeline de IA: Descarga automática de historias de IG, extracción de características, y tras aprobación humana, despliegue simultáneo en Shopify y Loyverse.
            </p>
          </div>

          {/* Caso 2: OTEC */}
          <div className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-sm font-semibold text-indigo-500 mb-2">EDTECH</div>
            <h3 className="text-2xl font-bold mb-4">OTEC Moodle + WP</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Desarrollo de plugins y bridges a medida para sincronizar ventas, matrículas y progreso de alumnos en tiempo real, eliminando el trabajo manual.
            </p>
          </div>

          {/* Caso 3: LangGraph */}
          <div className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02] transition-transform duration-300">
            <div className="text-sm font-semibold text-indigo-500 mb-2">ENTERPRISE AUTOMATION</div>
            <h3 className="text-2xl font-bold mb-4">Workflows LangGraph</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Desarrollamos agentes que aprenden de tu negocio. Calificación de leads, atención al cliente y generación de links de pago totalmente automatizados.
            </p>
          </div>
        </div>
      </section>

      <Features />

      {/* CTA Final */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-zinc-50 dark:bg-zinc-900/50 mt-12 rounded-t-[3rem]">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
          Escala tu negocio hoy.
        </h2>
        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-indigo-500/25 transition-all">
          Agendar Consultoría (Calendly)
        </Button>
      </section>

      {/* WhatsApp Flotante */}
      <a
        href="https://wa.me/56900000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
}
