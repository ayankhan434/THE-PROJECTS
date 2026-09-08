import Reveal from "../../components/ui/Reveal";

const points = [
  ["01", "Business First", "We understand your goals before we touch the code."],
  ["02", "Design + Code", "Design and development happen under one roof."],
  ["03", "Performance", "Fast, responsive and optimized."],
  ["04", "Long Term", "We build relationships, not just websites."]
];

export default function WhyUs() {
  return (
    <section className="section-line section-pad">
      <div className="container-iv">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow">Why us</p><h2 className="display mt-3 text-4xl font-bold sm:text-5xl">Built around outcomes, not output.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {points.map(([n, title, text], i) => <Reveal key={n} delay={i*.06}><div className="bg-[var(--bg)] p-7"><span className="text-xs font-bold text-[var(--accent-2)]">{n}</span><h3 className="mt-12 font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{text}</p></div></Reveal>)}
          </div>
        </div>
      </div>
    </section>
  );
}