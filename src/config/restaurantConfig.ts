// Single source of truth for branding, categories and dishes.
// Swap images, copy, or colors here — UI components read from this file only.
import edamame from "@/assets/edamame.jpg";
import gyoza from "@/assets/gyoza.jpg";
import dragonRoll from "@/assets/dragon-roll.jpg";
import sashimi from "@/assets/sashimi.jpg";
import nigiri from "@/assets/nigiri.jpg";
import spicyTuna from "@/assets/spicy-tuna.jpg";
import mochi from "@/assets/mochi.jpg";
import yuzuCheesecake from "@/assets/yuzu-cheesecake.jpg";
import sake from "@/assets/sake.jpg";
import matcha from "@/assets/matcha.jpg";

export type Dish = {
  id: string;
  category: string;
  name: string;
  japanese?: string;
  description: string;
  details: string;
  ingredients: string[];
  image: string;
  mediaUrl?: string; // optional MP4/WebM cinemagraph loop, preferred over image in the expanded view
  price?: string; // optional, shown very subtly
  tags?: string[];
};

export type Category = { id: string; label: string; japanese: string };

export const restaurantConfig = {
  name: "Kaiyō",
  tagline: "Omakase-inspired sushi",
  japaneseMark: "海洋",
  location: "Palermo, Buenos Aires",
  note: "Please ask your server to place an order or for allergen information.",
  showPrices: true,
  rating: "4.8",
  reviewPrompt: "¿Te gustó tu experiencia? Contanos qué te pareció.",
  reviewCta: "Dejanos tu reseña en Google Maps",
  // Placeholder link: replace with the restaurant's own Google Maps review URL.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kaiy%C5%8D+Palermo+Buenos+Aires",
  developer: "GastroQode",
  // Shown at the very bottom of the footer: "thank you for choosing us".
  thankYou: "お選びいただきありがとうございます",
  categories: [
    { id: "starters", label: "Starters", japanese: "前菜" },
    { id: "sushi", label: "Sushi & Sashimi", japanese: "寿司" },
    { id: "desserts", label: "Desserts", japanese: "甘味" },
    { id: "drinks", label: "Drinks", japanese: "飲物" },
  ] satisfies Category[],
  dishes: [
    {
      id: "edamame",
      category: "starters",
      name: "Edamame",
      japanese: "枝豆",
      description: "Steamed young soybeans, Maldon salt.",
      details:
        "Warm pods steamed to order and finished with flaky sea salt. A simple, honest start to the meal.",
      ingredients: ["Soybeans", "Sea salt"],
      image: edamame,
      price: "8",
      tags: ["Vegan"],
    },
    {
      id: "gyoza",
      category: "starters",
      name: "Pork Gyoza",
      japanese: "餃子",
      description: "Pan-crisped dumplings, house ponzu.",
      details:
        "Hand-folded dumplings filled with pork, cabbage and ginger, seared until golden on one side and steamed tender on the other.",
      ingredients: ["Pork", "Cabbage", "Ginger", "Garlic chive", "Ponzu"],
      image: gyoza,
      price: "12",
    },
    {
      id: "aburi-nigiri",
      category: "sushi",
      name: "Aburi Salmon Nigiri",
      japanese: "炙りサーモン",
      description: "Flame-kissed salmon, yuzu zest.",
      details:
        "Four pieces of Patagonian salmon over seasoned rice, lightly torched to release the oils and brightened with fresh yuzu.",
      ingredients: ["Salmon", "Shari rice", "Yuzu", "Black pepper"],
      image: nigiri,
      price: "16",
      tags: ["Signature"],
    },
    {
      id: "sashimi",
      category: "sushi",
      name: "Sashimi Moriawase",
      japanese: "刺身盛り合わせ",
      description: "Chef's selection of three cuts.",
      details:
        "Salmon, bluefin tuna and hamachi sliced to order, served on shaved ice with shiso, fresh wasabi and purple shiso buds.",
      ingredients: ["Salmon", "Bluefin tuna", "Hamachi", "Shiso", "Wasabi"],
      image: sashimi,
      price: "28",
      tags: ["Gluten-free"],
    },
    {
      id: "dragon-roll",
      category: "sushi",
      name: "Dragon Roll",
      japanese: "ドラゴンロール",
      description: "Shrimp tempura, avocado scales, unagi glaze.",
      details:
        "Crisp shrimp tempura rolled with cucumber, draped in thin slices of avocado and finished with sweet unagi sauce and toasted sesame.",
      ingredients: ["Shrimp tempura", "Avocado", "Cucumber", "Unagi sauce", "Sesame"],
      image: dragonRoll,
      price: "19",
    },
    {
      id: "spicy-tuna",
      category: "sushi",
      name: "Spicy Tuna Maki",
      japanese: "スパイシーツナ",
      description: "Chopped tuna, chili mayo, scallion.",
      details:
        "Hand-chopped tuna folded with togarashi, topped with house chili mayo and fresh scallions, wrapped in crisp nori.",
      ingredients: ["Tuna", "Chili mayo", "Scallion", "Togarashi", "Nori"],
      image: spicyTuna,
      price: "17",
      tags: ["Spicy"],
    },
    {
      id: "mochi",
      category: "desserts",
      name: "Mochi Trio",
      japanese: "餅",
      description: "Matcha, strawberry, black sesame.",
      details:
        "Soft rice-cake parcels wrapped around ice cream in three flavours. Chewy outside, cold and creamy within.",
      ingredients: ["Glutinous rice", "Matcha", "Strawberry", "Black sesame"],
      image: mochi,
      price: "10",
    },
    {
      id: "yuzu-cheesecake",
      category: "desserts",
      name: "Yuzu Cheesecake",
      japanese: "柚子チーズケーキ",
      description: "Creamy cheesecake infused with Japanese citrus, black sesame crust.",
      details:
        "Baked slowly until just set, finished with a bright yuzu curd top and a thin crust of ground black sesame. Cold, silky and sharply citrus.",
      ingredients: ["Yuzu", "Cream cheese", "Black sesame"],
      image: yuzuCheesecake,
      price: "12",
    },
    {
      id: "sake",
      category: "drinks",
      name: "Junmai Ginjo Sake",
      japanese: "純米吟醸",
      description: "Served chilled, delicate and floral.",
      details:
        "A clean, aromatic sake with notes of melon and white flowers. Pairs beautifully with sashimi and nigiri.",
      ingredients: ["Polished rice", "Koji", "Spring water"],
      image: sake,
      price: "14",
    },
    {
      id: "matcha",
      category: "drinks",
      name: "Iced Matcha Latte",
      japanese: "抹茶ラテ",
      description: "Ceremonial matcha, cold milk.",
      details:
        "Stone-ground Uji matcha whisked by hand and poured over cold milk and ice. Oat milk available on request.",
      ingredients: ["Uji matcha", "Milk", "Ice"],
      image: matcha,
      price: "7",
    },
  ] satisfies Dish[],
};
