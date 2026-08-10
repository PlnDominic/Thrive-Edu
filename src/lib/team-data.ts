export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Salomey Owusu Barnes",
    role: "Chief Executive Officer",
    image: "/images/team-salomey-owusu-barnes.jpg",
    bio: "Leads THRIVE EDU's mission to equip and empower schools and organisations across Ghana.",
  },
  { name: "Kwabena Mensah", role: "Head of Curriculum" },
  { name: "Naomi Adjei", role: "Director of Teaching" },
  { name: "Samuel Tetteh", role: "Head of Product" },
  { name: "Efua Danso", role: "Family Success Lead" },
  { name: "Yaw Boateng", role: "Data & Insights Lead" },
];

export interface ValueItem {
  title: string;
  description: string;
}

export const orgValues: ValueItem[] = [
  { title: "God-first", description: "We lead with faith, and we serve with purpose and humility." },
  { title: "Excellence", description: "We hold to high standards in everything we make and deliver." },
  { title: "Innovation", description: "We create fresh, practical solutions that move African education forward." },
  { title: "Empowerment", description: "We equip every child, educator and school to grow, stand strong and thrive." },
  { title: "Partnership", description: "We thrive together with schools, parents, NGOs and communities." },
  { title: "Integrity", description: "We are honest, accountable and worthy of the trust placed in us." },
];
