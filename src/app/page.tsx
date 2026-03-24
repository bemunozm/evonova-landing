import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PainSection } from "@/components/sections/pain-section";
import { Services } from "@/components/sections/services";
import { Cases } from "@/components/sections/cases";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { CtaFinal } from "@/components/sections/cta-final";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <PainSection />
      <Services />
      <Cases />
      <Process />
      <Pricing />
      <CtaFinal />
      <ContactSection />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
