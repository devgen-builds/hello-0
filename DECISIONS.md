# Decisions

One entry per decision: date, decision, why.

## 2026-10-06: Request accepted as-is, within the safety perimeter

- **Decision:** Build the request from PROJECT.md as written: a one-page static "hello" site showing the project name, the ticker, a one-line description and a three-milestone plan.
- **Why:** Everything requested is inside the perimeter. It is a static site with no backend, no wallet or token code, no runtime network calls, no user data, and no financial claims. No part needed a declared alternative.
- **Guardrail:** The ticker is shown only as an identifier. The page makes no price, return or investment claims and does not link to trading.

## 2026-10-06: Stack and tooling

- **Decision:** Vite + React + TypeScript + Tailwind CSS v4 (through `@tailwindcss/vite`), with Vitest + Testing Library (jsdom) for tests.
- **Why:** This is the starter stack PROJECT.md asks for. Vitest shares Vite's config, so the test setup stays small.

## 2026-10-06: Vitest 5 instead of Vitest 3

- **Decision:** Pin `vitest@^5.0.3` and `vite@^6.4.0`.
- **Why:** With Vitest 3, `npm audit` reported 2 critical issues (tinypool prototype pollution leading to RCE, GHSA-5gmw-xhrv-c9v3 / GHSA-85c8-ppgw-ccpr) and 1 moderate (@vitest/mocker path traversal, GHSA-82fw-gwwq-j7x9). Vitest 5 fixes all three and still supports Vite 6.4+. After the upgrade, `npm audit` reports 0 vulnerabilities. These are dev-only tools and are not in the shipped bundle.

## 2026-10-06: Content lives in one typed data module

- **Decision:** The project name, ticker, description and milestones live in `src/content.ts`. The page renders from that file.
- **Why:** Content is one source of truth that tests can check. Updating a milestone status means changing one line, not markup.
