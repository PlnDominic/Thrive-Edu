export interface ShopProduct {
  slug: string;
  title: string;
  category: string;
  description: string;
  cardCount: string;
  price: number;
  image: string;
  // A compressed, square JPEG copy of `image` (public/images/og/*.jpg),
  // used only for the /shop/[slug] page's og:image. WhatsApp's link-preview
  // crawler times out on the full-size product PNGs (1.5-2MB, portrait),
  // so it needs something small enough to fetch fast.
  ogImage: string;
}

export const shopProducts: ShopProduct[] = [
  {
    slug: "vegetables-and-fruits",
    title: "Vegetables and Fruits",
    category: "Early Learners",
    description: "Bright, wipeable flash cards that introduce young learners to everyday fruits and vegetables.",
    cardCount: "30 Cards",
    price: 55,
    image: "/images/shop-dansly-fruits-vegetables.png",
    ogImage: "/images/og/shop-dansly-fruits-vegetables.jpg",
  },
  {
    slug: "parts-of-the-human-body",
    title: "Parts of the Human Body",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children learn and label parts of the human body.",
    cardCount: "30 Cards",
    price: 55,
    image: "/images/shop-dansly-human-body.png",
    ogImage: "/images/og/shop-dansly-human-body.jpg",
  },
  {
    slug: "shapes-and-colours",
    title: "Shapes and Colours",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children recognize shapes and colours with ease.",
    cardCount: "30 Cards",
    price: 55,
    image: "/images/shop-dansly-shapes-colours.png",
    ogImage: "/images/og/shop-dansly-shapes-colours.jpg",
  },
  {
    slug: "phonics",
    title: "Phonics",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children build letter sounds and early reading skills.",
    cardCount: "30 Cards",
    price: 55,
    image: "/images/shop-dansly-phonics.png",
    ogImage: "/images/og/shop-dansly-phonics.jpg",
  },
  {
    slug: "numerals",
    title: "Numerals",
    category: "Early Learners",
    description: "A wipeable-clean flash card set that helps children learn to count and recognize numbers.",
    cardCount: "30 Cards",
    price: 55,
    image: "/images/shop-dansly-numerals.png",
    ogImage: "/images/og/shop-dansly-numerals.jpg",
  },
  {
    slug: "memory-verse",
    title: "Memory Verse",
    category: "Early Learners",
    description: "A wipeable-clean flash card set of memory verses to help children learn and recall scripture.",
    cardCount: "30 Cards",
    price: 55,
    image: "/images/shop-dansly-memory-verse.png",
    ogImage: "/images/og/shop-dansly-memory-verse.jpg",
  },
];

// Buying all 6 flash card boxes together costs less than 6 x price.
export const bundlePrice = 300;

export function getShopProduct(slug: string): ShopProduct | undefined {
  return shopProducts.find((p) => p.slug === slug);
}
