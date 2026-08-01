export interface BookSeries {
  title: string;
  subject: "Literacy" | "Mathematics" | "Financial Literacy" | "Practical Skills" | "Picture Books";
  description: string;
}

export const subjects: BookSeries["subject"][] = [
  "Literacy",
  "Mathematics",
  "Financial Literacy",
  "Practical Skills",
  "Picture Books",
];

export const bookSeries: BookSeries[] = [
  {
    title: "ReadWell",
    subject: "Literacy",
    description: "Decodable readers built for the phonics stage, authored in Ghana.",
  },
  {
    title: "Let's Read with Kofi and Afi",
    subject: "Literacy",
    description: "An early-reader phonics series following two familiar young characters.",
  },
  {
    title: "In My Father's World",
    subject: "Picture Books",
    description: "An illustrated picture book series for read-aloud and independent reading.",
  },
  {
    title: "Richest Kid in Africa",
    subject: "Financial Literacy",
    description: "Stories that introduce money, saving and enterprise to young learners.",
  },
  {
    title: "Thrive Mathematics",
    subject: "Mathematics",
    description: "A mathematics series built for classroom teaching and home practice alike.",
  },
  {
    title: "Let's Create",
    subject: "Practical Skills",
    description: "Hands-on activities that build practical skills through creativity.",
  },
];
