import react from "react";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  "Home",
  "Courses",
  "Results",
  "Library",
  "About Us",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">★</span>
        <span>
          <strong>IG ACADEMY</strong>
          <small>DEFENCE COACHING</small>
        </span>
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link, index) => (
          <a
            key={link}
            className={index === 0 ? "active" : ""}
            href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          className="nav-cta mobile-only"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Enquire Now <ArrowUpRight size={16} />
        </a>
      </nav>

      <a className="nav-cta desktop-only" href="#contact">
        Enquire Now <ArrowUpRight size={16} />
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
