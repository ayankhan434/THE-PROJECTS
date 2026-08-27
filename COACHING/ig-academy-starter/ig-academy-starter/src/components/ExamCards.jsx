import react from "react";
import { ArrowRight, Star } from "lucide-react";
import { exams } from "../data/exams";

export default function ExamCards() {
  return (
    <section className="content-section section-pad" id="courses">
      <SectionTitle title="EXAMS WE PREPARE FOR" />
      <div className="exam-grid">
        {exams.map(({ title, subtitle, icon: Icon }) => (
          <article className="exam-card" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <ArrowRight className="exam-arrow" size={17} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function SectionTitle({ title, year }) {
  return (
    <div className="section-title">
      <h2>
        {title} {year && <em>{year}</em>}
      </h2>
      <div>
        <Star size={13} fill="currentColor" />
        <span />
      </div>
    </div>
  );
}
