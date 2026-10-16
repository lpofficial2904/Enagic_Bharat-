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
  const lightHome = location.pathname === "/";
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
      className={`absolute inset-x-0 top-0 z-50 transition-all duration-500 lg:fixed ${scrolled ? "py-2" : "py-4"}`}>
      <nav className={`page-shell rounded-full border px-4 sm:px-6 transition-all duration-500 ${scrolled || lightHome ? "border-[#073b8f]/10 bg-white/75 text-[#101827] shadow-[0_12px_45px_rgba(13,41,36,.08)] backdrop-blur-xl" : "border-white/20 bg-[#101827]/45 text-white backdrop-blur-md"}`}>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/enagic-bharat-horizontal.svg"
              alt="Enagic Bharat"
              className="h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[230px]"
            />
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label,to]) => <NavLink key={to} to={to} className={({isActive}) => `relative text-sm font-semibold transition hover:opacity-60 ${isActive ? "after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-[#c9a96e]" : ""}`}>{label}</NavLink>)}
          </div>
          <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-[#0b4db8] px-5 py-3 text-sm font-bold text-white sm:flex">
            Book a demo <ArrowUpRight size={16}/>
          </Link>
          <button onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full bg-white/15 lg:hidden" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} exit={{opacity:0,x:24}} className="fixed inset-y-0 right-0 z-[-1] mt-0 w-screen overflow-y-auto border-l border-[#073b8f]/10 bg-[#f7f9ff]/98 px-5 pb-8 pt-24 text-[#101827] shadow-2xl backdrop-blur-xl sm:px-8 lg:hidden">
          <div className="mx-auto w-full max-w-xl">
            {links.map(([label,to]) => <Link key={to} to={to} className="block border-b border-[#073b8f]/10 px-2 py-5 text-lg font-semibold transition hover:text-[#0b4db8]">{label}</Link>)}
            <Link to="/contact" className="button-primary mt-6 w-full">Book a free demo <ArrowUpRight size={17}/></Link>
          </div>
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  );
}
