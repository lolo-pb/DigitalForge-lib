export type Showcase = {
  description: string;
  route: string;
  tags: string[];
  title: string;
};

export const showcases: Showcase[] = [
  {
    title: "Athletes USA",
    description:
      "A mobile-first, scroll-led offer journey that turns an athletic scholarship presentation into a cinematic web experience.",
    route: "/showcases/athletes-usa",
    tags: ["Landing page", "Scroll animation", "Mobile-first"],
  },
  {
    title: "Studio Landing",
    description:
      "A self-contained editorial landing page used to prove that showcases can ignore the hub layout.",
    route: "/showcases/studio-landing",
    tags: ["Landing page", "Editorial", "Responsive"],
  },
];

