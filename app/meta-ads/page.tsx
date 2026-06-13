"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Maximize2, X, Target, Users, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MetaAdsGallery() {
  const [activeAd, setActiveAd] = useState<any>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0); // Slider साठी state

  // तुझे सर्व ऍड्स चे खरे कॅम्पेन्स
  const adCampaigns = [
    { 
      id: 1, 
      category: "Network Marketing", 
      title: "Marathi Leads Campaign", 
      highlight: "₹3.12 CPL | 6.4k+ Leads 🔥", 
      icon: <Target size={18} />,
      images: ["/ads/marathi leads 1.png",
               "/ads/marathi leads 2.png",
               "/ads/marathi leads 3.png",
               "/ads/marathi leads 4.png",
               "/ads/marathi leads 5.png",
              ],       // तुझा १ला स्क्रीनशॉट

      description: "Highly optimized Marathi language lead generation campaign for Network Marketing. Successfully generated 6,441 high-intent leads with an incredibly low Cost Per Lead (CPL) of just ₹3.12."
    },
    { 
      id: 2, 
      category: "Lead Generation", // किंवा "Network Marketing"
      title: "Marathi Female Leads Campaign", 
      highlight: "Targeted Audience | ₹6.77 CPL 🔥", // <-- तुझा दुसरा खतरनाक रिझल्ट!
      icon: <Users size={18} />,
      images: ["/ads/female leads 1.png",
               "/ads/female leads 2.png",
              ],    // <-- तुझा दुसरा स्क्रीनशॉट इथे येईल

      description: "Targeted lead generation campaign specifically for a Marathi-speaking female audience. Successfully captured 479 high-quality leads at a competitive Cost Per Lead (CPL) of just ₹6.77."
    },
    { 
      id: 3, 
      category: "Health & Fitness", 
      title: "Weight Loss & Gain Leads", 
      highlight: "High Conversion Rate",
      icon: <Users size={18} />,
      images: ["/ads/herbalife 1.png",
               "/ads/herbalife 2.png",
              ], // तुझा वेट लॉस चा फोटो इथे टाक

      description: "Targeted campaigns for fitness trainers and dietitians, capturing highly motivated individuals for weight management programs."
    },
    { 
      id: 4, 
      category: "B2B Service", 
      title: "Bulk Lead Selling Campaigns", 
      highlight: "Scalable Volume",
      icon: <TrendingUp size={18} />,
      images: ["/ads/leads selling 1.png"], // तुझा बल्क लीड्स चा फोटो इथे टाक
      description: "Massive scale lead generation funnels designed to capture, filter, and distribute premium leads efficiently."
    },
    { 
      id: 5, 
      category: "Digital Products", 
      title: "Canva Premium Subscription", 
      highlight: "High ROAS",
      icon: <ShoppingCart size={18} />,
      images: ["/ads/canva 1.png"], // तुझा कॅनव्हा चा फोटो इथे टाक
      description: "Direct conversion campaigns focusing on digital product sales with highly profitable Return on Ad Spend (ROAS)."
    }
  ];

  // Slider Navigation Functions
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? activeAd.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === activeAd.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-16 lg:p-24 relative">
      
      {/* Header Area */}
      <div className="mb-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 mb-10 transition-colors">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Meta Ads <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Campaigns</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl">
          Data-driven performance marketing. Showcasing ad creatives and dashboard results across various profitable niches.
        </p>
      </div>

      {/* Ads Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {adCampaigns.map((ad) => (
          <motion.div
            key={ad.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col cursor-pointer hover:border-purple-500/50 transition-colors"
            onClick={() => {
              setActiveAd(ad);
              setCurrentImgIndex(0); // ओपन करताना पहिला फोटो दिसेल
            }}
          >
            {/* Ad Screenshot (Shows the first image as cover) */}
            <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
              <img src={ad.images[0]} alt={ad.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <Maximize2 size={20} />
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-10">
                {ad.icon} {ad.highlight}
              </div>

              {/* Multiple Images Indicator Counter */}
              {ad.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black/70 border border-white/10 text-white text-xs px-2.5 py-1 rounded-md z-10">
                  +{ad.images.length - 1} More Screenshots
                </div>
              )}
            </div>

            {/* Ad Info */}
            <div className="p-8">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2 block">{ad.category}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{ad.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{ad.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX FOR ADS (With Slider Control) */}
      <AnimatePresence>
        {activeAd && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveAd(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center text-white transition-colors border border-white/20 z-50"
            >
              <X size={24} />
            </button>

            {/* LEFT ARROW (फक्त एकापेक्षा जास्त इमेजेस असतील तरच दिसेल) */}
            {activeAd.images.length > 1 && (
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white border border-white/10 transition-colors z-50"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* THE SLIDER IMAGE */}
            <div className="relative max-w-full max-h-[85vh] flex flex-col items-center">
              <motion.img 
                key={currentImgIndex} // key बदलल्यामुळे इमेज चेंज होताना स्मूथ वाटेल
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={activeAd.images[currentImgIndex]} 
                alt="Campaign Screenshot" 
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_0_50px_rgba(168,85,247,0.2)]" 
              />
              
              {/* Image Counter Badge (Bottom) */}
              {activeAd.images.length > 1 && (
                <div className="mt-4 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  {currentImgIndex + 1} / {activeAd.images.length}
                </div>
              )}
            </div>

            {/* RIGHT ARROW */}
            {activeAd.images.length > 1 && (
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white border border-white/10 transition-colors z-50"
              >
                <ChevronRight size={24} />
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}