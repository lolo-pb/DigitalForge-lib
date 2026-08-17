export type Showcase = {
  description: string;
  route: string;
  tags: string[];
  title: string;
};

export const showcases: Showcase[] = [
  {
    title: "Studio Landing",
    description:
      "A self-contained editorial landing page used to prove that showcases can ignore the hub layout.",
    route: "/showcases/studio-landing",
    tags: ["Landing page", "Editorial", "Responsive"],
  },
];

