---
name: FRAME ACADEMY
description: A cinematic film publication opening into a focused learning studio.
colors:
  canvas: "#151719"
  surface: "#222629"
  ivory: "#f8f7f2"
  acid: "#e5f16c"
  silver: "#b0b6ba"
  line: "#414547"
  ink: "#151719"
  danger: "#ffc1ab"
  acid-hover: "#f0f7a7"
typography:
  display:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.4rem, 6.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  hero:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(4.6rem, 7.6vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.4rem, 4vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  body:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  reading:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  square: "0px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "40": "40px"
  "56": "56px"
  "96": "96px"
components:
  button-primary:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.acid-hover}"
    textColor: "{colors.ink}"
  button-default:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "13px 23px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "13px 23px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
    width: "100%"
  learner-nav:
    textColor: "{colors.ivory}"
    rounded: "{rounded.square}"
  filter-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "8px 14px"
  course-card:
    textColor: "{colors.ivory}"
    rounded: "{rounded.square}"
  workspace-tabs:
    textColor: "{colors.silver}"
    rounded: "{rounded.square}"
  curriculum-link:
    textColor: "{colors.ivory}"
    rounded: "{rounded.square}"
    padding: "19px 10px"
  certificate-paper:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "60px"
---

# Design System: FRAME ACADEMY

## Overview

**Creative North Star: "A film publication, a learning studio"**

Direction A is cinematic, direct, and serious about visual craft. Original generated photographic studies carry the identity: directional light, visible shadow, natural fictional portraits, deliberate negative space, and restrained color. The open-frame mark and condensed lettering provide a crisp editorial signature. Photography stays substantial beside the type.

The same visual world supports expressive public pages and quiet learner tools. Public compositions give real lesson work room to lead; the learning studio reduces display scale and uses readable text, aligned rows, native controls, and clear local status. Charcoal surfaces and ivory lettering stay consistent across both. The earned certificate intentionally reverses them onto paper. No glow, glass, autoplay, or decorative feature grids belong to this direction.

**Key Characteristics:**

- Original photographic studies, reused coherently across each course and its learning materials.
- Barlow Condensed display lettering paired with comfortable DM Sans reading and controls.
- Charcoal and ivory with restrained acid yellow for emphasis, action, and progress.
- Square forms, fine rules, mostly unboxed content, and tonal separation without shadows.
- Deliberate playback, visible keyboard focus, reduced-motion support, and plain status text.

This document records the final source, chiefly `src/app/globals.css`, shared UI/navigation, the learning workspace, and certificate renderers. Frontmatter contains implemented primitives; `.impeccable/design.json` supplies extensions and representative component snippets. Its synthesized tonal ramps are preview aids, not additional production palette tokens. Product scope remains in `PRODUCT.md`; asset provenance and verification scope remain in `docs/ASSETS.md` and `docs/QA.md`.

## Colors

The palette combines dark photographic surroundings, warm paper, cool neutral text, and one yellow-green accent. Frontmatter preserves the CSS token names and canonical values.

### Primary

- **Acid yellow (`acid`)** marks primary actions, selected and completed states, the frame mark, focus outlines, progress fills, and occasional display emphasis.
- **Pale acid (`acid-hover`)** is the primary button's hover fill. Default ivory buttons become acid on hover.

### Neutral

- **Charcoal (`canvas`)** is the page and header background; **charcoal ink (`ink`)** is the same pigment used for text on ivory or acid.
- **Raised charcoal (`surface`)** separates forms, enrollment, notices, feedback, and the continue card from the canvas.
- **Warm ivory (`ivory`)** is primary lettering and the default button fill; it becomes the certificate paper.
- **Silver (`silver`)** supports body copy, descriptions, metadata, and field labels.
- **Slate (`line`)** supplies fine borders, dividers, unfilled progress tracks, and quiet control boundaries.

### Semantic feedback

- **Warm peach (`danger`)** is the implemented error text color. Success uses acid, accompanied by text or a check mark.
- Specialized dark shades sit behind video, the curriculum rail, and photographic overlays. These are contextual surface treatments rather than additional brand accents.
- The certificate uses darker olive rules against ivory. Screen HTML, PNG export, and print have separate border and fine-text treatments; they share the core ink, paper, typography, and disclosure.

**The Accent Has a Job Rule.** Use acid to direct attention or explain state; keep long reading copy in silver or ivory.

## Typography

**Display font:** Barlow Condensed (600/700), bundled under the CSS family alias `Barlow`, with Arial Narrow and sans-serif fallbacks. **Body font:** DM Sans (400/500/600), bundled as `DM`, with Arial and sans-serif fallbacks. Both use local WOFF2 files and `font-display: swap`; their SIL OFL license text ships with the assets. The frontmatter uses the actual CSS family stacks.

