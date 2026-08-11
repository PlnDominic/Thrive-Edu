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
    slug: "literacy-and-publications",
    name: "Thrive Literacy and Publications",
    description:
      "Our authoring and publishing arm. Decodable readers, phonics, mathematics, financial literacy, practical skills and picture books, authored in Ghana.",
    href: "/books",
    linkLabel: "Browse books and curricula",
    image: "/images/shop-dansly-phonics.png",
    highlights: [
      "ReadWell",
      "Let's Read with Kofi and Afi",
      "In My Father's World",
      "Richest Kid in Africa",
      "Thrive Mathematics",
      "Let's Create",
    ],
  },
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
  {
    slug: "professional-development-institute",
    name: "Thrive Professional Development Institute",
    description:
      "Training and continuing development for teachers, so a school can lift teaching quality across its whole staff.",
    href: "/schools",
    linkLabel: "For schools and organisations",
    image: "/images/why-thrive-certified-educators.jpg",
    highlights: ["Teacher Workshops", "Pedagogy Training", "Certified Master Trainers"],
  },
  {
    slug: "schools-improvement-services",
    name: "Thrive Schools Improvement Services",
    description:
      "Comprehensive institutional support, curriculum alignment, leadership training, and quality assurance for schools.",
    href: "/schools",
    linkLabel: "Learn about school services",
    image: "/images/gallery-painting-group-seated.jpg",
    highlights: ["School Audits", "Leadership Support", "Curriculum Integration"],
  },
  {
    slug: "tvet",
    name: "Thrive TVET",
    description:
      "Technical and vocational skills. We license a practical skills curriculum to schools and train their staff, and learners keep practising at home.",
    href: "/schools",
    linkLabel: "For schools and organisations",
    image: "/images/gallery-studio-arts.jpg",
    highlights: ["Practical Skills", "Vocational Training", "Home Practice Kits"],
  },
  {
    slug: "360-leadership-and-coaching",
    name: "Thrive 360 Leadership and Coaching Services",
    description:
      "Leadership development and coaching for young adults, building character, confidence, financial literacy and voice.",
    href: "/young-adults",
    linkLabel: "For young adults",
    image: "/images/hero-painting-outdoors.jpg",
    highlights: ["Youth Mentorship", "Character Building", "Career Guidance"],
  },
];
