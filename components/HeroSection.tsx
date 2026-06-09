"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="font-black text-5xl md:text-7xl tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">
          Biến giờ dùng điện thoại của trẻ thành Hành trình Vũ trụ
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Học Lập trình & Toán tư duy qua mini-game. Hoạt động 100% Offline.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all"
          >
            Tham gia Waitlist
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-lg backdrop-blur-md border border-white/10 transition-all"
          >
            Xem Demo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
