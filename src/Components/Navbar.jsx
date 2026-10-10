import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "/"], ["Products", "/products"], ["Our Story", "/our-story"], ["Office", "/office"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: .7, ease: [0.22,1,.36,1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <nav className={`page-shell rounded-full border px-4 sm:px-6 transition-all duration-500 ${scrolled ? "border-[#173d35]/10 bg-[#f8faf8]/92 shadow-[0_12px_45px_rgba(13,41,36,.12)] backdrop-blur-xl" : "border-white/20 bg-[#0d2924]/45 text-white backdrop-blur-md"}`}>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/enagic-bharat-horizontal.png"
              alt="Enagic Bharat"
              className="h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[230px]"
            />
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label,to]) => <NavLink key={to} to={to} className={({isActive}) => `relative text-sm font-semibold transition hover:opacity-60 ${isActive ? "after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#d8b678]" : ""}`}>{label}</NavLink>)}
          </div>
          <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-[#902b36] px-5 py-3 text-sm font-bold text-white sm:flex">
            Book a demo <ArrowUpRight size={16}/>
          </Link>
          <button onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full bg-white/15 lg:hidden" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="page-shell mt-2 overflow-hidden rounded-[1.75rem] border border-[#173d35]/10 bg-[#f8faf8]/95 p-3 text-[#14231f] shadow-2xl backdrop-blur-xl lg:hidden">
          {links.map(([label,to]) => <Link key={to} to={to} className="block rounded-2xl px-5 py-3.5 font-semibold hover:bg-black/5">{label}</Link>)}
          <Link to="/contact" className="button-primary mt-2 w-full">Book a free demo <ArrowUpRight size={17}/></Link>
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  );
}
