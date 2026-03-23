import { 
  RocketIcon, 
  LayersIcon, 
  ShieldCheckIcon, 
  ZapIcon, 
  BarChartIcon, 
  CodeIcon 
} from "lucide-react";

const features = [
  {
    title: "Desarrollo Ágil",
    description: "Metodologías iterativas para entregas rápidas, de alta calidad y feedback continuo.",
    icon: RocketIcon,
  },
  {
    title: "Escalabilidad Total",
    description: "Sistemas diseñados para crecer contigo, desde una startup hasta un corporativo.",
    icon: LayersIcon,
  },
  {
    title: "Seguridad Robusta",
    description: "Protección integral en cada línea de código y capa de infraestructura.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Máxima Velocidad",
    description: "Rendimiento optimizado para tiempos de carga mínimos y alta eficiencia.",
    icon: ZapIcon,
  },
  {
    title: "Análisis Basado en Datos",
    description: "Toma decisiones fundamentadas con herramientas de reporting e inteligencia de negocio.",
    icon: BarChartIcon,
  },
  {
    title: "Tecnología de Punta",
    description: "Utilizamos las últimas arquitecturas y lenguajes para soluciones modernas.",
    icon: CodeIcon,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">¿Por qué EVONOVA?</h2>
          <h3 className="text-4xl font-bold text-slate-900 leading-tight">Soluciones diseñadas para el <span className="text-blue-700">éxito digital</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mb-8 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
