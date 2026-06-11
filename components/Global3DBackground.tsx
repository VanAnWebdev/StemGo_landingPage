"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load Spline — only loads after page is interactive
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

export default function Global3DBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [splineReady, setSplineReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delay Spline load until after first paint (improves LCP)
    const t = setTimeout(() => setSplineReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  const rocketX      = useTransform(scrollYProgress, [0, 0.5, 1], ["25vw",  "-25vw", "15vw"]);
  const rocketY      = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh",   "-20vh", "20vh"]);
  const rocketScale  = useTransform(scrollYProgress, [0, 0.5, 1], [1.2,     1,       1.2]);
  const rocketRotate = useTransform(scrollYProgress, [0, 0.5, 1], ["-15deg","12deg", "45deg"]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute -top-[25vh] -left-[25vw] w-[150vw] h-[150vh] pointer-events-auto origin-center"
        style={{
          scale: rocketScale,
          x: rocketX,
          y: rocketY,
          rotate: rocketRotate,
          willChange: "transform",
        }}
      >
        {/* Only render Spline after page paint to avoid blocking LCP */}
        {splineReady && (
          <Spline scene="https://prod.spline.design/8y1A72WT3hb6xMid/scene.splinecode" />
        )}
      </motion.div>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-[#011229]/20 pointer-events-none" />
    </div>
  );
}
