"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Smartphone, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

// =====================================================
// 🔗 LINK DOWNLOAD APK - STEMGO v1.0.0
// =====================================================
const APK_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1GXiZ5PuvsL-mb4__tGZanXBDy6RtHh0g";

interface QRPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { icon: "📱", text: "Mở camera hoặc app quét QR" },
  { icon: "🔍", text: "Quét mã QR bên dưới" },
  { icon: "⬇️", text: "Nhấn tải về và cài đặt" },
];

export default function QRPopupModal({ isOpen, onClose }: QRPopupModalProps) {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="relative w-full max-w-md z-10"
          >
            {/* Card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0d1b3e 0%, #0a0f1e 60%, #1a0a00 100%)",
                border: "1px solid rgba(255,146,0,0.25)",
                boxShadow: "0 0 60px rgba(255,146,0,0.15), 0 0 120px rgba(3,62,140,0.2), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              {/* Top glow bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,146,0,0.8), rgba(3,62,140,0.8), transparent)" }}
              />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #FF9200, #E67E00)", boxShadow: "0 4px 16px rgba(255,146,0,0.4)" }}
                  >
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg leading-tight">Tải STEMGO App</h3>
                    <p className="text-slate-400 text-xs font-medium">Quét QR để download APK</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative p-4 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.96)",
                      boxShadow: "0 0 0 1px rgba(255,146,0,0.3), 0 8px 32px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* Corner accents */}
                    {[
                      "top-1.5 left-1.5 border-t-2 border-l-2",
                      "top-1.5 right-1.5 border-t-2 border-r-2",
                      "bottom-1.5 left-1.5 border-b-2 border-l-2",
                      "bottom-1.5 right-1.5 border-b-2 border-r-2",
                    ].map((cls, i) => (
                      <div key={i} className={`absolute ${cls} border-[#FF9200] w-5 h-5 rounded-sm z-10`} />
                    ))}

                    <div ref={qrRef}>
                      <QRCodeSVG
                        value={APK_DOWNLOAD_URL}
                        size={192}
                        level="H"
                        includeMargin={false}
                        fgColor="#010A1A"
                        bgColor="transparent"
                        imageSettings={{
                          src: "/logo.png",
                          height: 36,
                          width: 36,
                          excavate: true,
                        }}
                      />
                    </div>

                    {/* Scanning laser animation */}
                    <motion.div
                      animate={{ y: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                      className="absolute left-0 right-0 mx-4 h-0.5"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,146,0,0.9), transparent)",
                        boxShadow: "0 0 8px rgba(255,146,0,0.6)",
                        top: "1rem",
                      }}
                    />
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2.5 mb-6">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                        style={{ background: "rgba(255,146,0,0.12)", border: "1px solid rgba(255,146,0,0.2)" }}
                      >
                        {step.icon}
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{step.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

                {/* Download link */}
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-black text-white text-sm uppercase tracking-wider transition-all hover:brightness-110 active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #FF9200, #E67E00)",
                    boxShadow: "0 4px 0 #b36600, 0 8px 24px rgba(255,146,0,0.35)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Tải APK trực tiếp
                </a>

                {/* Footer note */}
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-slate-500 font-medium">
                    Android • Miễn phí • v1.0.0
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
