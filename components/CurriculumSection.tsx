"use client";

import { motion } from "framer-motion";

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="relative z-10 py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 pl-0 lg:pl-32 xl:pl-48">
        {/* We add left padding to give the Robot room to float on the left */}
        <div className="flex-1 space-y-12">
          <div>
            <span className="text-xs tracking-[0.2em] text-cyan-400 uppercase font-semibold">— CORE CURRICULUM</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-4 mb-6">
              The Training Matrix
            </h2>
            <p className="text-slate-300 font-light text-lg leading-relaxed max-w-2xl">
              Our curriculum is structured into discrete operational modules. Each module targets specific cognitive frameworks, ensuring progressive skill acquisition in computational thinking and spatial reasoning.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              { phase: "PHASE I", title: "Logic Fundamentals", desc: "Boolean operations, sequences, and basic loops inside a low-gravity simulator." },
              { phase: "PHASE II", title: "Spatial Mathematics", desc: "Fractions and geometry mapped to orbital trajectories and planetary alignments." },
              { phase: "PHASE III", title: "Advanced Algorithms", desc: "Sorting, conditionals, and resource optimization under simulated mission constraints." }
            ].map((mod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <div className="text-cyan-500 font-mono text-xs mb-2">{mod.phase}</div>
                <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-slate-400 font-light text-sm">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
