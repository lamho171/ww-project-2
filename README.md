# Reincarnation in "Crossing Brooklyn Ferry" — An Archive of Lives Across the East River

A final project for **ENGL 3273: Walt Whitman and New York**. A documentary archive built around
Whitman's "Crossing Brooklyn Ferry," gathering **real, sourced** riders and waterfront residents
across three eras of the East River ferry crossing:

1. **The Everyday Crossing (1850s–1890s)** — the ferry as ordinary, necessary, sometimes beautiful.
2. **The Missing Ferry (1900s–2000s)** — Fulton Ferry service ends in 1924; the archive follows
   people living beside the absent crossing instead of riding it.
3. **Commuter and Spectacle (2000s–present)** — ferry service returns as both transit and view.

Reincarnation here is a comparative metaphor for the *recurrence of experience* — the same water,
crowds, and light returning to new people across a historical gap — not a literal claim that
Whitman believed in rebirth, and not an earlier draft of this project's invented fictional
passengers (see "Project history" below).

## Install and run

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
```

TypeScript project build followed by a Vite production build, output to `dist/`. Preview locally
with `npm run preview`. The site is a static bundle: no server, database, or API key required.

## Lint

```bash
npm run lint
```

## Where to edit content

All content is centralized in `src/content/`, separate from the presentational components in
`src/components/`:

| File | What it holds |
| --- | --- |
| `src/content/voices.ts` | **The archive itself.** Every card in the three eras: person, date, source, excerpt (only rendered if `excerptVerified: true`), motifs, rights status. **This is the file to extend with new, independently verified sources.** |
| `src/content/ferryLifecycle.ts` | The ferry's own life-cycle timeline (1814–2017), with a `verified` flag per milestone. |
| `src/content/motifIndex.ts` | The nine cross-era motifs (water and tide, chance encounters, absence and return, etc.) used by the filter bar and the Motif Index section. |
| `src/content/locations.ts` | The five supplementary map locations. Voices are linked to a place via each entry's `location` field in `voices.ts`, not stored twice. |
| `src/content/quotations.ts` | Whitman quotations used in the prologue/reflection (poem, section, text). |
| `src/content/interpretation.ts` | Landing copy, the interpretive prologue, the critical reflection essay, and the artist's statement. |
| `src/content/archive.ts` | The separate "Archive of Unfinished Meetings" visitor-contribution feature (see below) — unrelated to the documentary archive above. |
| `src/content/sources.ts` | Works Cited, including honestly-labeled **research leads that were not verified** (see next section). |

## Research integrity: what's verified, what isn't

The original research brief for this project listed candidate sources to check, not text to copy.
Every entry in `src/content/voices.ts` was checked against its cited source before being included.
A few candidates from the brief could **not** be independently verified during this build and were
deliberately left out of the archive rather than turned into invented quotations. They're
documented in `src/content/sources.ts` (and on the live Works Cited section) as open leads:

- **Jervis McEntee's January 31, 1879 diary entry** — the Smithsonian's site blocked automated
  access; the entry's content was not confirmed.
- **Specific TripAdvisor reviews of the East River Ferry** — the page could not be reliably read
  by an automated fetch.
- **A specific Reddit thread (`r/nyc`) about NYC Ferry fares** — the linked thread ID returned a
  blocked / not-found response.
- **A DUMBO BID commuter video** — speaker consent and embed permission were not verified.
- **Google Maps reviews** — not collected; see the manual workflow in the original brief
  (Section 5, Era III, item 6) before adding any.
- **Original student fieldwork** — a placeholder card (`student-fieldwork` in `voices.ts`) is
  reserved for the student's own ferry ride, per the brief's fieldwork option. Replace it with a
  real account, date, and (with consent) any rider quotations before final submission.

If you extend the archive, follow the same rule: **verify before you quote.** Set
`excerptVerified: false` and omit the `excerpt` field for anything you haven't personally checked
against its source — the `ArchiveCard` component will not render an unverified excerpt.

### Working around whitmanarchive.org's bot-blocking

`whitmanarchive.org` returns a Cloudflare bot-challenge ("Just a moment...") for every direct
fetch — confirmed against multiple URL patterns (search pages, `/item/` pages, `/published/`
pages), so it cannot be read directly by an automated tool. Three pieces of content in this
archive (the "Brooklyniana, No. 17" entry, the *Specimen Days* quote via McNamara's article, and
the McNamara criticism citation) were verified instead through the **Wayback Machine**:

1. Check `http://archive.org/wayback/available?url=<page-url>` for a snapshot.
2. If one exists, fetch the returned `http://web.archive.org/web/<timestamp>/<page-url>` — this
   works even when the live page doesn't, and returns the real page text.
