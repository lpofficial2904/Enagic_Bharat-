import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="grain overflow-hidden bg-[#0d2924] text-white">
      <div className="page-shell py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end"
        >
          <div>
            <p className="eyebrow">Start with a conversation</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">
              Choose with clarity. Live with confidence.
            </h2>
          </div>
          <Link to="/contact" className="button-primary shrink-0 px-7 py-4">
            Book a free demo <ArrowUpRight size={18} />
          </Link>
        </motion.div>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/enagic-bharat-logo.svg"
                alt=""
                className="h-10 w-10 rounded-[10px]"
              />
              <span className="font-[Manrope] font-extrabold tracking-[.12em]">
                ENAGIC BHARAT
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/45">
              Premium Japanese water ionisation technology for healthier
              everyday living.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d8b678]">
              Explore
            </h3>
            <div className="mt-5 space-y-3 text-sm text-white/55">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["Our story", "/our-story"],
                ["Office", "/office"],
              ].map(([x, to]) => (
                <Link className="block hover:text-white" key={x} to={to}>
                  {x}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d8b678]">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/55">
              <a href="tel:+917357654577" className="flex gap-3">
                <Phone size={17} />
                +91 7357654577
              </a>
              <a href="mailto:enagicbharat1974@gmail.com" className="flex gap-3">
                <Mail size={17} />
                enagicbharat1974@gmail.com
              </a>
              <p className="flex gap-3 leading-6">
                <MapPin size={18} className="shrink-0" />
                Enagic Bharat, Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d8b678]">
              Follow
            </h3>
            <div className="mt-5 flex gap-3">
              {[
                [FaFacebookF, "https://www.facebook.com/"],
                [FaInstagram, "https://www.instagram.com/"],
                [FaYoutube, "https://www.youtube.com/"],
              ].map(([Icon, url]) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-[#b82025] hover:bg-[#b82025]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© 2026 Enagic Bharat. All rights reserved.</p>
          <p>Japanese precision • Indian hospitality</p>
        </div>
      </div>
    </footer>
  );
}
