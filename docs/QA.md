# Verification record

Verified locally on September 10, 2026. The complete static application and learning journey pass the checks below. There is no authorized public deployment or supplied public origin. Local evidence does not imply real external social unfurls or cross-device persistence.

## Environment and checks

macOS, Node 26.0.0, npm 11.12.1, Next.js 16.3.4, React 19.3.0. Browser: installed Google Chrome 152.0.7977.83, headless through Playwright, served from exported `out/` at `http://127.0.0.1:4173`. Desktop/mobile widths are browser emulations, not physical devices.

| Check actually run | Result |
|---|---|
| `npm run typecheck` | Pass; strict TypeScript |
| `npm run lint` | Pass; no rules disabled to conceal errors |
| `npm test` | 17 passing model/storage/content/metadata tests |
| `NEXT_PUBLIC_SITE_URL=https://frame-academy.test npm test` | 17 pass with reserved test-origin metadata; does not configure the delivered build |
| `npm run build` | Pass; 49 required routes plus framework not-found output |
| `npm run verify:export` | 49 routes, 1,571 references, six full H.264 decodes, 18 resource files, six diagrams, seven social covers |
| `npm run test:browser` | 21 grouped flow checks; six actual MP4 playbacks; zero unexpected page errors |
| `node scripts/browser-finish-check.mjs` | Five additional checks for the final profile/print/capture changes, long-name export and fullscreen |
| `npm audit --audit-level=low` | Zero reported vulnerabilities at verification time |
| PDF extraction + rendered inspection | Normal, spaced and unbroken 120-character samples each fit one page and retain the disclosure |
| Design detector / raster provenance scan | One detector pass: no findings; all 17 shipping rasters carry provenance |

The full browser suite ran before the final profile-name validation and print CSS adjustment; the focused final script then exercised those changes. Production output was rebuilt and export verification rerun after the last CSS change. Evidence files: `browser-results.json`, `finish-results.json`, `print-results.json`, `export-results.json`, and `media-manifest.json`.

## Model and resilience boundaries

Tests verify fixture/ID relationships and original reading lengths; idempotent enrollment and saved prices; explicit video/reading/practice completion; 4/5 quiz threshold; draft validation and retries (including more than 60 later failures preserving an earlier pass); exactly one certificate with issuance snapshots; resume selection; consistent course resets; schema migration/clamping/rescoring; no hydration overwrite; corrupt/future envelope preservation; failed-write honesty; temporary sessions; disabled storage; re-read-before-mutation and tab reconciliation. Plain-text records are not rendered as arbitrary HTML.

## Browser flow coverage

1. Keyboard skip link and public homepage.
2. Catalog filters/search/sort, URL persistence, empty results and saved courses.
3. Actual H.264 preview playback before enrollment.
4. Credential-free enrollment, persistent confirmation and duplicate receipt reuse.
5. Seek, speed, mute/volume, captions, playhead restore, notes CRUD and bookmarks.
6. Global note search/filter, Markdown download and timestamp navigation.
7. Manual video, explicit reading and validated practice completion; certificate remains gated.
8. Quiz draft, required answers, failed explanations, retry and certificate award.
9. Actual certificate PNG download and browser print-to-PDF.
10. Profile edits preserve issued certificate snapshots.
11. Local support request and Demo viewer.
12. Six distinct MP4 files decode and advance in Chrome.
13. Real ended completion and consistent confirmed course reset.
14. Separate browser contexts have independent records.
15. Cross-tab saved-course updates.
16. Corrupt storage recovery and app-scoped reset.
17. Disabled/quota storage and explicit temporary access.
18. Media failure provides retry and transcript recovery.
19. 1440/1024/768/390/360px routes, overflow checks and mobile navigation.
20. 200% homepage text sizing and reduced-motion behavior.
21. Unknown slugs and missing receipt states.

Final focused checks:

- Whitespace-only profile names are rejected without changing saved identity.
- Desktop/mobile quiz captures show the same submitted state without focused skip-link artifacts.
- Certificate print root uses a light page background and the real PNG export remains 1800×1200.
- Maximum-length spaced and unbroken certificate names export as real PNGs and avoid mobile overflow.
- Native video enters and exits the browser Fullscreen API in tested Chrome.

Long-name rendering uses deliberately injected, validated certificate snapshots in an isolated test browser. The main browser suite separately earns a certificate through actual enrollment, lesson completion, practice and quiz controls. PNG files are real browser downloads, 1800 × 1200. PDFs are real browser print output, extracted with pypdf and rendered with Poppler. The intermediate multi-page long-name PDFs came from a capture script forcing screen media; resetting media emulation corrected that harness error. Final prints use the actual print stylesheet.

## Accessibility and responsive evidence

