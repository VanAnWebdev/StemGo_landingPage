"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  planetNode: React.ReactNode;
  robotNode: React.ReactNode;
}

export default function Global3DLayer({ planetNode, robotNode }: Props) {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Planet Transformations (Starts on right -> Moves to center and enlarges to full screen)
  const planetScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 1.5]);
  const planetY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "5%", "10%"]);
  // Starts pushed to the right (25%), moves to exact center (0%)
  const planetX = useTransform(scrollYProgress, [0, 0.5, 1], ["25%", "0%", "0%"]);
  
  // Fade out the gradient mask VERY SMOOTHLY as we scroll down
  const maskOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]); // Keep it slightly dark so text is readable

  // Robot Transformations (Guides on the left, slightly floating down with scroll)
  const robotY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const robotX = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);

  if (!mounted) return null;

  return (
    <>
      {/* Background Layer (Planet) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050510]">
        <motion.div 
          className="absolute top-0 left-0 w-screen h-screen pointer-events-auto origin-center"
          style={{ scale: planetScale, y: planetY, x: planetX }}
        >
          {planetNode}
        </motion.div>
        
        {/* Very smooth gradient mask to fade planet into the dark background smoothly without harsh lines */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/60 to-transparent pointer-events-none"
          style={{ opacity: maskOpacity }}
        />
      </div>

      {/* Foreground Layer (Robot) */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <motion.div 
          className="absolute top-[10%] left-[-20%] md:left-[-10%] lg:left-[0%] w-[400px] md:w-[600px] h-[600px] pointer-events-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          style={{ y: robotY, x: robotX }}
        >
          {robotNode}
        </motion.div>
      </div>
    </>
  );
}
