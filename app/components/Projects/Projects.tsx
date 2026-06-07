"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, PlayCircle, PenTool, TrendingUp, Code2 } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Web & App Dev", "Graphic Design", "Video Editing", "Meta Ads"];

  const projects = [
    // Web & App Dev Projects
    {
      id: 1,
      category: "Web & App Dev",
      title: "NovaTech AI",
      description: "Enterprise-grade SaaS landing page featuring futuristic glassmorphism, GSAP scrolling, and dynamic AI data visualizations.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      icon: <Code2 className="w-5 h-5" />,
      linkText: "Live Demo",
      link: "https://novatech-ai0.netlify.app/", // <--- इथे तुझी Vercel ची लिंक टाक
    },
    {
      id: 2,
      category: "Web & App Dev",
      title: "FitZone Gym",
      description: "A hardcore, brutalist UI fitness center website with high-energy typography and seamless bento-grid layouts.",
      techStack: ["Next.js", "Tailwind CSS", "Lucide React"],
      icon: <Code2 className="w-5 h-5" />,
      linkText: "Live Demo",
      link: "https://fitzone-gym2.netlify.app/", // <--- इथे तुझी Vercel ची लिंक टाक
    },
    {
      id: 3,
      category: "Web & App Dev",
      title: "TasteBite Restaurant",
      description: "Luxury dining website with elegant scroll animations, parallax effects, and a premium gold/amber aesthetic.",
      techStack: ["Next.js", "Tailwind CSS", "React Icons"],
      icon: <Code2 className="w-5 h-5" />,
      linkText: "Live Demo",
      link: "https://tastebite-restaurant0.netlify.app/", // <--- इथे तुझी Vercel ची लिंक टाक
    },
    
    // Graphic Design
    {
      id: 4,
      category: "Graphic Design",
      title: "Brand Identity Design",
      description: "Complete branding solutions including logos, typography, color palettes, and social media kits.",
      techStack: ["Illustrator", "Photoshop", "Figma"],
      icon: <PenTool className="w-5 h-5" />,
      linkText: "View Portfolio",
      link: "https://drive.google.com/...", // <--- इथे तुझी Google Drive किंवा Behance ची लिंक टाक
    },
    {
      id: 5,
      category: "Graphic Design",
      title: "Social Media Creatives",
      description: "High-converting posts, stories, and carousel designs for various brands and agencies.",
      techStack: ["Photoshop", "Canva"],
      icon: <PenTool className="w-5 h-5" />,
      linkText: "View Designs",
      link: "https://drive.google.com/...", // <--- इथे लिंक टाक
    },

    // Video Editing
    {
      id: 6,
      category: "Video Editing",
      title: "YouTube Video Editing",
      description: "Engaging long-form edits with motion graphics, B-rolls, and professional sound design.",
      techStack: ["Premiere Pro", "After Effects"],
      icon: <PlayCircle className="w-5 h-5" />,
      linkText: "Watch Videos",
      link: "https://youtube.com/...", // <--- इथे तुझी YouTube प्लेलिस्ट ची लिंक टाक
    },
    {
      id: 7,
      category: "Video Editing",
      title: "Instagram Reels Editing",
      description: "Fast-paced, high-retention short form content optimized for maximum engagement.",
      techStack: ["CapCut", "Premiere Pro"],
      icon: <PlayCircle className="w-5 h-5" />,
      linkText: "Watch Reels",
      link: "https://instagram.com/...", // <--- इथे लिंक टाक
    },

    // Meta Ads
    {
      id: 8,
      category: "Meta Ads",
      title: "Lead Generation Campaigns",
      description: "High-quality lead gen setups for real estate and local businesses using targeted ad sets.",
      techStack: ["Facebook Ads", "CAPI"],
      icon: <TrendingUp className="w-5 h-5" />,
      linkText: "View Case Study",
      link: "https://drive.google.com/...", // <--- केस स्टडीची फाईल लिंक टाक
    },
    {
      id: 9,
      category: "Meta Ads",
      title: "E-commerce Conversion Ads",
      description: "ROAS-driven retargeting, dynamic product ads, and complete pixel tracking setups.",
      techStack: ["Meta Pixel", "Catalog Sales"],
      icon: <TrendingUp className="w-5 h-5" />,
      linkText: "View Case Study",
      link: "https://drive.google.com/...", // <--- केस स्टडीची फाईल लिंक टाक
    },
  ];

  // Filter logic
  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20 lg:py-32 px-6 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-500 mb-4 font-bold tracking-widest uppercase text-sm"
          >
            Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Showcase</span>
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeTab === category ? "text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:bg-zinc-800/50 flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                      {project.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-8 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-black/50 text-zinc-300 rounded-md border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* UPDATE: target="_blank" added for new tab opening */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 w-fit"
                  >
                    {project.linkText}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}