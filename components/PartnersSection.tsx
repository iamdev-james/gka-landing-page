"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons";

const partners = [
  { name: "Microsoft", icon: `${CDN}/microsoft.svg` },
  { name: "Google", icon: `${CDN}/google.svg` },
  { name: "Apple", icon: `${CDN}/apple.svg` },
  { name: "Amazon", icon: `${CDN}/amazon.svg` },
  { name: "IBM", icon: `${CDN}/ibm.svg` },
  { name: "Intel", icon: `${CDN}/intel.svg` },
  { name: "Adobe", icon: `${CDN}/adobe.svg` },
  { name: "Samsung", icon: `${CDN}/samsung.svg` },
  { name: "Slack", icon: `${CDN}/slack.svg` },
  { name: "Notion", icon: `${CDN}/notion.svg` },
];

export default function PartnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef(0);
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    let animId: number;

    const animate = () => {
      if (!paused.current) {
        scrollPos.current += 0.4;
        if (scrollPos.current >= totalWidth) {
          scrollPos.current -= totalWidth;
        }
      }
      track.style.transform = `translateX(-${scrollPos.current}px)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Trusted By
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Partners
            </h2>
          </div>
          <p className="mt-3 sm:mt-0 text-sm text-muted max-w-xs">
            Collaborating with leading organisations to deliver world-class
            education.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="relative"
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-5 sm:gap-6"
          style={{ willChange: "transform" }}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 group flex items-center gap-3 px-5 sm:px-6 cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.icon}
                alt={partner.name}
                width={30}
                height={30}
                className="opacity-20 transition-all duration-300 group-hover:opacity-80"
              />
              <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground/20 transition-colors duration-300 group-hover:text-accent select-none whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
