import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  StarIcon,
  SparklesIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const PRODUCTS = [
  {
    id: 1,
    name: "Triphala Powder",
    price: 25,
    category: "Digestion",
    dosha: "Tridoshic",
    img: "bg-[#EBE9E4]",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Brahmi Oil",
    price: 35,
    category: "Stress",
    dosha: "Vata",
    img: "bg-purple-100",
    tag: "New",
  },
  {
    id: 3,
    name: "Neem Capsules",
    price: 20,
    category: "Skin",
    dosha: "Pitta",
    img: "bg-emerald-100",
  },
  {
    id: 4,
    name: "Ashwagandha",
    price: 30,
    category: "Energy",
    dosha: "Kapha",
    img: "bg-orange-100",
  },
  // Added dummy products to make the grid feel fuller
  {
    id: 5,
    name: "Kumkumadi Tailam",
    price: 55,
    category: "Glow",
    dosha: "Tridoshic",
    img: "bg-rose-100",
    tag: "Luxury",
  },
  {
    id: 6,
    name: "Chyawanprash",
    price: 40,
    category: "Immunity",
    dosha: "Kapha",
    img: "bg-stone-200",
  },
];

const MARQUEE_TEXT =
  "Wildcrafted • Organic • Small Batch • Ancient Wisdom • Modern Science •";

export default function ShopPage() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.dosha === filter);

  return (
    <div className="min-h-screen bg-[#C5D89D] text-emerald-950 font-sans selection:bg-emerald-900 selection:text-[#C5D89D]">
      {/* 1. HERO SECTION */}
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-900 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                  Fresh Batch Dropped
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-6 text-emerald-950">
                Earth to <br />{" "}
                <span className="italic font-light">Bottle.</span>
              </h1>
              <p className="text-xl font-medium max-w-md leading-relaxed opacity-80">
                Potent herbal formulations designed to restore your rhythm. No
                fillers, just nature.
              </p>
            </motion.div>

            {/* Right: Abstract Visual */}
            <div className="relative hidden lg:block">
              {/* Decorative spinning circle */}
              <div className="absolute right-0 top-0 w-64 h-64 border-[1px] border-emerald-900/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute right-10 top-10 w-44 h-44 border-[1px] border-emerald-900/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Featured Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute right-20 top-10 bg-[#FDFBF7] p-6 rounded-2xl shadow-xl border border-emerald-900/10 max-w-xs rotate-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    Trending
                  </span>
                  <StarIcon className="w-5 h-5 text-emerald-900" />
                </div>
                <div className="h-32 bg-[#EBE9E4] rounded-lg mb-4"></div>
                <h3 className="font-serif text-2xl">Triphala</h3>
                <p className="text-sm opacity-60 mb-4">
                  The ultimate gut reset.
                </p>
                <div className="flex justify-between items-center border-t border-emerald-900/10 pt-3">
                  <span className="font-bold">$25.00</span>
                  <button className="text-xs font-bold uppercase underline">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INFINITE SCROLL MARQUEE */}
      <div className="bg-emerald-900 py-4 overflow-hidden whitespace-nowrap border-y border-emerald-800">
        <motion.div
          className="inline-block"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[#C5D89D] text-lg font-bold uppercase tracking-widest mx-4"
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3. MAIN SHOP GRID */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl font-serif">The Collection</h2>

            {/* Pill Filters */}
            <div className="flex flex-wrap gap-3">
              {["All", "Vata", "Pitta", "Kapha"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all border-2 ${
                    filter === tag
                      ? "bg-emerald-900 text-[#C5D89D] border-emerald-900"
                      : "bg-transparent text-emerald-900 border-emerald-900 hover:bg-emerald-900 hover:text-[#C5D89D]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  {/* Card Container - White to pop against green */}
                  <div className="bg-[#FDFBF7] p-4 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Image Area */}
                    <div
                      className={`aspect-square ${product.img} rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center`}
                    >
                      {product.tag && (
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-bold uppercase px-3 py-1 rounded-full z-10">
                          {product.tag}
                        </span>
                      )}

                      {/* Hover Action */}
                      <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-emerald-900 px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          Quick Add
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-2 pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-2xl text-emerald-950">
                          {product.name}
                        </h3>
                        <span className="font-bold text-lg">
                          ${product.price}
                        </span>
                      </div>
                      <p className="text-sm font-medium opacity-60 mb-4">
                        {product.category} • {product.dosha}
                      </p>

                      <div className="w-full h-[1px] bg-emerald-900/10 mb-4" />

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 cursor-pointer">
                        View Details <ArrowLongRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* 4. EDUCATIONAL "WHY" SECTION (To add length and value) */}
      <div className="bg-[#FDFBF7] py-24 px-6 rounded-t-[3rem] -mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <SparklesIcon className="w-12 h-12 text-emerald-900 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-emerald-950">
            Why Wildcrafted?
          </h2>
          <p className="text-lg text-emerald-900/70 leading-relaxed mb-12">
            Most herbs are farm-grown in depleted soil. We forage ours from
            their natural habitats in the Himalayan foothills, where they
            struggle to survive. This struggle creates higher potency and denser
            nutrient profiles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Potency",
                desc: "3x higher active alkaloids than farmed herbs.",
              },
              {
                title: "Purity",
                desc: "No pesticides, just rainwater and sunshine.",
              },
              {
                title: "Karma",
                desc: "Sustainably harvested to protect the ecosystem.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#C5D89D]/20 rounded-2xl">
                <h4 className="font-serif text-xl mb-2 text-emerald-900">
                  {item.title}
                </h4>
                <p className="text-sm opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
