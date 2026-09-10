# FRAME ACADEMY — cinematic online course academy prompt for GPT-6 Astra

Act as the creative director, learning-experience designer, and senior Next.js engineer for this project. Create its durable project rules and documentation, then build and verify the complete website described below. This is an implementation request: do not stop at a plan, a homepage, or a README.

## A. Objective and mandatory boundaries

We are a web agency creating a flagship portfolio demonstration of an online course academy. Prospective clients should see exceptional design and be able to explore courses, enroll in a demo, watch real sample lessons, take quizzes, save notes, resume learning, and earn a clearly labeled demo certificate.

**Design and style are the highest priority.** The chosen direction is A: a cinematic academy focused on photography, filmmaking, and visual storytelling. Carry that direction through the public website, course pages, learning player, dashboard, and social previews.

**All mutable application data must stay in the user's browser. No databases and no application backend.** Use bundled public TypeScript/JSON/MDX content plus `localStorage` for small learner records. Use React state for live interactions. Do not introduce SQL, SQLite, Prisma, Drizzle, Supabase, Firebase, MongoDB, IndexedDB, backend APIs, cloud authentication, payment providers, or remote progress storage.

**Next.js is required, with a working static export.** Static hosting of HTML, JavaScript, fonts, images, and video files is expected. Runtime enrollment, progress, notes, quizzes, and certificates must run entirely in the browser. No account with an external service or secret API key should be needed to use the finished demo.

## B. Brand and audience

- Brand: **FRAME ACADEMY**.
- Project/package slug: `frame-academy`.
- Brand line: **Learn to see differently.**
- Descriptor: **Photography, film, and visual storytelling.**
- Positioning: a focused creative academy where people learn a visual technique and immediately make something with it.
- Audience: aspiring photographers, filmmakers, designers, and content creators, from beginners to early professionals.
- Character: confident, cinematic, direct, creative, and serious about craft without becoming elitist.
- Default language: English. Any displayed demo prices use USD; this is an editable fictional catalog setting, not an assumption about my location.

Write an original concise brand story around observation, practice, and making intentional creative work. Use specific language about what learners will do. Avoid generic claims about “unlocking potential,” guaranteed careers, or becoming a master overnight.

This is a fictional working identity and a self-initiated portfolio project. Do not claim trademark/domain availability, accreditation, real student counts, professional endorsements, press coverage, celebrity involvement, or measured educational outcomes.

## C. Preserve the selected visual identity

The approved direction is **cinematic and photographic**. Do not restart style discovery or substitute a bright campus, playful school, warm lifestyle store, or architecture-index aesthetic.

Starting palette, implemented as semantic tokens:

- Cinema charcoal `#151719`: primary canvas.
- Raised charcoal `#222629`: cards, drawers, and useful surface separation.
- Warm ivory `#F8F7F2`: primary text.
- Acid yellow `#E5F16C`: restrained signature accent, primary actions, progress, and selected states.
- Muted silver `#B0B6BA`: supporting text, subject to contrast verification.
- Slate `#414547`: quiet borders and separators.

Use **Barlow Condensed**, usually semibold, for expressive display headings and the wordmark, and **DM Sans** for body copy and UI. Keep long text and controls out of the condensed display face. Load only useful weights and verify licensing and rendering. A different font is acceptable only if the original cannot be used and the replacement preserves the approved character.

Use bold, closely composed display type, confident negative space, large photographic covers, and a disciplined grid. Accent yellow should occupy small, intentional areas, not flood every section. Keep photographic skin tones and natural color believable. Differentiate dark surfaces through tone, spacing, and hierarchy rather than glow effects.

Create a typographic wordmark, a simple original frame/aperture-inspired mark, favicon, and social-cover identity. Do not use a generic graduation cap, cartoon mascot, or stock school logo.

## D. Visual composition and boundaries

