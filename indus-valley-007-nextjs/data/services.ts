import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "web-design",
    number: "01",
    title: "Web Design",
    description: "Beautiful, focused interfaces built around your users.",
    details: ["UX direction", "Visual systems", "Responsive UI", "Design systems"]
  },
  {
    slug: "web-development",
    number: "02",
    title: "Web Development",
    description: "Fast, scalable and production-ready websites.",
    details: ["Next.js", "TypeScript", "CMS integration", "Performance"]
  },
  {
    slug: "brand-identity",
    number: "03",
    title: "Brand Identity",
    description: "Visual identities that make your brand impossible to confuse.",
    details: ["Art direction", "Identity systems", "Typography", "Brand guidelines"]
  },
  {
    slug: "seo-performance",
    number: "04",
    title: "SEO & Performance",
    description: "Better visibility, faster websites, real business results.",
    details: ["Technical SEO", "Core Web Vitals", "Analytics", "Conversion optimization"]
  }
];