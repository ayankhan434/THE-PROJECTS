import Reveal from "../../components/ui/Reveal";

const steps = [
  ["01", "Discover", "Understand your business, audience and goals."],
  ["02", "Strategize", "Turn insight into a clear digital strategy."],
  ["03", "Design", "Create the visual direction and experience."],
  ["04", "Develop", "Build, test and optimize for performance."],
  ["05", "Launch", "Ship it. Measure it. Make it better."]
];

export default function Process() {
  return (
    <section className="section-line section-pad">
      <div className="container-iv">
        <p className="eyebrow">How we work</p>
        <div className="mt-3 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div><h2 className="display text-4xl font-bold sm:text-5xl">A clear process for great results.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">A simple, collaborative process designed to turn your ideas into impact.</p></div>
          <div className="grid gap-8 sm:grid-cols-5">
            {steps.map(([num, title, desc], i) => (
              <Reveal key={num} delay={i * .07}>
                <div className="relative border-t border-[var(--line)] pt-5">
                  <span className="absolute -top-[5px] left-0 h-2 w-2 rounded-full border border-[var(--text)] bg-[var(--bg)]"/>
                  <div className="text-[10px] text-[var(--muted)]">{num}</div>
                  <h3 className="mt-2 text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-[10px] leading-4 text-[var(--muted)]">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}