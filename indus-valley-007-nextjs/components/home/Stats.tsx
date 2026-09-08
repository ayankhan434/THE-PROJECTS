import Reveal from "../../components/ui/Reveal";

export default function Stats() {
  return (
    <section className="section-line">
      <div className="container-iv grid gap-8 py-10 md:grid-cols-[1fr_1.5fr]">
        <Reveal><p className="eyebrow">What we do best</p></Reveal>
        <Reveal delay={.08} className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <p className="display text-2xl font-semibold">Strategy · Design · Development · Optimization</p>
          <p className="max-w-xs text-xs leading-5 text-[var(--muted)]">We combine creative thinking with clean code to build digital products that make a real impact.</p>
        </Reveal>
      </div>
    </section>
  );
}