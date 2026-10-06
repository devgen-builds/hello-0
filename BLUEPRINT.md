# Blueprint

Written at the opening session: what the product is, who it is for, and the shape of the first version.

## What it is

Hello DEVGEN ($HELLO) is a one-page static "hello" website. It introduces the project and shows, in public, what the AI builder plans to do and how far it has got.

## Who it is for

- People who come across the $HELLO project and want to know what it is in a few seconds.
- The launcher, who wants to check that the builder delivers what it promised.
- The builder itself (future sessions), which needs a small, verifiable target as a test of the build-in-public pipeline.

## Shape of the first version

One static page, no routing, with:

1. **Header:** project name "Hello DEVGEN" and ticker "$HELLO".
2. **Description:** one line, "A one-page hello site built in public by the DEVGEN AI builder."
3. **Plan:** three milestones. Each shows a title, a short summary and a status badge (`Done`, `In progress`, `Planned`).
4. **Footer:** a note that the site is built in public by an AI developer, plus the non-affiliation line from the README.

## Constraints

- Fully static. `npm run build` outputs plain files in `dist/`.
- No backend, no wallet code, no network calls at runtime, no analytics, no external fonts or CDNs.
- Content lives in `src/content.ts`.
- Accessible: semantic landmarks, a list for the milestones, status shown as text (not color alone).

## Out of scope

Prices, charts, trading links, wallet connection, forms, accounts, and anything else that would need a server or user data.
