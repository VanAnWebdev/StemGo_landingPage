"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Toán Học Tương Tác",
    code: "PHASE-01",
    reward: "100 XP",
    color: "from-green-400 to-green-600",
    shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.6)]",
    borderColor: "hover:border-green-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-transform duration-300">
        <rect width="16" height="20" x="4" y="2" rx="2"/>
        <line x1="8" x2="16" y1="6" y2="6"/>
        <line x1="16" x2="16" y1="14" y2="18"/>
        <path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/>
        <path d="M12 14h.01"/><path d="M8 14h.01"/>
        <path d="M12 18h.01"/><path d="M8 18h.01"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Lập Trình Cơ Bản",
    code: "PHASE-02",
    reward: "250 XP",
    color: "from-cyan-400 to-cyan-600",
    shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]",
    borderColor: "hover:border-cyan-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-transform duration-300">
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" x2="20" y1="19" y2="19"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Chế Tạo Robot",
    code: "PHASE-03",
    reward: "500 XP",
    color: "from-pink-500 to-rose-600",
    shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]",
    borderColor: "hover:border-pink-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:scale-110 transition-transform duration-300">
        <rect width="18" height="14" x="3" y="7" rx="2"/>
        <path d="M12 3v4"/><path d="M8 7v4"/><path d="M16 7v4"/><path d="M9 13v2"/><path d="M15 13v2"/>
      </svg>
    )
  }
];

export default function CurriculumCards() {
  return (
    <section id="lộ trình" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: -5 }}
          viewport={{ once: true }}
          className="text-tangerine font-marker text-3xl mb-2 drop-shadow-[0_0_10px_rgba(255,146,0,0.5)]"
        >
          Collection
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
          Lộ Trình Học
        </h2>
        <p className="text-slate-300 max-w-xl mt-6 text-sm md:text-base leading-relaxed">
          Ở giai đoạn đầu, chúng tôi cung cấp cho mỗi học viên cơ hội lựa chọn một trong 3 lộ trình miễn phí. Tham gia ngay và bắt đầu cuộc phiêu lưu của bạn!
        </p>
      </div>

      {/* NFT Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`group cursor-pointer bg-cobalt/20 backdrop-blur-md border-2 border-white/10 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-4 ${card.shadow} ${card.borderColor} flex flex-col`}
          >
            {/* NFT Graphic / Mockup */}
            <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${card.color} mb-4 relative overflow-hidden shadow-inner flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/20" />
              {/* Fake UI elements to simulate 3D NFT character */}
              <div className="relative z-10 w-2/3 h-2/3 bg-white/20 rounded-full blur-md" />
              <div className="absolute z-20 w-1/2 h-1/2 bg-white/20 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/50 backdrop-blur-md flex items-center justify-center">
                {card.icon}
              </div>
            </div>

            {/* Metadata Footer */}
            <div className="flex justify-between items-center mb-2 px-2">
              <div className="flex flex-col">
                <span className="text-white/50 text-xs font-bold uppercase">Code:</span>
                <span className="text-white font-black text-sm">{card.code}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-white/50 text-xs font-bold uppercase">Reward:</span>
                <span className="text-white font-black text-sm text-tangerine">{card.reward}</span>
              </div>
            </div>

            <h3 className="text-xl font-black text-white px-2 mt-2 uppercase tracking-wide">{card.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
