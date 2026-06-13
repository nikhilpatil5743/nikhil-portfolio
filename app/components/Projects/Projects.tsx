"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, PlayCircle, PenTool, TrendingUp, Code2, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Web & App Dev", "Graphic Design", "Video Editing", "Meta Ads"];

  const projects = [
    // --- WEB DEV ---
    { id: 1, category: "Web & App Dev", title: "NovaTech AI", description: "Futuristic SaaS landing page with high-end glassmorphism and AI visualizations.", techStack: ["Next.js", "Tailwind"], icon: <Code2 />, linkText: "Live Demo", link: "https://novatech-ai0.netlify.app/" },
    { id: 2, category: "Web & App Dev", title: "FitZone Gym", description: "Brutalist UI design for a premium fitness center with aggressive typography.", techStack: ["Next.js", "Tailwind"], icon: <Code2 />, linkText: "Live Demo", link: "https://fitzone-gym2.netlify.app/" },
    { id: 3, category: "Web & App Dev", title: "TasteBite", description: "Luxury restaurant website with elegant parallax and gold/amber aesthetics.", techStack: ["Next.js", "Tailwind"], icon: <Code2 />, linkText: "Live Demo", link: "https://tastebite-restaurant0.netlify.app/" },
    
    // --- GRAPHIC DESIGN (Only ONE Mega Card) ---
    { id: 4, category: "Graphic Design", title: "Graphic Design Portfolio", description: "A complete exhibition of my visual storytelling work. Explore 10+ premium logo designs, festival banners, wedding cards, and brand identity projects in the full gallery.", techStack: ["Illustrator", "Photoshop", "Canva", "Figma"], icon: <PenTool />, linkText: "View Full Gallery", link: "/graphic-design", isMegaCard: true },

    // --- VIDEO EDITING (NEW Mega Card 🔥) ---
    { id: 5, category: "Video Editing", title: "Video Editing Showcase", description: "High-retention Instagram Reels, YouTube Shorts, and cinematic promotional videos. Snappy transitions, professional color grading, and dynamic captions.", techStack: ["Premiere Pro", "CapCut", "After Effects"], icon: <PlayCircle />, linkText: "Watch Reels & Videos", link: "/video-editing", isMegaCard: true },

    // --- META ADS (NEW Mega Card 🚀) ---
    { id: 8, category: "Meta Ads", title: "Performance Marketing & Ads", description: "Data-driven Facebook and Instagram ad campaigns. Proven results in high-quality lead generation, health & fitness niches, bulk lead selling, and digital product sales.", techStack: ["Facebook Ads", "Meta Pixel", "Lead Generation"], icon: <TrendingUp />, linkText: "View Ad Campaigns", link: "/meta-ads", isMegaCard: true }
  ];

  const filteredProjects = activeTab === "All" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Showcase</span></motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveTab(cat)} className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === cat ? "text-white" : "text-zinc-400 hover:text-white hover:bg-white/5"}`}>
              {activeTab === cat && <motion.div layoutId="activeTab2" className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full -z-10" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl flex flex-col transition-all hover:border-purple-500/50 overflow-hidden ${p.isMegaCard ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-zinc-900 to-purple-900/20" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-purple-400">{p.icon}</div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{p.category}</span>
                  </div>

                  <h3 className={`font-bold text-white mb-3 group-hover:text-purple-400 transition-colors ${p.isMegaCard ? "text-3xl md:text-4xl" : "text-2xl"}`}>{p.title}</h3>
                  <p className={`text-zinc-400 mb-8 leading-relaxed flex-grow ${p.isMegaCard ? "md:text-lg max-w-3xl" : "text-sm"}`}>{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.techStack.map(t => <span key={t} className="px-3 py-1 bg-black/50 border border-zinc-800 text-zinc-300 text-xs font-medium rounded-md">{t}</span>)}
                  </div>

                  {/* Mega Card links to new page, others open in new tab */}
                  <Link href={p.link} target={p.isMegaCard ? "_self" : "_blank"} className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-all w-fit">
                    {p.linkText} 
                    {p.isMegaCard ? <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> : <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}