import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLongRightIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { gsap } from "gsap";

export default function HomePage() {
  const scrollRef = useRef(null);

  // Parallax effect for the "Manifesto" text
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Background Animation
  useEffect(() => {
    gsap.to(".grain-bg", {
      backgroundPosition: "100% 100%",
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen font-sans bg-[#C5D89D] text-slate-900 overflow-hidden selection:bg-emerald-200"
    >
      {/* 0. GRAIN OVERLAY (Adds texture/character) */}
      <div
        className="grain-bg fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 1. THE MANIFESTO (New Hero) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-20 max-w-7xl mx-auto">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-100 to-emerald-100 rounded-full blur-[120px] opacity-60 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left: The Philosophy */}
          <div className="lg:col-span-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-emerald-800"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
                  Est. 2024 • The Science of Life
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-slate-900 mb-8">
                Return to <br />
                <span className="italic font-light text-emerald-900">
                  Rhythm.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                In a world of constant noise,{" "}
                <span className="font-serif italic text-emerald-800">
                  Sattva
                </span>{" "}
                is your pause. We don't just sell herbs; we decode your body's
                unique language through the ancient lens of Ayurveda,
                recalibrating your health back to its natural state.
              </p>
            </motion.div>
          </div>

          {/* Right: The Hook */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <motion.div
              style={{ y: yPos }}
              className="p-8 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-sm max-w-sm"
            >
              <SunIcon className="w-8 h-8 text-orange-400 mb-4" />
              <p className="text-sm font-medium text-slate-800 mb-4">
                "Health is not the mere absence of disease. It is the dynamic
                expression of life."
              </p>
              <div className="text-xs text-slate-500 uppercase tracking-widest">
                — Charaka Samhita
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE ORGANIC BENTO GRID (Services) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-serif text-slate-900">
            Curated Pathways
          </h2>
          <div className="hidden md:block text-slate-400 text-sm max-w-xs text-right">
            Choose your entry point into the world of holistic healing.
          </div>
        </div>

        {/* The Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Item 1: The Apothecary (Large & Wide) */}
          <Link
            to="/shop"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-[#EBE9E4]"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-700">
              {/* Decorative Circle */}
              <div className="w-96 h-96 border border-slate-400 rounded-full animate-spin-slow"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2 block">
                The Apothecary
              </span>
              <h3 className="text-4xl font-serif text-slate-900 mb-4 group-hover:translate-x-2 transition-transform">
                Formulations
              </h3>
              <p className="text-slate-600 max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                Small-batch, handmade herbal remedies sourced from the Himalayan
                foothills.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold border-b border-slate-900 pb-1">
                Shop Remedies <ArrowLongRightIcon className="w-4 h-4" />
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="absolute top-10 right-10 w-48 h-64 bg-slate-200 rounded-lg shadow-xl rotate-6 group-hover:rotate-0 transition-all duration-500 mix-blend-multiply"></div>
            <div className="absolute top-16 right-24 w-48 h-64 bg-emerald-100/50 rounded-lg -z-10 rotate-12 group-hover:rotate-6 transition-all duration-500"></div>
          </Link>

          {/* Item 2: Consultations (Tall & Vertical) */}
          <Link
            to="/book"
            className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-10 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div>
              <SparklesIcon className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-serif mb-2">The Clinic</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Speak to a Vaidya. 1:1 sessions to determine your Prakriti
                (Constitution).
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-6">
              <span className="text-sm font-medium">Book Session</span>
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowLongRightIcon className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Item 3: Recipes (Square) */}
          <Link
            to="/recipes"
            className="group relative overflow-hidden rounded-3xl bg-orange-50 p-10 flex flex-col justify-center items-center text-center hover:bg-orange-100 transition-colors"
          >
            <div className="w-20 h-20 rounded-full bg-orange-200 mb-6 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
              🥣
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-2">
              Ayurvedic Kitchen
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Food as medicine. Seasonal recipes.
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-800 border-b border-orange-800/20">
              Start Cooking
            </span>
          </Link>

          {/* Item 4: The Journal (Square / Wide on mobile) */}
          <Link
            to="/journal"
            className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow duration-500"
          >
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                The Journal
              </span>
              <h3 className="text-3xl font-serif text-slate-900 mb-4">
                Wisdom for the Modern Age
              </h3>
              <p className="text-slate-600 mb-6">
                Deep dives into sleep hygiene, gut health, and seasonal
                routines.
              </p>
              <div className="text-emerald-700 font-medium text-sm">
                Read the latest article &rarr;
              </div>
            </div>
            {/* Abstract Lines Decoration */}
            <div className="w-full md:w-1/3 h-32 md:h-full border-l border-slate-100 flex items-center justify-center opacity-50">
              <div className="space-y-2">
                <div className="w-32 h-1 bg-slate-100 rounded-full"></div>
                <div className="w-20 h-1 bg-slate-100 rounded-full"></div>
                <div className="w-28 h-1 bg-slate-100 rounded-full"></div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. SUBTLE FOOTER CALLOUT (Continuity) */}
      <section className="py-20 text-center">
        <p className="text-slate-400 text-sm font-serif italic">
          "When diet is wrong, medicine is of no use. When diet is correct,
          medicine is of no need."
        </p>
      </section>
    </div>
  );
}
