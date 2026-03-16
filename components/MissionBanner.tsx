"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function MissionBanner() {
  return (
    <section className="bg-accent py-24 lg:py-32 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={fadeScale} className="text-center">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug max-w-3xl mx-auto tracking-tight">
            &ldquo;We understand the importance of educating not just the mind,
            but the soul of each student.&rdquo;
          </blockquote>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
              Mission
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              To deliver a holistic education that nurtures intellectual
              curiosity, moral character, and spiritual awareness — equipping
              students to excel in examinations and in life.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
              Vision
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              To be the leading institution in Nigeria where academic rigour and
              Islamic values converge, producing graduates who are confident,
              compassionate, and community-minded.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
