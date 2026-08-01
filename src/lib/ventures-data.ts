export interface Venture {
  slug: string;
  name: string;
  description: string;
  href: string;
  linkLabel: string;
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
  },
  {
    slug: "professional-development-institute",
    name: "Thrive Professional Development Institute",
    description:
      "Training and continuing development for teachers, so a school can lift teaching quality across its whole staff.",
    href: "/schools",
    linkLabel: "For schools and organisations",
  },
  {
    slug: "tvet",
    name: "Thrive TVET",
    description:
      "Technical and vocational skills. We license a practical skills curriculum to schools and train their staff, and learners keep practising at home. Parents outside these schools can access the same home practice directly.",
    href: "/schools",
    linkLabel: "For schools and organisations",
  },
  {
    slug: "360-leadership-and-coaching",
    name: "Thrive 360 Leadership and Coaching Services",
    description: "Leadership development and coaching for young adults, building character, confidence and voice.",
    href: "/young-adults",
    linkLabel: "For young adults",
  },
];
