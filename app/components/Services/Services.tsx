"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive, and business-focused websites.",
    },
    {
      title: "App Development",
      description: "Android and cross-platform mobile applications.",
    },
    {
      title: "Graphic Design",
      description: "Creative branding, social media, and marketing designs.",
    },
    {
      title: "Video Editing",
      description: "Professional reels, shorts, and promotional videos.",
    },
    {
      title: "Meta Ads",
      description: "Lead generation and conversion-focused ad campaigns.",
    },
    {
      title: "Digital Marketing",
      description: "Strategies that help businesses grow online.",
    },
  ];

  return (
    <section id="services" className="py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading Animations */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-pink-500 mb-4 font-medium uppercase tracking-wider text-sm"
        >
          Services
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          What I Can Do For You
        </motion.h2>

        {/* Services Grid with Dynamic Stagger Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-[24px] p-8 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 backdrop-blur-sm flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-7 flex-grow">
                {service.description}
              </p>

              {/* Working Clickable Hover Action */}
              <div className="mt-6 overflow-hidden">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-pink-500 font-medium text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:text-pink-400"
                >
                  Let's Discuss <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}