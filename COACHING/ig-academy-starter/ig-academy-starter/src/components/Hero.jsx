import React from "react";
import { ArrowRight, Star } from "lucide-react";

// Import images from src/assets/hero
import heroMain from "../assets/hero/hero-main.jpg";
import hero1 from "../assets/hero/hero-1.jpg";
import hero2 from "../assets/hero/hero-2.jpg";
import hero3 from "../assets/hero/hero-3.jpg";
import hero4 from "../assets/hero/hero-4.jpg";
import hero5 from "../assets/hero/hero-5.jpg";
import hero6 from "../assets/hero/hero-6.jpg";

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
          <img src={heroMain} alt="IG Academy defence training" />
        </div>

        <div className="hero-grid">
          <img src={hero1} alt="Defence training" />
          <img src={hero2} alt="Defence training" />
          <img src={hero3} alt="Defence training" />
          <img src={hero4} alt="Defence training" />
          <img src={hero5} alt="Defence training" />
          <img src={hero6} alt="Defence training" />
        </div>
      </div>
    </section>
  );
}
