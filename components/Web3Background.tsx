"use client";

// Performance: Dùng CSS animation thuần thay vì framer-motion cho background
// Giảm số particle từ 15 → 8, dùng will-change: transform để GPU accelerate
export default function Web3Background() {
  // Fixed particles - không dùng Math.random() lúc render để tránh hydration mismatch
  const particles = [
    { top: "10%", left: "5%",  size: 6,  dur: 28, delay: 0   },
    { top: "35%", left: "80%", size: 10, dur: 32, delay: 3   },
    { top: "70%", left: "20%", size: 5,  dur: 25, delay: 7   },
    { top: "20%", left: "60%", size: 8,  dur: 35, delay: 5   },
    { top: "85%", left: "50%", size: 7,  dur: 30, delay: 10  },
    { top: "55%", left: "90%", size: 4,  dur: 22, delay: 2   },
    { top: "45%", left: "15%", size: 9,  dur: 40, delay: 14  },
    { top: "90%", left: "75%", size: 5,  dur: 26, delay: 8   },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-space">
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.45; }
          50%      { transform: translate(4%,4%) scale(1.15); opacity:0.65; }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.25; }
          50%      { transform: translate(-4%,-4%) scale(1.25); opacity:0.45; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-18px); }
        }
      `}</style>

      {/* Blob 1 — CSS animation, GPU-friendly */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-cobalt/30 blur-[120px]"
        style={{ animation: "blob1 16s ease-in-out infinite", willChange: "transform" }}
      />

      {/* Blob 2 */}
      <div
        className="absolute top-[40%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-[#8000FF]/18 blur-[100px]"
        style={{ animation: "blob2 22s ease-in-out infinite 2s", willChange: "transform" }}
      />

      {/* Particles — static positions, CSS float animation */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-tangerine/35 blur-[2px]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `float ${p.dur}s ease-in-out infinite ${p.delay}s`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
