"use client";

import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="relative z-10 py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.2em] text-cyan-400 uppercase font-semibold">— DEPLOYMENT</span>
          <h2 className="text-5xl font-bold text-white tracking-tight mt-4 mb-6">
            Ready to Launch?
          </h2>
          <p className="text-slate-300 font-light text-xl leading-relaxed mb-10">
            Equip your child with the cognitive tools required for the digital frontier. No internet required after initial deployment.
          </p>
          
          <button className="bg-white text-[#050510] hover:bg-slate-200 px-10 py-4 rounded-full transition-all font-bold tracking-wide text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Initialize STEMGO
          </button>
        </motion.div>
      </div>
    </section>
  );
}
