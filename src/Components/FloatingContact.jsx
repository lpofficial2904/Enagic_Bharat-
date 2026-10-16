import { motion, useScroll, useSpring } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

export default function FloatingContact() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });
  const whatsappMessage = encodeURIComponent(
    "Hello Enagic Bharat,\n\nI am interested in an Enagic water ioniser. Please share the best model, current price and demo availability for my home.\n\nThank you."
  );

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-[#0b4db8] via-[#c9a96e] to-[#0b4db8]" />
      <motion.a
        initial={{ opacity: 0, scale: .7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.15, type: "spring" }}
        whileHover={{ y: -4, scale: 1.04 }}
        href="tel:+917357654577"
        aria-label="Call Enagic Bharat"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-40 flex items-center gap-3 rounded-full border border-white/20 bg-[#073b8f] p-2.5 text-white shadow-[0_15px_45px_rgba(0,0,0,.3)] sm:bottom-7 sm:left-7 sm:px-5 sm:py-3"
      >
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#c9a96e] text-[#071d38]">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#c9a96e] opacity-20" />
          <PhoneCall size={19} className="relative" aria-hidden="true" />
        </span>
        <span className="hidden pr-1 text-sm font-bold sm:block">Call an expert</span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0, scale: .7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ y: -4, scale: 1.04 }}
        href={`https://wa.me/917357654577?text=${whatsappMessage}`}
        aria-label="Chat with us on WhatsApp"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-3 rounded-full border border-white/20 bg-[#101827] p-2.5 text-white shadow-[0_15px_45px_rgba(0,0,0,.3)] sm:bottom-7 sm:right-7 sm:px-5 sm:py-3"
      >
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#25D366]">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
          <FaWhatsapp size={21} className="relative" aria-hidden="true" />
        </span>
        <span className="hidden pr-1 text-sm font-bold sm:block">Chat with us</span>
      </motion.a>
    </>
  );
}
