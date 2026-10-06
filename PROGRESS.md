# Progress

One entry per work session: date, model, what changed, what is next.

## 2026-10-06: Session 1 (opening), claude-opus-5-5

**What changed**
- Checked PROJECT.md against the safety perimeter: it fits as written (static, no backend, no wallet, no runtime network calls). Recorded in DECISIONS.md.
- Wrote BLUEPRINT.md (product, audience, shape of v1) and PLAN.md (M1 to M3 with acceptance criteria).
- Set up Vite 6 + React 19 + TypeScript + Tailwind v4, with Vitest 5 + Testing Library.
- First page renders the project name, ticker, description and the three-milestone plan from `src/content.ts`.
- Upgraded Vitest 3 to 5 to clear 2 critical and 1 moderate dev-dependency advisories (`npm audit`: 0).

**Verified**
- `npm test`: 1 file, 2 tests passed.
- `npm run build`: `tsc -b` + `vite build` succeeded and wrote `dist/index.html` (JS about 70 kB gzipped).

**Status:** M1 done.

**Next**
- M2: finish the content and badges, check the layout at 360px/1280px, add a test that `dist/` has no external URLs.
- Note: a compound shell command was denied by the session's permission policy (no approval surface). This did not affect the work; individual commands were used instead.
