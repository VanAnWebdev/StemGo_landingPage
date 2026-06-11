"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import QRPopupModal from "./QRPopupModal";

export default function CallToActionSection() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <QRPopupModal isOpen={showQR} onClose={() => setShowQR(false)} />

      <section className="relative z-10 py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.2em] text-tangerine uppercase font-semibold">— TẢI NGAY</span>
            <h2 className="text-5xl font-black text-white tracking-tight mt-4 mb-6">
              Sẵn sàng Khởi Hành?
            </h2>
            <p className="text-slate-300 font-light text-xl leading-relaxed mb-10">
              Trang bị cho con bạn công cụ tư duy cho thời đại số. Học offline, không cần internet sau khi cài đặt.
            </p>
            
            <button
              onClick={() => setShowQR(true)}
              className="bg-tangerine text-white hover:brightness-110 px-10 py-4 rounded-2xl transition-all font-black tracking-wide text-lg shadow-[0_8px_0_#b36600] active:translate-y-1 active:shadow-none border-4 border-[#b36600] uppercase cursor-pointer"
            >
              📱 Tải STEMGO ngay
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
