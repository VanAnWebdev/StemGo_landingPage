"use client";

import { useState } from "react";
import Hero3D from "@/components/Hero3D";
import FeatureShowcase from "@/components/FeatureShowcase";
import CurriculumSection from "@/components/CurriculumSection";
import CallToActionSection from "@/components/CallToActionSection";
import QRPopupModal from "@/components/QRPopupModal";

export default function ClientWrapper() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <>
      <main className="relative z-10">
        <Hero3D onOpenQR={() => setIsQRModalOpen(true)} />
        <FeatureShowcase />
        <CurriculumSection />
        <CallToActionSection />
      </main>
      <QRPopupModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </>
  );
}
