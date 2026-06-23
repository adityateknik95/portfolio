# Aditya — Portfolio

A single-page, scroll-based personal portfolio for an SDE / AI-ML job hunt.
Clean, dark, restrained — built to read as competence rather than flash.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion.
Fully responsive, accessible, and optimized for a one-click Vercel deploy.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

> Requires Node 18.18+ (developed on Node 24).

---

## Fill these in before you deploy

Everything personal is a `[BRACKET]` placeholder. Search the repo for `[` to
find them, or work through this checklist.

### 1. Your links & contact — `lib/site.ts`

| Placeholder         | What to put                                                  |
| ------------------- | ------------------------------------------------------------ |
| `[Email]`           | Your email, e.g. `you@example.com`                           |
| `[GitHub URL]`      | `https://github.com/your-handle`                             |
| `[LinkedIn URL]`    | `https://www.linkedin.com/in/your-handle`                    |
| `resume: "/resume.pdf"` | Already wired — just drop the file (see #3). Change the path only if you rename it. |

Until you replace them, the GitHub/Email buttons render as a muted, **non-clickable**
state (no dead links), so the site is safe to show at any stage.

### 2. Project links & details — `lib/projects.ts`

Each project has link slots that are currently placeholders. Replace any you have;
leave the rest — missing demos automatically show a tasteful **"Demo coming soon"**
pill, and unfilled repo/writeup links show as muted, non-clickable chips.

| Project                         | Placeholders to fill                                                            |
| ------------------------------- | ------------------------------------------------------------------------------- |
| SkyWatch                        | ✅ live demo + repo (optional writeup pending)                                   |
| Perspective                     | ✅ fully wired (live demo + repo)                                                |
| Pursuit-Evasion RL Simulation   | `[Pursuit-Evasion demo video URL]`, `[Pursuit-Evasion GitHub repo URL]`, `[Pursuit-Evasion writeup URL — optional]` |
| Admin Night                     | ✅ fully wired (live demo + repo)                                                |

**Already wired:** SkyWatch, Perspective, and Admin Night all have their live demo
and GitHub repo linked. Only **Pursuit-Evasion** still needs its demo video + repo —
it shows "coming soon" / muted repo pills until you add them.

Also review the **tech stacks** and **copy** in `lib/projects.ts` — they're sensible
defaults, but confirm they match what you built, and add any real **metrics**
(latency, accuracy, scale) to the description sentences.

### 3. Your résumé — `public/`

Drop your PDF at **`public/resume.pdf`**. The hero "Résumé" button already points
there. (Delete `public/PUT-YOUR-RESUME-HERE.txt` afterward.)

### 4. Optional polish

- **Social/SEO domain** — `app/layout.tsx`, `metadataBase`: change
  `https://aditya.example.com` to your real domain for correct OG/Twitter card URLs.
- **Skills** — `lib/skills.ts`: tweak the grouped lists to match your toolbelt.
- **About copy** — `components/About.tsx`: edit if you want a different voice.
- **Favicon** — `app/icon.svg`: a simple "A" mark; replace if you like.

---

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and **import** that repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. After the first deploy, set your custom domain under
   **Project → Settings → Domains**, then update `metadataBase` in
   `app/layout.tsx` to match.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Project structure

```
app/
  layout.tsx        # fonts (Inter + Space Grotesk), metadata, <html>/<body>
  page.tsx          # assembles the sections + skip-to-content link
  globals.css       # theme tokens, base styles, reduced-motion handling
  icon.svg          # favicon
components/
  Nav.tsx           # sticky nav, active-section highlight, mobile menu
  Hero.tsx          # name, tagline, 3 CTAs
  FeaturedProjects.tsx
  ProjectCard.tsx   # the one reusable card template (used for all 4)
  Skills.tsx
  About.tsx
  Footer.tsx        # contact + footer
  Section.tsx       # shared section wrapper + heading
  Reveal.tsx        # Framer Motion scroll-reveal (respects reduced motion)
  icons.tsx         # inline SVG icons (no icon library)
lib/
  site.ts           # name, tagline, links, nav config  ← edit this
  projects.ts       # the 4 projects                    ← edit this
  skills.ts         # grouped skills                    ← edit this
public/
  resume.pdf        # ← add this
```

## Design & accessibility notes

- **One accent color** (soft indigo-blue), near-black navy background, generous
  whitespace. Headings in Space Grotesk, body in Inter.
- Animations are a single subtle fade-up on scroll, and they **collapse to no motion**
  when the OS requests reduced motion.
- Semantic landmarks (`header`/`main`/`section`), labelled nav, keyboard-visible focus
  rings, a skip link, and `alt`/`aria` on interactive elements.
- No skill bars, no logo wall, no stock art, no emoji — by design.
```
