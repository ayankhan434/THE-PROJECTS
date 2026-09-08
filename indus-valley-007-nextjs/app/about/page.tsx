import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <section className="container-iv section-pad pt-36">
      <p className="eyebrow">About INDUS-VALLEY-007</p>
      <h1 className="display mt-4 max-w-5xl text-6xl font-bold sm:text-8xl">Small team.<br/><span className="text-[var(--accent-2)]">Big ambition.</span></h1>
      <div className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-2">
        <p className="text-xl leading-8">We&apos;re a digital agency focused on building websites and digital products that connect strong ideas with measurable business outcomes.</p>
        <div className="text-sm leading-7 text-[var(--muted)]"><p>INDUS-VALLEY-007 brings strategy, design and development together. That means fewer handoffs, sharper decisions and a final product that feels coherent from the first click to the last.</p><p className="mt-5">Our approach is intentionally lean: understand the problem, make the experience clear, build it properly and keep improving.</p></div>
      </div>
      <div className="mt-12"><Button href="/contact">Work With Us</Button></div>
    </section>
  );
}