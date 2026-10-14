# Fəlsəfə Yolu / Path of Philosophy

Interactive bilingual story. On the title screen pick the **main story** (the road actually splits) or **short problems** (famous thought experiments as tiny stories).

Copy is meant to be plain: the hard name of the idea comes after you have already lived the situation.

## Run

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Where to change things

- **Main story (branching):** `src/story.ts`
- **Short famous problems:** `src/problems.ts`
- **Endings and reading lists:** `src/endings.ts`
- **Scoring and contradiction:** `src/engine.ts`
- **UI strings (AZ/EN):** `src/copy.ts`

Each choice carries `weights` (which school it feeds), an `insight` (quote + explanation), and an `echo` (what the path remembers next).
