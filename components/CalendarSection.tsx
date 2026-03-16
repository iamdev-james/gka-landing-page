"use client";

import { motion } from "framer-motion";

interface Term {
  label: string;
  dates: string;
  events: string[];
}

const terms: Term[] = [
  {
    label: "TERM 1",
    dates: "Sept 12 — Dec 15",
    events: ["Orientation Week", "Founder\u2019s Day", "Mid-term Assessment"],
  },
  {
    label: "TERM 2",
    dates: "Jan 08 — Mar 28",
    events: ["Inter-House Sports", "Islamic Awareness Week", "Mock Examinations"],
  },
  {
    label: "TERM 3",
    dates: "Apr 15 — July 20",
    events: ["Annual Speech & Prize", "WAEC/NECO Finals", "Graduation Ceremony"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariant = {
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

export default function CalendarSection() {
  return (
    <section className="py-24 lg:py-32 bg-gallery-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Academic Calendar
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border"
        >
          {terms.map((term) => (
            <motion.div
              key={term.label}
              variants={itemVariant}
              className="py-8 md:py-0 md:px-8 first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
                {term.label}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-8">
                {term.dates}
              </h3>

              <div className="space-y-4">
                {term.events.map((event) => (
                  <div key={event} className="flex items-center gap-3">
                    <span className="block w-[3px] h-5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-muted">{event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
