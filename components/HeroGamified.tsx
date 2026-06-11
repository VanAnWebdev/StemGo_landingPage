"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import QRPopupModal from "./QRPopupModal";
import { useInterest } from "../context/InterestContext";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

export default function HeroGamified() {
  const [showQR, setShowQR] = useState(false);
  const { increment } = useInterest();
  const open = useCallback(() => { setShowQR(true); increment(); }, [increment]);
  const close = useCallback(() => setShowQR(false), []);

  return (
    <>
      <QRPopupModal isOpen={showQR} onClose={close} />

      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 px-4 overflow-hidden z-10">
        
        {/* Wrapper to shift everything up by 30px as requested */}
        <div className="w-full flex flex-col items-center -translate-y-[30px]">
          
          {/* Top Text Group */}
          <div className="relative w-full max-w-6xl mx-auto mb-8 flex justify-between items-end px-8 z-20">
            <div className="flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -15 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-tangerine font-marker text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_15px_rgba(255,146,0,0.5)] whitespace-nowrap mb-4"
              >
                Học mà chơi!
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white font-black uppercase tracking-widest text-lg"
              >
                Sáng tạo cùng <br/> STEMGO
              </motion.p>
            </div>

            {/* Floating Info Card (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex bg-cobalt/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 items-center gap-4 shadow-lg"
            >
              <div>
                <div className="text-white font-black text-2xl">10K<span className="text-tangerine">+</span></div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-wider">Học sinh</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-tangerine flex items-center justify-center shadow-[0_4px_0_#b36600]">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Massive Text Sandwich & 3D Model */}
          <div className="relative flex justify-center w-full max-w-7xl mx-auto h-[40vh] md:h-[50vh]">
            <h1 className="text-[15vw] md:text-[18vw] leading-none font-black text-white tracking-tighter uppercase drop-shadow-[0_10px_20px_rgba(3,62,140,0.8)] flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* STEM is z-0 (behind Mascot) */}
              <span className="relative z-0">STEM</span>
              {/* GO is z-20 (in front of Mascot) */}
              <span className="relative z-20 ml-[-2vw]">GO</span>
            </h1>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] z-10 pointer-events-none">
              <div className="w-[110vw] h-[110vw] max-w-[800px] max-h-[800px] pointer-events-auto drop-shadow-[0_0_50px_rgba(3,62,140,0.6)]">
                <Spline scene="https://prod.spline.design/GLP17QWW1V2MurXG/scene.splinecode" />
              </div>
            </div>
          </div>

          {/* Neo-brutalist CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            onClick={open}
            className="relative z-30 mt-16 bg-tangerine text-white font-black text-xl md:text-2xl px-12 py-5 rounded-2xl shadow-[0_8px_0_#b36600] active:translate-y-2 active:shadow-none hover:brightness-110 transition-all uppercase tracking-wide border-4 border-[#b36600] cursor-pointer"
          >
            Khởi Hành Ngay
          </motion.button>
        
        </div>
      </section>
    </>
  );
}
