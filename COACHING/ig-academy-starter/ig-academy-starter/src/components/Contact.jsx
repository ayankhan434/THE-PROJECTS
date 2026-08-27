import react from "react";
import {
  Mail,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-form-wrap">
        <div className="section-title">
          <h2>GET IN TOUCH</h2>
          <div>
            <span />
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <label>
              <User size={16} />
              <input placeholder="Full Name" />
            </label>
            <label>
              <Phone size={16} />
              <input placeholder="Phone Number" />
            </label>
            <label>
              <Mail size={16} />
              <input type="email" placeholder="Email Address" />
            </label>
            <label>
              <select defaultValue="">
                <option value="" disabled>
                  Select Course
                </option>
                <option>Army</option>
                <option>UP Police</option>
                <option>Air Force</option>
                <option>Navy</option>
              </select>
            </label>
          </div>
          <label className="message">
            <MessageSquare size={16} />
            <textarea placeholder="Your Message" rows="5" />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Enquiry →
          </button>
        </form>
      </div>

      <div className="connect">
        <h2>CONNECT WITH US</h2>
        <p>
          <Mail />{" "}
          <span>
            <b>Gmail</b>igacademy.info@gmail.com
          </span>
        </p>
        <p>
          <Phone />{" "}
          <span>
            <b>Phone / WhatsApp</b>+91 98765 43210
          </span>
        </p>
        <p>
          <MapPin />{" "}
          <span>
            <b>Address</b>123 Defence Road, Lucknow,
            <br />
            Uttar Pradesh - 226001
          </span>
        </p>
        <div className="socials">
          <a href="#">
            <MessageSquare /> WhatsApp
          </a>
          <a href="#">
            <Instagram /> Instagram
          </a>
          <a href="#">
            <Youtube /> YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
