import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import k8 from "../assets/levelluk-k8-img.jpg";
import sd501dx from "../assets/Leveluk SD501DX.png";
import jrIv from "../assets/The New Leveluk JRIV!.jpg";
import completeRange from "../assets/all-product.png";

export default function Slider() {
  return (
    <section className="hero-premium grain relative min-h-[760px] overflow-hidden text-[#101827] lg:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,.38),transparent_36%),radial-gradient(circle_at_15%_90%,rgba(201,169,110,.07),transparent_30%)]"/>
      <div className="absolute inset-0 opacity-[.045]" style={{backgroundImage:"linear-gradient(rgba(11,77,184,.45) 1px,transparent 1px),linear-gradient(90deg,rgba(11,77,184,.45) 1px,transparent 1px)",backgroundSize:"72px 72px"}}/>
      <div className="page-shell relative z-10 grid min-h-[760px] items-center gap-7 pb-14 pt-24 sm:gap-10 sm:pb-16 sm:pt-32 lg:min-h-screen lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.12}}}} className="order-2 lg:order-1">
          <motion.div variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}} className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#073b8f]/10 bg-white/65 px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#073b8f] shadow-sm backdrop-blur sm:mb-7 sm:px-4 sm:text-xs">
            <Sparkles size={14}/> Japanese engineering, thoughtfully guided
          </motion.div>
          <motion.h1 variants={{hidden:{opacity:0,y:35},show:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}} className="max-w-3xl text-[2.65rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[7rem]">
            Kangen Water<br/><span className="font-normal italic text-[#c9a96e]">for your home.</span>
          </motion.h1>
          <motion.p variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}} className="mt-5 max-w-xl text-sm leading-7 text-[#526176] sm:mt-7 sm:text-lg sm:leading-8">
            Explore Enagic Kangen Water machines in India. Compare water ionizer models and prices, then book a personal demo with our Jaipur team.
          </motion.p>
          <motion.div variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}} className="mt-7 flex flex-wrap gap-3 sm:mt-9">
            <Link to="/products" className="button-primary w-full px-7 py-4 sm:w-auto">Compare models & prices <ArrowRight size={18}/></Link>
            <Link to="/book" className="flex w-full items-center justify-center gap-3 rounded-full border border-[#073b8f]/20 bg-white/40 px-6 py-4 font-semibold text-[#14243b] transition hover:border-[#0b4db8] hover:bg-[#0b4db8] hover:text-white sm:w-auto"><Play size={17} fill="currentColor"/> Book a Kangen Water demo</Link>
          </motion.div>
          <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}} className="mt-9 grid grid-cols-1 gap-3 border-t border-[#073b8f]/10 pt-5 text-xs text-[#526176] min-[390px]:grid-cols-2 sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-3 sm:pt-6 sm:text-sm">
            {["Japanese-built systems","Personal demonstrations","Local guidance"].map(x=><span key={x} className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#c9a96e]"/>{x}</span>)}
          </motion.div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1.1,delay:.2,ease:[.22,1,.36,1]}} className="relative order-1 min-h-[440px] sm:min-h-[620px] lg:order-2 lg:min-h-[690px]">
          <div className="absolute inset-x-[7%] bottom-[3%] top-[4%] border border-[#073b8f]/10 bg-white/25 shadow-[0_24px_70px_rgba(26,56,98,.08)] backdrop-blur-sm" />
          <div className="absolute left-[7%] top-[4%] z-20 bg-[#c9a96e] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#101827]">
            Featured collection
          </div>

          <motion.div animate={{y:[0,-8,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className="group absolute left-[11%] right-[6%] top-[13%] z-10 overflow-hidden rounded-lg border border-white bg-[#f7f9ff] shadow-[0_35px_80px_rgba(15,35,65,.2)]">
            <Link to="/products" aria-label="View the complete Enagic product range" className="relative block h-[255px] sm:h-[390px]">
              <img src={completeRange} alt="Complete Enagic water ionizer range" className="h-full w-full object-contain p-4 mix-blend-multiply sm:p-7" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#071d38] via-[#071d38]/92 to-transparent px-5 pb-5 pt-16 text-white sm:px-7">
                <div><span className="text-[8px] font-bold uppercase tracking-[.16em] text-[#c9a96e] sm:text-[10px]">Japanese water systems</span><strong className="mt-1 block text-base sm:text-2xl">The complete Enagic range</strong></div>
                <span className="hidden items-center gap-2 text-xs font-bold text-white/70 transition group-hover:text-white sm:flex">Compare models <ArrowRight size={15}/></span>
              </div>
            </Link>
          </motion.div>

          <motion.div animate={{y:[0,7,0]}} transition={{duration:5.4,repeat:Infinity,ease:"easeInOut"}} className="group absolute bottom-[1%] left-[1%] z-20 w-[31%] overflow-hidden rounded-lg border border-white/15 bg-[#f1f6ff] shadow-[0_24px_55px_rgba(0,0,0,.38)]">
            <Link to="/product/1" aria-label="View Leveluk K8 details" className="block">
              <img src={k8} alt="Leveluk K8 water ionizer" className="aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" />
              <div className="flex items-center justify-between bg-[#0b4db8] px-3 py-2.5 text-white"><strong className="block text-[10px] sm:text-sm">Leveluk K8</strong><ArrowRight size={13}/></div>
            </Link>
          </motion.div>

          <motion.div animate={{y:[0,-5,0]}} transition={{duration:5.8,repeat:Infinity,ease:"easeInOut"}} className="group absolute bottom-[1%] left-[34.5%] z-20 w-[31%] overflow-hidden rounded-lg border border-white/15 bg-[#f1f6ff] shadow-[0_24px_55px_rgba(0,0,0,.38)]">
            <Link to="/product/2" aria-label="View Leveluk SD501DX details" className="block">
              <img src={sd501dx} alt="Leveluk SD501DX water ionizer" className="aspect-[4/3] w-full object-contain p-3 mix-blend-multiply transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" />
              <div className="flex items-center justify-between bg-[#073b8f] px-3 py-2.5 text-white"><strong className="block text-[10px] sm:text-sm">SD501DX</strong><ArrowRight size={13}/></div>
            </Link>
          </motion.div>

          <motion.div animate={{y:[0,6,0]}} transition={{duration:6.2,repeat:Infinity,ease:"easeInOut"}} className="group absolute bottom-[1%] right-[1%] z-20 w-[31%] overflow-hidden rounded-lg border border-white/15 bg-[#f1f6ff] shadow-[0_24px_55px_rgba(0,0,0,.38)]">
            <Link to="/product/5" aria-label="View Leveluk Jr IV details" className="block">
              <img src={jrIv} alt="Leveluk Jr IV water ionizer" className="aspect-[4/3] w-full object-contain p-4 mix-blend-multiply transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" />
              <div className="flex items-center justify-between bg-[#0b4db8] px-3 py-2.5 text-white"><strong className="block text-[10px] sm:text-sm">Leveluk Jr IV</strong><ArrowRight size={13}/></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f4f7fc] to-transparent"/>
    </section>
  );
}
