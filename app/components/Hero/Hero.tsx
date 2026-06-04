"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left z-10">

          <motion.p 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-pink-500 text-lg mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Nikhil Dhondge
            <br />
            Patil
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-8"
          >
            Web Developer | App Developer | Graphic Designer
            <br />
            Video Editor | Digital Marketer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-zinc-400 text-lg max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
          >
            I help businesses grow online with modern websites, mobile applications, creative designs, video content, and result-driven digital marketing solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
          >
            {/* Hire Me Button Fixed */}
            <a 
              href="#contact" 
              className="bg-pink-600 hover:bg-pink-500 transition-all duration-300 px-8 py-4 rounded-full text-white font-medium shadow-lg shadow-pink-500/20 hover:-translate-y-1"
            >
              Hire Me
            </a>

            {/* Let's Talk Button Fixed */}
            <a 
              href="#contact" 
              className="border border-zinc-500 hover:border-white transition-all duration-300 px-8 py-4 rounded-full text-white font-medium hover:bg-white/5 hover:-translate-y-1"
            >
              Let's Talk
            </a>

            {/* Resume Download Button (Pahilech barobar ahe) */}
            <a
              href="/resume/Nikhil Dhondge Resume V2.pdf"
              download
              className="border border-pink-600 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-medium hover:-translate-y-1"
            >
              Download Resume
            </a>
            
            {/* Social Links */}
            <div className="flex gap-5 mt-8 lg:mt-0 lg:ml-4 w-full lg:w-auto justify-center text-2xl">
              <a
                href="https://github.com/nikhilpatil5743"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-dhondge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/nikhilpatil.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Side Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }} 
          animate={{ opacity: 1, scale: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center -mt-8 md:mt-0"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-pink-600/20 blur-3xl rounded-full"></div>

            {/* Photo Placeholder */}
            <div className="relative overflow-hidden w-[280px] h-[360px] md:w-[340px] md:h-[450px] lg:w-[380px] lg:h-[500px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px]">
              <Image
                src="/images/profile/nikhil-new.jpg"
                alt="Nikhil Dhondge Patil"
                fill
                priority
                className="object-cover object-top scale-125"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}