Aim for the polish of a considered film publication combined with an excellent learning product. The public pages should make the courses desirable; the learning pages should make studying comfortable and obvious.

Establish three memorable moments:

1. A photographic opening composition with a clear promise and course entry point.
2. A course detail page built around specific visual work and a compelling lesson preview.
3. A focused lesson player with unusually good notes, transcript, and course navigation.

Use a still image as the default hero. Do not add autoplay background video, audio, mandatory intro sequences, or a preloader that delays access. A short preview video belongs behind an explicit play action.

Avoid generic feature-icon grids, indiscriminate rounded containers, glass panels, glowing gradients, fake review stars, countdowns, default UI-library styling, and repeated identical section layouts. Do not copy another academy's layout, instructors, course names, logo, or media. Study references only for specific principles.

No scroll hijacking, custom cursor, forced horizontal scrolling, hover-only navigation, or giant typography that pushes all course imagery below the first screen. Horizontal course shelves must have visible accessible alternatives and should not be the only catalog layout.

## E. Photography and instructor imagery

Photography is a core deliverable, not interchangeable filler. Prepare an art-directed image plan for the hero, six course covers, instructor portraits, lesson demonstrations, dashboard thumbnails, and social covers.

Use dramatic but believable studio portraits, behind-the-scenes working environments, contact sheets, controlled lighting setups, film stills, and the work produced by each technique. Every course should have an individual visual identity within the same photographic world.

Use available image-generation tools for original fictional visuals, or verified suitably licensed imagery. Preserve instructor identity across portrait variants and match each cover to the actual course subject. Do not assign a real photographer's portrait to a fictional teacher or imply a celebrity teaches here.

Provide one excellent homepage hero; six distinct covers; three consistent fictional instructor portraits; and enough relevant examples for every required lesson. Generate or source assets early. No final placeholders, broken hotlinks, random image endpoints, stretched images, or unrelated stock photographs.

Record asset provenance, usage/license basis, prompts where applicable, associations, and alt text in `docs/ASSETS.md`. Clearly credit generated instructor personas as fictional in an appropriate credits/demo context. Do not add fake awards or biographies to make them seem authoritative.

## F. Realistic, complete course content

Create **six short, complete demo courses**, with stable IDs and readable slugs:

| Course | Level | Learning outcome | Demo price |
| --- | --- | --- | --- |
| Light & Shadow | Beginner | Use a single light source to shape a portrait or still life. | $49 |
| Composition in Motion | Beginner | Frame a short visual sequence with clear subject emphasis. | $59 |
| Portraits with Presence | Intermediate | Plan a portrait through light, background, and direction. | $69 |
| The Art of the Short Film | Beginner | Turn a small idea into a coherent three-shot sequence. | $79 |
| Color & Mood | Intermediate | Explain and apply a simple color treatment consistently. | $59 |
| Edit for the Story | Intermediate | Assemble a short sequence with intentional rhythm and continuity. | $69 |

These are intentionally compact sample courses, not fabricated multi-hour productions. Make Light & Shadow the flagship. Provide useful prerequisites, equipment guidance, three specific learning outcomes, instructor association, curriculum, visual examples, and accurate media duration for each course.

Each course contains three complete lessons: one playable teaching clip, one illustrated reading with examples, and one guided practice assignment. Add a final five-question quiz. That gives **18 lessons and six quizzes**. Required content must exist and be meaningful; do not pad the curriculum with locked, empty, or “coming soon” lessons.

Write roughly 350–650 useful words for each illustrated reading, a clear brief/checklist for each assignment, and correct answers with explanations for quizzes. Provide at least one useful original downloadable text/worksheet resource per course. Label reading time as an estimate and calculate total video duration from actual files.

Use three fictional instructor personas with concise, original teaching approaches. Do not invent degrees, employer histories, professional awards, real credits, or course ratings.

## G. Playable video and media scope

