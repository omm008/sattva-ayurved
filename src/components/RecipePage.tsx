/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RECIPES } from "../data/Recipes";
import type { Recipe } from "../data/Recipes"; // Removed Ingredient type if not strictly used in export
import { gsap } from "gsap";
import {
  ClockIcon,
  FireIcon,
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
  SparklesIcon,
  Bars3Icon, // Added Bars3Icon
  XMarkIcon, // Added XMarkIcon
} from "@heroicons/react/24/outline";

// --- SUB-COMPONENT: The Detail View ---

function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const [multiplier, setMultiplier] = useState(1);
  const [cookMode, setCookMode] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const ingredientsRef = useRef<HTMLUListElement>(null);

  // Scaled Ingredients Math
  const scaledIngredients = useMemo(() => {
    return recipe.ingredients.map((ing) => ({
      ...ing,
      qty: ing.baseQty * multiplier * recipe.servings,
    }));
  }, [multiplier, recipe]);

  // Animation Trigger
  useEffect(() => {
    if (ingredientsRef.current) {
      gsap.fromTo(
        ingredientsRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [recipe.id]);

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`h-full overflow-y-auto transition-colors duration-900 ${
        cookMode ? "bg-slate-900 text-[#C5D89D]" : "bg-[#C5D89D] text-slate-800"
      }`}
    >
      {/* Detail Toolbar */}
      <div
        className={`sticky top-0 z-20 p-4 flex justify-end items-center backdrop-blur-md bg-opacity-80 border-b ${
          cookMode ? "border-white/10" : "border-stone-200"
        }`}
      >
        <button
          onClick={() => setCookMode(!cookMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all shadow-sm ${
            cookMode
              ? "bg-emerald-500 text-white"
              : "bg-white text-slate-600 hover:bg-emerald-50 border border-slate-200"
          }`}
        >
          {cookMode ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
          {cookMode ? "Exit Cook Mode" : "Cook Mode"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-8 md:p-12 pb-32">
        <header className="mb-10 pt-8 md:pt-0">
          {" "}
          {/* Added pt-8 for mobile spacing */}
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full ${recipe.doshaColor}`}
          >
            {recipe.tags.join(" • ")}
          </motion.div>
          <motion.h1
            key={`${recipe.id}-title`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-serif mb-4 leading-tight"
          >
            {recipe.title}
          </motion.h1>
          <p
            className={`text-lg max-w-2xl ${
              cookMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {recipe.description}
          </p>
          <div className="flex gap-6 mt-6 text-sm font-medium opacity-80">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" /> {recipe.prepTime} Prep
            </div>
            <div className="flex items-center gap-2">
              <FireIcon className="w-5 h-5" /> {recipe.cookTime} Cook
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* INGREDIENTS */}
          <div className="lg:col-span-5">
            <div
              className={`p-6 rounded-3xl ${
                cookMode
                  ? "bg-slate-800"
                  : "bg-white shadow-xl shadow-stone-200/50"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif">Ingredients</h3>
                <div className="flex bg-slate-500/10 rounded-lg p-1">
                  {[1, 2, 3].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMultiplier(m)}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                        multiplier === m
                          ? "bg-[#84934A] text-white shadow-sm"
                          : "text-inherit opacity-50 hover:opacity-100"
                      }`}
                    >
                      {m}x
                    </button>
                  ))}
                </div>
              </div>
              <ul ref={ingredientsRef} className="space-y-4">
                {scaledIngredients.map((ing, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b border-dashed border-slate-500/20 pb-2 last:border-0"
                  >
                    <span
                      className={cookMode ? "text-slate-300" : "text-slate-700"}
                    >
                      {ing.name}
                    </span>
                    <span className="font-mono font-semibold text-[#84934A]">
                      {ing.qty % 1 === 0 ? ing.qty : ing.qty.toFixed(1)}{" "}
                      {ing.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* INSTRUCTIONS */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-serif mb-6">Instructions</h3>
            <div className="space-y-6">
              {recipe.steps.map((step, i) => {
                const isDone = completedSteps.includes(i);
                return (
                  <motion.div
                    key={`${recipe.id}-step-${i}`}
                    layout
                    onClick={() => toggleStep(i)}
                    className={`group relative pl-12 cursor-pointer transition-all duration-300 ${
                      isDone ? "opacity-40 grayscale" : "opacity-100"
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isDone
                          ? "bg-emerald-500 border-emerald-500"
                          : "border-slate-300 group-hover:border-emerald-400"
                      }`}
                    >
                      {isDone ? (
                        <CheckIcon className="w-5 h-5 text-white" />
                      ) : (
                        <span className="text-xs font-bold opacity-50">
                          {i + 1}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-lg leading-relaxed ${
                        cookMode ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {step}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 3. MAIN PAGE: RESPONSIVE LAYOUT ---

export default function RecipeBook() {
  const [selectedRecipe, setSelectedRecipe] = useState(RECIPES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when a recipe is clicked (on mobile)
  const handleRecipeClick = (recipe: React.SetStateAction<Recipe>) => {
    setSelectedRecipe(recipe);
    setIsMobileMenuOpen(false);
  };

  return (
    // 'relative' added to container to anchor the absolute sidebar
    <div className="relative flex h-screen w-full bg-[#C5D89D] overflow-hidden font-sans mt-20 text-slate-900">
      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <div className="md:hidden absolute top-4 left-4 z-40">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 bg-white rounded-full shadow-md text-emerald-900 hover:bg-emerald-50 transition-colors"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>

      {/* --- MOBILE BACKDROP OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* --- SIDEBAR (Responsive) --- 
          - Mobile: Absolute positioned, z-50, slides in from left
          - Desktop: Relative positioned, always visible
      */}
      <motion.div
        className={`fixed md:relative inset-y-0 left-0 w-80 md:w-96 bg-[#C5D89D] border-r border-stone-200 flex flex-col h-full z-50 shadow-2xl md:shadow-xl`}
        // Animation logic based on screen size (using CSS classes for responsiveness + Framer for state)
        animate={{
          x: isMobileMenuOpen ? 0 : "-100%", // Mobile logic
        }}
        // Reset transform on desktop so it's always visible.
        // We use a media query style override for desktop to force x: 0
        style={{ x: 0 }} // Default style
        variants={{
          open: { x: 0 },
          closed: { x: "-100%" },
        }}
        // The `md:transform-none` class ensures framer doesn't hide it on desktop
        initial={false} // Prevent initial flash
      >
        {/* Helper to handle the mixed framer/css responsive logic: 
            We wrap the content in a div that handles the animation strictly for mobile 
            or we use a conditional Render approach.
            
            Better approach for React+Tailwind: Use a CSS class to override transform on MD
        */}
        <div
          className={`flex flex-col h-full w-full bg-[#C5D89D] md:translate-x-0 transition-transform duration-300 ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-6 border-b border-stone-100 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-serif text-[#84934A]">
                Sattva Kitchen
              </h2>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                10 Ayurvedic Recipes
              </p>
            </div>
            {/* Close Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden text-slate-500 hover:text-red-500"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {RECIPES.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => handleRecipeClick(recipe)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 group border relative overflow-hidden ${
                  selectedRecipe.id === recipe.id
                    ? "bg-[#84934A] text-white border-emerald-900 shadow-md"
                    : "bg-white text-slate-600 border-stone-100 hover:border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3
                      className={`font-serif text-lg ${
                        selectedRecipe.id === recipe.id
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {recipe.title}
                    </h3>
                    <div
                      className={`text-xs mt-1 font-medium flex gap-2 ${
                        selectedRecipe.id === recipe.id
                          ? "text-emerald-200"
                          : "text-slate-400"
                      }`}
                    >
                      <span>{recipe.prepTime}</span>
                      <span>•</span>
                      <span>{recipe.tags[0]}</span>
                    </div>
                  </div>
                  {selectedRecipe.id === recipe.id && (
                    <SparklesIcon className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 h-full relative bg-[#C5D89D] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRecipe.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <RecipeDetail recipe={selectedRecipe} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
