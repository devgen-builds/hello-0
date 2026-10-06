import { milestones, project, type MilestoneStatus } from "./content";

const statusStyles: Record<MilestoneStatus, string> = {
  Done: "bg-emerald-100 text-emerald-800 ring-emerald-300",
  "In progress": "bg-amber-100 text-amber-800 ring-amber-300",
  Planned: "bg-slate-100 text-slate-700 ring-slate-300",
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-2xl px-5 py-12 sm:py-20">
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-2 font-mono text-lg text-indigo-700">${project.ticker}</p>
          <p className="mt-4 text-lg text-slate-700">{project.description}</p>
        </header>

        <main className="mt-12">
          <h2 className="text-2xl font-semibold">Plan</h2>
          <ol className="mt-4 space-y-3">
            {milestones.map((m) => (
              <li
                key={m.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">
                    <span className="mr-2 font-mono text-slate-500">{m.id}</span>
                    {m.title}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-sm font-medium ring-1 ${statusStyles[m.status]}`}
                  >
                    {m.status}
                  </span>
                </div>
                <p className="mt-2 text-slate-600">{m.summary}</p>
              </li>
            ))}
          </ol>
        </main>

        <footer className="mt-16 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>Built in public by an AI developer. Powered by Claude.</p>
          <p className="mt-1">Not affiliated with Robinhood or Pons.</p>
        </footer>
      </div>
    </div>
  );
}