Each course needs one genuine, relevant teaching clip, approximately 45–120 seconds. Source lawful, suitable material or create an original compact explainer from authored visuals, diagrams, cuts, and instructional overlays using available tools. A concise visual demonstration is sufficient; a simulated hours-long lecture is not.

If voice/video-generation tools are unavailable, create an honest text-led teaching clip with visual examples and a readable transcript. Do not fabricate a speaking instructor by silently attaching unrelated footage. Do not use a frozen poster, a fake timer, or the same unrelated stock clip as every lesson.

Ship broadly compatible static video files, such as tested MP4/H.264, with meaningful poster images. Every spoken clip needs accurate captions; silent visual clips need equivalent explanatory text/transcripts. Record media format, duration, size, credits, and content associations in `docs/MEDIA.md`.

Budget media deliberately: short, compressed, useful clips; a practical total video target around 80–120 MB or lower if quality allows; no preloading every course video. This is a project budget, not a claim about a hosting provider's limit. Verify actual decoding and playback in the available browsers.

Keep videos, images, captions, and download files in the static asset tree, never in `localStorage`, base64 storage entries, or a hidden database. Browsers still need to fetch static files from the site; do not promise offline video availability without an implemented and tested offline feature.

If required media cannot be produced with available tools, continue independent work and report the exact missing assets. Do not declare the academy complete with fake players or unavailable lessons.

## H. Routes and information architecture

Implement complete pages with sensible shared navigation:

- `/`: flagship course, creative identity, and course discovery.
- `/courses` and `/courses/[slug]`: catalog and six course detail pages.
- `/instructors` and `/instructors/[slug]`: three fictional teaching profiles.
- `/about`: academy approach and honest concept background.
- `/enroll?course=...`: local demo enrollment review.
- `/enrollment/confirmation?ref=...`: local enrollment confirmation.
- `/learn/[courseSlug]/[lessonSlug]`: all 18 known lesson pages.
- `/learn/[courseSlug]/quiz`: six course quizzes.
- `/my-learning`: learner dashboard and resume flow.
- `/saved`: saved courses.
- `/notes`: local notes with course/lesson filtering.
- `/certificates` and `/certificate?course=...`: locally earned demo certificates.
- `/profile`: sample learner name and local preferences.
- `/help` and `/contact`: help content and a locally saved support request.
- `/demo`: sample learner states, local support-message viewer, data explanation, and scoped reset.
- `/privacy` and useful not-found/missing-record states.

Pre-generate all known course, instructor, lesson, and quiz paths. Runtime-created references belong in query parameters on fixed routes. Do not require a server to resolve an enrollment, note, or certificate URL. Invalid slugs must not silently display a different course.

## I. Homepage and discovery

Make “Learn to see differently” the opening promise. Place a substantial photographic subject alongside a concise description and clear Browse courses and Preview a lesson actions. Establish the academy category within the first viewport.

Present the flagship course, a curated course sequence, a visual demonstration of a technique, instructor introductions, and an invitation to start learning. Use varying image scale and a paced layout, not repeated marketing filler. Demonstrate an actual lesson example rather than merely claiming the courses are practical.

Keep course names, subjects, level, lesson count, price, and demo context legible. Instructors and course content should be discoverable without enrollment. Do not fabricate community size or testimonials.

The catalog supports search, subject and level filters, and sensible sorting. Persist filters in public URL parameters; include result counts, active filters, reset, and no-results guidance. Six courses do not need artificial pagination. Save actions should work consistently across catalog and detail pages.

## J. Course detail experience

Design each course page around its own strong image, clear outcome, actual curriculum, instructor, requirements, and example work. Include a real lesson preview, honest duration, demo price, save/share actions, and enrollment state.

Let visitors inspect the curriculum and watch the designated preview lesson before enrolling. Once enrolled, the primary action becomes Continue learning or Review course. A completed course remains accessible.

