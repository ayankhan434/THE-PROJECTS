import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import Reveal from "../../components/ui/Reveal";

export default function Services() {
  return (
    <section className="section-line section-pad">
      <div className="container-iv grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Our services</p>
          <h2 className="display mt-3 text-4xl font-bold sm:text-5xl">Everything you need to grow online.</h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">End-to-end digital services to help you build, scale and stand out.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * .06} className="h-full">
              <Link href={`/services/${service.slug}`} className="group flex h-full min-h-[230px] flex-col bg-[var(--bg)] p-6 transition-colors hover:bg-[var(--surface)]">
                <div className="flex items-center justify-between"><span className="text-xs font-bold text-[var(--accent-2)]">{service.number}</span><ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
                <div className="mt-auto"><h3 className="display text-2xl font-bold">{service.title}</h3><p className="mt-3 text-xs leading-5 text-[var(--muted)]">{service.description}</p><span className="mt-5 inline-block text-[10px] font-bold text-[var(--accent-2)]">Learn More →</span></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}