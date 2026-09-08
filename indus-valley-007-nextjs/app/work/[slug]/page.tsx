import { notFound } from "next/navigation";
import { projects } from "../../../data/projects"
import Button from "../../../components/ui/Button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className="container-iv section-pad pt-36">
      <p className="eyebrow">{project.number} / {project.category}</p>
      <h1 className="display mt-4 max-w-5xl text-6xl font-bold sm:text-8xl">{project.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.description}</p>
      <div className={`project-image ${project.imageClass} mt-14 min-h-[520px]`} />
      <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-3">
        <div><p className="eyebrow">Result</p><p className="mt-2 font-bold">{project.result}</p></div>
        <div><p className="eyebrow">Services</p><p className="mt-2 font-bold">{project.tags.join(" · ")}</p></div>
        <div><p className="eyebrow">Approach</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Strategy, interface design and a performance-focused build.</p></div>
      </div>
      <div className="mt-12"><Button href="/contact">Start a Similar Project</Button></div>
    </section>
  );
}