// Team members now live in Supabase (see src/lib/data/team.ts) and are
// managed from /admin. Org values stay static content here.

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
