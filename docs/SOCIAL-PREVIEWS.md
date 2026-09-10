# Social previews

Seven final JPEGs in `public/social/`, all 1200 × 630: `home.jpg`, `light-and-shadow.jpg`, `composition-in-motion.jpg`, `portraits-with-presence.jpg`, `the-art-of-the-short-film.jpg`, `color-and-mood.jpg`, `edit-for-the-story.jpg`.

The original photographs remain the main subject. Real Barlow Condensed and DM Sans fonts, the shared original SVG mark and a restrained yellow rule are rendered deterministically in Chrome by `npm run social`. Titles/marks fit the central 630-pixel square; `docs/screenshots/social-thumbnail-crops.png` compares all covers at 400 × 210 and in centered square crops. Small secondary copy may be cropped or unreadable at tiny platform sizes; course titles remain the priority.

`src/lib/meta.ts` maps each public course to its own title, description, canonical and cover. Metadata is emitted at build time, never based on learner state. No file-based Next OG image can override the mapping because none is defined. Other public routes use the designed homepage fallback. `twitter:card` is `summary_large_image`. All pages use `noindex, follow`; robots.txt permits fetching rather than blocking preview crawlers.

## Origin and build

Set `NEXT_PUBLIC_SITE_URL` to the actual authorized public HTTPS origin in `.env.local` or the build environment. Do not include a path, query or fragment. `scripts/check-origin.mjs` loads Next’s env files and validates the setting. `npm run build:share` requires it; `npm run build` allows a local-only export without invented absolute links. Both the canonical and image origin come from this one value.

No public origin or deployment was authorized/supplied here. Therefore the final local build has accurate per-route title/description/Twitter card metadata and intentionally omits absolute canonical/OG-image links. The production source is configured to emit them when a real origin is supplied. Public sharing explains this configuration requirement instead of copying a local/personal URL. Native share cancellation and clipboard rejection have distinct honest messages.

## Verification

`npm run verify:export` reads HTML without running JavaScript, checks all six course title/description mappings, local-mode metadata behavior, required route references, seven image dimensions and noindex/robots behavior. The metadata unit tests also exercise an explicit reserved test origin; that is a test fixture, not a deployed address. `npm run verify:export` with the actual build environment checks absolute course-specific canonicals/covers after a share build.

No real external unfurl was attempted: localhost is not fetchable by external chat/social platforms. After authorized deployment, inspect the live HTML and image response and use the platform’s preview debugger if available. Platforms may cache, crop or suppress cards, so replacing a JPEG does not guarantee an immediate updated unfurl. No unsolicited posting or messaging is part of this project.