A sticky enrollment summary is acceptable where useful, including a compact mobile action, but it must not obscure content or keyboard focus. Every visible module/lesson needs a valid route and accurate status.

Avoid sales pressure. There is no subscription, recurring billing, discount timer, or fake scarcity. The offer is one-time simulated access to a short demo course.

## K. Browser-only enrollment

Provide a one-course enrollment review with course name, price, what is included, optional sample learner details, and a clear total. The displayed demo price is the entire simulated amount; no extra tax, service charge, or live payment is collected.

The action must say **Enroll in demo** and clearly state that no payment is taken. No credit-card fields, Stripe, payment tokens, external checkout, password form, or email delivery service.

Use an existing local learner profile or create a sample one. Real email is unnecessary; use example-domain data when email-shaped content is useful. Save a stable enrollment record with course ID, original price/currency snapshot, timestamp, and receipt reference. Duplicate enrollment must reuse the existing access rather than create another purchase.

Only show persistent-success feedback after storage succeeds. If storage is unavailable, offer explicitly temporary access for the current page session with honest messaging. Do not claim a failed write was saved.

Enrollment gates are for demonstrating UI behavior, not security. All static content remains technically inspectable. Do not describe frontend checks as a paywall, DRM, authorization, or protected course hosting.

## L. Learning player and workspace

Design a focused dark learning screen: prominent media area, clear course/lesson identity, curriculum navigation, and well-organized Notes, Transcript, and Resources. Retain the brand without surrounding every control with decorative effects.

Implement actual media controls: play/pause, seek, volume/mute, playback speed, captions where available, and fullscreen when supported. Prefer accessible native controls or a small, well-tested player with a carefully designed shell. Gracefully handle unsupported controls, loading, buffering, playback errors, and rejected play requests.

Restore the saved playhead after media metadata is available, clamped to the actual duration. Never autoplay audible media. Preserve learner control when navigating; focus changes should be predictable. Transcript timestamps and video bookmarks must seek the real player when the learner activates them.

Reading lessons use comfortable line lengths and visual examples, rather than putting every lesson into a fake video frame. Practice lessons provide a clear brief, checklist, and text reflection field. On mobile, use an accessible curriculum drawer or compact selector, readable tabs, and stacked notes; avoid recreating a cramped desktop dashboard.

Use [HTML video behavior and accessibility guidance](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) for the actual implementation.

## M. Completion and resume rules

Keep playback position separate from completion. Persist progress on a reasonable throttle and on pause, ended, route change, and page visibility change where reliable. Do not write storage on every animation frame or claim browser-close writes are guaranteed.

Use transparent demo completion rules:

- A video lesson completes when playback reaches the end, or the learner explicitly activates Mark complete. Seeking ahead and manual completion are allowed in this portfolio demo; neither is verified attendance.
- An illustrated reading completes through an explicit Mark complete action.
- A practice lesson completes when its required checklist and a short locally saved reflection are submitted.
- A course completes only after all three required lessons are complete and its quiz has been passed.

Completion operations must be idempotent. Rewatching must not erase completion or repeatedly award certificates. Store a course-completion timestamp once; calculate lesson progress from required lesson IDs, not arbitrary percentages.

If lessons are complete but the quiz is not passed, show “Lessons complete — quiz remaining,” not “Course complete.” Continue learning should return to the last unfinished lesson or the remaining quiz, with a stable fallback if content has changed. Completed courses offer Review course.

## N. Notes, bookmarks, and resources

Support creating, editing, and deleting plain-text notes, associated with a course and lesson. Video notes may include the current timestamp; reading/practice notes should use their lesson title without an invented timestamp. Show saved/saving/error feedback accurately.

Provide a searchable local notes page with course/lesson filters and working navigation back to the lesson. Allow exporting notes as a readable text or Markdown file. Bookmark actions store lesson IDs and actual timestamps separately from notes, with safe seek behavior.

