import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "northstar-commerce",
    number: "01",
    title: "Northstar Commerce",
    category: "E-commerce Experience",
    description: "A conversion-first storefront for a modern furniture brand.",
    result: "+41% qualified conversions",
    imageClass: "project-image-one",
    tags: ["UX", "Design", "Development"]
  },
  {
    slug: "fintech-platform",
    number: "02",
    title: "Ledger Finance",
    category: "Fintech Platform",
    description: "A focused digital product that makes complex money flows feel simple.",
    result: "2.8× faster task completion",
    imageClass: "project-image-two",
    tags: ["Product", "UI", "Development"]
  },
  {
    slug: "atlas-travel",
    number: "03",
    title: "Atlas Travel",
    category: "Travel Website",
    description: "An editorial travel experience built around discovery and trust.",
    result: "+67% engagement",
    imageClass: "project-image-three",
    tags: ["Strategy", "Design", "Development"]
  }
];