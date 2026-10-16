import { motion } from "framer-motion";
import { Award, Circle, Droplets, Globe2, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  [Award, "Japanese engineering"],
  [Globe2, "Guidance across India"],
  [ShieldCheck, "Purchase support"],
  [Droplets, "Model comparisons"],
  [Sparkles, "Personal demonstrations"],
];

export default function TrustBar() {
  const loop = [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-[#073b8f]/10 bg-[#e8eff9] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#e8eff9] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#e8eff9] to-transparent sm:w-40" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="premium-marquee flex items-center"
      >
        {loop.map(([Icon, label], index) => (
          <div key={`${label}-${index}`} className="flex items-center">
            <div className="flex items-center gap-3 px-7 text-xs font-extrabold uppercase tracking-[.15em] text-black/60 sm:px-10">
              <Icon size={17} strokeWidth={1.7} className="text-[#0b4db8]" />
              <span className="whitespace-nowrap">{label}</span>
            </div>
            <Circle size={5} fill="currentColor" className="text-[#0b4db8]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
