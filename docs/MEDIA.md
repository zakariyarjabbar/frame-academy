# Media inventory

Six original silent visual explainers combine authored photographic studies, changing crops, schematic comparisons, cuts and teaching text. They are text-led clips, not recordings of a speaking instructor. Each has six distinct 10-second sections and an equivalent timestamped transcript. No unrelated stock footage or frozen fake player is used.

| Course asset | Duration | Format | Dimensions | Bytes |
|---|---:|---|---|---:|
| `/media/light-shadow.mp4` | 60.000 s | H.264 / MP4, yuv420p, 24 fps, silent | 1280 × 720 | 842,143 |
| `/media/composition-motion.mp4` | 60.000 s | H.264 / MP4, yuv420p, 24 fps, silent | 1280 × 720 | 731,466 |
| `/media/portraits-presence.mp4` | 60.000 s | H.264 / MP4, yuv420p, 24 fps, silent | 1280 × 720 | 688,035 |
| `/media/short-film.mp4` | 60.000 s | H.264 / MP4, yuv420p, 24 fps, silent | 1280 × 720 | 1,112,113 |
| `/media/color-mood.mp4` | 60.000 s | H.264 / MP4, yuv420p, 24 fps, silent | 1280 × 720 | 809,865 |
| `/media/edit-story.mp4` | 60.000 s | H.264 / MP4, yuv420p, 24 fps, silent | 1280 × 720 | 948,199 |

Total video: 360.000 seconds; 5,131,821 bytes (4.89 MiB).

## Matching files
For each stable course ID, `/media/{id}.mp4` pairs with `/media/{id}.vtt`, `/resources/{id}-transcript.txt`, `/resources/{id}-worksheet.md`, and `/diagrams/{id}.svg`. The course fixture image is its poster. `media-manifest.json` records measured ffprobe output and exact associations. Caption files contain six accurate timed explanatory sections; there is no spoken audio to caption.

## Build process
`npm run media` renders 1280 × 720 scenes in local Chrome using bundled fonts/photographs and authored diagrams, then encodes exactly 1440 H.264 frames at 24 fps with faststart and no audio stream. It also writes matching captions, transcripts and worksheets. Runtime users need only the final static files, not Chrome/FFmpeg or a service key.

## Delivery and controls
Only the active video uses `preload="metadata"`. Nothing autoplays. Native controls provide play/pause, seeking, mute/volume (the clips are silent) and fullscreen where supported; a visible speed menu and caption toggle supplement them. Transcript and bookmark buttons seek the real video. Player errors offer retry and an equivalent transcript. The included static preview server supports byte ranges.

## Verification
All six files were fully decoded by FFmpeg and actually played in Chrome, with advancing currentTime and nonzero video dimensions. Final browser results are in `browser-results.json`; export checks are in `export-results.json`. Safari, Firefox, physical mobile devices and real deployment unfurls are not claimed. No offline video support is implemented.

## Missing media
None.
