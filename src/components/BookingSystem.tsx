import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDaysIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { DOCTORS, TIME_SLOTS } from "../data/doctor"; // Import your data

// --- Helper: Generate next 7 days ---
const getNext7Days = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      date: d.getDate(),
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      full: d,
    });
  }
  return days;
};

const DATES = getNext7Days();

export default function BookingSystem() {
  const [step, setStep] = useState(1); // 1=Doctor, 2=Date/Time, 3=Success
  const [selectedDoc, setSelectedDoc] = useState<(typeof DOCTORS)[0] | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // --- Handlers ---
  const handleDocSelect = (doc: (typeof DOCTORS)[0]) => {
    setSelectedDoc(doc);
    setStep(2);
  };

  const handleConfirm = () => {
    // In a real app, you would send this to your backend here
    setTimeout(() => setStep(3), 500); // Fake network delay
  };

  return (
    <div className="min-h-screen mt-20 bg-[#C5D89D] p-6 flex flex-col items-center justify-center font-sans text-[#84934A]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
        {/* Header Area */}
        <div className="bg-[#84934A] p-8 text-white">
          <h2 className="text-2xl font-serif mb-1">Book Consultation</h2>
          <p className="text-emerald-200 text-sm">Step {step} of 3</p>

          {/* Progress Indicator */}
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${
                  step >= s ? "bg-emerald-400" : "bg-emerald-800"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-6 relative">
          <AnimatePresence mode="wait">
            {/* STEP 1: SELECT DOCTOR */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Choose your Specialist
                </h3>
                {DOCTORS.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => handleDocSelect(doc)}
                    className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer transition-all group"
                  >
                    <div
                      className={`w-14 h-14 rounded-full ${doc.image} flex items-center justify-center text-slate-500`}
                    >
                      <UserIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{doc.name}</h4>
                      <p className="text-xs text-slate-500">{doc.specialty}</p>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-slate-300 group-hover:text-emerald-600" />
                  </div>
                ))}
              </motion.div>
            )}

            {/* STEP 2: SELECT DATE & TIME */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-emerald-700 mb-4 flex items-center gap-1"
                >
                  ← Change Doctor
                </button>

                {/* Horizontal Date Scroll */}
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Select Date
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
                  {DATES.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(i)}
                      className={`min-w-[70px] flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                        selectedDate === i
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105"
                          : "bg-white border-slate-100 text-slate-500"
                      }`}
                    >
                      <span className="text-xs opacity-80">{d.day}</span>
                      <span className="text-xl font-bold">{d.date}</span>
                    </button>
                  ))}
                </div>

                {/* Time Slots Grid */}
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 mt-4">
                  Select Time
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      disabled={selectedDate === null} // Disable if no date picked
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "bg-emerald-100 border-emerald-500 text-emerald-900"
                          : "bg-white border-slate-100 text-slate-600 hover:border-emerald-200 disabled:opacity-50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleConfirm}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Confirm Booking ($65)
                </button>
              </motion.div>
            )}

            {/* STEP 3: SUCCESS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircleIcon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-slate-500 mb-8 max-w-[200px] mx-auto">
                  Your session with {selectedDoc?.name} is set for{" "}
                  {selectedTime}.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl text-left mb-6 space-y-3">
                  <div className="flex gap-3 text-sm text-slate-600">
                    <CalendarDaysIcon className="w-5 h-5 text-emerald-600" />
                    <span>Check your email for the Zoom link.</span>
                  </div>
                  <div className="flex gap-3 text-sm text-slate-600">
                    <ClockIcon className="w-5 h-5 text-emerald-600" />
                    <span>Please join 5 mins early.</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Book Another Session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