Condensed, closely set headings create the publication character. Sentence-case DM Sans labels and controls keep operating tasks familiar. There is no third or monospaced UI face and no single mathematical type scale: component-specific sizes adapt the hierarchy to each job.

### Hierarchy

- **Display and headline:** the base heading roles are in frontmatter. Display headings use balanced wrapping; the homepage hero and course title have larger contextual overrides.
- **Hero:** the large condensed promise uses tight leading with one acid phrase. At the narrowest breakpoint it scales with viewport width and uses a line height of 0.94.
- **Titles:** base third-level headings use the title role; course card titles are slightly larger (2.05rem), while lesson headings scale between 2.3rem and 3.5rem before responsive overrides.
- **Reading:** lesson paragraphs use the reading role. Their headings switch to DM Sans (600, 1.65rem, 1.2 leading), reducing editorial compression within the lesson itself.
- **Body and lead:** the body role handles ordinary copy; lead text is larger (1.25rem, 1.65 leading). Smaller descriptions and controls range from 0.8125rem to 0.9375rem. Small photographic metadata is more compact.
- **Identity:** the two-line wordmark uses Barlow Condensed (700); the small ACADEMY line is widely tracked. The brand SVG uses open corners around a solid central square.

**The Reading Voice Rule.** Keep instructional paragraphs, forms, transcripts, and operating labels in DM Sans; condensed type supplies identity and hierarchy.

## Layout

Public content uses a centered outer container (maximum 1424px, including 56px gutters on each side). This yields a maximum inner width of 1312px. Header, footer, and learning layout have separate maximum widths (1536px). The standard section spacing is in frontmatter; individual compositions also use explicit spacing. The recorded spacing steps are recurring values, not an enforced universal scale.

The desktop catalog has three equal columns with 28px gaps. Course detail pairs the flexible main column with a 345px enrollment panel and an 80px gap; the panel sticks 24px below the viewport top. The learning studio has a flexible lesson and 300px curriculum rail. Reading and practice regions cap at 760px; prose pages cap at 740px. Some short descriptions use character measures, including help answers at 65ch; there is no global 65ch reading constraint.

### Responsive behavior

- **At 1100px and below:** container gutters become 32px; the course sidebar narrows to 290px and curriculum rail to 260px. Grids and image/text spacing tighten.
- **At 800px and below:** gutters become 25px; the desktop header navigation becomes an in-flow expandable mobile navigation. Catalog cards become two columns. Course detail becomes one column with enrollment before the details; the enrollment panel stops sticking. A labeled native curriculum selector replaces the learning rail. Workspace tabs remain horizontal, with smaller gaps. Learner navigation wraps.
- **At 520px and below:** gutters become 20px, catalog and continue card become single-column, and public image/text compositions stack. The homepage shows a 470px-high photographic region with text beginning lower in the hero. Lesson video extends to the edges of its column; other learning content retains padding. Notes filters stack, action groups wrap, and receipt details become vertical.
- **At 1600px and above:** the homepage hero has an explicit larger height (790px). The rest of the layout retains its maximum-width constraints.

Photographs reserve their dimensions and use intentional crops. Course cards use an image ratio of 1.42 on desktop and 1.5 on narrow screens; teaching video is 16:9. The header is in normal document flow. No fixed navigation or enrollment control covers the lesson on mobile.

## Elevation & Depth

There are no box or text shadows in the implemented stylesheet. Depth comes from photography, tonal changes, fine slate rules, and a few bounded overlays. Image labels and floating save controls use translucent charcoal over images; they do not blur the background. The hero's directional and bottom gradients protect text contrast while preserving the photograph. The certificate uses a border and offset outline to suggest paper framing.

**The Tonal Depth Rule.** Separate content with spacing, a surface change, or a fine rule; do not add glass, glow, or decorative shadows.

## Shapes

The form language is square. Images, buttons, tags, notices, and cards have straight edges; inputs explicitly set zero radius. Rules are generally one pixel. Active navigation and tabs use a two-pixel underline, and the progress track is three pixels high. The mark repeats four open frame corners around a solid square. Interface icons are simple inline SVG strokes, generally 20px with a 1.6px stroke and rounded line caps; smaller and larger instances follow their context.

Avoid turning every section into a card. Images can anchor unboxed course content, while enrollment, notices, empty states, and certificate records use a surface or border when it helps the task.

## Components

### Buttons and links

Confident rectangular controls, with text that explains the next action. Base buttons have a 48px minimum height and 14px icon gap. Primary buttons use acid and ink; default buttons use ivory and ink; secondary buttons are transparent with ivory text and a slate border. Small buttons use a 44px minimum height and compact padding (9px 14px). Header buttons have smaller contextual minimums (42px desktop; 40px narrow mobile).

