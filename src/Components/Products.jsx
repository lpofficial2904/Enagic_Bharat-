import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import KangenQuestions from "./KangenQuestions";
import { products } from "../data/products";

export default function Products() {
  const isPage = useLocation().pathname.replace(/\/+$/, "") === "/products";
  const shown = isPage ? products : products.slice(0, 4);
  return (
    <section id="products" className={`surface-grid relative overflow-hidden bg-[#f4f7fc] ${isPage ? "pb-20 pt-32 sm:pb-28 sm:pt-40" : "py-20 sm:py-28"}`}>
      <div className="page-shell relative">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}} className="mb-14 flex flex-col justify-between gap-7 border-b border-[#073b8f]/10 pb-10 md:flex-row md:items-end">
          <div><p className="eyebrow">Kangen Water machines in India</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">One collection. <span className="italic text-[#0b4db8]">Different ways to live.</span></h2></div>
          <p className="max-w-sm text-base leading-7 text-black/55">Compare Kangen Water machine prices in India, including the Leveluk K8, SD501DX and Jr IV. Explore features and ask our Jaipur team for a personalised quote.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{once:true,amount:.1}} variants={{show:{transition:{staggerChildren:.1}}}} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((item,index)=><ProductCard key={item.id} product={item} index={index}/>)}
        </motion.div>
        {!isPage && <div className="mt-12 text-center"><Link to="/products" className="button-dark">View all products <ArrowRight size={18}/></Link></div>}
        <KangenQuestions />
      </div>
    </section>
  );
}
