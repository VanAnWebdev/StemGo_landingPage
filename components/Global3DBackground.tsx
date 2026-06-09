"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Global3DBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ==========================================
  // 🚀 HƯỚNG DẪN ĐIỀU CHỈNH VỊ TRÍ TÊN LỬA 🚀
  // ==========================================
  // Dải [0, 0.5, 1] đại diện cho 3 giai đoạn cuộn trang (Top, Giữa, Đáy).
  // - 0: Khi ở trên cùng (Banner Hero)
  // - 0.5: Khi cuộn đến giữa trang (Thẻ Lộ Trình)
  // - 1: Khi cuộn xuống cuối trang (App Showcase)
  
  // 1. CHỈNH TỌA ĐỘ TRỤC X (TRÁI/PHẢI)
  // "25vw" là lệch sang phải 25% chiều rộng màn hình. "-30vw" là lệch trái.
  const rocketX = useTransform(scrollYProgress, [0, 0.5, 1], ["25vw", "-25vw", "15vw"]);

  // 2. CHỈNH TỌA ĐỘ TRỤC Y (LÊN/XUỐNG)
  // "0vh" là giữ nguyên. Tăng số lên (vd: "10vh", "20vh") để tên lửa thụt xuống dưới.
  const rocketY = useTransform(scrollYProgress, [0, 0.5, 1], ["0vh", "-20vh", "20vh"]);

  // 3. CHỈNH KÍCH THƯỚC (SCALE)
  // 1.2 là phóng to 120%, 1 là kích thước gốc.
  const rocketScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  // 4. CHỈNH ĐỘ XOAY (ROTATE)
  // Góc âm (vd "-15deg") xoay sang trái, góc dương (vd "15deg") xoay sang phải.
  const rocketRotate = useTransform(scrollYProgress, [0, 0.5, 1], ["-15deg", "12deg", "45deg"]);
  // ==========================================

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        className="absolute -top-[25vh] -left-[25vw] w-[150vw] h-[150vh] pointer-events-auto origin-center"
        style={{ scale: rocketScale, x: rocketX, y: rocketY, rotate: rocketRotate }}
      >
        {/* Rocket Model */}
        <Spline scene="https://prod.spline.design/8y1A72WT3hb6xMid/scene.splinecode" />
      </motion.div>
      
      {/* Light dark overlay to ensure text remains readable without dimming stars too much */}
      <div className="absolute inset-0 bg-[#011229]/20 pointer-events-none" />
    </div>
  );
}
