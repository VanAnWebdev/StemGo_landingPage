import Web3Background from "@/components/Web3Background";
import Global3DBackground from "@/components/Global3DBackground";
import Header from "@/components/Header";
import HeroGamified from "@/components/HeroGamified";
import CurriculumCards from "@/components/CurriculumCards";
import AppShowcase from "@/components/AppShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-tangerine/30 overflow-x-hidden">
      {/* Dynamic Base Backgrounds (Wavy SVG and Depth of field particles) */}
      <Web3Background />

      {/* Global 3D Rocket Background (Scrolls horizontally) */}
      <Global3DBackground />

      {/* Glassmorphism Navigation */}
      <Header />

      <main className="relative z-10 flex flex-col gap-32 pb-32 pt-16">
        {/* The Hook: Text Sandwich & Mascot */}
        <HeroGamified />

        {/* The Carousel/Grid (NFT Style Collection) */}
        <CurriculumCards />

        {/* Integration of 2nd 3D Model and Phone */}
        <AppShowcase />
      </main>

      <Footer />
    </div>
  );
}