Save plain text rather than rendering arbitrary HTML. Avoid storing large attachments. Every resource link must download/open an actual, relevant file; captions, transcripts, exercises, and worksheets must match their lessons.

Do not add comments, peer reviews, chats, or teacher replies that imply a live community. A private practice reflection is enough to show the assignment workflow honestly.

## O. Quizzes and demo certificates

Each course has five original multiple-choice questions with one correct answer each, meaningful distractors, and explanatory feedback. Save quiz answers as a draft, require completion before submission, and calculate the score consistently. Passing is **at least four correct answers out of five**.

Allow retries. Preserve attempt history, latest result, and best score; once a learner has passed, a later lower score must not erase the achievement. Avoid awarding duplicate completions on repeated submission. Show feedback as useful explanations, not just green/red decorations.

When all completion conditions are met, create one local certificate record per course. Design a restrained, attractive certificate with learner display name, course title, date, studio/academy mark, and a local reference. Include **Demo completion certificate — portfolio project; not accredited** legibly.

Provide a real downloadable image or PDF generated in the browser, plus a usable print view. Load fonts before rendering, support multiline names, and verify the result. A small client-only export dependency is acceptable if justified and loaded on demand.

This certificate is not proof of real training, accreditation, identity, or employment eligibility. Do not include a fake verification service, signature, or QR code leading to nonexistent validation. A local certificate URL will not reproduce the learner's achievement on another device; offer file download rather than claiming public certificate sharing.

## P. Learner dashboard, profile, and demo states

Make My Learning visually as polished as the homepage. Show Continue learning prominently, then enrolled courses, meaningful completion states, saved courses, recent notes, and earned demo certificates. Use actual local records; no invented study streaks, watched hours, or performance graphs.

Allow editing a local display name and relevant player preferences. Explain that it is a browser profile with no password or synchronization. Preserve existing certificate snapshots, or provide an explicit regenerate-with-current-name action if changing their display name is supported; do not silently change issued history.

At `/demo`, offer deliberate Fresh learner, In-progress learner, and Completed-course sample states. Switching a scenario that replaces existing records requires confirmation. Seed deterministic sample records that agree with their progress and certificate rules, and never overwrite a visitor's data automatically at page load.

Make the demo navigable in a few minutes while keeping its interactions real. Provide shortcuts to a sample lesson, notes, quiz, and certificate demonstration. No multi-student instructor dashboard, staff permissions, CMS, or revenue analytics is required.

## Q. Local storage architecture and resilience

Use bundled typed fixtures for courses, instructor personas, lesson content, media/resource paths, and quiz definitions. Use one lightweight client store and a storage adapter for mutable records; React context/reducer or Zustand is sufficient. Do not install several state frameworks.

Persist a namespaced, versioned envelope such as `frame-academy:demo:v1`, with schema version, revision, learner profile, enrollments, saved course IDs, lesson completion/playheads, quiz drafts/attempts, notes, bookmarks, certificates, and local support requests. Use stable IDs, ISO event timestamps, and explicit relationships.

Read browser APIs only in browser-safe code. Hydrate and validate saved state before persisting changes. Never write an empty initial store over existing progress while hydration is still running. Keep first-render markup consistent and limit hydration placeholders to stateful areas; public course copy and imagery should appear immediately.

Handle unknown fixture IDs, older schemas, malformed JSON, disabled storage, and quota errors. Preserve recoverable records where practical. Explain whether changes are temporary, and offer a scoped reset instead of crashing. Do not store images, video, passwords, payment details, tokens, or sensitive personal documents.

Throttle high-frequency playhead writes, persist important actions promptly, and use storage events for same-origin tab updates. Re-read current records before mutations and avoid stale whole-store overwrites; do not promise atomic cross-tab transactions or concurrent multi-user correctness.

Reset only this app's keys after confirmation. Never call `localStorage.clear()`. Deleting/resetting course progress should clearly describe which attempts/certificates it invalidates and apply that decision consistently. Keep broad reset confined to the explicit demo control.

