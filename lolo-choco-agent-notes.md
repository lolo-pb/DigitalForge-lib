# Lolo Choco Agent Notes

Reference list reviewed on 2026-08-16. Each site is classified by how it is most useful to DigitalForge, not necessarily by the technology used to build the site itself.

## Full-page design references

- [Eli Marigo Design](https://elimarigodesign.com/) - A graphic-design portfolio organized around posters, editorial work, packaging, merchandise, and identity design.
- [Adam Jakubowski](https://adamjakubowski.pl/) - A media-led portfolio for a photographer, director, and producer combining commercial projects with artistic work.
- [KARGO Archives](https://kargo-studio.com/archives) - A dense, motion-forward studio archive that presents creative work by project name and year.
- [Click to Keep](https://www.clicktokeep.com/) - A Wix Studio Web.Lab showcase called "Save for later," useful as a reference for playful, media-heavy archive interactions.
- [Heat Bureau](https://www.heatbureau.com/) - A full-service design-studio portfolio with expressive typography, atmospheric imagery, and project-focused navigation.

## Component and pattern libraries

- [Originkit](https://www.originkit.dev/) - A copy-and-use library of animated UI components for modern sites, with React and Framer-oriented resources.
- [Supahero](https://supahero.io/) - A curated visual library of website hero sections intended primarily for layout and art-direction inspiration.
- [Bklit UI](https://bklit.com/) - A React component library focused on polished, composable charts and interactive data visualizations.

## Visual assets and design tools

- [Grainient](https://grainient.supply/) - A gradient and background resource offering static assets, animated backgrounds, AI imagery, and a real-time shader tool.

## Animation libraries

- [Motion](https://motion.dev/) - A production-oriented animation library for React, JavaScript, and Vue with gestures, layout transitions, springs, scroll effects, and timelines.
- [Anime.js](https://animejs.com/) - A framework-independent JavaScript animation engine for timelines, SVG, scroll triggers, transforms, staggering, and draggable interactions.

## Stack decision

**Recommendation: use Vite + React + TypeScript for DigitalForge.**

React is the better fit for this particular collection because Originkit exposes React-oriented components, Bklit UI is a React component library, and Motion has first-class React support. Anime.js can still be used directly inside a React page, while the portfolio and studio references can be recreated with ordinary semantic HTML and CSS inside isolated showcase routes.

React itself should not be the main performance problem here. Large images, video, shaders, and mounting several animation systems at once are more likely to make these kinds of pages slow. Keep the app fast by giving every showcase its own route, loading showcase code only when visited, importing animation libraries only where needed, optimizing media, and respecting reduced-motion preferences.

Astro with React islands could also support these resources, but it would introduce two component models and hydration decisions into a repository meant for quick UI practice. A single React model is simpler here, especially when experimenting with interactive components.
