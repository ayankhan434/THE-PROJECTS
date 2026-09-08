import { projects } from "../../data/projects";

export default function CaseStudies() {
  return (
    <section className="section-line py-8">
      <div className="container-iv overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[var(--muted)]">
          {[...projects, ...projects, ...projects].map((p, i) => <span key={i}>✦ {p.title}</span>)}
        </div>
      </div>
    </section>
  );
}