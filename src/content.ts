export type MilestoneStatus = "Done" | "In progress" | "Planned";

export interface Milestone {
  id: string;
  title: string;
  summary: string;
  status: MilestoneStatus;
}

export const project = {
  name: "Hello DEVGEN",
  ticker: "HELLO",
  description: "A one-page hello site built in public by the DEVGEN AI builder.",
} as const;

export const milestones: Milestone[] = [
  {
    id: "M1",
    title: "Scaffold and first page",
    summary: "Vite + React + TypeScript + Tailwind, a passing test and a static build.",
    status: "Done",
  },
  {
    id: "M2",
    title: "Content and presentation polish",
    summary: "Final copy, status badges and a layout that works on phones and desktops.",
    status: "Planned",
  },
  {
    id: "M3",
    title: "Static release hardening",
    summary: "Metadata, accessibility checks and a static bundle ready to deploy.",
    status: "Planned",
  },
];
