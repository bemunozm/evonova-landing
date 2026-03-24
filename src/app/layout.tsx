import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/query-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EVONOVA — Automatización IA y Software a Medida en Chile",
  description:
    "Agencia líder en automatización con IA y desarrollo de software a medida para empresas en Chile y LATAM. Garantizamos resultados medibles en 30 días.",
  keywords: [
    "automatización IA Chile",
    "agencia software Chile",
    "LangGraph Chile",
    "inteligencia artificial empresas",
    "software a medida LATAM",
    "automatización procesos Chile",
  ],
  openGraph: {
    title: "EVONOVA — Automatización IA y Software a Medida",
    description: "Tu empresa, operando en piloto automático.",
    siteName: "EVONOVA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
