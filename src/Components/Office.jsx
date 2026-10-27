import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const address =
  "Enagic Bharat, Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020";
const mapUrl =
  "https://maps.google.com/?q=Enagic+Bharat+Shiv+Shakti+Complex+Narayan+Vihar+Jaipur+302020";
const info = [
  [MapPin, "Visit us", address, mapUrl],
  [Phone, "Call us", "+91 7357654577", "tel:+917357654577"],
  [Mail, "Email us", "enagicbharat1974@gmail.com", "mailto:enagicbharat1974@gmail.com"],
  [Clock3, "Opening hours", "Monday – Saturday, 9:00 AM – 6:00 PM", null],
];

export default function Office() {
  return (
    <main className="min-h-screen bg-[#f4f7fc] pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div>
            <p className="eyebrow flex items-center gap-2"><MapPin size={14} /> Jaipur experience centre</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:max-w-2xl lg:text-[4.25rem]">
              See the technology <span className="italic text-[#0b4db8]">in action.</span>
            </h1>
          </div>
          <div className="flex flex-col items-start gap-4 lg:max-w-sm lg:pb-1">
            <p className="text-sm leading-7 text-[#58677d] sm:text-base">
              Visit our Jaipur studio for a personal demonstration, clear answers and help choosing the right system for your home.
            </p>
            <Link to="/book" className="button-primary py-3">
              Book your visit <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#0b4db8]/10 bg-white shadow-[0_28px_80px_rgba(19,48,88,.1)] lg:grid-cols-[.78fr_1.22fr]">
          <div className="order-2 p-5 sm:p-8 lg:order-1 lg:p-10">
            <div className="mb-5 border-b border-[#0b4db8]/10 px-3 pb-5">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#0b4db8]">Plan your visit</p>
              <p className="mt-2 text-sm leading-6 text-[#58677d]">
                Our team will welcome you, walk you through the technology and tailor the demonstration to your questions.
              </p>
            </div>
            <div className="space-y-1">
              {info.map(([Icon, title, text, href], index) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e8eff9] text-[#0b4db8] transition group-hover:bg-[#0b4db8] group-hover:text-white">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <strong className="block text-sm font-bold text-[#14243b]">{title}</strong>
                      <span className="mt-1 block break-words text-sm leading-6 text-[#58677d]">{text}</span>
                    </span>
                  </>
                );
                const className = "group flex items-start gap-4 rounded-2xl p-3 transition hover:bg-[#f4f7fc] sm:p-4";

                return href ? (
                  <motion.a
                    key={title}
                    href={href}
                    target={title === "Visit us" ? "_blank" : undefined}
                    rel={title === "Visit us" ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={className}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={className}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative order-1 min-h-[340px] overflow-hidden bg-[#e8eff9] sm:min-h-[480px] lg:order-2 lg:min-h-[600px]">
            <iframe
              title="Enagic Bharat Jaipur office map"
              className="absolute inset-0 h-full w-full border-0"
              src="https://maps.google.com/maps?q=Mansarovar%2C%20Narayan%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302020&output=embed"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
