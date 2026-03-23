import { AlertCircle, Clock, TrendingDown } from "lucide-react";

export function PainSection() {
  const pains = [
    {
      icon: Clock,
      title: "Tareas Repetitivas",
      desc: "Tu equipo pierde el 40% de su tiempo copiando y pegando datos entre plataformas."
    },
    {
      icon: AlertCircle,
      title: "Errores Humanos",
      desc: "La carga manual genera fallas que cuestan dinero y rompen la experiencia de tu cliente."
    },
    {
      icon: TrendingDown,
      title: "Crecimiento Estancado",
      desc: "Vender más significa contratar más. Tu operación es un cuello de botella para tu escalabilidad."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent top-0" />
      
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Crecer duele si lo haces <br className="hidden md:block" />
            <span className="text-red-500/80">de forma manual.</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Mientras tu competencia invierte en IA, tú sigues apagando incendios operativos. El costo de no automatizar se paga con estancamiento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain, index) => (
            <div key={index} className="glass p-8 rounded-2xl glass-hover group">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pain.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
