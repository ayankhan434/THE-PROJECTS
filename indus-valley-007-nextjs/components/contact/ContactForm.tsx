

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const endpoint = "https://formspree.io/f/mgaeppkr";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mgaeppkr"
      method="POST"
      className="card p-6 space-y-5"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Your Name
        </label>

        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="input w-full"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Your Email
        </label>

        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="input w-full"
        />
      </div>

      {/* Project */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Project Type
        </label>

        <select
          name="project_type"
          className="input w-full"
        >
          <option>Website Design & Development</option>
          <option>Web Development</option>
          <option>Brand Identity</option>
          <option>SEO & Performance</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Your Message
        </label>

        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about your project..."
          className="input w-full resize-y"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="rounded-lg bg-[var(--accent)] px-6 py-3 font-bold text-[#102018]"
      >
        Send Message
      </button>
    </form>
  );
}