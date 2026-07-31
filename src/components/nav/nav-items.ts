import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  ClipboardList,
  BarChart3,
  Trophy,
  MessageSquare,
  Settings,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const studentNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
  { label: "Learning Path", href: "/dashboard/student/path", icon: BookOpen },
  { label: "Goals", href: "/dashboard/student/goals", icon: Target },
  { label: "Assignments", href: "/dashboard/student/assignments", icon: ClipboardList },
  { label: "Performance", href: "/dashboard/student/performance", icon: BarChart3 },
  { label: "Achievements", href: "/dashboard/student/achievements", icon: Trophy },
  { label: "Messages", href: "/dashboard/student/messages", icon: MessageSquare },
  { label: "Settings", href: "/dashboard/student/settings", icon: Settings },
];

export type Role = "student";

export const navItemsByRole: Record<Role, NavItem[]> = {
  student: studentNavItems,
};
