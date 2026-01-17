import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function NewsletterSlideIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  // --- Logic: Scroll Detection ---
  useEffect(() => {
    // Check if user already closed it this session
    const sessionDismissed = sessionStorage.getItem("newsletter_dismissed");
    if (sessionDismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Calculate percentage: (scrolled / total_height) * 100
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Trigger at 45% scroll depth
      if (scrollPercent > 45 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // --- Handler: Close ---
  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("newsletter_dismissed", "true");
  };

  // --- Handler: Submit ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    // In real app: await api.subscribe(email)
    setTimeout(() => {
      handleClose(); // Auto close after success
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-full max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl shadow-emerald-900/20 border border-emerald-100 overflow-hidden relative">
            {/* Decorative Top Bar */}
            <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-600" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {status === "success" ? (
                // SUCCESS STATE
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SparklesIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-slate-800">
                    You're on the list!
                  </h3>
                  <p className="text-sm text-slate-500">
                    Check your inbox for your free guide.
                  </p>
                </motion.div>
              ) : (
                // FORM STATE
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700">
                      <EnvelopeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-slate-900 font-bold">
                        Unlock Your Dosha Guide
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        Join 10k+ wellness seekers. Get a free Ayurvedic food
                        chart when you sign up.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-2">
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm"
                      />
                      <button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 bg-emerald-600 text-white px-4 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        Join
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-3 text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
