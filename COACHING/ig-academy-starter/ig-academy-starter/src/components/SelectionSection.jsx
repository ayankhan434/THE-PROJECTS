import react from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { selectionYears } from "../data/selections";

function SelectionRow({ year, students }) {
  const loop = [...students, ...students];

  const move = (dir) => {
    const el = document.querySelector(`[data-row="${year}"]`);
    if (el) el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="selection-year">
      <div className="selection-heading">
        <h2>
          OUR SELECTIONS <em>{year}</em>
        </h2>
        <div className="selection-controls">
          <button onClick={() => move(-1)} aria-label="Previous">
            <ChevronLeft />
          </button>
          <button onClick={() => move(1)} aria-label="Next">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="selection-scroller" data-row={year}>
        <div className="selection-track">
          {loop.map((student, i) => (
            <article className="student-card" key={`${student.name}-${i}`}>
              <img src={student.image} alt={student.name} />
              <div className="student-info">
                <strong>{student.name}</strong>
                <small>Selected in</small>
                <b>{student.exam}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SelectionSection() {
  return (
    <section className="content-section selections section-pad" id="results">
      <div className="selection-intro">
        <p>PROUD MOMENTS</p>
        <Star size={13} fill="currentColor" />
      </div>
      {selectionYears.map((item) => (
        <SelectionRow key={item.year} {...item} />
      ))}
    </section>
  );
}
