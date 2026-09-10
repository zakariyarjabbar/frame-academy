# FRAME ACADEMY operating rules

Read `PRODUCT.md`, `DESIGN.md`, `docs/ARCHITECTURE.md`, and `docs/STATUS.md` before changing the project. The full supplied brief is retained at `docs/BRIEF.md`.

- Preserve direction A: cinematic photography, Barlow Condensed display, DM Sans UI, charcoal/ivory with restrained acid yellow. Public pages persuade through real lesson work; learning pages prioritize comfortable use.
- Next.js App Router, strict TypeScript, `output: 'export'`. All known routes pre-generated. No databases, backend APIs, Server Actions, auth/payment services, remote mutable data, IndexedDB, or secret keys.
- Bundled content is public. Mutable data uses only the versioned `frame-academy:demo:v1` localStorage envelope and one client store. Hydrate/validate before writing; re-read before mutations; report write failure honestly. Never call `localStorage.clear()`.
- Keep scoring/completion pure, data relationships stable, and certificates/enrollment idempotent. Six courses, eighteen lessons, six playable clips, six quizzes and real resources are required. Do not replace behavior with inert buttons.
- Persona identities are fictional. No fabricated ratings, accreditation, client results, credentials or community. No publishing, purchases or messages without authorization.
- Preserve user work; make reversible implementation decisions. Keep accurate documentation and media provenance. Do not disable checks to hide failures.
- Verification: `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm run verify:export`, `npm run test:browser`. Preview exported output with `npm run start`.
- Completion includes desktop/mobile visual review, real H.264 decoding, local enrollment-to-certificate flow, storage failure tests, static route/resource and metadata checks. Record actual results and limits in `docs/QA.md` and `docs/STATUS.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
