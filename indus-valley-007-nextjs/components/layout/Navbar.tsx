"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../../components/ui/ThemeToggle";

const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-[var(--line)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
      <div className="container-iv flex h-[74px] items-center justify-between">
        <Link href="/" className="group">
          <div className="display text-[15px] font-bold tracking-[-.03em]">INDUS-VALLEY-007</div>
          <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[.24em] text-[var(--muted)]">
            Ideas · Design · Development
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-[11px] font-semibold transition-opacity hover:opacity-55">
              {label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-[10px] font-extrabold text-[#102018] transition-transform hover:-translate-y-0.5"
          >
            Start a Project →
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-[var(--line)] p-2" aria-label="Open menu">
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] md:hidden"
          >
            <div className="container-iv flex flex-col py-5">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-[var(--line)] py-4 text-lg font-semibold">
                  {label} <ArrowUpRight className="inline" size={17} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}