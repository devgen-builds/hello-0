# Plan

Milestones with verifiable acceptance criteria. Each milestone ships something that works.

## M1: Scaffold and first page (status: Done)

Ships: a static page that builds and shows the project name, ticker and plan.

Acceptance criteria:
- [x] Vite + React + TypeScript + Tailwind project in the repository root.
- [x] `npm test` passes, with at least one test that renders the page and finds "Hello DEVGEN" and "$HELLO".
- [x] `npm run build` succeeds (type check + Vite build) and writes `dist/index.html`.
- [x] The page lists three milestones, each with a visible status.

## M2: Content and presentation polish (status: Planned)

Ships: the finished one-page design.

Acceptance criteria:
- [ ] The page shows the one-line description from PROJECT.md.
- [ ] Each milestone has a title, a summary and a status badge whose text is one of `Done` / `In progress` / `Planned`.
- [ ] Layout works at 360px and 1280px widths, with no horizontal scroll.
- [ ] Tests check exactly three milestones, each with a valid status.
- [ ] The built `dist/` contains no references to external URLs for scripts, styles or fonts (checked by a test or script).

## M3: Static release hardening (status: Planned)

Ships: a static bundle that is ready to deploy.

Acceptance criteria:
- [ ] Page `<title>` and meta description are set from the project content.
- [ ] Semantic landmarks (`header`, `main`, `footer`) and a heading hierarchy, checked in tests.
- [ ] `npm run build` output works from a relative base (`vite preview` serves it correctly).
- [ ] README documents `npm install`, `npm test`, `npm run build`.
