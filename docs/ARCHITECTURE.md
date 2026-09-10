# Architecture

Next.js 16.3.4 App Router, React 19.3, strict TypeScript. `output: 'export'`, `trailingSlash: true`, preoptimized local images, local fonts. All content routes use `generateStaticParams` and reject unknown slugs. Query-driven receipts and certificates use fixed exported pages with Suspense client readers. Public marketing/course/instructor pages render at build time; learner and media interactions are client islands.

## Content and media
`src/content/catalog.ts` defines six stable course IDs, instructor relations, three lessons per course, learning outcomes, readings, practice rules, six chapter transcripts and five-question quizzes. `public/` holds optimized images, font licenses, H.264 MP4 files, WebVTT equivalents, diagrams, worksheets and social JPGs. Media generation lives in `scripts/generate-media.ts`; social composition uses `scripts/social-image.mjs`. No media goes into learner storage.

## Browser records
`src/learner/model.ts` holds pure scoring, enrollment, completion, resume, validation and deterministic scenarios. `storage.ts` is the single adapter; `provider.tsx` exposes an external store via React context/useSyncExternalStore. The versioned envelope is `frame-academy:demo:v1`: schemaVersion, revision, profile, enrollment records, saved IDs, per-lesson progress/reflections, quiz drafts/attempts, notes, bookmarks, certificates, last visit and local support requests. Event dates use ISO strings. Every mutable relationship uses fixture IDs.

The initial server snapshot is stable and empty but never written. Hydration parses and validates before mutation. Unknown references are discarded, playheads are clamped, scores recalculated, practice completion prerequisites checked, and certificate prerequisites enforced. Schema 0 with the same recoverable record shape migrates to 1. Invalid JSON or unknown schemas block writes and preserve the original key until an explicit reset. A storage exception keeps the prior committed snapshot and offers an explicit temporary memory session; the failed action must be retried. Temporary data disappears on full-page reload. Important actions persist immediately; playheads throttle to five seconds and flush on pause/end/route unmount/hidden visibility. Browser-close writes are not guaranteed.

Before each persistent mutation, the adapter re-reads the current envelope, reducing stale whole-record writes. Storage events reconcile other tabs. This is not an atomic transaction system; simultaneous tab writes may race. Scoped reset removes only this app’s key. Course reset preserves enrollment and notes, deletes that course’s progress, practice reflection, quiz attempts, bookmarks and certificate, and clears its resume pointer.

## Completion and identity
Enrollment snapshots price/currency/date and reuses an existing receipt. Three required lessons plus any 4/5 quiz attempt produce one certificate, with issuance timestamp and learner-name snapshot. Playback position is separate from completion. Manual video completion and seeking are allowed; this is not attendance verification. Practice requires all three checklist items and a reflection of at least 20 characters. Course awards are idempotent, rewatching does not erase them, and profile changes do not alter issued names. Resume selects the last visited unfinished lesson, otherwise the first unfinished lesson, otherwise quiz; a finished course opens its first lesson for review.

## Certificate export
The certificate screen renders semantic printable HTML. On demand, a client module waits for the bundled fonts, draws a 1800×1200 canvas with measured line wrapping for names and course titles, and downloads a PNG. The print view supports browser PDF printing. No export service, public verification endpoint, identity service or QR code is involved.

## Deployment boundary
Only static files are required at runtime. `npm run start` serves `out/` with nested directory routes, byte-range video support and a real 404. `NEXT_PUBLIC_SITE_URL` is an optional local setting and a required HTTPS origin for `build:share`; without it, absolute canonical/OG URLs are intentionally omitted rather than inventing a public address. No publication is authorized in this task.
