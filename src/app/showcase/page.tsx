"use client";

import * as React from "react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Flame,
  Medal,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import { PasswordInput } from "@/components/ui/password-input";
import { DateInput } from "@/components/ui/date-input";
import { OTPInput } from "@/components/ui/otp-input";
import { MultiSelect } from "@/components/ui/multi-select";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { toast } from "@/hooks/use-toast";

import { StudentCard } from "@/components/cards/student-card";
import { TeacherCard } from "@/components/cards/teacher-card";
import { ParentCard } from "@/components/cards/parent-card";
import { AnalyticsCard } from "@/components/cards/analytics-card";
import { SchoolCard } from "@/components/cards/school-card";
import { LearningJourneyCard } from "@/components/cards/learning-journey-card";

import { ProgressTracker } from "@/components/data/progress-tracker";
import { AchievementBadge } from "@/components/data/achievement-badge";
import { SkillMap } from "@/components/data/skill-map";
import { Timeline } from "@/components/data/timeline";
import { BarChart } from "@/components/data/bar-chart";
import { DonutChart } from "@/components/data/donut-chart";
import { KPICard } from "@/components/data/kpi-card";

import { EmptyState } from "@/components/feedback/empty-state";
import { StatusScreen } from "@/components/feedback/status-screen";

import { CommentThread } from "@/components/collaboration/comment-thread";
import { NotificationList } from "@/components/collaboration/notification-list";
import { MessageThread } from "@/components/collaboration/message-thread";
import { ActivityFeed } from "@/components/collaboration/activity-feed";

import { Section, SubLabel } from "./section";
import { Toc } from "./toc";

const colorGroups = [
  {
    label: "Primary",
    swatches: [
      { name: "Lemon Green", varName: "--color-forest-green", hex: "#8A9A2E" },
      { name: "Deep Lemon", varName: "--color-deep-green", hex: "#6E7A24" },
      { name: "Growth Green", varName: "--color-growth-green", hex: "#4E8A3B" },
      { name: "Leaf Green", varName: "--color-leaf-green", hex: "#6FA74F" },
    ],
  },
  {
    label: "Accent",
    swatches: [
      { name: "Leaf Gold", varName: "--color-leaf-gold", hex: "#D8A24A" },
      { name: "Warm Amber", varName: "--color-warm-amber", hex: "#E7B96B" },
    ],
  },
  {
    label: "Neutral",
    swatches: [
      { name: "Background", varName: "--color-background", hex: "#F7F9F7" },
      { name: "Surface", varName: "--color-surface", hex: "#FFFFFF" },
      { name: "Subtle Surface", varName: "--color-subtle-surface", hex: "#F2F5F2" },
      { name: "Border", varName: "--color-border", hex: "#DDE4DC" },
      { name: "Text Primary", varName: "--color-text-primary", hex: "#162114" },
      { name: "Text Secondary", varName: "--color-text-secondary", hex: "#5E695B" },
    ],
  },
  {
    label: "Semantic",
    swatches: [
      { name: "Success", varName: "--color-success", hex: "#2E7D32" },
      { name: "Warning", varName: "--color-warning", hex: "#E8A23A" },
      { name: "Error", varName: "--color-error", hex: "#D64545" },
      { name: "Info", varName: "--color-info", hex: "#4A84E8" },
    ],
  },
];

const typeScale = [
  { label: "Display", className: "text-display font-heading font-bold" },
  { label: "H1", className: "text-h1 font-heading font-bold" },
  { label: "H2", className: "text-h2 font-heading font-bold" },
  { label: "H3", className: "text-h3 font-heading font-bold" },
  { label: "H4", className: "text-h4 font-heading font-semibold" },
  { label: "H5", className: "text-h5 font-heading font-semibold" },
  { label: "Body Large", className: "text-body-lg font-body" },
  { label: "Body", className: "text-body font-body" },
  { label: "Small", className: "text-small font-body" },
  { label: "Caption", className: "text-caption font-body" },
];

