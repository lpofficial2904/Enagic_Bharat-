import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import { getCanonicalProductSlug, products } from "../data/products";

export default function ProductDetails() {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const product =
    products.find((item) => getCanonicalProductSlug(item) === slug) ??
    (/^\d+$/.test(slug)
      ? products.find(({ id }) => id === Number(slug))
      : undefined);
  if (!product)
    return (
      <div className="min-h-screen bg-[#f4f7fc] pt-40 text-center">
        <h1 className="text-4xl font-bold">Product not found</h1>
        <Link to="/products" className="button-dark mt-8">
          Back to products
        </Link>
      </div>
    );
  if (/^\d+$/.test(slug))
    return (
      <Navigate to={`/product/${getCanonicalProductSlug(product)}`} replace />
    );
  return (
    <main className="surface-grid min-h-screen bg-[#f4f7fc] pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="page-shell">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-black/55 hover:text-black"
        >
          <ArrowLeft size={17} /> Back to collection
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="overflow-hidden rounded-lg border border-[#073b8f]/10 bg-white shadow-[0_30px_90px_rgba(7,35,83,.11)]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative grid min-h-[340px] place-items-center overflow-hidden bg-gradient-to-br from-[#f1f6ff] to-[#dce8fb] p-6 sm:min-h-[420px] sm:p-10 lg:min-h-[650px]">
              <div className="absolute inset-5 border border-[#073b8f]/10 sm:inset-8" />
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9 }}
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="relative z-10 max-h-[470px] w-full object-contain mix-blend-multiply drop-shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-12 lg:p-16">
              <div className="eyebrow flex items-center gap-2">
                <Sparkles size={14} /> Japanese engineering
              </div>
              <h1 className="mt-5 text-3xl font-semibold sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-7 text-black/50 sm:text-xl">
                {product.description}
              </p>
              <div className="gold-line my-8" />
              <p className="leading-7 text-black/55">
                {product.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <span className="text-xs uppercase tracking-widest text-black/40">
                    Listed price
                  </span>
                  <div className="mt-1 text-3xl font-bold text-[#0b4db8] sm:text-4xl">
                    {product.price}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-black/45">
                    Without Taxes 
                  </p>
                </div>
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="button-primary w-full sm:w-auto"
                >
                  Add to cart
                </Link>
              </div>
              <div className="mt-7 flex items-center gap-2 text-sm text-black/50">
                <ShieldCheck size={18} className="text-[#0b4db8]" /> Personal
                selection and setup guidance
              </div>
              <div className="mt-6 rounded-2xl border border-[#073b8f]/10 bg-[#f4f7fc] p-5 text-sm leading-6 text-[#58677d]">
                <p className="font-semibold text-[#14243b]">
                  Shipping and returns
                </p>
                <p className="mt-1">
                  Review our policies and confirm the terms for your location
                  and order with our team.
                </p>
                <nav
                  aria-label="Product policies"
                  className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-semibold text-[#0b4db8]"
                >
                  <Link to="/shipping-policy" className="hover:underline">
                    Shipping Policy
                  </Link>
                  <Link to="/refund-policy" className="hover:underline">
                    Return &amp; Refund Policy
                  </Link>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-6 overflow-hidden rounded-lg border border-[#073b8f]/10 bg-white">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between p-6 text-left sm:p-8"
          >
            <span className="text-2xl font-semibold">
              Technical specifications
            </span>
            <motion.span animate={{ rotate: open ? 180 : 0 }}>
              <ChevronDown />
            </motion.span>
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid gap-px bg-black/[.07] border-t border-black/[.07] sm:grid-cols-2">
                  {product.specifications.map((s, i) => (
                    <div key={i} className="bg-white p-5 sm:p-6">
                      <span className="block text-xs font-bold uppercase tracking-widest text-[#0b4db8]">
                        {s.title}
                      </span>
                      <span className="mt-2 block leading-6 text-black/65">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
