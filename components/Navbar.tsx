"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              STEMGO
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#features" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tính năng</Link>
              <Link href="#about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Về chúng tôi</Link>
              <button className="px-4 py-2 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/40 hover:text-white transition-all text-sm font-semibold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Tham gia ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
