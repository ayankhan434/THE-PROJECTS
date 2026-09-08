import { notFound } from "next/navigation";
import { services } from "../../../data/services";
import Button from "../../../components/ui/Button";

export function generateStaticParams() { return services.map((s) => ({ service: s.slug })); }

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const item = services.find((s) => s.slug === service);
  if (!item) notFound();

  return (
    <section className="container-iv section-pad pt-36">
      <p className="eyebrow">{item.number} / Service</p>
      <h1 className="display mt-4 text-6xl font-bold sm:text-8xl">{item.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{item.description}</p>
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {item.details.map((detail, i) => <div key={detail} className="card p-7"><span className="text-xs font-bold text-[var(--accent-2)]">0{i+1}</span><h2 className="mt-10 font-bold">{detail}</h2></div>)}
      </div>
      <div className="mt-12"><Button href="/contact">Talk About Your Project</Button></div>
    </section>
  );
}