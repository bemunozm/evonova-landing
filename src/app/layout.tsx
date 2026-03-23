import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EVONOVA - Soluciones de Software de Vanguardia",
    template: "%s | EVONOVA",
  },
  description: "EVONOVA transforma tu negocio con soluciones tecnológicas innovadoras, escalables y eficientes.",
  keywords: ["software", "tecnología", "innovación", "desarrollo web", "EVONOVA"],
  authors: [{ name: "EVONOVA Team" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://evonova.cl",
    title: "EVONOVA - Soluciones de Software de Vanguardia",
    description: "Transformamos ideas en realidades digitales de alto impacto.",
    siteName: "EVONOVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVONOVA - Soluciones de Software de Vanguardia",
    description: "Transformamos ideas en realidades digitales de alto impacto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
