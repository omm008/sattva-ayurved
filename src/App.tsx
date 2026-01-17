import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import Navbar from "./components/Navbar";
import NewsletterSlideIn from "./components/NewsletterSlideIn";

// Pages
import HomePage from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import JournalPage from "./pages/JournalPage"; // (Ensure you created this)

// Components acting as Pages
import BookingSystem from "./components/BookingSystem";
import RecipePage from "./components/RecipePage";

function App() {
  return (
    <div className="font-sans text-slate-900 bg-stone-50">
      <Navbar />

      {/* Routes Container */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/book" element={<BookingSystem />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>

      {/* Global Engagement Layer */}
      <NewsletterSlideIn />
    </div>
  );
}

export default App;
