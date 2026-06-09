"use client";

import { motion } from "framer-motion";

export default function Web3Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-space">
      {/* Wavy energy field gradient 1 */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
          x: ["0%", "5%", "0%"],
          y: ["0%", "5%", "0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-cobalt/30 blur-[120px]"
      />
      
      {/* Wavy energy field gradient 2 */}
      <motion.div
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ["0%", "-5%", "0%"],
          y: ["0%", "-5%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#8000FF]/20 blur-[100px]"
      />

      {/* Floating particles for Depth of Field */}
      {Array.from({ length: 15 }).map((_, i) => {
        const size = Math.random() * 8 + 4;
        return (
          <motion.div
            key={i}
            initial={{
              y: `${Math.random() * 100}vh`,
              x: `${Math.random() * 100}vw`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-tangerine/40 blur-[2px]"
            style={{ width: size, height: size }}
          />
        );
      })}
    </div>
  );
}
