# THRIVE EDU — Design System

A spatial, premium design system for THRIVE EDU: personalized learning journeys for students,
parents, teachers, and school owners. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `/` — landing page
- `/showcase` — full design system style guide (tokens + components)
- `/dashboard/student` — flagship Student dashboard built on the system

## Structure

- `src/app/globals.css` — design tokens (color, type scale, spacing, radius, elevation) as a Tailwind v4 `@theme`
- `src/components/ui` — core primitives (Button, Input family, Select, Table, Toast, Alert, Skeleton, …)
- `src/components/nav` — Sidebar, Topbar, mobile drawer + tab bar, Breadcrumbs
- `src/components/cards` — role/domain cards (Student, Teacher, Parent, School, Analytics, Learning Journey)
- `src/components/data` — data viz (ProgressTracker, SkillMap, Timeline, BarChart, DonutChart, KPICard, AchievementBadge)
- `src/components/feedback` — EmptyState, StatusScreen
- `src/components/collaboration` — Comments, Notifications, Messaging, Activity feed

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
