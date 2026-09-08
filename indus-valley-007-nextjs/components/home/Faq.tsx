import { faqs } from "../../data/faq";

export default function Faq() {
  return (
    <section className="section-line section-pad">
      <div className="container-iv grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow">FAQ</p><h2 className="display mt-3 text-4xl font-bold">Questions,<br/>answered.</h2></div>
        <div>{faqs.map((item) => <details key={item.question} className="border-b border-[var(--line)] py-5"><summary className="cursor-pointer text-sm font-bold">{item.question}</summary><p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.answer}</p></details>)}</div>
      </div>
    </section>
  );
}