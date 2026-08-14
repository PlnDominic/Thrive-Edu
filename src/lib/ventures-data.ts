export interface Venture {
  slug: string;
  name: string;
  description: string;
  href: string;
  linkLabel: string;
  image?: string;
  highlights?: string[];
}

export const ventures: Venture[] = [
  {
    slug: "mobile-library-and-books-hub",
    name: "Thrive Mobile Library and Books Hub",
    description:
      "Getting books into hands. A mobile and outreach library, alongside a hub for browsing and buying our titles.",
    href: "/families",
    linkLabel: "For families and readers",
    image: "/images/gallery-outdoor-lesson.jpg",
    highlights: ["Mobile Book Drives", "Community Reading Hubs", "Family Book Access"],
  },
  {
    slug: "stem-programme-and-products",
    name: "Thrive STEM (Programme and Products)",
    description:
      "Hands-on science, technology, engineering, and mathematics education equipped with interactive learning kits and practical experiment guides.",
    href: "/courses",
    linkLabel: "Explore STEM products & programmes",
    image: "/images/gallery-science-fair.jpg",
    highlights: ["Science Kits", "Practical Experiments", "Interactive Flashcards"],
  },
  {
    slug: "talents-creative-hub",
    name: "Thrive Talents Creative Hub",
    description:
      "Unlocking artistic potential through painting, visual arts, music, and creative expression for children and youth.",
    href: "/gallery",
    linkLabel: "Explore creative hub & gallery",
    image: "/images/gallery-painting-focus.jpg",
    highlights: ["Studio Arts", "Young Painters", "Creative Exhibitions"],
  },
];
