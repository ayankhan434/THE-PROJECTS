import Link from 'next/link'
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function WorkPage() {
  return (
    <section className="container-iv section-pad pt-36">
      <p className="eyebrow">Selected work</p>
      <h1 className="display mt-4 text-6xl font-bold sm:text-8xl">Work that<br/><span className="text-[var(--accent-2)]">moves.</span></h1>
      <p className="mt-6 max-w-lg text-sm leading-6 text-[var(--muted)]">A selection of digital experiences, brands and products we&apos;ve helped move forward.</p>
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {projects.map((p) => <Link key={p.slug} href={`/work/${p.slug}`} className="group"><div className={`project-image ${p.imageClass}`} /><div className="mt-4 flex justify-between"><div><h2 className="font-bold">{p.title}</h2><p className="mt-1 text-xs text-[var(--muted)]">{p.category}</p></div><ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div></Link>)}
      </div>
    </section>
  );
}