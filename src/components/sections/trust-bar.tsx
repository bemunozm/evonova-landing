export function TrustBar() {
  const logos = [
    { name: "Pira.cl", abbr: "Pira" },
    { name: "OTEC Tarapacá", abbr: "OTEC" },
    { name: "Sodimac Proveedores", abbr: "SOD" },
    { name: "Zona Franca Iquique", abbr: "ZOFRI" },
    { name: "Clínica Red", abbr: "CLINICA" }
  ];

  return (
    <section className="py-12 border-t border-[var(--border)] bg-gradient-to-b from-[var(--background)] to-[var(--surface)]/20">
      <div className="container px-6 mx-auto">
        <p className="text-center text-sm font-medium text-[var(--foreground-muted)] mb-8 uppercase tracking-widest">
          Empresas que ya escalan sin límites
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-bold text-neutral-500 group-hover:text-white transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