Button background, text, and border changes transition over 180ms with the CSS default easing. Primary hover uses pale acid; default hover uses acid; secondary hover or selected state makes its text and border acid. Icon buttons are normally 44px square, with acid text/borders on hover or pressed state. Text actions use a 44px minimum height; text links add a fine underline rule. Disabled buttons show reduced opacity (0.5) and a not-allowed cursor.

**The Visible Focus Rule.** Preserve the global two-pixel acid focus outline and five-pixel offset, including on text actions and native fields.

### Inputs and filters

Text fields, selects, and textareas use raised charcoal, ivory text, a slate border, square corners, and a 48px minimum height. Field text is DM Sans (0.9375rem); silver labels sit above the control with a 7px gap. Placeholder text remains silver. Textareas resize vertically and normally start at 140px; the note composer starts at 100px. Native checkboxes and radios use the acid accent.

Filter tags are rectangular raised-surface buttons with a close icon, fine border, and 44px minimum height. Errors and confirmations appear as readable inline status text; storage notices use a raised band with an acid lower rule and recovery actions. Destructive confirmations use browser-native dialogs. The implementation does not add a separate red field-border system. The profile form rejects whitespace-only display names with an announced message.

### Course cards and containers

Course cards are mostly unboxed: cropped photograph, small metadata, a linked condensed title and arrow, a specific outcome, then instructor and demo price separated by a rule. The subject label and saved-course button sit within the image. Hover scales only the image (1.035) over 500ms using `cubic-bezier(.22, 1, .36, 1)`; the card itself does not lift.

The dashboard's continue card uses a raised surface with image and task content side by side, then stacks on mobile. Supporting courses, notes, transcripts, and resources use ruled rows. The progress fill is acid over slate and is accompanied by a textual lesson count. Empty states use a bounded outline, frame mark, clear explanation, and a useful next action.

### Navigation and learning workspace

The desktop header uses the frame wordmark, silver navigation, an ivory current-page link, and a compact My learning action. Its mobile menu expands within the page and has labeled open/close state. Learner navigation wraps and marks the current page with acid text and underline. The lesson curriculum uses a raised current-row background, acid text, and separate completion checks.

Notes, Transcript, and Resources are horizontal tabs with an acid active underline and ivory selected text. They implement tab roles, selected state, roving focus, and Arrow/Home/End navigation. A native video player with a still poster leads the video lesson; playback is deliberate. Speed, captions, timestamp seeking, retry text, and matching resources remain visible and usable around it. Reduced-motion preference disables transitions and animations and restores ordinary scrolling. There are no entrance animations, scroll hijacking, or autoplay.

### Certificate

The certificate is centered ivory paper with charcoal lettering, an original frame mark, an olive rule, a wrapping learner name, the course title, local issuance details, and an explicit demo/non-accreditation disclosure. The screen version uses a broad pale border and fine offset outline; narrow screens reduce padding, frame width, and typography. Long names wrap, including unbroken text.

PNG output is a separate deterministic 1800×1200 canvas composition using the same bundled fonts, measured text wrapping, double-line frame, and disclosure. It uses its own olive rule and muted details, so it is not a pixel-identical screenshot of the page. Print applies a light root color scheme, hides page chrome and actions, compacts the certificate, and requests A4 landscape with 12mm margins. Print pagination ultimately follows the browser's print settings.

## Do's and Don'ts

### Do:

- **Do** preserve cinematic direction A, the bundled font pairing, and the original frame mark.
- **Do** give genuine lesson material and original generated photography a visible role, with consistent course imagery and fictional-persona disclosure.
- **Do** use acid for emphasis, actions, focus, selection, and progress, with text or icon cues for meaning.
- **Do** keep lessons comfortable to read, preserve native media and form controls, and let action groups wrap on small screens.
- **Do** retain local-save, loading, empty, error, and completion messages with useful recovery actions.
- **Do** keep certificate names, references, and demo disclosures legible in screen, PNG, and print compositions.

### Don't:

- **Don't** replace the pinned photographic identity with gradients, glass, glow, decorative feature grids, or a generic rounded-card system.
- **Don't** use condensed display lettering for instructional paragraphs or routine form controls.
- **Don't** add autoplay, scroll hijacking, entry delays, or motion that ignores reduced-motion preference.
- **Don't** treat simulated enrollment, generated portraits, or demo certificates as evidence of real clients, credentials, accreditation, or a live teaching community.
- **Don't** assume a uniform 44px minimum for every compact header control, a global 65ch text measure, or identical certificate pixels across export formats; preserve the implemented contextual behavior.
