import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getProductSlug } from "../data/products";

export default function ProductCard({ product, index=0 }) {
  return (
    <motion.article variants={{hidden:{opacity:0,y:35},show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}}}}
      whileHover={{y:-7}} className="luxury-shine group flex min-h-[470px] flex-col overflow-hidden rounded-lg border border-[#173d35]/10 bg-white shadow-[0_18px_55px_rgba(20,35,31,.07)] transition-shadow hover:shadow-[0_28px_70px_rgba(20,35,31,.14)] sm:min-h-[510px]">
      <Link to={`/product/${getProductSlug(product.name)}`} aria-label={`View ${product.name} details`} className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#902b36]">
      <div className="relative h-60 overflow-hidden bg-gradient-to-b from-[#edf3ef] to-[#dce7e1] sm:h-72">
        <span className="absolute left-5 top-5 z-10 border-l-2 border-[#902b36] bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] backdrop-blur">Model 0{index+1}</span>
        <motion.img src={product.image} alt={product.name} className="h-full w-full object-contain p-6 mix-blend-multiply" whileHover={{scale:1.055}} transition={{duration:.55}}/>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"/>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#902b36]">Japanese engineering</p>
        <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">{product.description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-[#173d35]/10 pt-5">
          <div><span className="block text-[10px] uppercase tracking-widest text-black/40">Total amount</span><span className="mt-1 block text-xl font-bold text-[#902b36]">{product.price}</span></div>
          <span className="flex h-11 items-center gap-2 rounded-md bg-[#173d35] px-4 text-xs font-bold text-white transition group-hover:bg-[#902b36]">Details <ArrowRight size={16}/></span>
        </div>
      </div>
      </Link>
    </motion.article>
  );
}
