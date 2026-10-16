import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Droplets,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import story from "../assets/levelluk-k8-img.jpg";
import product from "../assets/super501_1.png";

const values = [
  [
    Award,
    "Japanese precision",
    "Meticulous engineering refined through decades of disciplined innovation.",
  ],
  [
    ShieldCheck,
    "Built to endure",
    "Premium materials and dependable performance designed for everyday life.",
  ],
  [
    HeartHandshake,
    "Human guidance",
    "Personal support from your first question to years of confident use.",
  ],
  [
    Globe2,
    "Global trust",
    "Part of a wellness movement reaching families in more than 150 countries.",
  ],
];

const milestones = [
  [
    "1974",
    "Japanese beginnings",
    "Enagic's story starts in Japan, with a focus on water technology for everyday life.",
  ],
  [
    "1988",
    "Water technology evolves",
    "Product development brings water-treatment technology into practical home systems.",
  ],
  [
    "2000s",
    "A wider community",
    "Enagic's international presence grows, introducing more households to its water systems.",
  ],
  [
    "2016",
    "Closer to India",
    "Enagic Bharat helps Indian customers explore products through local guidance and demonstrations.",
  ],
];

export default function Aboutus() {
  const full = useLocation().pathname === "/our-story";
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <main className={`overflow-hidden ${full ? "bg-[#f4f7fc] pt-24" : ""}`}>
      {full && (
        <section className="grain relative min-h-[76vh] overflow-hidden bg-[#eef3fa] text-[#14243b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(11,77,184,.12),transparent_31%),radial-gradient(circle_at_12%_90%,rgba(137,167,210,.14),transparent_28%)]" />
          <div
            className="absolute inset-0 opacity-[.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,77,184,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(11,77,184,.07) 1px,transparent 1px)",
              backgroundSize: "76px 76px",
            }}
          />
          <div className="page-shell relative grid min-h-[76vh] items-center gap-10 pb-16 pt-20 lg:grid-cols-[1.12fr_.88fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="eyebrow flex items-center gap-2"
              >
                <Sparkles size={14} /> The story behind every drop
              </motion.p>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="mt-6 max-w-4xl text-5xl font-semibold leading-[.98] sm:text-7xl lg:text-[5.7rem]"
              >
                A belief that better living begins with{" "}
                <span className="italic text-[#0b4db8]">better water.</span>
              </motion.h1>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-7 max-w-xl text-base leading-8 text-[#526176] sm:text-lg"
              >
                Japanese innovation, personal guidance and a simple purpose:
                helping families make a more considered choice every day.
              </motion.p>
            </motion.div>
            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden min-h-[530px] items-center justify-center lg:flex"
            >
              <div className="absolute h-96 w-96 rounded-full border border-[#0b4db8]/15" />
              <div className="absolute h-72 w-72 rounded-full bg-[#0b4db8]/10 blur-[70px]" />
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={product}
                alt="Enagic Japanese water ionizer"
                className="relative z-10 max-h-[500px] object-contain drop-shadow-[0_35px_45px_rgba(24,47,79,.2)]"
              />
              <div className="absolute bottom-14 left-0 z-20 rounded-2xl border border-[#0b4db8]/10 bg-white/85 p-5 shadow-lg backdrop-blur-xl">
                <strong className="text-3xl text-[#0b4db8]">50+</strong>
                <span className="mt-1 block text-[10px] uppercase tracking-[.16em] text-[#526176]">
                  Years of innovation
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="section-rule bg-white py-20 sm:py-28">
        <div className="page-shell grid items-center gap-12 sm:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full border border-[#0b4db8]/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <motion.img
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.8 }}
                src={story}
                alt="Leveluk K8 water ionizer"
                className="h-full w-full bg-[#f4f7fc] object-contain p-8 sm:p-12"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur">
                Innovation with intention
              </span>
            </div>
            <div className="absolute -bottom-7 right-2 rounded-lg bg-[#0b4db8] px-7 py-6 text-white shadow-2xl sm:right-8">
              <strong className="block text-4xl">Global</strong>
              <span className="text-sm text-white/70">
                technology, local guidance
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Purpose in every drop</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-6xl">
              Kangen Water guidance, here in Jaipur.
            </h2>
            <p className="mt-7 text-lg leading-8 text-black/55">
              Enagic Bharat helps you explore Kangen Water machines in Jaipur,
              Rajasthan. Compare Enagic alkaline water ionizer models, understand
              pricing and arrange a personal demonstration before you choose.
            </p>
            <p className="mt-5 leading-7 text-black/48">
              Our role goes beyond supplying a machine. We help families
              understand the technology, experience the difference and receive
              dependable support for years to come.
            </p>
            {!full && (
              <Link to="/our-story" className="button-dark mt-9">
                Discover our story <ArrowRight size={18} />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#e8eff9] py-24">
        <div className="page-shell">
          {full && (
            <div className="mb-12">
              <p className="eyebrow">What guides us</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
                Values that go beyond technology.
              </h2>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([Icon, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="group rounded-lg border border-[#073b8f]/10 bg-[#f7f9ff] p-7 transition-shadow hover:shadow-[0_22px_55px_rgba(7,35,83,.1)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-[#e2ebf8] text-[#073b8f] transition group-hover:bg-[#0b4db8] group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {full && (
        <>
          <section className="bg-[#eaf0f8] py-28 text-[#14243b]">
            <div className="page-shell grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32 lg:self-start"
              >
                <p className="eyebrow">Our journey</p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
                  Five decades of purposeful innovation.
                </h2>
                <p className="mt-6 max-w-md leading-7 text-[#526176]">
                  A continuous pursuit of quality, performance and a better
                  everyday relationship with water.
                </p>
              </motion.div>
              <div className="relative border-l border-[#0b4db8]/15">
                {milestones.map(([year, title, text], index) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative pb-14 pl-9 last:pb-0 sm:pl-14"
                  >
                    <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-[#0b4db8] shadow-[0_0_18px_rgba(11,77,184,.28)]" />
                    <span className="text-sm font-bold tracking-[.14em] text-[#0b4db8]">
                      {year}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7 text-[#58677d]">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f4f7fc] py-28">
            <div className="page-shell grid gap-5 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] bg-[#0b4db8] p-9 text-white sm:p-12"
              >
                <Target className="text-white/65" />
                <p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-white/55">
                  Our mission
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                  Make exceptional hydration accessible, understandable and
                  personal.
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] border border-black/[.07] bg-white p-9 sm:p-12"
              >
                <Droplets className="text-[#138808]" />
                <p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-[#138808]">
                  Our vision
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                  A future where better water becomes a natural part of every
                  home.
                </h3>
              </motion.div>
            </div>
          </section>

          <section className="grain relative overflow-hidden bg-[#0b4db8] py-20 text-white">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/15 blur-[80px]" />
            <div className="page-shell relative flex flex-col items-start justify-between gap-9 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-white/55">
                  Your story starts here
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                  Ready to experience water differently?
                </h2>
              </div>
              <Link
                to="/contact"
                className="flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#101827] transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Book a Kangen Water demo <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