3. Note the Wayback URL actually used in the `sources.ts` entry's `note` field, alongside the
   live `whitmanarchive.org` URL, so future editors know both where the citation points and how
   it was actually retrieved.

Not every page has a snapshot (the McEntee diary entry didn't), in which case treat it as an
unverified lead per the rule above rather than guessing at its content.

## Image sources

All photographs are public domain or explicitly marked "no known copyright restrictions" by the
holding institution, credited in `src/content/sources.ts` and via inline captions. Files live in
`public/images/`, downloaded from Wikimedia Commons / Library of Congress and re-compressed for
web use:

- `whitman-1854-engraving.jpg` — Whitman portrait, hero section.
- `fulton-ferry-boat-1890.jpg` — LOC photograph of the Fulton ferry boat, Era I.
- `fulton-ferry-1845.jpg` — Edwin Whitefield lithograph of the Brooklyn ferry landing, map context.
- `south-street-seaport-c1900.jpg` — Detroit Photographic Co. view of South Street and the
  Brooklyn Bridge, used with the Ferry Lifecycle Timeline.
- `wwi-logo.png`, `site-background.jpg` — see prior credits in `sources.ts`; unrelated to the
  archive content.

## Notes on implementation

- No routing library or backend; a single scrollable page with in-page anchor navigation
  (`#prologue`, `#archive-timeline`, `#ferry-lifecycle`, `#map`, `#motif-index`, `#reflection`,
  `#contribute`, `#colophon`).
- **Archive filtering** (`src/components/archive/MotifFilterBar.tsx`) filters all three eras at
  once by motif and by mundane/glamorous/both, computed client-side in `App.tsx` from
  `voices.ts` — no entries are duplicated per filter state.
- **The map** (`src/components/map/WhitmanMap.tsx`) is built with [Leaflet](https://leafletjs.com/)
  and [OpenStreetMap](https://www.openstreetmap.org/) tiles — no API key or paid service. Selecting
  a place lists the archive entries connected to it (via `getVoicesByLocation`) with jump links
  to the full card. Each place is also a plain `<button>` in a chip list beneath the map, since
  Leaflet's own markers aren't reliably keyboard/screen-reader accessible in every browser.
- **Motif Index** (`src/components/archive/MotifCompare.tsx`) picks one verified entry per era for
  a selected motif and says so honestly when an era has no verified entry yet for that motif,
  rather than forcing a match.
- **Rights status** is shown on every card via `RightsBadge.tsx` (public domain, brief quotation,
  permission needed, student-owned, etc.), not just implied.
- The separate **"Archive of Unfinished Meetings"** section (`#contribute`) is a visitor
  reflection feature unrelated to the documentary archive: visitors add a one-sentence note about
  someone they feel connected to, stored only in that browser's `localStorage`, never transmitted.
  Seed entries are clearly labeled "written for this project," not presented as real submissions.
- Animations (background ripple, marker pulse) respect `prefers-reduced-motion`.

## Project history

An earlier version of this site paired the same map/background visual system with three **fictional**
passengers (past/present/future) crossing the ferry, and a Whitman-biography map (99 Ryerson
Street, Fort Greene Park, Pfaff's Cellar). A later project brief explicitly replaced that approach
with the real, sourced documentary archive described above — "Do not invent historical passengers,
quotations, diary entries, reviews, or sources" — so the fictional chapters, their motif system,
and the biography map were removed rather than kept alongside the archive. The paper-sheet
background, Whitman portrait, footer credit to the Walt Whitman Initiative, and the visitor
reflection feature were preserved from that earlier build.
