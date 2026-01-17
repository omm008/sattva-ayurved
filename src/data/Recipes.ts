export type Ingredient = {
  name: string;
  baseQty: number;
  unit: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  doshaColor: string; // Formatting helper
};

export const RECIPES: Recipe[] = [
  {
    id: "golden-milk",
    title: "Ojas-Building Golden Milk",
    description:
      "A soothing night-time elixir to calm Vata and boost immunity.",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 2,
    tags: ["Sleep", "Immunity", "Vata"],
    doshaColor: "bg-orange-100 text-orange-800",
    ingredients: [
      { name: "Almond Milk", baseQty: 2, unit: "cups" },
      { name: "Turmeric Powder", baseQty: 0.5, unit: "tsp" },
      { name: "Ghee", baseQty: 1, unit: "tsp" },
      { name: "Black Pepper", baseQty: 1, unit: "pinch" },
      { name: "Raw Honey", baseQty: 1, unit: "tsp" },
    ],
    steps: [
      "Warm the almond milk in a small saucepan over medium heat.",
      "Whisk in the turmeric, black pepper, and ghee until dissolved.",
      "Bring to a gentle simmer (do not boil) for 5 minutes.",
      "Remove from heat and let cool slightly.",
      "Stir in raw honey (never cook honey!) and serve warm.",
    ],
  },
  {
    id: "kitchari",
    title: "Tridoshic Kitchari Cleanse",
    description:
      "The most healing Ayurvedic meal. Easy to digest and balancing for all bodies.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: 4,
    tags: ["Detox", "Digestion", "Tridoshic"],
    doshaColor: "bg-yellow-100 text-yellow-800",
    ingredients: [
      { name: "Basmati Rice", baseQty: 1, unit: "cup" },
      { name: "Split Mung Beans", baseQty: 0.5, unit: "cup" },
      { name: "Ghee", baseQty: 2, unit: "tbsp" },
      { name: "Cumin Seeds", baseQty: 1, unit: "tsp" },
      { name: "Mustard Seeds", baseQty: 0.5, unit: "tsp" },
    ],
    steps: [
      "Rinse rice and mung beans until water runs clear.",
      "Heat ghee in a pot. Add seeds and let them pop.",
      "Add rice/beans and sauté for 2 minutes.",
      "Add 4 cups water and bring to boil.",
      "Simmer covered for 20-25 mins until mushy.",
    ],
  },
  {
    id: "ccf-tea",
    title: "CCF Digestive Tea",
    description:
      "Cumin, Coriander, and Fennel. The classic bloat-busting remedy.",
    prepTime: "2 min",
    cookTime: "10 min",
    servings: 1,
    tags: ["Digestion", "Bloating", "Pitta"],
    doshaColor: "bg-emerald-100 text-emerald-800",
    ingredients: [
      { name: "Cumin Seeds", baseQty: 0.5, unit: "tsp" },
      { name: "Coriander Seeds", baseQty: 0.5, unit: "tsp" },
      { name: "Fennel Seeds", baseQty: 0.5, unit: "tsp" },
      { name: "Water", baseQty: 1.5, unit: "cups" },
    ],
    steps: [
      "Boil water in a small pot.",
      "Add all three seeds.",
      "Simmer for 5-10 minutes (longer = stronger).",
      "Strain and sip warm throughout the day.",
    ],
  },
  {
    id: "stewed-apples",
    title: "Spiced Stewed Apples",
    description: "A warm, pre-digested breakfast perfect for Vata mornings.",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: 1,
    tags: ["Breakfast", "Energy", "Vata"],
    doshaColor: "bg-red-100 text-red-800",
    ingredients: [
      { name: "Apple (peeled/chopped)", baseQty: 1, unit: "whole" },
      { name: "Cloves", baseQty: 2, unit: "whole" },
      { name: "Cinnamon Stick", baseQty: 1, unit: "inch" },
      { name: "Water", baseQty: 0.25, unit: "cup" },
    ],
    steps: [
      "Peel and chop the apple into bite-sized cubes.",
      "Place in pot with water and spices.",
      "Cover and cook on low heat until soft (15 mins).",
      "Eat warm to stimulate Agni (digestive fire).",
    ],
  },
  {
    id: "coconut-chutney",
    title: "Cooling Cilantro Chutney",
    description:
      "A refreshing side to balance spicy meals and cool Pitta fire.",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 4,
    tags: ["Cooling", "Skin", "Pitta"],
    doshaColor: "bg-green-100 text-green-800",
    ingredients: [
      { name: "Fresh Cilantro", baseQty: 1, unit: "bunch" },
      { name: "Desiccated Coconut", baseQty: 0.5, unit: "cup" },
      { name: "Lime Juice", baseQty: 1, unit: "tbsp" },
      { name: "Ginger", baseQty: 1, unit: "inch" },
    ],
    steps: [
      "Wash cilantro thoroughly.",
      "Blend all ingredients with a splash of water.",
      "Blend until smooth paste forms.",
      "Serve alongside curries or rice.",
    ],
  },
  {
    id: "saffron-rice",
    title: "Royal Saffron Rice",
    description: "Sweet, aromatic rice that builds tissue strength.",
    prepTime: "5 min",
    cookTime: "20 min",
    servings: 2,
    tags: ["Strength", "Lunch", "Tridoshic"],
    doshaColor: "bg-amber-100 text-amber-800",
    ingredients: [
      { name: "Basmati Rice", baseQty: 1, unit: "cup" },
      { name: "Saffron Strands", baseQty: 1, unit: "pinch" },
      { name: "Cardamom Pods", baseQty: 2, unit: "whole" },
      { name: "Ghee", baseQty: 1, unit: "tsp" },
    ],
    steps: [
      "Soak saffron in 1 tbsp warm milk/water.",
      "Cook rice with cardamom pods.",
      "Once cooked, fluff with ghee.",
      "Drizzle saffron water over rice before serving.",
    ],
  },
  {
    id: "ginger-tea",
    title: "Agni-Igniting Ginger Tea",
    description: "Burns toxins (Ama) and clears sinus congestion.",
    prepTime: "2 min",
    cookTime: "10 min",
    servings: 1,
    tags: ["Detox", "Kapha", "Cold/Flu"],
    doshaColor: "bg-stone-200 text-stone-800",
    ingredients: [
      { name: "Fresh Ginger (Grated)", baseQty: 1, unit: "inch" },
      { name: "Black Peppercorns", baseQty: 2, unit: "whole" },
      { name: "Honey", baseQty: 1, unit: "tsp" },
      { name: "Water", baseQty: 1.5, unit: "cups" },
    ],
    steps: [
      "Boil water with ginger and pepper.",
      "Reduce volume by half (strong decoction).",
      "Strain into a mug.",
      "Add honey only when tea is warm (not hot).",
    ],
  },
  {
    id: "roasted-roots",
    title: "Grounding Root Bowl",
    description: "Heavy, warming vegetables to settle anxiety and Vata.",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 2,
    tags: ["Dinner", "Grounding", "Vata"],
    doshaColor: "bg-orange-50 text-orange-900",
    ingredients: [
      { name: "Sweet Potato", baseQty: 1, unit: "large" },
      { name: "Carrots", baseQty: 2, unit: "whole" },
      { name: "Beets", baseQty: 2, unit: "small" },
      { name: "Sesame Oil", baseQty: 1, unit: "tbsp" },
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Chop all veggies into uniform chunks.",
      "Toss with sesame oil and salt.",
      "Roast for 30-35 mins until tender.",
    ],
  },
  {
    id: "date-shake",
    title: "Date & Almond Shake",
    description: "A heavy, sweet tonic for building vitality (Ojas).",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: 1,
    tags: ["Vitality", "Weight Gain", "Vata"],
    doshaColor: "bg-rose-50 text-rose-900",
    ingredients: [
      { name: "Dates (Soaked)", baseQty: 4, unit: "whole" },
      { name: "Almonds (Soaked)", baseQty: 10, unit: "whole" },
      { name: "Warm Milk", baseQty: 1, unit: "cup" },
      { name: "Cinnamon", baseQty: 1, unit: "pinch" },
    ],
    steps: [
      "Peel almonds (remove skins).",
      "Remove pits from dates.",
      "Blend all ingredients until smooth.",
      "Drink warm for best digestion.",
    ],
  },
  {
    id: "mung-soup",
    title: "Green Mung Bean Soup",
    description: "A lighter alternative to Kitchari, great for Kapha types.",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 4,
    tags: ["Light", "Kapha", "Lunch"],
    doshaColor: "bg-lime-100 text-lime-800",
    ingredients: [
      { name: "Whole Green Mung", baseQty: 1, unit: "cup" },
      { name: "Spinach", baseQty: 1, unit: "cup" },
      { name: "Ginger Paste", baseQty: 1, unit: "tsp" },
      { name: "Lemon", baseQty: 0.5, unit: "fruit" },
    ],
    steps: [
      "Soak beans overnight.",
      "Boil beans until soft (approx 25 mins).",
      "Add spinach and ginger in the last 5 mins.",
      "Blend slightly for creaminess and add lemon.",
    ],
  },
];
