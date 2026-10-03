import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const info = [
  [
    MapPin,
    "Visit us",
    "Enagic Bharat, Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020",
  ],
  [Phone, "Call us", "+91 7357654577"],
  [Mail, "Email us", "enagicbharat1974@gmail.com"],
  [Clock3, "Opening hours", "Monday – Saturday, 9:00 AM – 6:00 PM"],
];
export default function Office() {
  return (
    <main className="bg-[#f7f5ef] pb-24 pt-36">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="eyebrow">Jaipur studio</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
            Come see the technology{" "}
            <span className="italic text-[#a77a37]">in action.</span>
          </h1>
        </motion.div>
        <div className="grid overflow-hidden rounded-[2.5rem] border border-black/[.07] bg-white shadow-[0_30px_90px_rgba(30,28,22,.09)] lg:grid-cols-[.78fr_1.22fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm leading-7 text-black/50">
              Visit our Jaipur experience centre for a personal demonstration
              and guidance from our team.
            </p>
            <div className="mt-10 space-y-2">
              {info.map(([Icon, title, text], i) => (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={title}
                  className="flex gap-4 rounded-2xl p-4 transition hover:bg-[#f5f2eb]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eee8dc] text-[#a77a37]">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-black/55">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="min-h-[520px] overflow-hidden grayscale-[.25]">
            {/* <iframe
              title="Enagic Bharat Jaipur office"
              className="h-full min-h-[520px] w-full border-0"
              src="https://www.google.com/maps/search/?api=1&query=Mansarovar%2C+Narayan+Vihar%2C+Jaipur%2C+Rajasthan+302020&utm_source=chatgpt.com"
              loading="lazy"
            /> */}

            <iframe
  title="Enagic Bharat Jaipur office"
  className="h-full min-h-[520px] w-full border-0"
  src="https://maps.google.com/maps?q=Mansarovar%2C%20Narayan%20Vihar%2C%20Jaipur%2C%20Rajasthan%20302020&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>
      </div>
    </main>
  );
}
