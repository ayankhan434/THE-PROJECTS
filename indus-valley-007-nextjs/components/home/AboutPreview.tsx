import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function AboutPreview() {
  return (
    <section className="section-line section-pad">
      <div className="container-iv grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
            <div className="absolute left-[12%] top-[12%] h-[75%] w-[76%] bg-gradient-to-br from-[#d8d2c0] via-[#8f958a] to-[#28362d]" />
            <div className="absolute left-[28%] top-[28%] h-[50%] w-[45%] border border-white/40 bg-black/10" />
            <div className="absolute bottom-8 left-8 display max-w-[170px] text-3xl font-bold text-white">Good Design.<br/>Brighter Business.</div>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <p className="eyebrow">About INDUS-VALLEY-007</p>
          <h2 className="display mt-3 text-4xl font-bold sm:text-5xl">We don&apos;t just build websites.<br/>We build digital assets for business.</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">We are a small, senior-led digital studio focused on design, development and strategy. Every website we create is built to look good, feel fast and make a measurable difference.</p>
          <div className="mt-8"><Button href="/about">More About Us</Button></div>
        </Reveal>
      </div>
    </section>
  );
}