import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-lg px-5 py-3 text-xs font-extrabold transition-all hover:-translate-y-1 ${
        dark ? "bg-[#102018] text-white" : "bg-[var(--accent)] text-[#102018]"
      }`}
    >
      {children}
      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}