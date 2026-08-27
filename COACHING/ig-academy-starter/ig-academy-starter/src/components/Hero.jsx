import react from "react";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          BEST DEFENCE COACHING IN INDIA{" "}
          <span>
            <Star size={13} fill="currentColor" /> ★★★★★
          </span>
        </div>
        <h1>
          TRAIN HARD.
          <br />
          <em>SERVE PROUD.</em>
        </h1>
        <p>
          India's trusted destination for Defence & Government Exam preparation.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#courses">
            Explore Courses <ArrowRight size={17} />
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact Us <ArrowRight size={17} />
          </a>
        </div>
        <div className="selection-mini">
          <div className="avatar-stack">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div>
            <strong>500+</strong>
            <span>Selections Every Year</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-main-image">
          <img
            src="/src/assets/hero/hero-main.jpg"
            alt="IG Academy defence training"
          />
        </div>
        <div className="hero-grid">
          <img src="/src/assets/hero/hero-1.jpg" alt="" />
          <img src="/src/assets/hero/hero-2.jpg" alt="" />
          <img src="/src/assets/hero/hero-3.jpg" alt="" />
          <img src="/src/assets/hero/hero-4.jpg" alt="" />
          <img src="/src/assets/hero/hero-5.jpg" alt="" />
          <img src="/src/assets/hero/hero-6.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
