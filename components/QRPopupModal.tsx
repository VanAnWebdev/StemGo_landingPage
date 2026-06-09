"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface QRPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRPopupModal({ isOpen, onClose }: QRPopupModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-[#0a0a1a] border border-white/20 p-8 rounded-3xl flex flex-col items-center shadow-[0_0_50px_rgba(59,130,246,0.2)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-1 bg-white/10 rounded-full mb-8" />
            
            <h3 className="text-xl font-bold text-white tracking-wide mb-2 text-center">
              Deploy STEMGO
            </h3>
            <p className="text-slate-400 text-sm font-light text-center mb-8">
              Scan to install the application on your terminal.
            </p>

            {/* QR Code Placeholder */}
            <div className="w-48 h-48 bg-white rounded-xl p-3 flex items-center justify-center relative overflow-hidden group">
              <div className="w-full h-full border-4 border-slate-900 border-dashed rounded-lg opacity-20 flex items-center justify-center">
                 <span className="text-slate-900 font-mono font-bold text-sm">QR_DATA</span>
              </div>
              
              {/* Scanning laser animation */}
              <motion.div 
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
              />
            </div>
            
            <div className="mt-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">System Ready</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
