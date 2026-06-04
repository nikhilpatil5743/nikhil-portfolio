"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading Animations */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-pink-500 mb-4 font-medium tracking-wider uppercase text-sm"
        >
          Contact
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Work Together
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Looking for a website, mobile app, graphic design,
          video editing, or digital marketing solution?
          Let's discuss your project.
        </motion.p>

        {/* Main Contact Card - Pop Up Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-500 rounded-[32px] p-10 md:p-14 backdrop-blur-sm"
        >
          
          {/* Contact Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-4 text-center mb-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-zinc-500 text-sm font-medium mb-2 uppercase tracking-wider">Email</p>
              <a href="mailto:nd0437210@gmail.com" className="text-white text-lg hover:text-pink-400 transition-colors">
                nd0437210@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-zinc-500 text-sm font-medium mb-2 uppercase tracking-wider">WhatsApp</p>
              <p className="text-white text-lg">+91 9307271695</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-zinc-500 text-sm font-medium mb-2 uppercase tracking-wider">Location</p>
              <p className="text-white text-lg">Mehkar, Maharashtra</p>
            </motion.div>

          </div>

          {/* Action Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href="https://wa.me/919307271695"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 px-10 py-4 rounded-full text-white font-medium shadow-lg shadow-pink-500/25 hover:scale-105 hover:-translate-y-1"
          >
            Contact On WhatsApp
          </motion.a>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex justify-center gap-8 mt-12 text-3xl"
          >
            <a href="https://github.com/nikhilpatil5743" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-dhondge" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/nikhilpatil.design/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <FaInstagram />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}