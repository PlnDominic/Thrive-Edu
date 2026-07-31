import { BadgeCheck, BookOpen, Flame, Medal, Sparkles, Target, TrendingUp, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { KPICard } from "@/components/data/kpi-card";
import { ProgressTracker } from "@/components/data/progress-tracker";
import { AchievementBadge } from "@/components/data/achievement-badge";
import { SkillMap } from "@/components/data/skill-map";
import { BarChart } from "@/components/data/bar-chart";

import { LearningJourneyCard } from "@/components/cards/learning-journey-card";

const assignments = [
  { title: "Quadratic Equations Worksheet", subject: "Mathematics", due: "Tomorrow", status: "due" as const },
  { title: "Photosynthesis Lab Report", subject: "Science", due: "Fri, Oct 24", status: "in-progress" as const },
  { title: "Essay: Independence Movements", subject: "History", due: "Oct 20", status: "submitted" as const },
  { title: "Reading Reflection — Ch. 4", subject: "English", due: "Oct 18", status: "graded" as const },
];

const statusVariant = {
  due: "warning" as const,
  "in-progress": "info" as const,
  submitted: "neutral" as const,
  graded: "success" as const,
};

const goals = [
  { label: "Read 20 books this year", progress: 65 },
  { label: "Master multiplication tables", progress: 90 },
  { label: "Improve essay writing score", progress: 40 },
];

export default function StudentDashboardPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-h2 font-bold text-text-primary">Good afternoon, Amara</h1>
          <p className="mt-1 text-body text-text-secondary">Here&apos;s how your learning journey is going today.</p>
        </div>
        <Badge variant="gold" className="text-small">
          <Flame className="size-3.5" />
          14-day streak
        </Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard label="Learning path progress" value="72%" icon={Target} changePercent={5.3} />
        <KPICard label="Average score" value="88%" icon={TrendingUp} changePercent={2.1} />
        <KPICard label="Attendance" value="96%" icon={Users} changePercent={0.4} />
        <KPICard label="Assignments completed" value="24/28" icon={BookOpen} changePercent={-1.5} />
      </div>

      <section>
        <h2 className="mb-4 font-heading text-h4 font-semibold text-text-primary">Your learning path</h2>
        <Card elevation={2}>
          <CardContent className="pt-6">
            <ProgressTracker
              steps={[
                { label: "Enrolled", status: "complete" },
                { label: "Placement test", status: "complete" },
                { label: "Foundations", status: "complete" },
                { label: "Core skills", status: "current" },
                { label: "Mastery", status: "upcoming" },
              ]}
            />
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
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

        <Card elevation={2}>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
            <CardDescription>Personal milestones you&apos;re working toward</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {goals.map((g) => (
              <div key={g.label}>
                <div className="mb-2 flex items-center justify-between text-small">
                  <span className="font-medium text-text-primary">{g.label}</span>
                  <span className="text-text-secondary">{g.progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-subtle-surface">
                  <div
                    className="h-full rounded-full bg-leaf-gold transition-all duration-300"
                    style={{ width: `${g.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <section>
        <h2 className="mb-4 font-heading text-h4 font-semibold text-text-primary">Assignments</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assignment</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Due</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignments.map((a) => (
              <TableRow key={a.title}>
                <TableCell className="font-medium">{a.title}</TableCell>
                <TableCell>{a.subject}</TableCell>
                <TableCell>{a.due}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[a.status]}>{a.status.replace("-", " ")}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card elevation={2}>
          <CardHeader>
            <CardTitle>Study minutes this week</CardTitle>
            <CardDescription>Performance analytics across subjects</CardDescription>
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
            <CardTitle>Skill map</CardTitle>
            <CardDescription>Strength across core subjects</CardDescription>
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
      </div>

      <section>
        <h2 className="mb-4 font-heading text-h4 font-semibold text-text-primary">Achievements</h2>
        <Card elevation={2}>
          <CardContent className="flex flex-wrap gap-6 pt-6">
            <AchievementBadge label="Fast Learner" icon={Sparkles} />
            <AchievementBadge label="Perfect Week" icon={Flame} />
            <AchievementBadge label="Top Scorer" icon={Medal} />
            <AchievementBadge label="Verified Skill" icon={BadgeCheck} earned={false} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
