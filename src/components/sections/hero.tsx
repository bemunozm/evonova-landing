import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm border rounded-full glass text-[var(--foreground-muted)]">
          <Sparkles className="w-4 h-4 text-[var(--primary)]" />
          <span>Automatización e IA para empresas en Chile</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] tracking-tight mb-8">
          Tu empresa, operando en <br className="hidden md:block" />
          <span className="text-gradient">piloto automático.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl leading-relaxed">
          La única agencia de automatización IA con presencia en Tarapacá que garantiza resultados medibles en 30 días. Escala tu operación sin contratar más personal.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="#contacto" className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-base font-semibold group">
              Agendar Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#casos" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full text-base border border-transparent hover:border-[var(--border)]">
              Ver Casos de Éxito
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-4 text-sm text-[var(--foreground-muted)] font-mono">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--background)] bg-[var(--surface)] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-neutral-600" />
              </div>
            ))}
          </div>
          <p>+30 empresas ya operan con IA</p>
        </div>
      </div>
    </section>
  );
}
