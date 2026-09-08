"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-12 rounded-full border border-[var(--line)]" />;

  const dark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative flex h-8 w-12 items-center rounded-full border border-[var(--line)] p-1"
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
    >
      <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-[#102018] transition-transform ${dark ? "translate-x-4" : "translate-x-0"}`}>
        {dark ? <Moon size={12} /> : <Sun size={12} />}
      </span>
    </button>
  );
}