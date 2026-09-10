# Asset credits and art direction

All ten photographs were generated with the built-in OpenAI ImageGen tool on September 10, 2026 for this original fictional portfolio project. They were inspected and converted to optimized WebP for static delivery. No stock photo licenses, purchased media or real-person instructor portraits are used. Generated output is used under the applicable OpenAI service terms; no uniqueness, trademark or exclusive-rights claim is made.

Full verbatim prompts, original output paths, dimensions, hashes, alt text and shipping associations are preserved in `asset-provenance.json`. WebP sidecars carry each exact prompt; social JPEGs embed their deterministic-render provenance.

| File | Association / alt text | Bytes |
|---|---|---:|
| `public/images/hero.webp` | Warm side light falls across the profile of a woman against a dark studio background. | 47,970 |
| `public/images/light-shadow.webp` | A plaster sphere and folded linen cast strong shadows across a charcoal tabletop. | 91,140 |
| `public/images/composition-motion.webp` | A cyclist crosses a sunlit concrete underpass framed by geometric shadows. | 59,022 |
| `public/images/portraits-presence.webp` | A woman with cropped hair looks into the camera in soft warm studio light. | 41,984 |
| `public/images/short-film.webp` | A lone diner guest reads a letter behind a rain-streaked window at night. | 152,202 |
| `public/images/color-mood.webp` | A cobalt glass vessel and persimmon rest on rust-colored fabric against dark navy. | 78,004 |
| `public/images/edit-story.webp` | Coffee-making contact prints and a small editing notebook lie across a black worktable. | 120,466 |
| `public/images/mara.webp` | Mara Ellis, a fictional instructor with a short dark bob and silver strands, photographed in window light. | 30,798 |
| `public/images/elias.webp` | Elias Noor, a fictional instructor with curly black hair and a short beard, photographed in a workroom. | 34,206 |
| `public/images/june.webp` | June Park, a fictional instructor with shoulder-length dark hair, photographed in a muted studio. | 22,124 |

## Identity and consistency
The original open-frame mark is authored SVG in `src/components/ui.tsx` and `public/icon.svg`; the same geometry is used in video, social and certificate rendering. Instructor personas Mara Ellis, Elias Noor and June Park use the same portrait on every associated page. Photography subjects in hero/course studies are distinct fictional subjects, not instructor claims.

## Fonts
Barlow Condensed 600/700 and DM Sans 400/500/600 are bundled from Fontsource under SIL Open Font License 1.1. License text is included beside the five WOFF2 files in `public/fonts/` and linked from Privacy & credits. UI/reading copy uses DM Sans; condensed display lettering is limited to headings/identity.

## Lesson associations
Each cover is reused deliberately in the associated teaching clip, illustrated reading, practice brief and dashboard thumbnail. Every course also has an authored SVG schematic; reading figures and transcript text describe what to observe. They are explanatory diagrams, not purported photographs of real events.

## Regeneration
Shipping assets are included; no generation call or account is needed to install/build/use the project. `scripts/prepare-assets.mjs` records the original one-time import from the generated asset folder. To regenerate, use the exact prompts in the provenance record and supply the replacement folder, then inspect identity/crop and update the record. `npm run social` recomposes the seven final social covers from the bundled photographs and actual fonts.

## Missing assets
None. Ten photographs, six schematics, seven social covers, six videos and all caption/transcript/worksheet files are present.