Seven axe scans reported zero violations: desktop home, course, player and dashboard; mobile home, course and quiz. Five routes (home, course, player, dashboard, catalog) at 1440, 1024, 768, 390 and 360 pixels produced 25 checks without horizontal overflow. Keyboard skip navigation, visible focus, arrow-key workspace tabs, labels, quiz validation and mobile navigation were exercised. The homepage also passed a 200% root-font overflow check; reduced-motion styling disables smooth scrolling.

These checks support accessibility work; they are not a WCAG 2.2 conformance certification. Full assistive-technology testing was not performed. Video teaching overlays are small at portrait-phone width; native fullscreen and the comfortably sized transcript provide equivalent access. The silent clips have explanatory text captions and no missing spoken content.

## Local performance observations

| Page / viewport | Observed LCP | CLS | DOM content loaded | Resource transfer bytes | Requests |
|---|---:|---:|---:|---:|---:|
| player-desktop | 36 ms | 0.00050 | 7.8 ms | 1,114,264 | 55 |
| home-1440 | 28 ms | 0.00132 | 6.6 ms | 1,589,548 | 56 |
| course-1440 | 28 ms | 0.00000 | 6.6 ms | 1,302,308 | 45 |
| home-390 | 32 ms | 0.00005 | 6.8 ms | 1,500,425 | 41 |
| course-390 | 28 ms | 0.04831 | 7.0 ms | 1,215,004 | 34 |

These are local, unthrottled PerformanceObserver/navigation measurements in a reused Chrome process. Capture preparation eagerly decoded page images. They are not Lighthouse scores, field data, cold mobile-network estimates or real deployment timings. The very low localhost times should not be generalized. Media files total 5,131,821 bytes; only the active video preloads metadata. Fonts/images are local, dimensions reserved, and certificate code loads on demand.

## Visual evidence

Final full-page desktop/mobile pairs are in `docs/screenshots/`: `home`, `course`, `player`, `dashboard`, `catalog`, `quiz` and `certificate`, each with `-desktop.png` / `-mobile.png`. Homepage first-viewport crops are `home-desktop-viewport.png` and `home-mobile-viewport.png`. All image assets were decoded before final capture. Quiz captures now show the same submitted state; focus was moved off the skip link for the portfolio image without removing keyboard behavior.

`social-thumbnail-crops.png` compares all seven covers at thumbnail scale and centered square crop. `certificate-print.png` and `certificate-print-unbroken-name.png` show actual print rendering. `docs/downloads/` contains the normal/long-name certificate PNG/PDF files and a real notes Markdown export. Image-generation prompts, source records and font licenses are documented in ASSETS/MEDIA.

Independent Impeccable finish reviewer disposition: **Ship**. The final full review covered 14 desktop/mobile captures, social crops, normal/long-name certificate outputs and print evidence. It reported no remaining material visual findings. This is visual sign-off; functionality and PDF page counts were supplied test evidence, not independently rerun. The initial quiz capture defect came from smooth scrolling still in progress; instant scroll, settled frames and an offscreen skip-link assertion corrected the actual saved PNGs without changing keyboard behavior.

## Corrected defects and explicit limits

A failed MP4 could emit its source error before React attached the source listener. Using the video element's `src` plus an initial error inspection made retry/transcript recovery reliable; the blocked-request browser test passes. Whitespace-only names now produce an actionable validation message without overwriting the profile. Print root color scheme and spacing are explicit. Certificate name/date snapshots remain stable.

No unresolved blocker is known in the verified local scope. The following remain unrun or intentionally external:

- Safari, Firefox, physical iOS/Android devices, real screen readers and physical printing.
- Network-throttled buffering transitions (the waiting UI is implemented; failed media and retry availability were tested).
- Native share/clipboard success, cancellation and denial on an actual configured public deployment.
- Real public HTTPS canonical/image fetches and external chat previews; no real origin was supplied and no publication was authorized. The local export intentionally omits absolute canonical/OG-image links; the build-time mapping and reserved test-origin mapping are verified.
- Native WebMCP integration; progress/navigation tools are feature-detected and optional. Ordinary browser flows do not depend on it.

No payments, external accounts, live messaging, database, protected media, accreditation or synchronization is implemented or implied. Browser records are editable and concurrent same-origin writes are not atomic transactions.

## Handoff closure

After the usage-limit interruption, the existing application evidence was preserved. The static preview at port 4173 returned HTTP 200. DESIGN.md now follows the canonical design-document format, and `.impeccable/design.json` parses as schemaVersion 2 with ten component references matching DESIGN.md. The delegated documentation pass saved both files; its final validation and closure were completed locally. No application code changed during this resumed documentation handoff, so the passing functional suites were not repeated unnecessarily.

The final record preserves the charcoal/ivory/acid palette, contextual Barlow/DM type hierarchy, square controls, tonal separation, visible focus and responsive layouts. Specialized certificate print/PNG styles are documented as distinct compositions. Incidental small header-control sizes and synthetic color ramps are descriptive evidence, not new universal interface rules.
