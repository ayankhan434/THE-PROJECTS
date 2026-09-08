"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <section className="grid-bg relative min-h-screen overflow-hidden pt-[74px]">
      <div className="container-iv flex min-h-[calc(100vh-74px)] items-center py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="eyebrow">
              A digital agency for ambitious brands
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: .15 }}
              className="display mt-6 text-[clamp(3.2rem,7vw,6.6rem)] font-bold"
            >
              DIGITAL EXPERIENCES
              <br />
              BUILT TO MOVE
              <br />
              <span className="text-[var(--accent-2)]">BUSINESS FORWARD.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-7 max-w-lg text-sm leading-6 text-[var(--muted)]">
              We design and develop high-performance digital experiences for ambitious brands.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }} className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start a Project</Button>
              <Link href="/work" className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-5 py-3 text-xs font-bold hover:bg-[var(--surface)]">
                View Our Work <ArrowUpRight size={14} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-20 flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-[var(--muted)]">
              <ArrowDown size={14} /> Scroll to explore
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: .92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: .35, ease: [0.22, 1, .36, 1] }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="absolute -inset-10 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
            <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[#17251e] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,211,79,.18),transparent_25%),linear-gradient(135deg,#0d1d15,#34453a_45%,#0b1410)]" />
              <div className="absolute left-[18%] top-[12%] h-[70%] w-[64%] border border-white/15 bg-white/[.03] shadow-2xl backdrop-blur-sm" />
              <div className="absolute left-[29%] top-[23%] h-[58%] w-[42%] bg-gradient-to-br from-white/10 to-black/30 shadow-2xl" />
              <div className="absolute bottom-[14%] left-[14%] text-[10px] uppercase tracking-[.25em] text-white/55">Ideas into impact</div>
              <div className="absolute right-[10%] top-[10%] text-right text-[8px] uppercase tracking-[.22em] text-white/50">0000<br/>WEBSITES<br/>DIGITAL<br/>EXPERIENCES</div>
              <div className="absolute bottom-8 right-8 display rotate-[-7deg] text-2xl text-[var(--accent)]">Build<br/>better.</div>
              <div className="absolute bottom-6 left-6 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_24px_var(--accent)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}