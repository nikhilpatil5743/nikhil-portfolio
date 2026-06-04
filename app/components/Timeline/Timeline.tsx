"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Graphic Designer",
      description:
        "Helping businesses create engaging branding, social media creatives, and marketing designs.",
    },
    {
      year: "2024 - Present",
      title: "Meta Ads Specialist",
      description:
        "Running lead generation and conversion-focused campaigns for businesses.",
    },
    {
      year: "2025 - Present",
      title: "Web Developer",
      description:
        "Building modern, responsive, and business-focused websites.",
    },
    {
      year: "2025 - Present",
      title: "App Developer",
      description:
        "Developing mobile applications and digital solutions.",
    },
  ];

  return (
    <section id="experience" className="py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading - Sliding from the Left */}
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-pink-500 mb-4 font-medium tracking-wider uppercase text-sm"
        >
          Experience
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          My Journey
        </motion.h2>

        {/* Timeline Cards Container */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Sequential delay for timeline effect
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-[24px] p-8 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 backdrop-blur-sm ml-2 md:ml-0"
            >
              
              {/* Timeline Indicator Node (The little glowing dot on hover) */}
              <div className="absolute -left-3 md:-left-4 top-10 w-6 h-6 bg-zinc-900 border-2 border-zinc-700 rounded-full group-hover:border-pink-500 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-zinc-600 rounded-full group-hover:bg-pink-500 transition-colors duration-300"></div>
              </div>

              {/* Year */}
              <span className="inline-flex items-center text-pink-500 font-medium text-sm md:text-base">
                {item.year}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mt-3 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-7 text-sm md:text-base">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}