import react from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>★ IG ACADEMY</strong>
        <small>DEFENCE COACHING</small>
        <p>
          India's most trusted institute for defence & government exam
          preparation.
        </p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#courses">Courses</a>
        <a href="#results">Results</a>
      </div>
      <div>
        <h4>Our Courses</h4>
        <a href="#courses">UPSI</a>
        <a href="#courses">UP Police</a>
        <a href="#courses">Army</a>
        <a href="#courses">Air Force</a>
        <a href="#courses">Navy</a>
      </div>
      <div>
        <h4>Support</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Refund Policy</a>
      </div>
      <div>
        <h4>Stay Updated</h4>
        <p>Subscribe to get updates on new batches and results.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Enter your email" />
          <button>→</button>
        </form>
      </div>
      <div className="copyright">© 2026 IG Academy. All Rights Reserved.</div>
    </footer>
  );
}
