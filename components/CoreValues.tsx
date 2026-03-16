"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Monitor,
  Heart,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const values: Value[] = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Academic success is a non-negotiable standard at GKA. Our students consistently deliver outstanding results in WAEC and NECO examinations, gaining entry into top universities across Nigeria and beyond.",
    stat: "94%",
    statLabel: "WAEC/NECO pass rate",
  },
  {
    icon: Heart,
    title: "Islamic Values",
    description:
      "Character formation rooted in Islamic principles is at the heart of everything we do. Quranic memorisation, daily worship, and moral education shape students into spiritually grounded individuals.",
    stat: "5+",
    statLabel: "Juz memorised on average",
  },
  {
    icon: Users,
    title: "Leadership & Character",
    description:
      "Developing tomorrow's leaders through practical experience. Student councils, community service, inter-house competitions, and public speaking build confidence and real-world skills.",
    stat: "12+",
    statLabel: "Leadership programmes",
  },
  {
    icon: GraduationCap,
    title: "Holistic Curriculum",
    description:
      "Our pedagogy is driven by a vibrant, student-centred curriculum that nurtures critical thinking, creativity, and a lifelong love for learning across sciences, arts, and vocational studies.",
    stat: "100%",
    statLabel: "University placement rate",
  },
  {
    icon: Monitor,
    title: "Technology & Innovation",
    description:
      "Technology is woven into the fabric of our teaching. From fully equipped computer labs to digital learning tools, we cultivate digitally fluent students prepared for the modern world.",
    stat: "3",
    statLabel: "Dedicated ICT labs",
  },
  {
    icon: Star,
    title: "Extracurricular Growth",
    description:
      "Beyond the classroom, students explore their passions through sports, debate clubs, science fairs, Arabic competitions, and excursions that broaden horizons and build well-rounded individuals.",
    stat: "20+",
    statLabel: "Clubs & activities",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
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

export default function CoreValues() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="text-accent">Faith</span>
            <span className="text-muted mx-2">&middot;</span>
            <span>Excellence</span>
            <span className="text-muted mx-2">&middot;</span>
            <span className="text-accent">Character</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the programmes and values that make our academy a place of
            distinction.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariant}
              className="bg-card border border-border rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <value.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Stat */}
              <div className="mt-6 pt-5 border-t border-border flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-accent tracking-tight">
                  {value.stat}
                </span>
                <span className="text-xs sm:text-sm text-muted">
                  {value.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
