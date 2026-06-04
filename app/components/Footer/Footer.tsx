"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60 py-10 px-6 overflow-hidden mt-10">
      
      {/* Subtle background glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-pink-600/10 blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        
        <h3 className="text-white text-xl font-bold mb-3 tracking-wide">
          Nikhil Dhondge <span className="text-pink-500">Patil</span>
        </h3>

        <p className="text-zinc-400 text-sm md:text-base font-medium mb-6 flex flex-wrap justify-center items-center gap-2">
          <span>Web Developer</span>
          <span className="text-pink-500/50 hidden md:inline">•</span>
          <span>App Developer</span>
          <span className="text-pink-500/50 hidden md:inline">•</span>
          <span>Graphic Designer</span>
          <span className="text-pink-500/50 hidden md:inline">•</span>
          <span>Digital Marketer</span>
        </p>

        {/* Small Divider */}
        <div className="w-16 h-px bg-zinc-800 mx-auto mb-6"></div>

        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Nikhil Dhondge Patil. All Rights Reserved.
        </p>

      </motion.div>
    </footer>
  );
}