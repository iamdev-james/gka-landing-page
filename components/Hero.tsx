"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen" style={{ clipPath: "inset(0)" }}>
      {/* Fixed Background — clipped to hero section for parallax effect */}
      <div className="fixed inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800"
          alt="Students learning in a sunlit classroom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="text-xs tracking-[0.25em] uppercase text-white/60 mb-6"
        >
          WAEC &amp; NECO Approved &middot; Agbado, Ogun State
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: 0.1,
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl"
        >
          Nurturing Minds.
          <br />
          Shaping Souls.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: 0.2,
          }}
          className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
        >
          A school where academic rigour and Islamic values meet — nurturing
          confident, knowledgeable, and spiritually grounded individuals from
          Kindergarten through Secondary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: 0.35,
          }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#academics"
            className="border border-white/40 text-white text-sm font-medium px-7 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 active:scale-95 backdrop-blur-sm"
          >
            Explore Academics
          </Link>
          <Link
            href="#admissions"
            className="bg-accent text-white text-sm font-medium px-7 py-3 rounded-lg hover:bg-accent/90 transition-all duration-200 active:scale-95"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
