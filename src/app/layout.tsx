import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "EVONOVA - Tu empresa, operando en piloto automático",
  description: "Automatización e IA a medida para escalar sin contratar más. La única agencia de automatización IA con presencia en Tarapacá que garantiza resultados medibles en 30 días.",
  keywords: ["IA", "Automatización", "Tarapacá", "Iquique", "LangGraph", "Software a Medida", "Agentes de IA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} bg-[var(--background)] text-[var(--foreground)] min-h-screen antialiased selection:bg-[#00ffa3] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
