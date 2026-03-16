"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const stats = [
  { value: "5", label: "DIVISIONS" },
  { value: "", label: "WAEC APPROVED" },
  { value: "", label: "ISLAMIC & SECULAR" },
];

export default function StorySection() {
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs tracking-[0.2em] uppercase text-muted mb-8"
        >
          Our Story
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Column — Tall Image */}
          <motion.div variants={slideRight}>
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg bg-gallery-bg">
              <Image
                src="/gka/gka18.jpeg"
                alt="GKA students on excursion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column — Text + Stats */}
          <motion.div
            variants={slideLeft}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-6"
            >
              EST. &middot; WAEC &amp; NECO APPROVED
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-foreground leading-relaxed mb-12"
            >
              Genius Khalifah Academy was founded on a simple yet profound
              vision: that academic excellence and spiritual depth should never
              be mutually exclusive. Situated in the heart of Agbado, Ogun
              State, we provide a sanctuary for learning where students are
              encouraged to reach the peak of secular knowledge while remaining
              firmly rooted in their Islamic identity. We are fully accredited
              by WAEC and NECO, ensuring our graduates are prepared for the
              finest universities globally.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-0 border-t border-border pt-8"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-2 pr-8 ${
                    i > 0 ? "pl-8 border-l border-border" : ""
                  }`}
                >
                  {stat.value && (
                    <span className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  )}
                  <span className="text-xs tracking-[0.12em] uppercase text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
