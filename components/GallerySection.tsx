"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const row1Images = [
  { src: "/gka/gka1.jpg", alt: "School corridor and building interior" },
  { src: "/gka/gka4.jpeg", alt: "Students in computer lab" },
  { src: "/gka/gka6.jpeg", alt: "Teacher instructing at whiteboard" },
  { src: "/gka/gka9.jpeg", alt: "Biology class in the science lab" },
  { src: "/gka/gka16.jpeg", alt: "Students in chemistry laboratory" },
  { src: "/gka/gka17.jpeg", alt: "Students on excursion group photo" },
  { src: "/gka/gka19.jpeg", alt: "Student on field trip outdoors" },
  { src: "/gka/gka20.jpg", alt: "School building front view" },
  { src: "/gka/gka11.jpeg", alt: "Science lab practical session" },
  { src: "/gka/gka21.jpg", alt: "Academy signage and entrance" },
];

const row2Images = [
  { src: "/gka/gka5.jpeg", alt: "Computer class wide view" },
  { src: "/gka/gka8.jpeg", alt: "Classroom lesson with students" },
  { src: "/gka/gka10.jpeg", alt: "Teacher writing on whiteboard" },
  { src: "/gka/gka13.jpeg", alt: "Science lab equipment and students" },
  { src: "/gka/gka18.jpeg", alt: "Group photo on excursion" },
  { src: "/gka/gka2.jpeg", alt: "School building exterior" },
  { src: "/gka/gka15.jpeg", alt: "Students in laboratory" },
  { src: "/gka/gka14.jpeg", alt: "Practical science session" },
  { src: "/gka/gka12.jpeg", alt: "Students during class" },
  { src: "/gka/gka3.jpeg", alt: "Academy building with signage" },
];

function MarqueeRow({
  images,
  reverse = false,
}: {
  images: typeof row1Images;
  reverse?: boolean;
}) {
  const doubled = [...images, ...images];
  return (
    <div className="marquee-container overflow-hidden">
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {doubled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] h-[220px] md:w-[320px] md:h-[220px] max-[640px]:w-[240px] max-[640px]:h-[160px] relative rounded overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-gallery-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Life at GKA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            A Glimpse Into Our World
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4"
      >
        <MarqueeRow images={row1Images} />
        <MarqueeRow images={row2Images} reverse />
      </motion.div>
    </section>
  );
}
