"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface NewsItem {
  image: string;
  headline: string;
  date: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    headline: "Term 3 Results Released",
    date: "March 2, 2026",
    excerpt:
      "Students across all levels achieved outstanding results, with a 94% pass rate in core subjects. View the full summary on the parent portal.",
  },
  {
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    headline: "Annual Inter-House Sports Day",
    date: "February 18, 2026",
    excerpt:
      "The energy was electric and the cheers were deafening as students competed in track, field, and team events across all age categories.",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    headline: "New Academic Session Begins",
    date: "January 8, 2026",
    excerpt:
      "Welcome back to a new year of learning, growth, and endless possibilities. We are excited to embark on another journey of excellence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function NewsSection() {
  return (
    <section id="news" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            News &amp; Events
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.headline}
              variants={cardVariant}
              className="bg-gallery-bg rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {item.headline}
                </h3>
                <time className="text-xs text-muted tracking-wide">
                  {item.date}
                </time>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
