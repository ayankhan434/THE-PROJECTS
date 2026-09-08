"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const change = (dir: number) => setIndex((index + dir + testimonials.length) % testimonials.length);

  return (
    <section className="section-line section-pad">
      <div className="container-iv grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div><p className="eyebrow">What our clients say</p><h2 className="display mt-3 text-4xl font-bold sm:text-5xl">Kind words<br/>from great people.</h2></div>
        <div className="relative min-h-[240px]">
          <Quote size={30} className="mb-7 opacity-30"/>
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: .35 }}>
              <p className="display max-w-2xl text-2xl font-medium leading-tight sm:text-3xl">“{item.quote}”</p>
              <div className="mt-7 flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-black text-[#102018]">{item.name.split(" ").map(x => x[0]).join("")}</div><div><p className="text-xs font-bold">{item.name}</p><p className="text-[10px] text-[var(--muted)]">{item.role}</p></div></div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 right-0 flex gap-2"><button onClick={() => change(-1)} className="rounded-full border border-[var(--line)] p-3 hover:bg-[var(--surface)]"><ArrowLeft size={15}/></button><button onClick={() => change(1)} className="rounded-full border border-[var(--line)] p-3 hover:bg-[var(--surface)]"><ArrowRight size={15}/></button></div>
        </div>
      </div>
    </section>
  );
}