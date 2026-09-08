import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container-iv py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="display text-xl font-bold">INDUS-VALLEY-007</div>
            <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">Digital experiences for ambitious businesses.</p>
          </div>
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Social</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" aria-label="Instagram">Instagram</a><a href="#" aria-label="LinkedIn">LinkedIn</a><a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </div>
          <div className="flex items-start md:justify-end">
            <div className="display rotate-[-6deg] text-xl leading-tight">Ideas.<br/>Built.<br/>Impact.</div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[var(--line)] pt-5 text-[10px] text-[var(--muted)] sm:flex-row">
          <span>© 2026 INDUS-VALLEY-007. All rights reserved.</span>
          <span>Built with passion / India ♥</span>
        </div>
      </div>
    </footer>
  );
}