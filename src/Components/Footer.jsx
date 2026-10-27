import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-premium grain overflow-hidden text-[#14243b]">
      <div className="page-shell pb-28 pt-24 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-7 border-b border-[#0b4db8]/10 pb-10 sm:gap-10 sm:pb-16 lg:flex-row lg:items-end"
        >
          <div>
            <p className="eyebrow text-[#0b4db8]">Start with a conversation</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">
              Choose with clarity. Live with confidence.
            </h2>
          </div>
          <Link to="/book" className="button-primary shrink-0 px-7 py-4">
            Book a free demo <ArrowUpRight size={18} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 py-10 sm:gap-12 sm:py-14 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="hidden items-center gap-3 sm:flex">
              <img
                src="/enagic-bharat-horizontal.svg"
                alt="Enagic Bharat"
                className="h-16 w-auto max-w-[280px] rounded-2xl bg-white/95 p-2 object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-[#58677d]">
              Premium Japanese water ionisation technology for healthier
              everyday living.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0b4db8]">
              Explore
            </h3>
            <div className="mt-5 space-y-3 text-sm text-[#58677d]">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["About Us", "/our-story"],
                ["Contact Us", "/book"],
                ["Office", "/office"],
              ].map(([x, to]) => (
                <Link className="block transition hover:text-[#0b4db8]" key={x} to={to}>
                  {x}
                </Link>
              ))}
            </div>
          </div>
          <div className="order-3 col-span-2 sm:order-none sm:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0b4db8]">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-[#58677d]">
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
          <div className="order-2 sm:order-none">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0b4db8]">
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
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#0b4db8]/15 bg-white/70 text-[#33445c] shadow-sm transition hover:border-[#0b4db8] hover:bg-[#0b4db8] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-[#0b4db8]/10 pt-6 text-xs text-[#66748b] sm:flex-row">
          <p>© 2026 Enagic Bharat. All rights reserved.</p>
          <p>Japanese precision • Indian hospitality</p>
        </div>
        <nav aria-label="Legal" className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#66748b]">
          <Link className="transition-colors hover:text-[#0b4db8]" to="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link className="transition-colors hover:text-[#0b4db8]" to="/privacy-policy">Privacy Policy</Link>
          <Link className="transition-colors hover:text-[#0b4db8]" to="/refund-policy">Refund Policy</Link>
          <Link className="transition-colors hover:text-[#0b4db8]" to="/shipping-policy">Shipping Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
