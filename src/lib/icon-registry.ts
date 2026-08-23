import {
  Award,
  BookOpen,
  Building2,
  Compass,
  FlaskConical,
  GraduationCap,
  HardHat,
  Library,
  Music,
  Palette,
  PartyPopper,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

// Icons referenced by name from the database (courses.icon, ventures.icon,
// gallery_items.icon) so admin-authored content can pick a icon without
// storing a component. Keep this list in sync with the <select> options in
// the admin forms.
export const ICON_REGISTRY: Record<string, LucideIcon> = {
  Award,
  BookOpen,
  Building2,
  Compass,
  FlaskConical,
  GraduationCap,
  HardHat,
  Library,
  Music,
  Palette,
  PartyPopper,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
};

export const ICON_NAMES = Object.keys(ICON_REGISTRY) as (keyof typeof ICON_REGISTRY)[];

export const DEFAULT_ICON: LucideIcon = BookOpen;

export function getIcon(name: string | null | undefined): LucideIcon {
  return (name && ICON_REGISTRY[name]) || DEFAULT_ICON;
}
