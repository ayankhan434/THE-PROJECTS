import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../../components/ui/Reveal";

export default function SelectedWork() {
  return (
    <section className="section-pad">
      <div className="container-iv">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display mt-3 text-5xl font-bold">A few things<br/>we&apos;ve built.</h2>
          </div>
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent-2)]">View All Work <ArrowUpRight size={14}/></Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * .08}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className={`project-image ${project.imageClass} transition-transform duration-500 group-hover:-translate-y-2`}>
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[9px] font-bold text-white backdrop-blur">{project.number}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div><h3 className="font-bold">{project.title}</h3><p className="mt-1 text-xs text-[var(--muted)]">{project.category}</p></div>
                  <span className="rounded-full border border-[var(--line)] p-2 transition-transform group-hover:rotate-45"><ArrowUpRight size={14}/></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}