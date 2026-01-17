import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClockIcon, TagIcon } from "@heroicons/react/24/outline";

const ARTICLES = [
  {
    id: 1,
    title: "Morning Rituals for Vata Balance",
    tag: "Yoga",
    readTime: "5 min",
    img: "bg-orange-100",
  },
  {
    id: 2,
    title: "Cooling Summer Recipes",
    tag: "Recipes",
    readTime: "8 min",
    img: "bg-blue-100",
  },
  {
    id: 3,
    title: "Understanding Ashwagandha",
    tag: "Herbs",
    readTime: "4 min",
    img: "bg-[#EBE9E4]",
  },
];

const TAGS = ["All", "Yoga", "Recipes", "Herbs", "Meditation"];

export default function JournalPage() {
  // Renamed to JournalPage for clarity
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.tag === activeTag);

  return (
    // ADDED: Wrapper with bg-stone-50
    <div className="min-h-screen bg-[#C5D89D] pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2 block">
            The Journal
          </span>
          <h1 className="text-4xl font-serif text-slate-900">
            Wisdom & Stories
          </h1>
        </div>

        {/* Tag Bar */}
        <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar mb-4">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap text-sm font-medium ${
                activeTag === tag
                  ? "bg-emerald-900 text-white border-emerald-900 shadow-md"
                  : "bg-white text-slate-600 border-stone-200 hover:border-emerald-800 hover:shadow-sm"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div
                  className={`h-64 rounded-2xl mb-4 transition-transform duration-500 group-hover:-translate-y-2 ${article.img} relative overflow-hidden`}
                >
                  {/* Optional: Add image overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-center gap-3 text-xs font-bold text-emerald-800 uppercase mb-2">
                  <TagIcon className="w-3 h-3" /> {article.tag}
                </div>

                <h3 className="text-xl font-serif text-slate-900 mb-2 leading-snug group-hover:text-emerald-900 transition-colors">
                  {article.title}
                </h3>

                <div className="flex items-center text-slate-500 text-sm">
                  <ClockIcon className="w-4 h-4 mr-1" /> {article.readTime} read
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
