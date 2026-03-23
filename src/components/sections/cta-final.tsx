import { Button } from "@/components/ui/button";

export function CtaFinal() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--primary)]/5"></div>
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center border-[var(--primary)]/20 shadow-[0_0_50px_rgba(0,255,163,0.05)]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para escalar sin fricción?</h2>
          <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto">
            Agenda 15 minutos con nosotros. Evaluaremos tu operación gratis y te diremos exactamente cuánto tiempo y dinero puedes ahorrar automatizando.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email corporativo" 
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
            />
            <Button size="lg" className="w-full text-base font-bold mt-2">
              Solicitar Diagnóstico
            </Button>
          </form>
          
          <p className="text-sm text-[var(--foreground-muted)] mt-6">
            Sin compromisos. Solo datos y ROI.
          </p>
        </div>
      </div>
    </section>
  );
}
