"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section id="tính năng" className="relative py-32 px-4 max-w-7xl mx-auto z-10 overflow-visible">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: -5 }}
              viewport={{ once: true }}
              className="text-tangerine font-marker text-3xl mb-2 drop-shadow-[0_0_10px_rgba(255,146,0,0.5)]"
            >
              About app
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-tight">
              Journey <br /> Beyond The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tangerine to-yellow-400">
                Stars
              </span>
            </h2>
          </div>
          
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-lg leading-relaxed border-l-4 border-tangerine pl-4">
            "STEMGO" là một tựa game học tập Web 3.0, nơi bạn hoàn thành các nhiệm vụ Lập trình & Toán học để nhận huy hiệu và nâng cấp phi thuyền của riêng mình.
          </p>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-md">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-50">Main Features</h4>
            <h3 className="text-tangerine font-black text-lg uppercase mb-2">Integration with Gamification</h3>
            <p className="text-sm text-slate-400">
              Nhân vật của bạn là duy nhất. Hãy nâng cấp chỉ số thông qua các bài học logic.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Visuals (Phone + Widgets) */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end min-h-[600px] items-center mt-12 lg:mt-0">
          
          {/* Glowing Mobile Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-[300px] h-[620px] rounded-[3rem] bg-[#0A0A1A]/80 backdrop-blur-2xl border-[6px] border-slate-800 shadow-[0_0_80px_rgba(3,62,140,0.6),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col items-center"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 w-32 h-7 bg-slate-800 rounded-b-3xl z-20 flex justify-center items-center">
              <div className="w-12 h-1.5 bg-black/50 rounded-full" />
            </div>
            
            {/* Fake App Content inside Phone */}
            <div className="w-full h-full pt-14 p-5 flex flex-col gap-4 relative">
              
              {/* App Header */}
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tangerine/50" />
                  <div className="w-16 h-2 bg-white/20 rounded-full" />
                </div>
                <div className="w-6 h-6 rounded-md bg-white/10" />
              </div>

              {/* Character Display Area */}
              <div className="w-full h-64 rounded-2xl bg-gradient-to-b from-cobalt/40 to-space shadow-inner flex items-center justify-center border border-white/10 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]" />
                 <div className="w-32 h-32 rounded-full bg-tangerine/20 blur-2xl absolute" />
                 <span className="font-black text-white/20 text-4xl tracking-widest rotate-90 absolute -right-8">STEM</span>
                 {/* 3D placeholder */}
                 <div className="w-24 h-32 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 z-10" />
              </div>

              {/* Stats & Actions */}
              <div className="flex gap-3">
                <div className="w-1/2 h-24 rounded-2xl bg-tangerine/20 border border-tangerine/30 flex flex-col justify-center items-center gap-2">
                  <div className="w-10 h-2 bg-tangerine/50 rounded-full" />
                  <div className="w-16 h-4 bg-tangerine rounded-full" />
                </div>
                <div className="w-1/2 h-24 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center items-center gap-2">
                  <div className="w-10 h-2 bg-white/20 rounded-full" />
                  <div className="w-12 h-4 bg-white/40 rounded-full" />
                </div>
              </div>
              <div className="w-full flex-1 rounded-2xl bg-cobalt/20 border border-white/10 mt-auto" />
            </div>
          </motion.div>

          {/* Floating Widget 1: Profit / Level */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 -left-12 lg:-left-20 z-20 w-48 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-[10px] font-bold uppercase">Level</span>
              <span className="text-tangerine text-[10px] font-bold">42</span>
            </div>
            <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-tangerine rounded-full" />
            </div>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-white/50 text-xs font-bold uppercase">EXP:</span>
              <span className="text-white font-black text-xl leading-none">3,840</span>
            </div>
          </motion.div>

          {/* Floating Widget 2: Stats */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-48 -right-8 lg:-right-16 z-20 w-40 p-4 rounded-2xl bg-cobalt/40 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(3,62,140,0.5)] flex flex-col gap-3"
          >
            <div className="text-white font-black text-xs uppercase tracking-widest border-b border-white/10 pb-2">Stats</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-[10px]">Logic</span>
                <span className="text-white text-[10px] font-bold">94</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-[10px]">Math</span>
                <span className="text-white text-[10px] font-bold">88</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 3: Booster */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 -left-8 lg:-left-12 z-20 w-32 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-tangerine/20 border border-tangerine/50 flex items-center justify-center">
              <div className="w-3 h-3 bg-tangerine rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[10px] uppercase">Booster</span>
              <span className="text-tangerine text-[10px] font-bold">Active</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
