"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowLeft, Folder, X, Maximize2, Play } from 'lucide-react';

export default function GraphicDesignGallery() {
  // States: Folder View -> Active Media (Image/Video)
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [activeMedia, setActiveMedia] = useState<any>(null); // <-- इकडे बदल केलाय व्हिडिओसाठी

  // १. Categories / Albums (हे मेन पेजवर दिसतील)
  const categoryFolders = [
    { name: "Logo Design", cover: "https://i.pinimg.com/736x/f4/f2/c1/f4f2c1b6caf9b27c0fcbc1e029bb23e4.jpg", count: "4+ Designs" },
    { name: "Festival Banner", cover: "https://i.pinimg.com/736x/bd/d5/0d/bdd50dd37e9ca1c3f48f9eefde2c3d7b.jpg", count: "4+ Designs" },
    { name: "Wedding Card", cover: "https://i.pinimg.com/1200x/df/6f/ca/df6fcac991f86be90e19a1c702a2602a.jpg", count: "7+ Designs" },
    { name: "Jayanti Banner", cover: "https://i.pinimg.com/736x/a7/ae/ae/a7aeae4da3e82dfc703d3a8f196d73a5.jpg", count: "4+ Designs" },
    { name: "Birthday Banner", cover: "https://i.pinimg.com/736x/78/eb/d2/78ebd27eeb2f6efed72b2decf9c755a4.jpg", count: "4+ Designs" },
    { name: "Shraddhanjali", cover: "https://i.pinimg.com/736x/c8/a9/c1/c8a9c163012589ec23f28a54e1bc6a89.jpg", count: "5+ Designs" },
    { name: "Wedding Video", cover: "https://i.pinimg.com/736x/0a/7a/99/0a7a9925c79adf439c17f7fa6c5a6343.jpg", count: "4+ Videos" },
  ];

  // २. आतले खरे इमेजेस (तुझे सर्व फाईल्स जसेच्या तसे ठेवले आहेत)
  const designWorks = [
    // Logos
    { id: 1, category: "Logo Design", title: "NDP Logo", image: "/designs/logo 1.png" },
    { id: 2, category: "Logo Design", title: "Yogiraj Seeds Logo", image: "/designs/logo 2.png" },
    { id: 3, category: "Logo Design", title: "Job Alert Marathi Logo", image: "/designs/logo 3.png" },
    { id: 4, category: "Logo Design", title: "Shillar Hospital Logo", image: "/designs/logo 4.png" },
    // Jayanti
    { id: 5, category: "Jayanti Banner", title: "Hanuman Jayanti", image: "/designs/jayanti 1.jpg" },
    { id: 6, category: "Jayanti Banner", title: "Chh. Sambhaji Maharaj jayanti", image: "/designs/jayanti 2.jpg" },
    { id: 7, category: "Jayanti Banner", title: "Ambedkar jayanti", image: "/designs/jayanti 3.jpg" },
    { id: 8, category: "Jayanti Banner", title: "Mahatma Phule jayanti", image: "/designs/jayanti 4.png" },
    // Festivals
    { id: 9, category: "Festival Banner", title: "Maharashtra Din", image: "/designs/festival 1.png" },
    { id: 10, category: "Festival Banner", title: "Mothers Day", image: "/designs/festival 2.jpg" },
    { id: 11, category: "Festival Banner", title: "Bakri Eid", image: "/designs/festival 3.png" },
    { id: 12, category: "Festival Banner", title: "Bakri Eid", image: "/designs/festival 4.jpg" },
    // Wedding
    { id: 13, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 1.jpg" },
    { id: 14, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 2.jpg" },
    { id: 15, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 3.png" },
    { id: 16, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 4.jpg" },
    { id: 17, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 5.jpg" },
    { id: 18, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 6.jpg" },
    { id: 19, category: "Wedding Card", title: "Royal Wedding", image: "/designs/wedding 7.jpg" },

    // Video Entry (तुझी .mp4 फाईल)
    { id: 20, category: "Wedding Video", title: "Cinematic Invite", image: "/designs/wedding vid 1.mp4", isVideo: true },
    { id: 21, category: "Wedding Video", title: "Cinematic Invite", image: "/designs/wedding vid 2.mp4", isVideo: true },
    { id: 22, category: "Wedding Video", title: "Cinematic Invite", image: "/designs/wedding vid 3.mp4", isVideo: true },
    { id: 23, category: "Wedding Video", title: "Cinematic Invite", image: "/designs/wedding vid 4.mp4", isVideo: true },

    // Birthday & Shraddhanjali (फक्त IDs बदलले आहेत जेणेकरून error येणार नाही)
    { id: 24, category: "Birthday Banner", title: "Birthday", image: "/designs/birthday 1.jpg" },
    { id: 25, category: "Birthday Banner", title: "Birthday", image: "/designs/birthday 2.jpg" },
    { id: 26, category: "Birthday Banner", title: "Birthday", image: "/designs/birthday 3.jpg" },
    { id: 27, category: "Birthday Banner", title: "Birthday", image: "/designs/birthday 4.jpg" },

    { id: 28, category: "Shraddhanjali", title: "Condolence Card", image: "/designs/shraddhanjali 1.png" },
    { id: 29, category: "Shraddhanjali", title: "Condolence Card", image: "/designs/shraddhanjali 2.jpg" },
    { id: 30, category: "Shraddhanjali", title: "Condolence Card", image: "/designs/shraddhanjali 3.jpg" },
    { id: 31, category: "Shraddhanjali", title: "Condolence Card", image: "/designs/shraddhanjali 4.png" },
    { id: 32, category: "Shraddhanjali", title: "Condolence Card", image: "/designs/shraddhanjali 5.jpg" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-16 lg:p-24 relative">
      
      {/* Header Area */}
      <div className="mb-16">
        {!activeFolder ? (
          <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 mb-10 transition-colors">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        ) : (
          <button onClick={() => setActiveFolder(null)} className="inline-flex items-center gap-2 text-purple-400 hover:text-white mb-10 transition-colors">
            <ArrowLeft size={20} /> Back to Categories
          </button>
        )}

        <h1 className="text-4xl md:text-6xl font-black mb-4">
          {activeFolder ? activeFolder : (
            <>Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Exhibition</span></>
          )}
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          {activeFolder 
            ? `Viewing all designs in ${activeFolder} category.` 
            : "Select a category to view the complete collection of my design work."}
        </p>
      </div>

      <AnimatePresence mode="wait">
        
        {/* --- VIEW 1: FOLDERS / ALBUMS --- */}
        {!activeFolder && (
          <motion.div 
            key="folders"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {categoryFolders.map((folder) => (
              <div 
                key={folder.name}
                onClick={() => setActiveFolder(folder.name)}
                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900"
              >
                <img src={folder.cover} alt={folder.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 backdrop-blur-md flex items-center justify-center text-purple-400 mb-4 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <Folder size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{folder.name}</h3>
                  <p className="text-zinc-400 text-sm font-medium">{folder.count}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* --- VIEW 2: IMAGES & VIDEOS INSIDE THE FOLDER --- */}
        {activeFolder && (
          <motion.div 
            key="images"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {designWorks.filter(work => work.category === activeFolder).map((work) => (
              <div
                key={work.id}
                onClick={() => setActiveMedia(work)} // <-- पूर्ण ऑब्जेक्ट पास केला
                className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-zoom-in"
              >
                {/* जर व्हिडिओ असेल तर व्हिडिओ टॅग दाखव, नाहीतर इमेज टॅग */}
                {work.isVideo ? (
                  <video src={work.image} className="w-full h-auto object-cover pointer-events-none" muted playsInline />
                ) : (
                  <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    {work.isVideo ? <Play size={20} fill="white" /> : <Maximize2 size={20} />}
                  </div>
                  <span className="text-white font-medium text-sm tracking-wider">
                    {work.isVideo ? "Play Video" : "Click to view"}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

      </AnimatePresence>

      {/* --- VIEW 3: FULLSCREEN LIGHTBOX (Pop-up with Video Support) --- */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveMedia(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center text-white transition-colors border border-white/20 z-50"
            >
              <X size={24} />
            </button>

            {/* जर व्हिडिओ असेल तर Video Player लाव, नाहीतर Image लाव */}
            {activeMedia.isVideo ? (
              <motion.video 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={activeMedia.image} 
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
              />
            ) : (
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={activeMedia.image} 
                alt="Fullscreen view" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}