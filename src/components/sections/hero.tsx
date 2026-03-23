import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Innovación <span className="text-blue-600 italic">Evolutiva</span> para tu Negocio
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          En <span className="font-bold text-slate-900 tracking-wider">EVONOVA</span>, diseñamos y construimos el software que impulsa el futuro. Soluciones escalables, eficientes y hechas a medida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            Comienza Ahora
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 rounded-full border-blue-200 hover:bg-blue-50 transition-all">
            Nuestros Servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
