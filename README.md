# Portfolio — Cristina Popa

Personal portfolio site for a Backend & Full-Stack Developer. Built with Vite,
Vue 3, TypeScript and Tailwind CSS. Single-page, responsive, dark theme.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Editing content

All site content lives in [`src/data.ts`](src/data.ts) — profile, about,
experience, projects, skills. Update that file; no component edits needed for
normal content changes.

## Deploy (GitHub Pages)

Two things to set:

1. **Base path** — in [`vite.config.ts`](vite.config.ts), `base` must match the
   Pages URL:
   - Project site `popacristina.github.io/cv_website` → `base: '/cv_website/'`
   - User site `popacristina.github.io` → `base: '/'`
2. **Enable Pages** — repo **Settings → Pages → Source: GitHub Actions**.

Pushing to `main` then auto-builds and deploys via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## TODO before publishing

- Set your real LinkedIn URL in `src/data.ts`.
- Confirm the `base` path matches your repo.
