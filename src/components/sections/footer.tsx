import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center">
            <span className="text-black font-black text-sm">E</span>
          </div>
          <span className="font-bold tracking-wider">EVONOVA</span>
        </div>
        
        <div className="text-[var(--foreground-muted)] text-sm mb-6 md:mb-0 flex items-center gap-4">
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
        </div>

        <div className="text-[var(--foreground-muted)] text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} EVONOVA.</p>
          <p>Operando desde Tarapacá, Chile para el mundo.</p>
        </div>
      </div>
    </footer>
  );
}
