# Jack — 3D Creator

A fully responsive portfolio built from the supplied design brief with **React 18, TypeScript, Vite, Tailwind CSS v3, Framer Motion and Lucide React**.

## Start locally

Use Node.js 20+ (22 recommended).

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. For a production build:

```bash
npm run build
npm run preview
```

## Structure

```text
jack-3d-creator/
├── .github/workflows/deploy.yml     # GitHub Pages build and deployment
├── public/favicon.svg               # Minimal monogram
├── src/
│   ├── components/                  # Buttons, fade-in, magnet, reveal, images
│   ├── data/
│   │   ├── assets.ts                 # Image sources and three projects
│   │   └── site.ts                   # Text, service list, contact fields
│   ├── sections/                    # Hero, marquee, about, services, projects, contact
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customize before launch

- In `src/data/site.ts`, fill in Jack's **real email address**, and change biography or branding if desired. The brief did **not** supply any contact address, so no address was invented. Without it the contact footer deliberately shows no invalid email link.
- In `src/data/assets.ts`, replace or add verified project URLs to activate the **Live Project** buttons. They appear as labels until valid links are available, preventing misleading or broken navigation.
- Image references are the exact external addresses from the source brief. These are hosted by third parties, so the project includes fallback visuals where browsers cannot load them. For long-term stability, replace them with licensed, locally stored assets after obtaining them.
- The nav item **Price** leads to the *Services* list, since the brief specified no prices.

## Publish to GitHub Pages

1. Create a **new public repository** named `jack-3d-creator` (no auto-generated files).
2. Push this project to the repository's `main` branch.
3. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys the site after every push to `main`. The workflow configures Vite's base URL to `/<repository-name>/`.
5. The expected URL for the `Vyzo-Studio` account and `jack-3d-creator` repository is `https://vyzo-studio.github.io/jack-3d-creator/`, **only after the Pages deployment finishes successfully**.

If you use a different repository name, the workflow detects it automatically. To deploy to a custom domain, update the workflow/base setup accordingly.

## Accessibility/performance

Keyboard focus states, semantic headings, contrast, lazy-loaded non-hero images, native anchor navigation, passive scroll listeners and `prefers-reduced-motion` handling are included. The 21 remote GIFs can be heavy; replacing them with optimized MP4/WebM videos later is recommended.
