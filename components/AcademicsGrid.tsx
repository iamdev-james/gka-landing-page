"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Program {
  image: string;
  alt: string;
  label: string;
  description: string;
}

const programs: Program[] = [
  {
    image: "/gka/gka19.jpeg",
    alt: "Happy GKA student outdoors on excursion",
    label: "Kindergarten",
    description:
      "A safe, stimulating space where children develop early social, emotional, and learning skills through guided play and discovery.",
  },
  {
    image: "/gka/gka17.jpeg",
    alt: "GKA students and teachers on an excursion",
    label: "Nursery",
    description:
      "A nurturing start for young learners, where caring teachers set the foundation for literacy, numeracy, and lifelong curiosity.",
  },
  {
    image: "/gka/gka8.jpeg",
    alt: "Students learning in classroom with teacher",
    label: "Primary",
    description:
      "A rigorous curriculum fostering critical thinking, creativity, and strong academic habits from an early age.",
  },
  {
    image: "/gka/gka9.jpeg",
    alt: "Secondary students in science laboratory class",
    label: "Secondary",
    description:
      "WAEC & NECO preparation with depth across sciences, arts, and commercial subjects — building confident, exam-ready graduates.",
  },
  {
    image: "/gka/gka10.jpeg",
    alt: "Students in Islamic studies classroom",
    label: "Arabic & Islamic School",
    description:
      "Quranic memorisation, Arabic language proficiency, and Islamic studies woven into a structured, values-driven programme.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function AcademicsGrid() {
  return (
    <section id="academics" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Academics
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12">
            What We Offer
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program) => (
            <motion.div
              key={program.label}
              variants={cardVariant}
              className="group bg-card border border-border rounded-[20px] p-2 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-2">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Text */}
              <div className="pb-4 p-2">
                <h3 className="text-lg font-bold tracking-tight mb-2">
                  {program.label}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
