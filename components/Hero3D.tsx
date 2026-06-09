"use client";

import { motion } from "framer-motion";

interface Hero3DProps {
  onOpenQR: () => void;
}

export default function Hero3D({ onOpenQR }: Hero3DProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center pointer-events-none z-10 pt-20">
      {/* Foreground Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl ml-[68px]"
        >
          <div className="mb-4">
            <span className="text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold">
              Orbit the world of knowledge
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
            STEMGO
          </h1>
          
          <p className="text-slate-300 font-light text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            A revolutionary ecosystem designed for the next generation of pioneers. 
            Experience the cross-calibration of logic and mathematical skills through 
            an immersive, offline-first gamified curriculum. 
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenQR}
            className="pointer-events-auto bg-blue-500/20 border border-blue-400/50 hover:bg-blue-500/40 text-white px-8 py-3 rounded-full backdrop-blur-md transition-all font-medium tracking-wide flex items-center gap-2 w-fit"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
