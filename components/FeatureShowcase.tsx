"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    overline: "— RAPIDSCAT ALGORITHMS",
    title: "Algorithmic Thinking",
    description: "Navigate autonomous probes through complex logic puzzles. Develop a deep understanding of algorithmic structures without touching a single line of dry code.",
    image: "CODING_PUZZLE_TELEMETRY",
    align: "left"
  },
  {
    id: "02",
    overline: "— SATELLITE GEOMETRY",
    title: "Mathematical Mapping",
    description: "Recalibrate orbital paths by solving spatial and fractional equations. Visualized mathematics that transforms abstract concepts into tangible engineering feats.",
    image: "MATH_MAP_PROJECTION",
    align: "right"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="relative py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background Grid Lines to give a technical vibe */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto space-y-40 lg:pl-32 xl:pl-48">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
          >
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-cyan-500 font-mono text-sm opacity-60">{feature.id}</span>
                <span className="text-xs tracking-[0.2em] text-slate-400 uppercase font-semibold">{feature.overline}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {feature.title}
              </h2>
              <p className="text-slate-300 font-light text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>

            {/* Glassmorphic Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 overflow-hidden group">
                {/* Subtle corner markers */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />

                <div className="text-slate-500 font-mono text-sm tracking-widest mb-4">
                  [{feature.image}]
                </div>
                <div className="w-16 h-16 rounded-full border border-dashed border-slate-600 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
