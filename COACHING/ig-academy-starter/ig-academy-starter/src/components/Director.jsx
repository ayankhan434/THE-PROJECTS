import react from "react";
import { CheckCircle2, Quote } from "lucide-react";

const points = [
  "M.Sc. (Mathematics)",
  "B.Ed. | CTET Qualified",
  "Ex. Defence Personnel",
  "15+ Years of Teaching Experience",
  "Mentored 10,000+ Students",
];

export default function Director() {
  return (
    <section className="director section-pad" id="about-us">
      <div className="director-photo">
        <img
          src="/src/assets/director/director.jpg"
          alt="Director of IG Academy"
        />
      </div>
      <div className="director-details">
        <span className="eyebrow">DIRECTOR, IG ACADEMY</span>
        <h2>Mr. Indrajeet Singh</h2>
        <ul>
          {points.map((p) => (
            <li key={p}>
              <CheckCircle2 size={15} /> {p}
            </li>
          ))}
        </ul>
      </div>
      <blockquote>
        <Quote />
        <p>
          Our mission is not just to prepare students for examination, but to
          prepare them for the responsibility that comes with the uniform.
        </p>
        <cite>Indrajeet Singh</cite>
      </blockquote>
    </section>
  );
}
