import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: .6 }}
        className="display mt-3 max-w-2xl text-4xl font-bold sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted)]">{description}</p>}
    </div>
  );
}