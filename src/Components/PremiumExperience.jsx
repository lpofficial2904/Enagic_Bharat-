import { motion } from "framer-motion";
import { ArrowUpRight, Check, Droplets, Gauge, Leaf, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { number: "01", icon: Droplets, title: "Discover", text: "See the system at work and explore its water settings in a guided demonstration." },
  { number: "02", icon: Gauge, title: "Compare", text: "Understand model differences through your space, household size and daily routine." },
  { number: "03", icon: Leaf, title: "Settle in", text: "Receive practical setup guidance and a reliable point of contact after purchase." },
];

export default function PremiumExperience() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eef3fa] py-20 text-[#14243b] sm:py-28">
        <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#0b4db8]/[.06] blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#89a7d2]/[.12] blur-[100px]" />
        <div className="page-shell relative">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end"
          >
            <div>
              <p className="eyebrow">The Enagic experience</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-6xl">
                A clearer path to <span className="italic text-[#0b4db8]">the right system.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#58677d] lg:ml-auto">
              No one-size-fits-all pitch. We help you understand the range, ask better questions and choose with confidence.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.65 }}
                className="group relative rounded-2xl border border-[#0b4db8]/10 bg-white p-8 shadow-[0_18px_50px_rgba(19,48,88,.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#f9fbff] hover:shadow-[0_24px_60px_rgba(19,48,88,.1)] sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-[#0b4db8]/15 bg-[#eef3fa] text-[#0b4db8]">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-[Manrope] text-5xl font-semibold text-[#0b4db8]/[.08] transition group-hover:text-[#0b4db8]/15">{number}</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-[#58677d]">{text}</p>
                <div className="mt-8 h-px w-10 bg-[#0b4db8]/35 transition-all duration-500 group-hover:w-full group-hover:bg-[#0b4db8]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fc] py-20 sm:py-28">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg bg-[#0b4db8] p-8 text-white sm:p-12"
          >
            <Quote className="absolute -right-3 -top-8 h-52 w-52 text-white/[.07]" />
            <p className="eyebrow !text-white/60">Why families choose us</p>
            <blockquote className="relative mt-8 max-w-3xl text-3xl font-medium leading-snug sm:text-5xl">
              “Not just a water system. A considered investment in the way your family lives every day.”
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <img src="/enagic-bharat-horizontal.svg" alt="Enagic Bharat" className="h-14 w-auto max-w-[240px] rounded-2xl bg-white/95 p-2 object-contain" />
              <div>
                <strong className="block tracking-[.08em]">ENAGIC BHARAT</strong>
                <span className="text-sm text-white/60">Jaipur Experience Centre</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-[#073b8f]/10 bg-white p-8 shadow-[0_24px_70px_rgba(7,35,83,.08)] sm:p-12"
          >
            <p className="eyebrow">Premium support</p>
            <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Confidence beyond purchase.</h3>
            <div className="mt-8 space-y-5">
              {["Personal product consultation", "Live water demonstration", "Installation guidance", "Long-term product support"].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-black/65">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e2ebf8] text-[#138808]"><Check size={14} /></span>{item}
                </div>
              ))}
            </div>
            <Link to="/book" className="button-dark mt-10">Schedule your experience <ArrowUpRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
