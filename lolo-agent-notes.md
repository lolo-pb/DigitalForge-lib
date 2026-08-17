# DigitalForge Project Notes

## Purpose

DigitalForge is one pnpm-managed React app for trying full UI pages and reusable components. It is not a monorepo.

## Structure

```text
src/
  app/          Routing and the shared hub shell
  pages/        Home, showcase catalog, component catalog, and 404
  showcases/    Complete pages with independent layouts and styles
  components/   Reusable pieces grouped by purpose
    controls/
    feedback/
    layout/
    navigation/
    overlays/
  data/         Metadata used to list showcases in the hub
  styles/       Global reset and design tokens for the hub
```

Each component keeps its React file and CSS Module together. Each showcase owns its folder and should avoid depending on the hub's visual styles.

## User Flow

`src/main.tsx` starts the app and hash-based router. The home page sends users to either the showcase catalog or component catalog.

Hub pages run inside `AppShell`, which provides the shared navigation and footer. Full showcase routes run outside that shell, so they can look and behave like separate websites. Large showcases are lazy-loaded only when opened.

`src/data/showcases.ts` provides the titles, descriptions, routes, and tags displayed by the hub.

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start local development
pnpm typecheck   # Check TypeScript
pnpm build       # Type-check and create the production build
pnpm preview     # Preview the production build
```

## Adding Work

- New full page: add a folder under `src/showcases`, register its metadata, and add its lazy route in `App.tsx`.
- New reusable piece: add it under the matching `src/components` category and optionally add a preview to the component catalog.

## Suggestion

Manual showcase registration is clear at the current size. If the collection becomes large, replace the repeated metadata and route edits with one shared showcase registry.
