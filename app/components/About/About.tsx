"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-pink-500 mb-4 font-medium uppercase tracking-wider text-sm"
        >
          About Me
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Turning Ideas Into
          <br />
          Digital Experiences
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-zinc-400 text-lg leading-9">
              I'm Nikhil Dhondge Patil, a creative professional passionate
              about building impactful digital experiences.

              <br /><br />

              My journey started with graphic design, where I spent over
              3 years helping businesses create engaging visual identities.

              <br /><br />

              As my interest in technology grew, I expanded into web
              development, app development, video editing, and digital
              marketing.

              <br /><br />

              Today, I combine creativity, technology, and marketing
              to deliver complete digital solutions that help businesses
              establish a stronger online presence.
            </p>
          </motion.div>

          {/* Right Side: Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-6">

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-zinc-900/50 p-8 rounded-[24px] border border-zinc-800 transition-colors cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-pink-500">3+</h3>
              <p className="text-zinc-300 mt-2 font-medium">Years Graphic Design</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-zinc-900/50 p-8 rounded-[24px] border border-zinc-800 transition-colors cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-pink-500">1+</h3>
              <p className="text-zinc-300 mt-2 font-medium">Years Meta Ads</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-zinc-900/50 p-8 rounded-[24px] border border-zinc-800 transition-colors cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-pink-500">1+</h3>
              <p className="text-zinc-300 mt-2 font-medium">Years Web Dev</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-zinc-900/50 p-8 rounded-[24px] border border-zinc-800 transition-colors cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-pink-500">1+</h3>
              <p className="text-zinc-300 mt-2 font-medium">Years App Dev</p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}