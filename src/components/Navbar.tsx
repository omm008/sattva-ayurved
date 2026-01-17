import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Effect: Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#C5D89D] backdrop-blur-md shadow-sm py-4"
          : "bg-[#C5D89D] py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-emerald-900 tracking-tight"
        >
          Sattva<span className="text-emerald-600">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>
          <Link
            to="/journal"
            className="hover:text-emerald-700 transition-colors"
          >
            The Journal
          </Link>
          <Link
            to="/recipes"
            className="hover:text-emerald-700 transition-colors"
          >
            Recipes
          </Link>
          <Link to="/shop" className="hover:text-emerald-700 transition-colors">
            Apothecary
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/book"
            className="text-sm font-bold text-emerald-800 hover:underline"
          >
            Book Consultation
          </Link>
          <div className="relative">
            <ShoppingBagIcon className="w-6 h-6 text-slate-700 hover:text-emerald-700 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-[10px] text-white flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 text-center shadow-lg">
          <Link to="/journal" onClick={() => setIsOpen(false)}>
            Journal
          </Link>
          <Link to="/recipes" onClick={() => setIsOpen(false)}>
            Recipes
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="text-emerald-700 font-bold"
          >
            Book Dr. Consult
          </Link>
        </div>
      )}
    </nav>
  );
}
