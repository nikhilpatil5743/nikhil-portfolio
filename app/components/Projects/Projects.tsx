"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "ChromaKart",
      description: "A modern dropshipping landing page focused on high conversions and engaging product marketing.",
      techStack: ["Next.js", "Tailwind CSS"],
      features: ["Responsive Design", "Fast Performance", "Modern UI/UX"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "TechPixels Studio",
      description: "A professional agency website showcasing digital services, portfolios, and premium tech solutions.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: ["SEO Optimized", "Premium Animations", "Dynamic Layout"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "BolKeyNext",
      description: "A professional multilingual smart keyboard app with AI features and a dynamic live transliteration engine.",
      techStack: ["Kotlin", "Clean Architecture", "Android SDK"],
      features: ["Smart AI Features", "Dual-direction Transliteration", "Creator-focused UI"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading - Sliding from the Left */}
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-purple-500 mb-4 font-medium tracking-wider uppercase text-sm"
        >
          My Projects
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Featured Work
        </motion.h2>

        {/* Projects Grid with Staggered Fade-Up */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Wave effect delay
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden backdrop-blur-sm flex flex-col h-full cursor-pointer"
            >
              {/* Top Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-semibold px-3 py-1 bg-zinc-800/80 text-zinc-300 rounded-lg border border-zinc-700/50 group-hover:border-purple-500/30 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Features List with Custom Checkmarks */}
              <ul className="space-y-3 text-zinc-300 mb-8 text-sm mt-auto">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 group-hover:text-zinc-200 transition-colors duration-300">
                    <span className="flex items-center justify-center min-w-[20px] w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 text-xs group-hover:bg-purple-500/20 transition-colors duration-300">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto pt-5 border-t border-zinc-800/50">
                <a
                  href={project.demoLink}
                  className="flex-1 text-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-4 py-2.5 rounded-xl text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/20 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="flex-1 text-center border border-zinc-700 hover:bg-zinc-800 px-4 py-2.5 rounded-xl text-white font-medium transition-all duration-300 text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}