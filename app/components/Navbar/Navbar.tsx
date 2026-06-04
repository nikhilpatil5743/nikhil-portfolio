"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" className="text-white font-bold text-2xl tracking-widest hover:text-pink-500 transition-colors duration-300">
          NDP<span className="text-pink-500">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-zinc-300 font-medium text-sm uppercase tracking-wider">
          <li><a href="#home" className="hover:text-pink-500 transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-pink-500 transition-colors duration-300">About</a></li>
          <li><a href="#skills" className="hover:text-pink-500 transition-colors duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-500 transition-colors duration-300">Projects</a></li>
          <li><a href="#services" className="hover:text-pink-500 transition-colors duration-300">Services</a></li>
          <li><a href="#experience" className="hover:text-pink-500 transition-colors duration-300">Experience</a></li>
        </ul>

        {/* Desktop Button (Fixed Link) */}
        <a 
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-7 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-0.5 font-medium text-sm"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl hover:text-pink-500 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu with Smooth Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full h-screen bg-zinc-950/95 backdrop-blur-xl z-40 border-t border-zinc-800/50"
          >
            <ul className="flex flex-col items-center pt-20 gap-8 h-full text-white text-xl">
              <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors duration-300">Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors duration-300">About</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors duration-300">Projects</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors duration-300">Services</a></li>
              <li><a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition-colors duration-300">Experience</a></li>
              
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-pink-600 to-purple-600 px-10 py-3 mt-4 rounded-full shadow-lg shadow-pink-500/25 font-medium"
              >
                Hire Me
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}