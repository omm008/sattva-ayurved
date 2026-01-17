Sattva — Holistic Ayurveda Platform
Sattva is a modern, experiential e-commerce and lifestyle platform bridging ancient Ayurvedic wisdom with contemporary digital design. It features a diagnostic wellness tool, an interactive "Cook Mode" recipe book, and a premium apothecary shop interface.

✨ Key Features
🌿 The Apothecary (Shop)
Editorial Design: "Bento" grid layouts and grain-texture overlays for a premium feel.

Interactive Elements: Infinite marquee scrolling (GSAP) and hover-reveal product cards.

Dosha Filtering: Instant filtering for Vata, Pitta, and Kapha body types.

🍵 Interactive Recipe Book
Master-Detail Layout: Responsive split-screen view with a slide-out drawer on mobile.

Cook Mode: High-contrast "Dark Mode" toggle for kitchen visibility.

Smart Scaling: Dynamic ingredient calculator (1x, 2x, 3x servings).

Progress Tracking: Clickable steps to cross off completed instructions.

🩺 Diagnostic Tools & Booking
Symptom Wizard: Step-by-step questionnaire to determine body constitution.

Consultation Booking: Custom calendar UI for scheduling appointments with Vaidyas.

🛠 Tech Stack
Core: React 18, TypeScript, Vite

Styling: Tailwind CSS

Animation:

Framer Motion (Layout transitions, page exits, UI micro-interactions)

GSAP (Complex loops, organic blobs, staggered entrances)

Icons: Heroicons

Routing: React Router DOM

🚀 Getting Started
Clone the repository

Bash

git clone https://github.com/your-username/sattva-ayurveda.git
cd sattva-ayurveda
Install dependencies

Bash

npm install
Run the development server

Bash

npm run dev
Build for production

Bash

npm run build
📂 Project Structure
Plaintext

src/
├── assets/ # Static images and icons
├── components/ # Reusable UI blocks
│ ├── Navbar.tsx # Glassmorphism navigation
│ ├── Newsletter.tsx # Scroll-triggered slide-in
│ └── ...
├── data/ # Mock data (Recipes, Products)
│ └── Recipes.ts # Typed recipe data array
├── pages/
│ ├── HomePage.tsx # Landing page with Manifesto & Bento Grid
│ ├── ShopPage.tsx # Product grid with Marquee
│ └── RecipeBook.tsx # Master-Detail recipe interface
└── App.tsx # Main Router configuration
🎨 Design System & Customization
Color Palette
The project uses a custom earthy palette defined in Tailwind classes:

Base Background: #C5D89D (Vibrant Pear/Pistachio)

Secondary: #FDFBF7 (Cream/Paper)

Typography: Slate-900 (Charcoal) and Emerald-900 (Deep Forest)

Mobile Responsiveness
Sidebar Navigation: The RecipeBook uses a responsive sidebar that acts as a static column on Desktop but transforms into an absolute hamburger-menu drawer on Mobile.

🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.
