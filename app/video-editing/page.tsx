"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowLeft, Play, X } from 'lucide-react';

export default function VideoEditingGallery() {
  const [activeVideo, setActiveVideo] = useState<any>(null);

  // तुझे Reels आणि Videos इथे ऍड कर
  const videos = [
    { 
      id: 1, 
      category: "Instagram Reel", 
      title: "Zp Shala Bhalegaon", 
      thumbnail: "/videos/zp thumb.jpeg", // व्हिडिओचा बाहेर दिसणारा फोटो
      videoUrl: "/videos/zp bhalegaon.mp4"         // तुझा खरा .mp4 व्हिडिओ
    },
    { 
      id: 2, 
      category: "Instagram Reel", 
      title: "Village cinematic Shoot", 
      thumbnail: "/videos/village thumb.jpg", 
      videoUrl: "/videos/village cinematic shoot.mp4" 
    },
    { 
      id: 3, 
      category: "Instagram Reel", 
      title: "Bike Beats Edit", 
      thumbnail: "/videos/bike thumb.jpg", 
      videoUrl: "/videos/bike edit.mp4" 
    },
    { 
      id: 4, 
      category: "Instagram Reel", 
      title: "Ai Reel Edit", 
      thumbnail: "/videos/ai thumb.jpeg", 
      videoUrl: "/videos/ai reel edit.mp4" 
    },
    { 
      id: 5, 
      category: "Instagram Reel", 
      title: "Sky Reel Edit", 
      thumbnail: "/videos/sky thumb.jpg", 
      videoUrl: "/videos/sky reel edit.mp4" 
    },
    { 
      id: 6, 
      category: "Instagram Reel", 
      title: "Motivational Reel", 
      thumbnail: "/videos/motivational thumb.png", 
      videoUrl: "/videos/motivational reel.mp4" 
    },
    
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-16 lg:p-24 relative">
      
      {/* Header Area */}
      <div className="mb-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 mb-10 transition-colors">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Showcase</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          High-retention short-form content. Click on any video to play.
        </p>
      </div>

      {/* Reels Grid (Vertical Layout) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {videos.map((vid) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveVideo(vid)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900 aspect-[9/16]" // <-- aspect-[9/16] म्हणजे Reel ची साईझ
          >
            {/* Thumbnail Image */}
            <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20 scale-90 group-hover:scale-100 transition-transform">
                <Play size={24} fill="white" className="ml-1" />
              </div>
            </div>

            {/* Video Info (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{vid.category}</span>
              <h3 className="text-sm font-bold text-white mt-1 leading-tight">{vid.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX VIDEO PLAYER */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center text-white transition-colors border border-white/20 z-50"
            >
              <X size={24} />
            </button>

            {/* The Video Player */}
            <motion.video 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeVideo.videoUrl} 
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.3)] border border-white/10" 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}