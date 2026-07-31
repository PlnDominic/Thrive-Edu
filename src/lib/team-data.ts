export interface TeamMember {
  name: string;
  role: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Dr. Abena Owusu", role: "Founder & CEO" },
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
  { title: "Growth", description: "We measure success in progress, not perfection — every learner moves forward at their own pace." },
  { title: "Guidance", description: "Educators and mentors walk alongside every student, translating data into real support." },
  { title: "Trust", description: "Families and schools trust us with their most important work — we take that seriously." },
  { title: "Human-centered", description: "Technology should serve people. Every feature starts with a real classroom need." },
];
