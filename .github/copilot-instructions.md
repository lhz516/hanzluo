# Project Guidelines

## Stack

- **Next.js 16** (App Router) with **static export** (`output: 'export'`)
- **React 19**, **TypeScript 5** (strict mode), **Tailwind CSS 4** (class-based dark mode via `@custom-variant`)
- **@iconify-icon/react** for icons
- **ESLint 9** with flat config (`eslint.config.mjs`)
- Path alias: `@/*` → `./src/*`
- Node.js 22

## Architecture

```
src/
  app/          # Next.js App Router pages and layouts (server components by default)
  components/   # Reusable UI components
  data.ts       # Static content/data (no database or API)
```

- **Server components by default.** Only use `'use client'` when a dependency requires browser APIs (e.g., `IconClientWrapper` wraps `@iconify-icon/react` for SSR compatibility).
- Static site — no API routes, no server-side runtime.

## Code Style

- Kebab-case filenames (e.g., `social-link.tsx`, `icon-client-wrapper.tsx`)
- Default exports for page/layout/component files
- TypeScript interfaces for props and data shapes
- 100% Tailwind utility classes for styling — no CSS modules or styled-components
- Responsive design via Tailwind breakpoints (`md:` prefix)

## Build and Test

```sh
npm run dev     # Local dev server
npm run build   # Static export to out/
npm run lint    # ESLint 9 (flat config) with --fix (includes a11y, React plugins)
```

## Conventions

- Keep client component boundaries minimal — isolate client-only deps in thin wrapper components
- Content data lives in `src/data.ts` as typed arrays/objects, not in component files
- Icons use Iconify icon strings (e.g., `devicon:linkedin`, `bi:github`)
