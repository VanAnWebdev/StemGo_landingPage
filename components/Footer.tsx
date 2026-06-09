"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-12 px-4 md:px-8 mt-24">
      
      {/* Liquid / Glassmorphism Background layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Liquid Blobs */}
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cobalt/30 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [50, -50, 50], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-tangerine/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#8000FF]/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Glassmorphism Container */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(3,62,140,0.3)]">
        
        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Desc */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img src="/logo.png" alt="STEMGO Logo" className="h-16 w-auto group-hover:scale-110 transition-transform object-contain drop-shadow-[0_0_10px_rgba(255,146,0,0.5)]" />
              <span className="font-black text-3xl tracking-widest text-white group-hover:text-tangerine transition-colors drop-shadow-[0_0_10px_rgba(255,146,0,0.3)]">STEMGO</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Hành trình học Lập trình & Toán học được Gamification hóa chuẩn Web 3.0. Khám phá vũ trụ tri thức và nâng cấp phi thuyền của riêng bạn!
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-tangerine hover:bg-white/10 hover:-translate-y-1 transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-tangerine hover:bg-white/10 hover:-translate-y-1 transition-all">TW</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-tangerine hover:bg-white/10 hover:-translate-y-1 transition-all">IG</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Khám Phá</h4>
            {["Tính Năng Nổi Bật", "Lộ Trình Học", "Bảng Xếp Hạng", "Cộng Đồng Của Chúng Tôi"].map((link) => (
              <a key={link} href="#" className="text-white/60 text-sm hover:text-tangerine hover:translate-x-1 transition-all">
                {link}
              </a>
            ))}
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Liên Hệ</h4>
            <div className="flex items-start gap-3 text-white/60 text-sm hover:text-tangerine transition-colors cursor-pointer">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>123 Đường Công Nghệ, Quận Không Gian, TP. Vũ Trụ</span>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm hover:text-tangerine transition-colors cursor-pointer">
              <Phone size={18} className="shrink-0" />
              <span>+84 123 456 789</span>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm hover:text-tangerine transition-colors cursor-pointer">
              <Mail size={18} className="shrink-0" />
              <span>hello@stemgo.edu.vn</span>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Đăng Ký Nhận Tin</h4>
            <p className="text-white/60 text-sm">Nhận thông báo mới nhất về các sự kiện và lộ trình học tập.</p>
            <div className="relative mt-2">
              <input 
                type="email" 
                placeholder="Email của bạn..." 
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-tangerine transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-tangerine rounded-lg flex items-center justify-center hover:brightness-110 hover:scale-105 transition-all">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-medium text-center">
          <p>© 2026 STEMGO. All rights reserved. Designed for the Future.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <div className="flex items-center gap-2 ml-4">
              <span className="w-2 h-2 rounded-full bg-tangerine animate-pulse" />
              <p className="text-tangerine/80 font-bold tracking-wider">Powered by AAA Web3 Gamification</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
