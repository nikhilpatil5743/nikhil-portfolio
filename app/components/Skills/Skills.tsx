"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading - Slides from Left */}
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-pink-500 mb-4 font-medium uppercase tracking-wider text-sm"
        >
          My Skills
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Development Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-[24px] p-8 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 group-hover:text-pink-400 transition-colors">
              Development
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Website Development</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Landing Pages</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> WordPress</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Responsive Design</li>
            </ul>
          </motion.div>

          {/* App Development Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-[24px] p-8 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 group-hover:text-pink-400 transition-colors">
              App Dev
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Android Apps</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Flutter Apps</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> App UI Design</li>
            </ul>
          </motion.div>

          {/* Design Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-[24px] p-8 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 group-hover:text-pink-400 transition-colors">
              Design
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Graphic Design</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Branding</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Social Media Design</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Canva & Photoshop</li>
            </ul>
          </motion.div>

          {/* Marketing Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-[24px] p-8 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 group-hover:text-pink-400 transition-colors">
              Marketing
            </h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Meta Ads</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Lead Generation</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Campaign Opt.</li>
              <li className="flex items-center gap-2"><span className="text-pink-500 text-xs">▹</span> Video Editing</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}