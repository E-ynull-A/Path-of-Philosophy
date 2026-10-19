# Fəlsəfə Yolu / Path of Philosophy

Interactive bilingual philosophy app with two sections:

- **Sına / Play** — the **story** (the road actually splits) and **thought experiments** (famous puzzles as tiny stories). Each keeps its own saved progress.
- **Öyrən / Learn** — schools, philosophers, **the question of God**, a timeline and a glossary.

Copy is meant to be plain: the hard name of the idea comes after you have already lived the situation.

## Run

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Where to change things

- **Main story (branching, everyday life):** `src/story.ts` (chapters I–IV)
- **Final chapter V (shared by every road):** `src/finale.ts`
- **Thought experiments:** `src/problems.ts` and `src/problems-more.ts`
- **Saving / resuming:** `src/storage.ts` — separate progress per mode, plus God-page answers
- **Glossary (tap-to-explain words):** `src/glossary.ts` — add a term and it is underlined everywhere automatically
- **Photos and artworks:** `src/photos.ts` (credits) + the files in `public/photos/` — real images from Wikimedia Commons, stored locally so the site works on any host and offline (licences checked; credits on the *Sources* page, linked from the footer). Keep that page. To add a photo: put the file in `public/photos/…` and add an entry with its Commons page, author and licence.
- **Illustrations (SVG):** `src/art.tsx` — shown when a photo can't load (offline); set `image: '<name>'` on a scene
- **Learn (schools, philosophers, timeline):** `src/libraryData.ts` (content) and `src/Library.tsx` (pages)
- **The question of God:** `src/godData.ts` (views, arguments — keep it fair to every side) and `src/God.tsx` (pages)
- **Home page and play section:** `src/App.tsx`
- **Navigation:** `src/router.ts` — hash routes like `#/play/story`, `#/learn/god/a/kalam`, `#/learn/p/kant` (old `#/library/…` links still work)
- **Logo:** `src/Logo.tsx` (in the app); `public/favicon.svg`, app icons and `public/brand/` (logo SVG/PNG for dark and light backgrounds) for use elsewhere
- **Endings and reading lists:** `src/endings.ts`
- **Scoring and contradiction:** `src/engine.ts`
- **UI strings (AZ/EN):** `src/copy.ts`

## Deploy (GitHub Pages)

Every push to `main` builds the site and publishes it through `.github/workflows/deploy.yml`.
One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**.
The site then lives at `https://<user>.github.io/<repo>/`. Paths are relative, so no extra config is needed.

## Check the story

```bash
npm run check
```

Finds broken `next` links, missing AZ/EN text and unreachable scenes, then walks every road through the main story and prints how often each ending comes up. It also checks the God section's links and that no two code files differ only in letter case (that breaks Windows).

## Memory lines

A scene can have `memory`: lines that show up only if the player picked one of the listed choices earlier. The finale uses this so it remembers which road you walked.

Each choice carries `weights` (which school it feeds), an `insight` (quote + explanation), and an `echo` (what the path remembers next).