const spacingScale = [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128];
const radiusScale = [
  { label: "sm (10px)", className: "rounded-sm" },
  { label: "md (16px)", className: "rounded-md" },
  { label: "lg (24px)", className: "rounded-lg" },
  { label: "xl (32px)", className: "rounded-xl" },
  { label: "pill", className: "rounded-full" },
];

export default function ShowcasePage() {
  const [multi, setMulti] = React.useState<string[]>(["reading"]);
  const [otp, setOtp] = React.useState("");

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-brand">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center text-white">
          <Image src="/thrive-edu-logo.png" alt="THRIVE EDU" width={72} height={72} className="drop-shadow-lg" priority />
          <h1 className="font-heading text-h2 font-bold tracking-tight sm:text-h1 lg:text-display">THRIVE EDU</h1>
          <p className="max-w-xl text-body-lg text-white/90">
            Every learner has a unique path to thrive. A spatial, premium design system for personalized
            education: calm, intelligent, and human-centered.
          </p>
          <div className="flex gap-3">
            <Button variant="accent" size="lg">
              Explore the system
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              View dashboards
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-12 px-6 py-16">
        <Toc />
        <div className="min-w-0 flex-1">
          {/* Foundations */}
          <Section id="foundations" title="Foundations" description="Color, typography, spacing, radius, and elevation: the atoms of the Spatial Education Design Language.">
            <SubLabel>Color palette</SubLabel>
            <div className="mb-10 space-y-6">
              {colorGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-small font-semibold text-text-primary">{group.label}</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {group.swatches.map((s) => (
                      <div key={s.name} className="overflow-hidden rounded-md border border-border">
                        <div className="h-16" style={{ backgroundColor: `var(${s.varName})` }} />
                        <div className="bg-surface px-3 py-2">
                          <p className="text-caption font-semibold text-text-primary">{s.name}</p>
                          <p className="text-caption text-text-secondary">{s.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="overflow-hidden rounded-md border border-border">
                <div className="h-16 bg-gradient-brand" />
                <div className="bg-surface px-3 py-2">
                  <p className="text-caption font-semibold text-text-primary">Brand gradient</p>
                  <p className="text-caption text-text-secondary">Used sparingly: hero sections, key highlights</p>
                </div>
              </div>
            </div>

            <SubLabel>Typography</SubLabel>
            <div className="mb-10 space-y-3 rounded-lg border border-border bg-surface p-6">
              {typeScale.map((t) => (
                <div key={t.label} className="flex items-baseline gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="w-28 shrink-0 text-caption font-medium uppercase tracking-wide text-text-secondary">
                    {t.label}
                  </span>
                  <span className={t.className}>Personalized learning</span>
                </div>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SubLabel>Spacing scale (8pt grid)</SubLabel>
                <div className="space-y-2 rounded-lg border border-border bg-surface p-6">
                  {spacingScale.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <span className="w-10 shrink-0 text-caption text-text-secondary">{s}px</span>
                      <div className="h-3 rounded-full bg-growth-green" style={{ width: s }} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SubLabel>Radius & elevation</SubLabel>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {radiusScale.map((r) => (
                    <div key={r.label} className="flex flex-col items-center gap-2">
                      <div className={`size-14 border border-growth-green/40 bg-growth-green/10 ${r.className}`} />
                      <span className="text-caption text-text-secondary">{r.label}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((lvl) => (
                    <div
                      key={lvl}
                      className={`flex h-16 items-center justify-center rounded-md border border-border bg-surface text-caption text-text-secondary shadow-elevation-${lvl}`}
                    >
                      Level {lvl}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Buttons */}
          <Section id="buttons" title="Buttons" description="Confident, minimal, and fast. Every action feels intentional.">
            <div className="rounded-lg border border-border bg-surface p-6">
              <SubLabel>Variants</SubLabel>
              <div className="mb-6 flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="primary" loading>
                  Loading
                </Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
              </div>
              <SubLabel>Sizes & icon buttons</SubLabel>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" aria-label="Add">
                  <Sparkles />
                </Button>
              </div>
            </div>
          </Section>

          {/* Inputs */}
          <Section id="inputs" title="Inputs" description="Accessible, calm form controls with clear focus states.">
            <div className="grid gap-6 rounded-lg border border-border bg-surface p-6 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="text-input">Full name</Label>
                <Input id="text-input" placeholder="Amara Boateng" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="search-input">Search</Label>
                <SearchInput id="search-input" placeholder="Search courses, students…" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="select-input">Grade level</Label>
                <Select defaultValue="grade-9">
                  <SelectTrigger id="select-input">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-8">Grade 8</SelectItem>
                    <SelectItem value="grade-9">Grade 9</SelectItem>
                    <SelectItem value="grade-10">Grade 10</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="date-input">Enrollment date</Label>
                <DateInput id="date-input" defaultValue="2026-01-15" />
              </div>
              <div className="space-y-1.5">
                <Label>Subjects of interest</Label>
                <MultiSelect
                  value={multi}
                  onChange={setMulti}
                  options={[
                    { label: "Reading", value: "reading" },
                    { label: "Mathematics", value: "math" },
                    { label: "Science", value: "science" },
                    { label: "Art", value: "art" },
                  ]}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password-input">Password</Label>
                <PasswordInput id="password-input" placeholder="••••••••" />
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <Label>One-time passcode</Label>
                <OTPInput value={otp} onChange={setOtp} />
              </div>
            </div>
          </Section>

          {/* Navigation */}
          <Section id="navigation" title="Navigation" description="Breadcrumbs shown here; Sidebar, Topbar, and Mobile navigation are demonstrated in the Student dashboard.">
            <div className="rounded-lg border border-border bg-surface p-6">
              <Breadcrumbs
                items={[
                  { label: "Dashboard", href: "/dashboard/student" },
                  { label: "Learning Path", href: "/dashboard/student/path" },
                  { label: "Algebra Foundations" },
                ]}
              />
            </div>
          </Section>

          {/* Cards */}
          <Section id="cards" title="Cards" description="Floating surfaces for every role in the THRIVE EDU ecosystem.">
            <div className="grid gap-6 md:grid-cols-2">
              <StudentCard
                name="Amara Boateng"
                grade="Grade 9 · Section A"
                progress={72}
                attendance={96}
                averageScore={88}
                status="excelling"
              />
              <TeacherCard name="Mr. Kwame Asante" subject="Mathematics" classCount={5} studentCount={142} rating={4.8} />
              <ParentCard
                name="Efua Mensah"
                unreadMessages={2}
                learners={[{ name: "Amara Boateng" }, { name: "Kojo Boateng" }]}
              />
              <SchoolCard name="Thrive Academy" location="Accra, Ghana" enrollment={1240} teacherCount={68} performanceScore={91} />
              <AnalyticsCard title="Weekly engagement" value="86%" changePercent={4.2} data={[62, 68, 64, 74, 78, 82, 86]} />
              <LearningJourneyCard
                subject="Algebra Foundations"
                description="Building core skills in equations and functions"
                progress={60}
                milestones={[
                  { label: "Linear equations", complete: true },
                  { label: "Graphing basics", complete: true },
                  { label: "Systems of equations", complete: false },
                  { label: "Quadratics intro", complete: false },
                ]}
              />
            </div>
          </Section>

          {/* Data */}
          <Section id="data" title="Data & analytics" description="Tables, trackers, achievements, and charts that make growth visible.">
            <SubLabel>KPI cards</SubLabel>
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <KPICard label="Active learners" value="1,240" icon={Users} changePercent={6.1} />
              <KPICard label="Avg. mastery" value="82%" icon={Target} changePercent={2.4} />
              <KPICard label="Assignments graded" value="3,482" icon={BookOpen} changePercent={-1.2} />
              <KPICard label="Engagement streak" value="14 days" icon={Flame} changePercent={9.5} />
            </div>

            <SubLabel>Progress tracker</SubLabel>
            <div className="mb-8 rounded-lg border border-border bg-surface p-6">
              <ProgressTracker
                steps={[
                  { label: "Enrolled", status: "complete" },
                  { label: "Placement test", status: "complete" },
                  { label: "Foundations", status: "current" },
                  { label: "Core skills", status: "upcoming" },
                  { label: "Mastery", status: "upcoming" },
                ]}
              />
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <Card elevation={2}>
                <CardHeader>
                  <CardTitle>Weekly study minutes</CardTitle>
                  <CardDescription>Bar chart across the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { label: "Mon", value: 42 },
                      { label: "Tue", value: 58 },
                      { label: "Wed", value: 35 },
                      { label: "Thu", value: 66 },
                      { label: "Fri", value: 50 },
                      { label: "Sat", value: 28 },
                      { label: "Sun", value: 20 },
                    ]}
                  />
                </CardContent>
              </Card>
              <Card elevation={2}>
                <CardHeader>
                  <CardTitle>Assignment status</CardTitle>
                  <CardDescription>Donut chart of current workload</CardDescription>
                </CardHeader>
                <CardContent>
                  <DonutChart
                    centerLabel="48"
                    segments={[
                      { label: "Completed", value: 32, color: "var(--color-growth-green)" },
                      { label: "In progress", value: 10, color: "var(--color-leaf-gold)" },
                      { label: "Overdue", value: 6, color: "var(--color-error)" },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <Card elevation={2}>
                <CardHeader>
                  <CardTitle>Skill map</CardTitle>
                  <CardDescription>Cross-subject skill strength</CardDescription>
                </CardHeader>
                <CardContent>
                  <SkillMap
                    skills={[
                      { skill: "Reading", value: 82 },
                      { skill: "Writing", value: 68 },
                      { skill: "Math", value: 91 },
                      { skill: "Science", value: 74 },
                      { skill: "Creativity", value: 88 },
                    ]}
                  />
                </CardContent>
              </Card>
              <Card elevation={2}>
                <CardHeader>
                  <CardTitle>Learning pathway</CardTitle>
                  <CardDescription>Milestones over the current term</CardDescription>
                </CardHeader>
                <CardContent>
                  <Timeline
                    entries={[
                      { title: "Enrolled in Algebra Foundations", timestamp: "Aug 12", status: "complete" },
                      { title: "Completed Linear Equations unit", timestamp: "Sep 3", status: "complete" },
                      { title: "Mid-term skill assessment", timestamp: "Oct 1", status: "current", icon: Target },
                      { title: "Systems of Equations unit", timestamp: "Oct 20", status: "upcoming" },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            <SubLabel>Achievement badges</SubLabel>
            <div className="mb-8 flex flex-wrap gap-6 rounded-lg border border-border bg-surface p-6">
              <AchievementBadge label="Fast Learner" icon={Sparkles} />
              <AchievementBadge label="Perfect Week" icon={Flame} />
              <AchievementBadge label="Top Scorer" icon={Medal} />
              <AchievementBadge label="Team Player" icon={Users} />
              <AchievementBadge label="Verified Skill" icon={BadgeCheck} earned={false} />
              <AchievementBadge label="Rising Star" icon={TrendingUp} earned={false} />
            </div>

            <SubLabel>Table</SubLabel>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Amara Boateng", grade: "Grade 9", progress: "72%", status: "excelling" as const },
                  { name: "Kojo Boateng", grade: "Grade 6", progress: "48%", status: "on-track" as const },
                  { name: "Nana Yaa Owusu", grade: "Grade 9", progress: "31%", status: "needs-attention" as const },
                ].map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell>{row.progress}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          row.status === "excelling" ? "success" : row.status === "on-track" ? "info" : "warning"
                        }
                      >
                        {row.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Section>

          {/* Feedback */}
          <Section id="feedback" title="Feedback" description="Calm, clear signals. Never alarming, always helpful.">
            <SubLabel>Alerts</SubLabel>
            <div className="mb-8 space-y-3">
              <Alert variant="info" title="New feature">
                Skill maps are now available on every student profile.
              </Alert>
              <Alert variant="success" title="Assignment graded">
                Amara&apos;s Algebra quiz was scored 94%.
              </Alert>
              <Alert variant="warning" title="Attendance dipping">
                Kojo has missed 2 sessions this week.
              </Alert>
              <Alert variant="error" title="Sync failed">
                Could not sync grades from the last session. Try again.
              </Alert>
            </div>

            <SubLabel>Toasts</SubLabel>
            <div className="mb-8 flex flex-wrap gap-3">
              <Button
                variant="secondary"
                onClick={() => toast({ title: "Progress saved", description: "Amara's learning path was updated.", variant: "success" })}
              >
                Trigger success toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => toast({ title: "Could not save", description: "Check your connection and try again.", variant: "error" })}
              >
                Trigger error toast
              </Button>
            </div>

            <SubLabel>Loading & skeletons</SubLabel>
            <div className="mb-8 grid gap-4 rounded-lg border border-border bg-surface p-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Skeleton className="size-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/3" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div>
                <SubLabel>Empty state</SubLabel>
                <EmptyState
                  icon={MessageSquare}
                  title="No messages yet"
                  description="Start a conversation with a teacher or parent to see it here."
                  actionLabel="New message"
                />
              </div>
              <div>
                <SubLabel>Success / error screens</SubLabel>
                <div className="divide-y divide-border rounded-lg border border-border bg-surface">
                  <StatusScreen
                    variant="success"
                    title="Assignment submitted"
                    description="Great work. Your teacher will review it shortly."
                    actionLabel="Back to dashboard"
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* Collaboration */}
          <Section id="collaboration" title="Collaboration" description="Comments, notifications, messaging, and activity, kept human and clear.">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <SubLabel>Comments</SubLabel>
                <div className="rounded-lg border border-border bg-surface p-5">
                  <CommentThread
                    comments={[
                      { id: "1", author: "Mr. Kwame Asante", timestamp: "2h ago", text: "Great progress on the quadratics unit this week!" },
                      { id: "2", author: "Efua Mensah", timestamp: "1h ago", text: "Thank you! We'll keep practicing over the weekend." },
                    ]}
                  />
                </div>
              </div>
              <div>
                <SubLabel>Notifications</SubLabel>
                <NotificationList
                  items={[
                    { id: "1", icon: Award, title: "New achievement unlocked: Fast Learner", timestamp: "10 min ago", read: false },
                    { id: "2", icon: BookOpen, title: "New assignment posted in Algebra Foundations", timestamp: "3h ago", read: false },
                    { id: "3", icon: Users, title: "Mr. Asante joined your class", timestamp: "Yesterday", read: true },
                  ]}
                />
              </div>
              <div>
                <SubLabel>Messaging</SubLabel>
                <MessageThread
                  messages={[
                    { id: "1", author: "Mr. Kwame Asante", text: "Amara did great on today's quiz!", timestamp: "9:02 AM" },
                    { id: "2", author: "Efua Mensah", text: "Wonderful news, thank you for letting me know.", timestamp: "9:10 AM", fromSelf: true },
                  ]}
                />
              </div>
              <div>
                <SubLabel>Activity feed</SubLabel>
                <div className="rounded-lg border border-border bg-surface p-5">
                  <ActivityFeed
                    items={[
                      { id: "1", icon: BadgeCheck, description: "Amara completed the Linear Equations unit", timestamp: "Today, 8:14 AM" },
                      { id: "2", icon: MessageSquare, description: "New message from Mr. Asante", timestamp: "Yesterday, 4:02 PM" },
                      { id: "3", icon: TrendingUp, description: "Weekly engagement rose to 86%", timestamp: "2 days ago" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
