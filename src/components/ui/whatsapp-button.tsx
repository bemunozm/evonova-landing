import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <Link 
      href="https://wa.me/56900000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[#25D366]/50 duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  );
}
