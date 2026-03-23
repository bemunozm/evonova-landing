import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-x-0 border-t-0 bg-opacity-70">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[var(--primary)] flex items-center justify-center">
            <span className="text-black font-black text-xl">E</span>
          </div>
          EVONOVA
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#servicios" className="text-sm text-[var(--foreground-muted)] hover:text-white transition-colors">Servicios</Link>
        <Link href="#casos" className="text-sm text-[var(--foreground-muted)] hover:text-white transition-colors">Casos de Éxito</Link>
        <Link href="#pricing" className="text-sm text-[var(--foreground-muted)] hover:text-white transition-colors">Pricing</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#contacto">
          <Button variant="outline" className="hidden sm:flex">
            Agendar Diagnóstico
          </Button>
        </Link>
      </div>
    </nav>
  );
}
