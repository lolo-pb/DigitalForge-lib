# DigitalForge Playground

A single React application for building complete interface showcases and reusable UI components without maintaining a separate app for every idea.

## Development

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

The Vite base path and hash-based routing are configured for the existing GitHub Pages project:

<https://lolo-pb.github.io/DigitalForge-lib/>

## Structure

```text
src/
  app/          Hub shell and route configuration
  components/   Reusable UI grouped by purpose
    controls/
    feedback/
    layout/
    navigation/
    overlays/
  data/         Small registries used by the hub
  pages/        Hub pages such as Home and Components
  showcases/    Complete, visually independent page designs
  styles/       Global reset and design tokens for the hub
```

Showcase routes are mounted outside the hub shell so they can own their complete layout and visual language. Their code is lazy-loaded when visited.

Reference research is recorded in [lolo-choco-agent-notes.md](./lolo-choco-agent-notes.md).
