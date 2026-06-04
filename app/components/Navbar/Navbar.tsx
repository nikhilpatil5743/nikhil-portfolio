"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-white font-bold text-xl">
          NDP
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full transition">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden fixed top-[72px] left-0 w-full h-screen bg-black z-40">

    <ul className="flex flex-col items-center justify-center gap-8 h-full text-white text-xl">

      <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
      <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
      <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="bg-pink-600 px-6 py-3 rounded-full"
      >
        Hire Me
      </a>

    </ul>

  </div>
)}
    </nav>
  );
}