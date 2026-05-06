# Hassan Development — Website

Personal business website for Hassan Development, a freelance web design business based in Bahrain.

## Pages

- `index.html` — Homepage with hero and trust strip
- `packages.html` — Pricing packages (Starter BD 250 / Business BD 400 / Premium BD 650)
- `work.html` — Portfolio with live project previews

## Local Development

No build step needed. Open `index.html` in any browser:

```bash
open index.html
```

Or use a local server to avoid iframe cross-origin issues on the work page:

```bash
# Python 3
python3 -m http.server 8080

# Then open http://localhost:8080
```

## Before Going Live

1. Update the `og:image` meta tag with your real social share image (1200×630px).

2. Update `sitemap.xml` with your real domain URL.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set Source to **Deploy from a branch** → `main` → `/` (root)
4. Your site will be live at `https://yourusername.github.io/repo-name/`

## Deploy to Netlify

1. Drag-and-drop this folder onto [app.netlify.com](https://app.netlify.com)
2. Done — live in seconds

## Deploy to Vercel

```bash
npx vercel
```

Follow the prompts. No config file needed.
