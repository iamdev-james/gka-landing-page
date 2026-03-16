"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="py-24 lg:py-32 bg-accent-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
          >
            Begin Your Child&apos;s Journey With Us
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted text-base mb-10"
          >
            Admissions are open. Join a community where excellence and faith
            walk hand in hand.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="#contact"
              className="inline-block bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-all duration-200 active:scale-95"
            >
              Apply for Admission
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
