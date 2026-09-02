/* import { BookOpen, Wifi, Newspaper, Armchair } from "lucide-react";
import { galleryImages } from "../data/gallery";

const facilities = [
  [BookOpen, "Comprehensive Books"],
  [Armchair, "Quiet & Comfortable Study Space"],
  [Newspaper, "Daily Newspaper & Magazines"],
  [Wifi, "Wi-Fi Facility"],
];

export default function Library() {
  return (
    <section className="library section-pad" id="library">
      <div className="library-copy">
        <div className="section-title">
          <h2>LIBRARY & STUDY ENVIRONMENT</h2>
          <div>
            <span />
          </div>
        </div>
        <p>
          A peaceful and focused environment designed to help aspirants stay
          consistent, disciplined and exam-ready.
        </p>
        <div className="facility-grid">
          {facilities.map(([Icon, text]) => (
            <div key={text}>
              <Icon />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <a className="btn btn-primary" href="#gallery">
          View More Photos <span>→</span>
        </a>
      </div>
      <div className="library-gallery" id="gallery">
        {galleryImages.map((src, i) => (
          <img
            className={i === 0 ? "featured" : ""}
            key={src}
            src={src}
            alt="IG Academy library"
          />
        ))}
      </div>
    </section>
  );
} */
