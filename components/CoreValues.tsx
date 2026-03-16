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
  span: string;
  featured?: boolean;
}

const values: Value[] = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Our students consistently deliver outstanding results in WAEC and NECO examinations, gaining entry into top universities across Nigeria and beyond.",
    stat: "94%",
    statLabel: "WAEC/NECO pass rate",
    span: "md:col-span-7",
    featured: true,
  },
  {
    icon: Heart,
    title: "Islamic Values",
    description:
      "Quranic memorisation, daily worship, and moral education shape students into spiritually grounded individuals.",
    stat: "5+",
    statLabel: "Juz memorised on average",
    span: "md:col-span-5",
  },
  {
    icon: Users,
    title: "Leadership & Character",
    description:
      "Student councils, community service, and public speaking build confidence and real-world skills.",
    stat: "12+",
    statLabel: "Leadership programmes",
    span: "md:col-span-5",
  },
  {
    icon: GraduationCap,
    title: "Holistic Curriculum",
    description:
      "A vibrant, student-centred curriculum that nurtures critical thinking, creativity, and a lifelong love for learning across sciences, arts, and vocational studies.",
    stat: "100%",
    statLabel: "University placement rate",
    span: "md:col-span-7",
  },
  {
    icon: Monitor,
    title: "Technology & Innovation",
    description:
      "From fully equipped computer labs to digital learning tools, we cultivate digitally fluent students prepared for the modern world.",
    stat: "3",
    statLabel: "Dedicated ICT labs",
    span: "md:col-span-7",
  },
  {
    icon: Star,
    title: "Extracurricular Growth",
    description:
      "Sports, debate clubs, science fairs, Arabic competitions, and excursions that broaden horizons.",
    stat: "20+",
    statLabel: "Clubs & activities",
    span: "md:col-span-5",
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

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariant}
              className={`${value.span} ${
                value.featured
                  ? "bg-accent text-white"
                  : "bg-gallery-bg"
              } rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[260px] group relative overflow-hidden`}
            >
              {/* Large watermark stat */}
              <span
                className={`absolute -right-2 -bottom-4 text-[120px] sm:text-[140px] font-bold leading-none tracking-tighter select-none ${
                  value.featured
                    ? "text-white/[0.08]"
                    : "text-foreground/[0.04]"
                }`}
              >
                {value.stat}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
                    value.featured
                      ? "bg-white/15"
                      : "bg-accent/10"
                  }`}
                >
                  <value.icon
                    size={20}
                    className={value.featured ? "text-white" : "text-accent"}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-3 ${
                    value.featured ? "text-white" : ""
                  }`}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed max-w-md ${
                    value.featured ? "text-white/70" : "text-muted"
                  }`}
                >
                  {value.description}
                </p>
              </div>

              {/* Stat */}
              <div className="relative z-10 mt-6 flex items-baseline gap-2">
                <span
                  className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                    value.featured ? "text-white" : "text-accent"
                  }`}
                >
                  {value.stat}
                </span>
                <span
                  className={`text-xs sm:text-sm ${
                    value.featured ? "text-white/50" : "text-muted"
                  }`}
                >
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
