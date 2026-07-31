import {
  Atom,
  Calculator,
  Globe2,
  Music,
  Palette,
  PenTool,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CourseSubject =
  | "Mathematics"
  | "Science"
  | "Language Arts"
  | "Arts & Music"
  | "Test Prep"
  | "Life Skills";

export interface Course {
  id: string;
  title: string;
  subject: CourseSubject;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: "Live cohort" | "Self-paced";
  description: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  studentsEnrolled: number;
  icon: LucideIcon;
}

export const subjectColors: Record<CourseSubject, string> = {
  Mathematics: "bg-forest-green",
  Science: "bg-growth-green",
  "Language Arts": "bg-deep-green",
  "Arts & Music": "bg-leaf-gold",
  "Test Prep": "bg-leaf-green",
  "Life Skills": "bg-warm-amber",
};

export const courses: Course[] = [
  {
    id: "algebra-foundations",
    title: "Algebra Foundations",
    subject: "Mathematics",
    level: "Beginner",
    format: "Live cohort",
    description: "Build a rock-solid base in equations, functions, and graphing before moving on to advanced math.",
    price: 89,
    rating: 4.9,
    studentsEnrolled: 1240,
    icon: Calculator,
  },
  {
    id: "geometry-in-motion",
    title: "Geometry in Motion",
    subject: "Mathematics",
    level: "Intermediate",
    format: "Self-paced",
    description: "Explore shapes, proofs, and spatial reasoning through interactive, real-world problem sets.",
    price: 79,
    compareAtPrice: 99,
    rating: 4.7,
    studentsEnrolled: 860,
    icon: Target,
  },
  {
    id: "physics-of-everyday-life",
    title: "Physics of Everyday Life",
    subject: "Science",
    level: "Intermediate",
    format: "Live cohort",
    description: "Understand motion, energy, and forces through hands-on experiments learners can try at home.",
    price: 99,
    rating: 4.8,
    studentsEnrolled: 1032,
    icon: Atom,
  },
  {
    id: "biology-lab-explorers",
    title: "Biology Lab Explorers",
    subject: "Science",
    level: "Beginner",
    format: "Self-paced",
    description: "A guided tour of cells, ecosystems, and the human body with virtual lab simulations.",
    price: 85,
    rating: 4.6,
    studentsEnrolled: 742,
    icon: Sparkles,
  },
  {
    id: "creative-writing-workshop",
    title: "Creative Writing Workshop",
    subject: "Language Arts",
    level: "Intermediate",
    format: "Live cohort",
    description: "Develop voice and craft through guided storytelling, poetry, and peer-reviewed workshops.",
    price: 75,
    rating: 4.9,
    studentsEnrolled: 654,
    icon: PenTool,
  },
  {
    id: "world-literature-journeys",
    title: "World Literature Journeys",
    subject: "Language Arts",
    level: "Advanced",
    format: "Self-paced",
    description: "Read and discuss landmark works from across the globe while sharpening critical analysis.",
    price: 82,
    rating: 4.7,
    studentsEnrolled: 431,
    icon: Globe2,
  },
  {
    id: "studio-arts-foundations",
    title: "Studio Arts Foundations",
    subject: "Arts & Music",
    level: "Beginner",
    format: "Live cohort",
    description: "Learn drawing, color theory, and composition through weekly studio sessions with feedback.",
    price: 69,
    rating: 4.8,
    studentsEnrolled: 512,
    icon: Palette,
  },
  {
    id: "music-theory-and-performance",
    title: "Music Theory & Performance",
    subject: "Arts & Music",
    level: "Intermediate",
    format: "Self-paced",
    description: "Build fluency in reading music, rhythm, and performance technique on any instrument.",
    price: 79,
    rating: 4.6,
    studentsEnrolled: 388,
    icon: Music,
  },
  {
    id: "standardized-test-prep-intensive",
    title: "Standardized Test Prep Intensive",
    subject: "Test Prep",
    level: "Advanced",
    format: "Live cohort",
    description: "Targeted strategy and practice for major standardized exams, with weekly progress tracking.",
    price: 149,
    rating: 4.9,
    studentsEnrolled: 998,
    icon: Target,
  },
  {
    id: "financial-literacy-for-teens",
    title: "Financial Literacy for Teens",
    subject: "Life Skills",
    level: "Beginner",
    format: "Self-paced",
    description: "Practical lessons on budgeting, saving, and smart money habits for young learners.",
    price: 59,
    compareAtPrice: 79,
    rating: 4.8,
    studentsEnrolled: 601,
    icon: Sparkles,
  },
];

export const subjects: CourseSubject[] = [
  "Mathematics",
  "Science",
  "Language Arts",
  "Arts & Music",
  "Test Prep",
  "Life Skills",
];
