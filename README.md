# Janardhan Reddy Dondeti — Portfolio

A React + Vite personal portfolio site, styled around a "data schema / blueprint"
theme — the hero renders your profile as a live SQL query result, and the skills
section is laid out as an actual data pipeline (Ingest → Process → Store →
Orchestrate → Platform).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
src/
  components/
    Nav.jsx        top navigation
    Hero.jsx        typed-query + schema record hero
    About.jsx       "about.yaml" code-block bio
    Skills.jsx       pipeline-stage skills layout
    Projects.jsx     project cards (repo + demo links)
    Contact.jsx      contact panel
    Footer.jsx
    Reveal.jsx       scroll-reveal wrapper
    BrandIcons.jsx   inline GitHub / LinkedIn icons
  App.jsx
  App.css           component styles
  index.css         design tokens + global styles
```

## Editing content

- **Projects** — edit the `PROJECTS` array in `src/components/Projects.jsx`.
  Swap in your real repo names, descriptions, tech tags, and add a `demo` URL
  once you have live demos deployed.
- **Skills / stack** — edit the `STAGES` array in `src/components/Skills.jsx`.
- **Bio** — edit the YAML-style text inside `src/components/About.jsx`.
- **Resume button** — the hero currently links to your LinkedIn instead of a
  resume download (no resume file was provided). To add a real resume:
  1. Drop `resume.pdf` into the `public/` folder.
  2. In `src/components/Hero.jsx`, swap the LinkedIn button back to:
     ```jsx
     <a className="btn" href="/resume.pdf" download>
       Download resume
     </a>
     ```

## Deploying to GitHub Pages

This repo is already wired up with the `gh-pages` package.

1. Create a new GitHub repo (e.g. `portfolio`) under your account.
2. Update the `"homepage"` field in `package.json` to match:
   `https://janardhankent.github.io/<your-repo-name>`
3. Push this project to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Janardhankent/<your-repo-name>.git
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch.
5. In your repo on GitHub: **Settings → Pages → Source**, select the
   `gh-pages` branch, and save. Your site will be live at the homepage URL
   above within a minute or two.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via
  `index.html` — no local font files needed.
- Icons are from [lucide-react](https://lucide.dev), except the GitHub/LinkedIn
  marks which are small inline SVGs in `BrandIcons.jsx`.
- Respects `prefers-reduced-motion` for the typing effect and scroll reveals.
