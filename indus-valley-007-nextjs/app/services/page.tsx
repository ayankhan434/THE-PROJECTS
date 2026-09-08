import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <section className="container-iv section-pad pt-36">
      <p className="eyebrow">Our services</p>
      <h1 className="display mt-4 text-6xl font-bold sm:text-8xl">Everything<br/>you need.</h1>
      <div className="mt-16 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {services.map((s) => <Link href={`/services/${s.slug}`} key={s.slug} className="group grid gap-5 py-8 md:grid-cols-[80px_1fr_1fr_auto] md:items-center"><span className="text-sm font-bold text-[var(--accent-2)]">{s.number}</span><h2 className="display text-3xl font-bold">{s.title}</h2><p className="max-w-sm text-sm leading-6 text-[var(--muted)]">{s.description}</p><ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></Link>)}
      </div>
    </section>
  );
}