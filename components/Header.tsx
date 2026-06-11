"use client";

import { useCallback, useState } from "react";
import QRPopupModal from "./QRPopupModal";
import { useInterest } from "../context/InterestContext";

export default function Header() {
  const [showQR, setShowQR] = useState(false);
  const { increment } = useInterest();
  const open = useCallback(() => { setShowQR(true); increment(); }, [increment]);
  const close = useCallback(() => setShowQR(false), []);

  return (
    <>
      <QRPopupModal isOpen={showQR} onClose={close} />

      <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-6 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/logo.png"
            alt="STEMGO Logo"
            className="h-16 w-auto group-hover:scale-110 transition-transform object-contain"
            loading="eager"
            decoding="async"
          />
          <span className="font-black text-2xl tracking-widest text-white group-hover:text-tangerine transition-colors">
            STEMGO
          </span>
        </div>

        {/* Center Nav (Pill shape) - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-lg">
          {["Tính Năng", "Lộ Trình", "Cộng Đồng", "Phụ Huynh"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA — triggers QR popup */}
        <button
          onClick={open}
          className="bg-tangerine text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_4px_0_#b36600] active:translate-y-1 active:shadow-none hover:brightness-110 transition-all border-2 border-[#b36600] cursor-pointer"
        >
          Chơi Ngay
        </button>
      </header>
    </>
  );
}