Document that data belongs to the current browser profile and site origin, is user-editable, can be cleared by the browser/user, and does not sync across devices. These limits are deliberate; do not solve them by adding a backend. Refer to [MDN's localStorage documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) when needed.

## R. Next.js and code organization

Use a supported stable Next.js release with App Router, TypeScript strict mode, and compatible React dependencies. Inspect an existing project before scaffolding, preserve useful work and its package manager, and verify version-specific APIs against official documentation.

Configure `output: 'export'`; use portable static routing such as `trailingSlash: true` when appropriate. Generate all known content/lesson paths at build time. Use fixed pages with client query readers for local receipts/certificates and required Suspense boundaries. No runtime server, Server Actions, request-time APIs, middleware auth, or secret environment variables.

Build-render static content and metadata; use Client Components for player, local state, notes, enrollment, quizzes, and certificate exports. Do not turn the whole website into one giant client component just because learner data is local. Keep pure progress/scoring functions separate from storage and presentation.

Organize around catalog/content, learning/media, learner state, assessments, certificates, and shared UI. Use CSS and/or Tailwind with semantic tokens; accessible headless primitives are welcome, but author the visual layer. Prefer small, specific dependencies and CSS motion where sufficient.

Use a static-compatible image strategy and preoptimized assets. Do not depend on the default Next.js runtime image optimizer in a static deployment. Inspect the actual export over an HTTP server, including direct lesson-page refreshes. Follow the [official static-export documentation](https://nextjs.org/docs/app/guides/static-exports).

## S. Social-link previews and discoverability

Create designed **1200 × 630 JPEG or PNG** social images for the homepage and all six course pages, with appropriate fallback coverage for other public routes. These are important portfolio assets, not screenshots of the entire webpage.

Use cinematic photography, the FRAME ACADEMY identity, readable course titles, and the restrained yellow accent. Let the subject dominate, keep text short, and inspect at thumbnail size and with a centered square crop. Generate final typography deterministically from actual fonts rather than relying on AI-generated lettering.

Create social assets at build time from available media. Export accurate per-route title, description, canonical URL, Open Graph fields, absolute image URLs, dimensions/alt text, and Twitter `summary_large_image` metadata into the static HTML. Use the actual public HTTPS origin through one documented build-time site-URL setting. Do not leave localhost/example URLs in a share-ready build.

Public course metadata comes from static fixtures, never a browser effect, learner name, local progress, or quiz result. Check that inherited/file-based metadata does not override the intended course image. Sharing should use canonical public course URLs without personal fields; clipboard/native share must handle success, denial, and cancellation honestly.

Use a discreet fictional-project disclosure and a demo indexing policy, normally `noindex` while keeping public pages and social images fetchable. Do not block preview crawlers with a blanket disallow. Do not invent structured-data ratings or accreditation claims.

Verify exported tags and image files locally, and verify representative actual unfurls only if an authorized public deployment and suitable tools are available. State that local URLs cannot be fetched by external chat services and platforms may crop/cache/suppress previews. No unsolicited posting or messaging is authorized.

Use [Next.js metadata and Open Graph guidance](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) for implementation.

## T. Accessibility, responsiveness, and performance

Design intentionally at roughly 360–390px, 768px, 1024px, and 1440px, plus the actual preview viewport. Preserve image impact, readable curricula, playable media, and comfortable notes on mobile. Check long titles/names, multiline prices, validation errors, and larger text for overflow.

Use semantic landmarks, logical headings, visible labels, contrast verified on actual dark surfaces, visible focus, meaningful image alternatives, and appropriately announced state changes. Target WCAG 2.2 AA without claiming conformance from an automated score alone. Caption spoken material and provide usable transcripts/text equivalents.

Use keyboard-operable player controls and dialogs, visible curriculum access, focus restoration, reduced motion, and generous touch targets. Never hide essential actions behind hover or color. Do not let sticky controls obscure focus or text.

Prioritize the actual hero/LCP image, reserve dimensions, load fonts predictably, and lazy-load heavy media and certificate generation. Use appropriate video preload behavior and no automatic downloads for every lesson. Measure representative public and learning pages and report actual results; do not invent performance scores.

## U. Forms, honest demo copy, and documentation

Help content should explain enrollment, resuming, notes, quizzes, certificate rules, and browser-only persistence. A contact/support form may save a small local request and show it on `/demo`; it must say “Saved in this demo,” not “Email sent” or “An instructor will reply.” Avoid a newsletter form unless it has a clear local purpose.

Place a discreet concept disclosure in the footer and clear notices at enrollment, profile/demo entry, and certificate export: **Portfolio demo. Learning data is stored in this browser. No payment is taken.** Keep normal lesson copy focused on learning rather than implementation details.

Create or carefully update these documents after reading existing instructions:

- `AGENTS.md`: concise AI operating rules, document read order, approved cinematic identity, browser-only invariant, code boundaries, real verification commands, and completion criteria.
- `README.md`: purpose, screenshots, implemented features, exact prerequisites/setup/run/build/static-preview commands, local data behavior, demo walkthrough, media setup, certificate rules, social-preview configuration, limitations, and credits. Explicitly state no database or service keys are required.
- `PRODUCT.md`: brand, audience, course/instructor catalog, routes, learning journeys, completion rules, scope, and acceptance criteria.
- `DESIGN.md`: typography, palette/tokens, photographic direction, compositions, components/states, motion, responsive behavior, and the chosen A direction.
- `docs/ARCHITECTURE.md`: content schema, storage/hydration, learner record relationships, enrollment/completion/scoring, static routes, and certificate generation.
- `docs/ASSETS.md` and `docs/MEDIA.md`: provenance and licenses, images, video/caption/transcript associations, actual durations/sizes, generation process, and missing assets.
- `docs/SOCIAL-PREVIEWS.md`: cover files, route metadata, public-origin setting, local/deployed verification, and caching limitations.
- `docs/QA.md`: checks actually run, browser/media/export results, screenshots, and unresolved issues.
- `docs/STATUS.md`: completed/pending/blocked work and next concrete action for continuation.
- `.env.example`: only non-secret optional configuration such as the public site origin; no unnecessary backend variables.

Keep documentation useful and proportional. Do not spend most of the project writing plans or describe unimplemented features as completed.

## V. AI working rules and build order

Read the project instructions, product/design documents, and current status before later sessions. Preserve the selected cinematic style. Make normal reversible implementation decisions yourself; do not repeatedly ask me to choose fonts, components, libraries, or the next step.

Use available design skills deliberately. Ask only for a genuine blocker, a material conflict, or an action needing authorization. Missing optional services must not block this deliberately service-free demo. Do not buy assets, register domains, publish externally, or send messages without authorization.

Preserve user work, fix root causes, avoid dependency sprawl, and never disable type/lint/build checks to hide failures. Do not claim generated media, browser inspection, tests, or deployment without evidence. Maintain an accurate checkpoint across sessions and do not silently reduce required functionality.

Build in this order:

1. Inspect the repository and tools; create concise durable rules, scope, and design direction.
2. Prepare the identity, hero, flagship cover, one complete teaching clip, and representative lesson content.
3. Build a complete homepage, flagship course page, learning screen, and homepage/course social covers. Inspect desktop/mobile and thumbnail presentation; correct major design gaps before expanding.
4. Complete all six short courses, catalog, instructor pages, and media/resources.
5. Connect local enrollment, learner dashboard, progress, notes, practice work, quizzes, and certificate generation through one coherent state model.
6. Finish remaining states, responsive/accessibility work, static-export verification, documentation, and handoff.

The early visual checkpoint is internal quality control, not a reason to pause for routine approval. Continue through the complete scoped academy. Do not build a large admin system before making the public and learning screens excellent.

## W. Functional and visual verification

Run actual typecheck, lint, focused automated tests, and the production static build. Tests should cover fixture relationships, completion rules, quiz thresholds/retries, idempotent enrollment/awards, continue-learning selection, storage hydration/migration/reset/failure, and course/social metadata mappings. Test real boundaries rather than adding tests that merely repeat implementation.

Where tools permit, exercise:

1. Course search/filter/save and direct course URL refresh.
2. Preview playback before enrollment, enrollment without credentials, duplicate enrollment, and persistent confirmation.
3. Playback, seeking, speed, captions, saved playhead restoration, buffering/error handling, and lesson navigation.
4. Video/manual completion, reading completion, and practice submission with accurate progress.
5. Create/edit/delete a timestamped note; refresh; find it globally; seek back to the correct lesson time; export notes.
6. Fail the quiz, see explanations, retry successfully, and verify the best result and completion conditions.
7. Confirm that a certificate is unavailable before requirements are met and appears once they are; inspect an actual downloaded/printed certificate.
8. Resume from another route, reset a course deliberately, and confirm progress/certificate state stays consistent.
9. Recover from corrupt/disabled/full storage; ensure app reset leaves unrelated origin keys untouched; verify separate browser contexts do not pretend to sync.
10. Verify every lesson/resource/media URL in the static export, accurate durations, readable captions/transcripts, and nested-route refreshes.
11. Inspect homepage/course metadata without executing JavaScript, confirm intended absolute social-image URLs, and inspect the cover files at chat size.
12. Navigate the main flows with keyboard and at mobile widths; record limits in the browsers actually tested.

Capture public pages, course details, the learning screen, dashboard, quiz, certificate, and social covers in a batched visual pass. Check composition, photographic relevance, typography, contrast, crop, density, loading, and overflow. Fix material findings together and perform one confirmation pass. Avoid endless aesthetic micro-edits after acceptance criteria are met.

Record missing/unrun checks honestly. A passing build is not proof of playable lessons, persistent progress, or good visual design.

## X. Completion criteria and intentional exclusions

Required: a coherent cinematic photographic identity across routes; six complete short courses; 18 real lessons including six playable teaching clips; six useful quizzes; accurate media/text resources; six detailed course pages and three instructor profiles; local enrollment/save/resume; working notes/bookmarks/practice; a useful dashboard; earned demo certificates with real export; browser persistence; and a functioning static build with complete social assets and metadata.

Excluded: real payments, subscriptions, databases, backend APIs, cloud accounts, credentialed authentication, protected video/DRM, actual accreditation, real teacher messaging, peer communities, file uploads, a course-authoring CMS, multi-student analytics, production instructor administration, and offline video downloads.

These exclusions are deliberate portfolio scope. Do not implement them or use their absence as a reason to replace local interactions with dead buttons. If a limitation blocks a required feature, explain exactly what remains and do not call the project complete.

## Y. Final handoff

Provide the local preview URL, exact setup/run/build/static-preview commands, portfolio-ready desktop/mobile captures, homepage and representative course social covers, and a concise demo walkthrough from discovery to certificate.

Report checks actually performed, media that plays, where browser data is stored/reset, how to set the public origin, and any unresolved limitations. Distinguish locally verified metadata from an actual preview fetched after an authorized deployment. Do not claim a live site or cross-device persistence.

Provide a short factual agency case-study draft explaining the design choices and frontend learning workflows, with no invented student outcomes or client results. Leave accurate status documentation if work remains.

## Z. Begin

**Start by inspecting the project and establishing its durable instructions. Build the approved FRAME ACADEMY cinematic direction, prove it in the homepage/course/player/social-cover combination, then complete the browser-only learning experience. The result should demonstrate both exceptional visual design and useful, working frontend product behavior.**
