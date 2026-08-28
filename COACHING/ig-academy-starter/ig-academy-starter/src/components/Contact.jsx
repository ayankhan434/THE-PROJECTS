import React from "react";
import { useForm } from "@formspree/react";

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
  const [state, handleSubmit] = useForm("mjyvvlga");

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-form-wrap">
        <div className="section-title">
          <h2>GET IN TOUCH</h2>
          <div>
            <span />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              <User size={16} />
              <input type="text" name="name" placeholder="Full Name" required />
            </label>

            <label>
              <Phone size={16} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </label>

            <label>
              <Mail size={16} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </label>

            <label>
              <select name="course" defaultValue="" required>
                <option value="" disabled>
                  Select Course
                </option>

                <option value="Army">Army</option>
                <option value="UP Police">UP Police</option>
                <option value="Air Force">Air Force</option>
                <option value="Navy">Navy</option>
                <option value="BSF">BSF</option>
                <option value="CISF">CISF</option>
                <option value="Home Guard">Home Guard</option>
                <option value="UPSI">UPSI</option>
              </select>
            </label>
          </div>

          <label className="message">
            <MessageSquare size={16} />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
          </label>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Enquiry →"}
          </button>

          {state.succeeded && (
            <p
              style={{
                color: "#f6b900",
                marginTop: "12px",
                fontSize: "12px",
              }}
            >
              ✓ Enquiry sent successfully!
            </p>
          )}

          {state.errors && (
            <p
              style={{
                color: "#ff6b6b",
                marginTop: "12px",
                fontSize: "12px",
              }}
            >
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      <div className="connect">
        <h2>CONNECT WITH US</h2>

        <p>
          <Mail />
          <span>
            <b>Gmail</b>
            igacademy.info@gmail.com
          </span>
        </p>

        <p>
          <Phone />
          <span>
            <b>Phone / WhatsApp</b>
            +91 98765 43210
          </span>
        </p>

        <p>
          <MapPin />
          <span>
            <b>Address</b>
            123 Defence Road, Lucknow,
            <br />
            Uttar Pradesh - 226001
          </span>
        </p>

        <div className="socials">
          <a href="#">
            <MessageSquare />
            WhatsApp
          </a>

          <a href="#">
            <Instagram />
            Instagram
          </a>

          <a href="#">
            <Youtube />
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
