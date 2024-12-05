import { useScroll } from "@/hooks/use-scroll/use-scroll";
import { cn } from "@/lib/utils";
import WhatsAppButton from "../whatsapp-button/WhatsappButton";

export default function FloatingWhatsAppButton() {
  const { showButton } = useScroll();
  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out",
        showButton
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <WhatsAppButton iconSize={40} />
    </div>
  );
}
